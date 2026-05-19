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
  'colorful cartoon illustration, retro American comic book style, clean bold ' +
  'outlines, vibrant flat colors, solid bright single-color background, ' +
  'half body character, slightly exaggerated but recognizable proportions. ' +
  'No hats, no berets, no caps, no head accessories unless explicitly stated';

const MEMBERS = {
  victor: {
    bg: 'solid red',
    prompt:
      `${STYLE}. Solid red background. A man around 40 years old, Mediterranean ` +
      `tanned skin, LONG BLACK HAIR down to the shoulders (curly/wavy, loose), ` +
      `short dark few-days stubble beard, elongated oval face, slim build, ` +
      `modern casual urban style, holding a Spanish flamenco guitar. ` +
      `NO glasses, NO hat, NO beret, NO hipster man bun.`,
  },
  alejo: {
    bg: 'solid orange',
    prompt:
      `${STYLE}. Solid orange background. A man around 38 years old, light ` +
      `Mediterranean skin, LONG DARK CURLY WAVY HAIR down to the shoulders with ` +
      `natural volume, thin few-days beard, elongated face with prominent ` +
      `cheekbones and a sharp nose, slim build, big smile, casual rocker style, ` +
      `holding a red Fender Stratocaster electric guitar. NO beret, NO hat.`,
  },
  ivan: {
    bg: 'solid golden yellow',
    prompt:
      `${STYLE}. Solid golden yellow background. A man around 33 years old, ` +
      `dark Latin American brown skin, very short almost shaved black hair, ` +
      `round full face, robust sturdy build, no beard or very short stubble, ` +
      `black-framed eyeglasses, friendly calm expression, sitting at a red ` +
      `keyboard. NO mexican hat, NO sombrero, NO floral shirt.`,
  },
  diego: {
    bg: 'solid blue',
    prompt:
      `${STYLE}. Solid blue background. A young man around 26 years old, ` +
      `white Mediterranean skin, short straight black hair, oval face, slim ` +
      `athletic build, very modern urban streetwear style, dark rectangular ` +
      `sunglasses, holding drum sticks. Young cool guy look. NO cap, NO hat.`,
  },
  antonio: {
    bg: 'solid green',
    prompt:
      `${STYLE}. Solid green background. A man around 30 years old, white ` +
      `European fair skin, BIG THICK BUSHY DARK-BROWN BEARD, short-medium ` +
      `brown curly wavy hair, rounded face, prominent nose, normal build, ` +
      `casual rocker style, playing a golden trumpet. NOT black skin, NO hat.`,
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
