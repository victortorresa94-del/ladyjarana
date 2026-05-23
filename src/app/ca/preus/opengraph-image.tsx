import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Preus Lady Jarana — Quartet des de 1000 €';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Preus sense sorpreses',
    title: 'Quartet des de 1.000 €',
    subtitle:
      'Quintet 1.200 € · Banda completa des de 1.400 € · +200 € per músic extra · Tota Catalunya sense recàrrec.',
    accent: 'sol',
  });
}
