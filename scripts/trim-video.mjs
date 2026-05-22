// Recorta el vídeo "No puedo vivir sin ti" a los primeros 57 segundos
// exactos y re-sube el resultado al Blob pisando el original.
// Run: node scripts/trim-video.mjs
import { list, put } from '@vercel/blob';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const TARGET = /no puedo vivir sin ti/i;
const SECONDS = 57;

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) throw new Error('BLOB_READ_WRITE_TOKEN missing in env');

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

log(`## Trim video — primeros ${SECONDS}s`);

const { blobs } = await list({ token });
const blob = blobs.find((b) => TARGET.test(b.pathname));
if (!blob) {
  log(`❌ No se encontró ningún vídeo que coincida con "no puedo vivir sin ti".`);
  await flush();
  process.exit(1);
}
log(`Vídeo: \`${blob.pathname}\` — ${(blob.size / 1024 / 1024).toFixed(1)} MB`);

const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'trim-'));
const inPath = path.join(tmpDir, `in${path.extname(blob.pathname)}`);
const outPath = path.join(tmpDir, 'out.mp4');

const res = await fetch(blob.url);
if (!res.ok) {
  log(`❌ Descarga falló (HTTP ${res.status}).`);
  await flush();
  process.exit(1);
}
await fs.writeFile(inPath, Buffer.from(await res.arrayBuffer()));

const ff = spawnSync(
  'ffmpeg',
  [
    '-y', '-i', inPath,
    '-t', String(SECONDS),
    '-c:v', 'libx264', '-preset', 'fast', '-crf', '24',
    '-pix_fmt', 'yuv420p',
    '-vf', "scale='min(1080,iw)':-2",
    '-c:a', 'aac', '-b:a', '128k',
    '-movflags', '+faststart',
    outPath,
  ],
  { encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 },
);
if (ff.status !== 0) {
  const errText = (ff.stderr || ff.error?.message || '(sin salida)').toString();
  console.error(errText);
  log(`❌ ffmpeg falló:`);
  log('```');
  log(errText.trim().split('\n').slice(-10).join('\n'));
  log('```');
  await flush();
  process.exit(1);
}

const trimmed = await fs.readFile(outPath);
log(`Recortado: ${(blob.size / 1024 / 1024).toFixed(1)} MB → ${(trimmed.length / 1024 / 1024).toFixed(1)} MB`);

await put(blob.pathname, trimmed, {
  access: 'public',
  addRandomSuffix: false,
  allowOverwrite: true,
  contentType: 'video/mp4',
  token,
});
log(`✅ Subido — el vídeo dura ahora ${SECONDS}s exactos.`);

await fs.rm(tmpDir, { recursive: true, force: true });
await flush();
