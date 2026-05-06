// Generate brand illustration images for Lady Jarana via fal.ai
// Run: node scripts/generate-brand-images.mjs
import { fal } from '@fal-ai/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'generated');

// Load env
const envFile = await fs.readFile(path.join(ROOT, '.env.local'), 'utf8');
const env = Object.fromEntries(
  envFile
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

if (!env.FAL_API_KEY) throw new Error('FAL_API_KEY missing in .env.local');
fal.config({ credentials: env.FAL_API_KEY });

await fs.mkdir(OUT_DIR, { recursive: true });

// Shared style suffix to keep consistency
const STYLE = 'flat illustration, vector style, hand-drawn, warm Mediterranean fiesta palette, mustard yellow, sunset orange, deep red, cream background, joyful festive vibe, retro 70s posters, simple shapes, no text';

const jobs = [
  {
    name: 'hero-bg',
    prompt: `A wide horizontal sunset scene with a giant glowing sun, palm tree silhouettes on each side, festive string lights (bombillas) hanging across the top, music notes floating, abstract festive crowd silhouettes at the bottom raising hands. ${STYLE}. Vibrant, joyful, summery, mediterranean verbena vibe.`,
    aspect_ratio: '16:9',
  },
  {
    name: 'palm-left',
    prompt: `A single tall palm tree silhouette with detailed leaves, isolated on transparent background, warm sunset orange and mustard yellow tones with dark green leaves, hand-drawn flat illustration style. ${STYLE}.`,
    aspect_ratio: '9:16',
  },
  {
    name: 'palm-right',
    prompt: `A single tilted palm tree with curving trunk, isolated on plain cream background, warm orange and yellow tones, hand-drawn flat illustration. ${STYLE}.`,
    aspect_ratio: '9:16',
  },
  {
    name: 'sun-burst',
    prompt: `A radiant sun burst with rays radiating outward, mustard yellow and orange gradient, retro fiesta poster style, centered composition, simple flat illustration. ${STYLE}.`,
    aspect_ratio: '1:1',
  },
  {
    name: 'fiesta-crowd',
    prompt: `Festive crowd of people dancing and raising hands at a Mediterranean village summer party, silhouettes with warm sunset lighting, palm trees in background, string lights overhead, joyful and celebratory. ${STYLE}.`,
    aspect_ratio: '16:9',
  },
  {
    name: 'guitar-fiesta',
    prompt: `A flamenco acoustic guitar surrounded by music notes, hand claps, and small palm fronds, warm yellow background with orange accents, festive Mediterranean vibe, flat hand-drawn illustration. ${STYLE}.`,
    aspect_ratio: '4:3',
  },
  {
    name: 'bombillas',
    prompt: `A horizontal string of festive light bulbs (bombillas) hanging across, warm glow, simple flat illustration, transparent or cream background, festive summer night party vibe. ${STYLE}.`,
    aspect_ratio: '16:9',
  },
  {
    name: 'maracas-palmas',
    prompt: `Maracas and clapping hands surrounded by music notes and small floral elements, warm orange and yellow palette, festive flamenco style, flat hand-drawn illustration. ${STYLE}.`,
    aspect_ratio: '1:1',
  },
];

console.log(`Generating ${jobs.length} images...`);

const results = await Promise.allSettled(
  jobs.map(async (job) => {
    console.log(`[${job.name}] starting...`);
    const result = await fal.subscribe('fal-ai/flux/schnell', {
      input: {
        prompt: job.prompt,
        image_size: aspectToSize(job.aspect_ratio),
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true,
      },
      logs: false,
    });

    const imgUrl = result.data?.images?.[0]?.url;
    if (!imgUrl) throw new Error(`No image URL for ${job.name}`);

    const res = await fetch(imgUrl);
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = path.join(OUT_DIR, `${job.name}.png`);
    await fs.writeFile(outPath, buf);
    console.log(`[${job.name}] saved → ${outPath} (${(buf.length / 1024).toFixed(0)}kb)`);
    return job.name;
  }),
);

const ok = results.filter((r) => r.status === 'fulfilled').length;
const fail = results.filter((r) => r.status === 'rejected');
console.log(`\nDone: ${ok}/${jobs.length} succeeded.`);
fail.forEach((f, i) => console.error(`FAIL ${jobs[results.indexOf(f)].name}:`, f.reason?.message || f.reason));

function aspectToSize(aspect) {
  const map = {
    '1:1': 'square_hd',
    '16:9': 'landscape_16_9',
    '9:16': 'portrait_16_9',
    '4:3': 'landscape_4_3',
    '3:4': 'portrait_4_3',
  };
  return map[aspect] || 'landscape_16_9';
}
