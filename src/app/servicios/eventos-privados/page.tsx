import type { Metadata } from 'next';
import ServicioStub from '@/components/sections/ServicioStub';

export const metadata: Metadata = {
  title: 'Banda para eventos privados en Barcelona — Lady Jarana',
  description:
    'Lady Jarana, banda en directo para eventos privados, cumpleaños y celebraciones en Barcelona y Cataluña.',
  alternates: { canonical: '/servicios/eventos-privados' },
};

export default function EventosPrivadosPage() {
  return (
    <ServicioStub
      titulo="Banda para eventos privados"
      intro="Cumpleaños, aniversarios, despedidas o cualquier celebración que merezca banda en directo. Adaptamos el formato al espacio y al aforo."
      mensajeWhatsapp="¡Hola Lady Jarana! Quería contrataros para un evento privado."
    />
  );
}
