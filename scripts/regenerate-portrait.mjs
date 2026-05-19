// Regenera portraits cartoon de los integrantes con parecido real.
// Uso: node scripts/regenerate-portrait.mjs <victor|alejo|ivan|diego|antonio|all> <version>
// Backend: OpenAI DALL-E 3 si OPENAI_API_KEY presente (mejor parecido),
//          si no fal.ai flux/schnell con FAL_API_KEY.
import { fal } from '@fal-ai/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'integrantes');
const LIB_PATH = path.join(ROOT, 'src', 'lib', 'integrantes.ts');

async function readEnvLocal() {
  try {
    const txt = await fs.readFile(path.join(ROOT, '.env.local'), 'utf8');
    return Object.fromEntries(
      txt.split('\n').filter(l => l.trim() && !l.startsWith('#'))
        .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
    );
  } catch { return {}; }
}
const envLocal = await readEnvLocal();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || envLocal.OPENAI_API_KEY;
const FAL_API_KEY = process.env.FAL_API_KEY || envLocal.FAL_API_KEY;

const STYLE =
  'cartoon illustration, vibrant flat colors, clean bold lines, comic book style, ' +
  'character portrait, head and torso, friendly festive mediterranean band vibe';

const MEMBERS = {
  victor: {
    bg: 'solid red',
    prompt:
      `${STYLE}, solid red background, holding a Spanish classical guitar. ` +
      `Resembles a Hispanic man around 40 years old, short dark hair, short 3-day ` +
      `stubble beard with a few grey hairs, oval face, Mediterranean tanned skin, ` +
      `medium build, wide warm smile, often wearing orange-yellow tinted sunglasses, ` +
      `modern casual urban style. NOT a man bun, NOT a long hipster beard.`,
  },
  alejo: {
    bg: 'solid orange',
    prompt:
      `${STYLE}, solid orange background, holding a red-orange Fender Stratocaster ` +
      `electric guitar. Resembles a young man around 27 years old, straight ` +
      `medium-long dark hair, long face, fair skin, slim build, big bright smile, ` +
      `relaxed rocker style.`,
  },
  ivan: {
    bg: 'solid golden yellow',
    prompt:
      `${STYLE}, solid golden yellow background, sitting at a red synthesizer keyboard. ` +
      `Resembles a Latino man around 33 years old, round full face, short dark hair, ` +
      `short trimmed beard, dark brown skin, robust sturdy build, calm easy smile.`,
  },
  diego: {
    bg: 'solid blue',
    prompt:
      `${STYLE}, solid blue background, behind a drum kit holding drumsticks. ` +
      `Resembles a man around 32 years old, dark brown hair, medium face, light ` +
      `Mediterranean skin, medium-slim build, sometimes wearing a white baseball cap, ` +
      `youthful energetic look.`,
  },
  antonio: {
    bg: 'solid green',
    prompt:
      `${STYLE}, solid green background, playing a shiny golden trumpet. ` +
      `Resembles a man around 31 years old, very short almost shaved dark hair, ` +
      `round face, dark brown skin, medium build, festive smiling expression.`,
  },
};

async function genOpenAI(prompt) {
  // Try newest → oldest; project keys may restrict which models are allowed.
  const attempts = [
    { model: 'gpt-image-1', size: '1024x1024', quality: 'high' },
    { model: 'dall-e-3', size: '1024x1024', quality: 'standard' },
    { model: 'dall-e-2', size: '1024x1024' },
  ];
  let lastErr;
  for (const cfg of attempts) {
    try {
      const res = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({ ...cfg, prompt, n: 1 }),
      });
      if (!res.ok) {
        lastErr = new Error(`OpenAI ${cfg.model} ${res.status}: ${await res.text()}`);
        console.log(`  ${cfg.model} no disponible, probando siguiente...`);
        continue;
      }
      const item = (await res.json()).data?.[0];
      if (item?.b64_json) return Buffer.from(item.b64_json, 'base64');
      if (item?.url) return Buffer.from(await (await fetch(item.url)).arrayBuffer());
      lastErr = new Error(`OpenAI ${cfg.model}: respuesta sin imagen`);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

async function genFal(prompt) {
  fal.config({ credentials: FAL_API_KEY });
  const result = await fal.subscribe('fal-ai/flux/schnell', {
    input: { prompt, image_size: 'square_hd', num_inference_steps: 4 },
    logs: false,
  });
  const url = result.data?.images?.[0]?.url;
  if (!url) throw new Error('fal: no image url');
  return Buffer.from(await (await fetch(url)).arrayBuffer());
}

const arg = process.argv[2];
const version = process.argv[3];
if (!arg || (arg !== 'all' && !MEMBERS[arg])) {
  throw new Error(`Usage: node scripts/regenerate-portrait.mjs <${Object.keys(MEMBERS).join('|')}|all> <version>`);
}
if (!version || !/^\d+$/.test(version)) {
  throw new Error('version must be a positive integer (e.g. 3)');
}
if (!OPENAI_API_KEY && !FAL_API_KEY) {
  throw new Error('Need OPENAI_API_KEY or FAL_API_KEY (env var or .env.local)');
}

const targets = arg === 'all' ? Object.keys(MEMBERS) : [arg];
await fs.mkdir(OUT_DIR, { recursive: true });
let lib = await fs.readFile(LIB_PATH, 'utf8');

for (const name of targets) {
  const { prompt } = MEMBERS[name];
  const backend = OPENAI_API_KEY ? 'OpenAI DALL-E 3' : 'fal flux';
  console.log(`[${name} v${version}] generating with ${backend}...`);
  let buf;
  try {
    buf = OPENAI_API_KEY ? await genOpenAI(prompt) : await genFal(prompt);
  } catch (e) {
    if (OPENAI_API_KEY && FAL_API_KEY) {
      console.log(`[${name}] OpenAI failed (${e.message}); falling back to fal...`);
      buf = await genFal(prompt);
    } else {
      throw e;
    }
  }
  const filename = `${name}-v${version}.png`;
  await fs.writeFile(path.join(OUT_DIR, filename), buf);
  console.log(`[${name} v${version}] ✓ saved ${filename} (${(buf.length / 1024).toFixed(0)}kb)`);
  lib = lib.replace(
    new RegExp(`/integrantes/${name}-v\\d+\\.png`, 'g'),
    `/integrantes/${filename}`,
  );
}

await fs.writeFile(LIB_PATH, lib);
console.log(`✓ updated src/lib/integrantes.ts → v${version}`);
