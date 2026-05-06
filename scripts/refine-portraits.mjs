import { fal } from '@fal-ai/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'integrantes');

const env = Object.fromEntries(
  (await fs.readFile(path.join(ROOT, '.env.local'), 'utf8'))
    .split('\n').filter(l => l.trim() && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0,i).trim(), l.slice(i+1).trim()]; })
);
fal.config({ credentials: env.FAL_API_KEY });

const STYLE = 'flat hand-drawn cartoon illustration with thick black outlines, simple shapes, retro 70s music poster style, festive mediterranean vibe';

const targets = [
  {
    name: 'victor',
    prompt: `Cartoon portrait illustration of a smiling man with long brown hair tied in a small bun, full thick beard, wearing dark sunglasses, brown suede vest over a light cream shirt, holding a Spanish flamenco guitar across his body. Bohemian musician indie folk vibe. Plain mustard yellow background. Head and torso. ${STYLE}.`,
  },
  {
    name: 'ivan',
    prompt: `Cartoon portrait illustration of a smiling man with shoulder length wavy brown hair, dark tinted aviator sunglasses, wearing a casual relaxed white shirt, sitting at a synthesizer keyboard with both hands on keys. Cool chill vibe. Plain warm sunset orange background. Head and shoulders. ${STYLE}.`,
  },
];

for (const t of targets) {
  console.log(`[${t.name}] starting...`);
  const result = await fal.subscribe('fal-ai/flux/schnell', {
    input: { prompt: t.prompt, image_size: 'square_hd', num_inference_steps: 4 },
    logs: false,
  });
  const imgUrl = result.data?.images?.[0]?.url;
  if (!imgUrl) { console.error(`[${t.name}] no url`); continue; }
  const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());
  await fs.writeFile(path.join(OUT_DIR, `${t.name}.png`), buf);
  console.log(`[${t.name}] ✓ saved (${(buf.length / 1024).toFixed(0)}kb)`);
}
