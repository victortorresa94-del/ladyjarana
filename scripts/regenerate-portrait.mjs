// Regenera el portrait cartoon de un miembro y actualiza src/lib/integrantes.ts.
// Uso local:
//   node scripts/regenerate-portrait.mjs victor 3
// En GitHub Actions: lo invoca el workflow regenerate-portrait.yml con FAL_API_KEY del secret.
import { fal } from '@fal-ai/client';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'integrantes');
const LIB_PATH = path.join(ROOT, 'src', 'lib', 'integrantes.ts');

let falKey = process.env.FAL_API_KEY;
if (!falKey) {
  try {
    const envFile = await fs.readFile(path.join(ROOT, '.env.local'), 'utf8');
    const env = Object.fromEntries(
      envFile.split('\n').filter(l => l.trim() && !l.startsWith('#'))
        .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
    );
    falKey = env.FAL_API_KEY;
  } catch { /* no .env.local in CI is fine */ }
}
if (!falKey) throw new Error('FAL_API_KEY missing (env var or .env.local)');
fal.config({ credentials: falKey });

const STYLE =
  'flat hand-drawn cartoon illustration with thick black outlines, simple shapes, retro 70s music poster style, festive mediterranean vibe';

const PROMPTS = {
  victor:
    `Cartoon portrait illustration of a young Spanish man in his early 30s with a big joyful wide-open smile showing upper teeth. ` +
    `Shoulder-length wavy dark brown hair worn loose and down (NOT tied up, NOT a bun, NOT a ponytail). ` +
    `Clean-shaven face with only a very light short stubble — absolutely NO full beard. ` +
    `Wearing small black retro rectangular sunglasses (slim frame, like wayfarers). ` +
    `Wearing a textured cream-white short-sleeved polo shirt with an open collar (terry cloth knit texture). ` +
    `Several thin beaded bracelets on his left wrist and a small round silver medallion pendant on a chain. ` +
    `Holding a Spanish classical guitar (warm caramel-brown wood, round soundhole) across his chest, ` +
    `standing in front of a microphone on a black stand. ` +
    `Plain mustard yellow solid background. Head and torso framing. ${STYLE}.`,
  alejo:
    `Cartoon portrait of Alejo Finger, electric guitarist in a Spanish rumba & rock band. ` +
    `Male in his 30s with medium dark hair, casual t-shirt, holding an electric guitar, energetic rocker pose. ` +
    `Solid sunset orange background. Head and torso. ${STYLE}.`,
  ivan:
    `Cartoon portrait illustration of a smiling man with shoulder length wavy brown hair, dark tinted aviator sunglasses, ` +
    `wearing a casual relaxed white shirt, sitting at a synthesizer keyboard with both hands on keys. ` +
    `Cool chill vibe. Plain warm sunset orange background. Head and shoulders. ${STYLE}.`,
  diego:
    `Cartoon portrait of Diego Aquino, drummer in a Spanish rumba & rock band. ` +
    `Bearded male in his 30s with curly dark hair, holding drumsticks behind a drum kit, energetic pose. ` +
    `Solid blue background. Head and torso. ${STYLE}.`,
  antonio:
    `Cartoon portrait of Antonio, trumpet player in a Spanish rumba & latin band. ` +
    `Male in his 30s with short dark hair, holding a shiny gold trumpet to his lips, festive smiling expression. ` +
    `Solid forest green background. Head and torso. ${STYLE}.`,
};

const member = process.argv[2];
const version = process.argv[3];
if (!member || !PROMPTS[member]) {
  throw new Error(`Usage: node scripts/regenerate-portrait.mjs <${Object.keys(PROMPTS).join('|')}> <version>`);
}
if (!version || !/^\d+$/.test(version)) {
  throw new Error('version must be a positive integer (e.g. 3)');
}

console.log(`[${member} v${version}] generating with flux/schnell...`);
const result = await fal.subscribe('fal-ai/flux/schnell', {
  input: { prompt: PROMPTS[member], image_size: 'square_hd', num_inference_steps: 4 },
  logs: false,
});
const imgUrl = result.data?.images?.[0]?.url;
if (!imgUrl) throw new Error('no image url returned');
const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());

await fs.mkdir(OUT_DIR, { recursive: true });
const filename = `${member}-v${version}.png`;
await fs.writeFile(path.join(OUT_DIR, filename), buf);
console.log(`[${member} v${version}] ✓ saved ${filename} (${(buf.length / 1024).toFixed(0)}kb)`);

const lib = await fs.readFile(LIB_PATH, 'utf8');
const updated = lib.replace(
  new RegExp(`/integrantes/${member}-v\\d+\\.png`, 'g'),
  `/integrantes/${filename}`,
);
if (updated !== lib) {
  await fs.writeFile(LIB_PATH, updated);
  console.log(`[${member} v${version}] ✓ updated src/lib/integrantes.ts → ${filename}`);
} else {
  console.log(`[${member} v${version}] (lib already pointed to that file or no match)`);
}
