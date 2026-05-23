import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Lady Jarana — Banda en directo · Barcelona y Catalunya';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Banda en directo · Barcelona',
    title: 'Lady Jarana',
    subtitle:
      'Pop-rock, rumba y latineo para bodas, fiestas mayores y eventos privados en toda Catalunya. Cuarteto desde 1.000 €. Show bilingüe ES/CA.',
    accent: 'sol',
  });
}
