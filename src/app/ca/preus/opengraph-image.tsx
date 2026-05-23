import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Preus Lady Jarana — Quartet des de 1.000 €';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Preus sense sorpreses',
    title: 'Quartet 1.000–1.300 €',
    subtitle:
      'Quintet 1.200–1.500 € · Banda completa des de 1.400 € · Tota Catalunya sense recàrrec · So propi opcional.',
    accent: 'sol',
  });
}
