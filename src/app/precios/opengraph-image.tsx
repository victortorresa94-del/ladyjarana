import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Precios Lady Jarana — Cuarteto desde 1000 €';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Precios sin sorpresas',
    title: 'Cuarteto desde 1.000 €',
    subtitle:
      'Quinteto 1.200 € · Banda completa desde 1.400 € · +200 € por músico extra · Toda Catalunya sin recargo.',
    accent: 'sol',
  });
}
