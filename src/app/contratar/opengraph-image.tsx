import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Contratar Lady Jarana — Respuesta en minutos por WhatsApp';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Contratar la banda',
    title: 'Hablemos por WhatsApp',
    subtitle:
      'Fecha, lugar y formato. Te decimos sí en minutos con disponibilidad y presupuesto cerrado. +34 627 281 459.',
    accent: 'sol',
  });
}
