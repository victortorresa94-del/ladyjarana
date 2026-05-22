import type { Metadata } from 'next';
import ServicioStub from '@/components/sections/ServicioStub';

export const metadata: Metadata = {
  title: 'Banda para eventos de empresa en Barcelona — Lady Jarana',
  description:
    'Lady Jarana, banda en directo para cenas, inauguraciones y fiestas corporativas en Barcelona y Cataluña.',
  alternates: { canonical: '/servicios/eventos-empresa' },
};

export default function EventosEmpresaPage() {
  return (
    <ServicioStub
      titulo="Banda para eventos de empresa"
      intro="Cenas, inauguraciones, fiestas corporativas y eventos de equipo. La energía en directo que diferencia un evento de empresa de cualquier otro."
    />
  );
}
