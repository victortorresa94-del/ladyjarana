import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'FAQ Lady Jarana — Preguntes freqüents';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Preguntes freqüents',
    title: '27 respostes reals',
    subtitle:
      'Preus, formats, so, zona, repertori bilingüe ES/CA, reserva i contracte. Tot el que ens pregunteu abans de contractar-nos.',
    accent: 'sol',
  });
}
