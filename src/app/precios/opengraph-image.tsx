import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Precios Lady Jarana — Cuarteto desde 800 €';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Precios sin sorpresas',
    title: 'Cuarteto 800–1.000 €',
    subtitle:
      'Quinteto 1.000–1.300 € · Banda completa desde 1.400 € · Toda Catalunya sin recargo · Sonido propio opcional.',
    accent: 'sol',
  });
}
