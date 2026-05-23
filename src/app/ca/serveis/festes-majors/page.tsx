import type { Metadata } from 'next';
import ServicioStubCA from '@/components/sections/ServicioStubCA';

export const metadata: Metadata = {
  title: 'Grup per a festes majors a Catalunya — Lady Jarana',
  description:
    'Banda en directe per a festes majors d\'ajuntament a Catalunya. Pop-rock, rumba catalana i latineig per a la revetlla. Quintet i banda completa disponibles.',
  alternates: {
    canonical: '/ca/serveis/festes-majors',
    languages: {
      es: 'https://ladyjarana.com/servicios/fiestas-mayores',
      ca: 'https://ladyjarana.com/ca/serveis/festes-majors',
      'x-default': 'https://ladyjarana.com/servicios/fiestas-mayores',
    },
  },
};

export default function FestesMajorsPage() {
  return (
    <ServicioStubCA
      titulo="Grup per a festes majors"
      intro="Plaça plena, escenari gran, revetlla fins tard. Lady Jarana ja ha tocat a Sant Adrià de Besòs, Barberà del Vallès i Rumba Beach Festival. Format quintet o banda completa amb vents, ideal per a escenaris XXL. Show bilingüe ES/CA."
    />
  );
}
