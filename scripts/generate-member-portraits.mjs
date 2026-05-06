// Generate stylized member portraits using fal.ai's gpt-image-1 (OpenAI gpt-image)
// Run: node scripts/generate-member-portraits.mjs
import { fal } from '@fal-ai/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'integrantes');

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

const STYLE = 'Hand-drawn cartoon flat illustration style, warm Mediterranean fiesta palette (mustard yellow, sunset orange, deep red, cream background), thick black outlines, expressive smiling face, joyful festive vibe, similar to retro 70s music posters, simple colored background, head and shoulders portrait';

const members = [
  {
    name: 'victor',
    prompt: `Cartoon portrait of Víctor Torres, the frontman of a Mediterranean rumba & rock band. Brunette male in his 30s with short dark hair, slight beard, holding a Spanish flamenco guitar, wearing a casual button-up shirt, big smile. Solid mustard yellow background. ${STYLE}.`,
  },
  {
    name: 'alejo',
    prompt: `Cartoon portrait of Alejo Finger, electric guitarist in a Spanish rumba & rock band. Male in his 30s with medium dark hair, casual t-shirt, holding an electric guitar, energetic rocker pose. Solid sunset orange background. ${STYLE}.`,
  },
  {
    name: 'ivan',
    prompt: `Cartoon portrait of Iván Cortés, keyboardist and bassist in a Spanish rumba & rock band. Male in his 30s with dark hair and glasses, casual shirt, sitting at a synthesizer keyboard, focused friendly smile. Solid mustard yellow background. ${STYLE}.`,
  },
  {
    name: 'diego',
    prompt: `Cartoon portrait of Diego Aquino, drummer in a Spanish rumba & rock band. Bearded male in his 30s with curly dark hair, holding drumsticks behind a drum kit, energetic pose. Solid blue background. ${STYLE}.`,
  },
  {
    name: 'antonio',
    prompt: `Cartoon portrait of Antonio, trumpet player in a Spanish rumba & latin band. Male in his 30s with short dark hair, holding a shiny gold trumpet to his lips, festive smiling expression. Solid forest green background. ${STYLE}.`,
  },
];

console.log(`Generating ${members.length} member portraits with fal-ai/gpt-image-1...`);

const results = await Promise.allSettled(
  members.map(async (m) => {
    console.log(`[${m.name}] starting...`);
    try {
      const result = await fal.subscribe('fal-ai/gpt-image-1/text-to-image/byok', {
        input: {
          prompt: m.prompt,
          image_size: 'square_hd',
          num_images: 1,
        },
        logs: false,
      });
      const imgUrl = result.data?.images?.[0]?.url;
      if (!imgUrl) throw new Error('no image url');
      const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());
      const outPath = path.join(OUT_DIR, `${m.name}.png`);
      await fs.writeFile(outPath, buf);
      console.log(`[${m.name}] ✓ saved (${(buf.length / 1024).toFixed(0)}kb)`);
      return m.name;
    } catch (e) {
      // Fallback to flux/schnell if gpt-image-1 not available
      console.log(`[${m.name}] gpt-image-1 failed (${e.message}), trying flux...`);
      const result = await fal.subscribe('fal-ai/flux/schnell', {
        input: { prompt: m.prompt, image_size: 'square_hd', num_inference_steps: 4 },
        logs: false,
      });
      const imgUrl = result.data?.images?.[0]?.url;
      if (!imgUrl) throw new Error('no image url (flux fallback)');
      const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());
      const outPath = path.join(OUT_DIR, `${m.name}.png`);
      await fs.writeFile(outPath, buf);
      console.log(`[${m.name}] ✓ saved via flux fallback (${(buf.length / 1024).toFixed(0)}kb)`);
      return m.name;
    }
  }),
);

const ok = results.filter((r) => r.status === 'fulfilled').length;
const fail = results.filter((r) => r.status === 'rejected');
console.log(`\nDone: ${ok}/${members.length} succeeded.`);
fail.forEach((f, i) => console.error(`FAIL ${members[i].name}:`, f.reason?.message || f.reason));
