import { fal } from '@fal-ai/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'integrantes');

const envFile = await fs.readFile(path.join(ROOT, '.env.local'), 'utf8');
const env = Object.fromEntries(envFile.split('\n').filter(l => l.trim() && !l.startsWith('#')).map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
fal.config({ credentials: env.FAL_API_KEY });

const STYLE = 'Hand-drawn flat cartoon illustration, bold thick black outlines, simple shapes, retro 70s music poster style, smiling friendly face';

const retries = [
  {
    name: 'victor',
    prompt: `A cartoon character portrait. Smiling man with short brown hair, light beard, holding an acoustic spanish flamenco guitar, casual blue shirt. Plain mustard yellow background, head and shoulders. ${STYLE}.`,
  },
  {
    name: 'ivan',
    prompt: `A cartoon character portrait. Smiling man with short dark hair and round glasses, friendly expression, in front of a synthesizer. Plain warm yellow background, head and shoulders. ${STYLE}.`,
  },
];

for (const m of retries) {
  console.log(`[${m.name}] starting...`);
  const result = await fal.subscribe('fal-ai/flux/schnell', {
    input: { prompt: m.prompt, image_size: 'square_hd', num_inference_steps: 4 },
    logs: false,
  });
  const imgUrl = result.data?.images?.[0]?.url;
  if (!imgUrl) { console.error(`[${m.name}] no url`); continue; }
  const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());
  await fs.writeFile(path.join(OUT_DIR, `${m.name}.png`), buf);
  console.log(`[${m.name}] ✓ saved (${(buf.length / 1024).toFixed(0)}kb)`);
}
