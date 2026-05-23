import type { Metadata } from 'next';
import ServicioStubCA from '@/components/sections/ServicioStubCA';

export const metadata: Metadata = {
  title: 'Grup per a esdeveniments privats a Barcelona — Lady Jarana',
  description:
    'Banda en directe per a aniversaris, festes de barri, festes a finca o esdeveniments privats a Barcelona i Catalunya. Quartet des de 1000 €.',
  alternates: {
    canonical: '/ca/serveis/esdeveniments-privats',
    languages: {
      es: 'https://ladyjarana.com/servicios/eventos-privados',
      ca: 'https://ladyjarana.com/ca/serveis/esdeveniments-privats',
      'x-default': 'https://ladyjarana.com/servicios/eventos-privados',
    },
  },
};

export default function EsdevenimentsPrivatsPage() {
  return (
    <ServicioStubCA
      titulo="Grup per a esdeveniments privats"
      intro="Aniversaris, festes a finca, festes de barri o qualsevol celebració privada. Format flexible, equip de so propi disponible si fa falta i repertori adaptable. La fórmula simple: data + lloc per WhatsApp i tens pressupost en minuts."
    />
  );
}
