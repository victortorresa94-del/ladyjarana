import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Sobre Lady Jarana — Història, membres i trajectòria';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Sobre el grup',
    title: 'Lady Jarana',
    subtitle:
      'Cinc músics. Dos idiomes. Una sola jarana. Grup de pop-rock, rumba i latineig format a Barcelona el 2025.',
    accent: 'sol',
  });
}
