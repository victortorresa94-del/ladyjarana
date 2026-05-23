import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Eventos Lady Jarana — Próximos conciertos y trayectoria';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Calendario en directo',
    title: 'Próximos bolos',
    subtitle:
      'Barceloneta · Arc de Triomf (Sant Joan) · Lleida. Festes majors, bodas y conciertos en toda Catalunya 2026.',
    accent: 'sol',
  });
}
