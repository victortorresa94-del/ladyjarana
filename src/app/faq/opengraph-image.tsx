import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'FAQ Lady Jarana — Preguntas frecuentes';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Preguntas frecuentes',
    title: '27 respuestas reales',
    subtitle:
      'Precios, formatos, sonido, zona, repertorio bilingüe ES/CA, reserva y contrato. Todo lo que nos preguntáis antes de contratarnos.',
    accent: 'sol',
  });
}
