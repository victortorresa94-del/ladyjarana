// Optimiza los vídeos del Vercel Blob público:
// descarga cada uno, lo re-encoda con ffmpeg + faststart, y lo re-sube
// con el mismo pathname pisando el original. Idempotente si ya está
// optimizado (lo dejará igual de pequeño, en cuyo caso vuelve a subirlo).
// Run: node scripts/optimize-videos.mjs
import { list, put } from '@vercel/blob';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error('BLOB_READ_WRITE_TOKEN missing in env');
}

const { blobs } = await list({ token: process.env.BLOB_READ_WRITE_TOKEN });
const videos = blobs.filter((b) => /\.(mp4|mov|m4v)$/i.test(b.pathname));
console.log(`Found ${videos.length} videos.\n`);

const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'optimize-videos-'));

for (const blob of videos) {
  const ext = path.extname(blob.pathname);
  const inPath = path.join(tmpDir, `in${ext}`);
  const outPath = path.join(tmpDir, `out.mp4`);
  console.log(`→ ${blob.pathname} (${(blob.size / 1024 / 1024).toFixed(1)} MB)`);

  const res = await fetch(blob.url);
  if (!res.ok) {
    console.error(`  download failed: ${res.status}`);
    continue;
  }
  await fs.writeFile(inPath, Buffer.from(await res.arrayBuffer()));

  const ff = spawnSync(
    'ffmpeg',
    [
      '-y', '-i', inPath,
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '24',
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
    console.error('  ffmpeg failed');
    continue;
  }

  const optimized = await fs.readFile(outPath);
  console.log(`  optimized: ${(optimized.length / 1024 / 1024).toFixed(1)} MB`);

  // Output is always .mp4; overwrite the blob with its original pathname
  await put(blob.pathname, optimized, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'video/mp4',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  console.log(`  uploaded ✓\n`);
}

await fs.rm(tmpDir, { recursive: true, force: true });
console.log('Done.');
