import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Sobre Lady Jarana — Historia, miembros, géneros y trayectoria';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Sobre la banda',
    title: 'Lady Jarana',
    subtitle:
      'Cinco músicos. Dos idiomas. Una sola jarana. Banda de pop-rock, rumba y latineo formada en Barcelona en 2025.',
    accent: 'sol',
  });
}
