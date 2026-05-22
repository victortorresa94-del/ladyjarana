// Optimiza los vídeos del Vercel Blob público:
// descarga cada uno, lo re-encoda con ffmpeg + faststart, y lo re-sube
// con el mismo pathname pisando el original.
// Escribe un diagnóstico claro en el RESUMEN del run de GitHub Actions
// (pestaña "Summary") y hace fallar el run en rojo si algo va mal.
// Run: node scripts/optimize-videos.mjs
import { list, put } from '@vercel/blob';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

// Store público que usa la web (ver src/lib/videos.ts).
const EXPECTED_STORE = 'f8gfdg48kikp71xk';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) throw new Error('BLOB_READ_WRITE_TOKEN missing in env');

// Un token de Blob tiene el formato vercel_blob_rw_<storeId>_<secreto>
const storeId = token.split('_')[3] ?? '(desconocido)';

const lines = [];
const log = (s) => {
  console.log(s);
  lines.push(s);
};
const flush = async () => {
  if (process.env.GITHUB_STEP_SUMMARY) {
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, lines.join('\n') + '\n');
  }
};

log(`## Optimize blob videos`);
log(``);
log(`| | |`);
log(`|---|---|`);
log(`| Store del token | \`${storeId}\` |`);
log(`| Store esperado (web) | \`${EXPECTED_STORE}\` |`);
log(``);
// El ID del store no distingue mayúsculas/minúsculas
if (storeId.toLowerCase() !== EXPECTED_STORE.toLowerCase()) {
  log(`> ❌ **El token NO es del store público de la web.**`);
  log(`> Cambia el secret \`LADYJARANA_READ_WRITE_TOKEN\` por el token que`);
  log(`> empieza por \`vercel_blob_rw_${EXPECTED_STORE}_\`.`);
  await flush();
  process.exit(1);
}
log(`> ✅ Token correcto. Empezando…`);

const { blobs } = await list({ token });
log(`### Contenido del store (${blobs.length} archivos)`);
for (const b of blobs) {
  log(`- \`${b.pathname}\` — ${(b.size / 1024 / 1024).toFixed(1)} MB`);
}
log(``);

const videos = blobs.filter((b) => /\.(mp4|mov|m4v)$/i.test(b.pathname));
if (videos.length === 0) {
  log(`### ❌ No hay vídeos en este store`);
  await flush();
  process.exit(1);
}

log(`### Optimizando ${videos.length} vídeo(s)`);

const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'optimize-videos-'));
let okCount = 0;
let failCount = 0;

for (const blob of videos) {
  const ext = path.extname(blob.pathname);
  const inPath = path.join(tmpDir, `in${ext}`);
  const outPath = path.join(tmpDir, `out.mp4`);
  const origMB = (blob.size / 1024 / 1024).toFixed(1);
  console.log(`→ ${blob.pathname} (${origMB} MB)`);

  const res = await fetch(blob.url);
  if (!res.ok) {
    log(`- ❌ \`${blob.pathname}\`: descarga falló (HTTP ${res.status})`);
    failCount++;
    continue;
  }
  await fs.writeFile(inPath, Buffer.from(await res.arrayBuffer()));

  const ff = spawnSync(
    'ffmpeg',
    [
      '-y', '-i', inPath,
      '-c:v', 'libx264', '-preset', 'fast', '-crf', '24',
      '-pix_fmt', 'yuv420p',
      // Cap width at 1080px (iPhone 4K source is overkill for web reels)
      '-vf', "scale='min(1080,iw)':-2",
      '-c:a', 'aac', '-b:a', '128k',
      '-movflags', '+faststart',
      outPath,
    ],
    { stdio: 'inherit' },
  );
  if (ff.status !== 0) {
    log(`- ❌ \`${blob.pathname}\`: ffmpeg falló`);
    failCount++;
    continue;
  }

  const optimized = await fs.readFile(outPath);
  const newMB = (optimized.length / 1024 / 1024).toFixed(1);

  // Output is always .mp4; overwrite the blob with its original pathname
  await put(blob.pathname, optimized, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'video/mp4',
    token,
  });
  log(`- ✅ \`${blob.pathname}\`: ${origMB} MB → ${newMB} MB`);
  okCount++;
}

await fs.rm(tmpDir, { recursive: true, force: true });
log(``);
log(`### Resultado: ${okCount} optimizados · ${failCount} con error`);
await flush();

if (okCount === 0) {
  console.error('Ningún vídeo se pudo procesar.');
  process.exit(1);
}
console.log('Done.');
