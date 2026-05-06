// Regenera el portrait de Víctor con su parecido real (no el hipster con moño).
// Run: node scripts/regenerate-victor.mjs
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
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);
if (!env.FAL_API_KEY) throw new Error('FAL_API_KEY missing in .env.local');
fal.config({ credentials: env.FAL_API_KEY });

const STYLE =
  'flat hand-drawn cartoon illustration with thick black outlines, simple shapes, retro 70s music poster style, festive mediterranean vibe';

const prompt =
  `Cartoon portrait illustration of a young Spanish man in his early 30s with a big joyful wide-open smile showing upper teeth. ` +
  `Shoulder-length wavy dark brown hair worn loose and down (NOT tied up, NOT a bun, NOT a ponytail). ` +
  `Clean-shaven face with only a very light short stubble — absolutely NO full beard. ` +
  `Wearing small black retro rectangular sunglasses (slim frame, like wayfarers). ` +
  `Wearing a textured cream-white short-sleeved polo shirt with an open collar (terry cloth knit texture). ` +
  `Several thin beaded bracelets on his left wrist and a small round silver medallion pendant on a chain. ` +
  `Holding a Spanish classical guitar (warm caramel-brown wood, round soundhole) across his chest, ` +
  `standing in front of a microphone on a black stand. ` +
  `Plain mustard yellow solid background. Head and torso framing. ${STYLE}.`;

console.log('[victor v3] generating with flux/schnell...');
const result = await fal.subscribe('fal-ai/flux/schnell', {
  input: { prompt, image_size: 'square_hd', num_inference_steps: 4 },
  logs: false,
});
const imgUrl = result.data?.images?.[0]?.url;
if (!imgUrl) throw new Error('no image url returned');
const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());
const outPath = path.join(OUT_DIR, 'victor-v3.png');
await fs.writeFile(outPath, buf);
console.log(`[victor v3] ✓ saved to ${outPath} (${(buf.length / 1024).toFixed(0)}kb)`);
console.log('\nNext: bump src/lib/integrantes.ts víctor imagen to /integrantes/victor-v3.png');
