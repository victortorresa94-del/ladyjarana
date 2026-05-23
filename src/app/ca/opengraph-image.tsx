import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Lady Jarana — Grup en directe a Barcelona i Catalunya';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Grup en directe · Barcelona',
    title: 'Lady Jarana',
    subtitle:
      'Pop-rock, rumba i latineig per a casaments, festes majors i esdeveniments privats a tota Catalunya. Quartet des de 1.000 €.',
    accent: 'sol',
  });
}
