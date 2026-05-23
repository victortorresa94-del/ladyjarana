import type { Metadata } from 'next';
import ServicioStubCA from '@/components/sections/ServicioStubCA';

export const metadata: Metadata = {
  title: 'Grup en directe per a casaments a Barcelona i Catalunya — Lady Jarana',
  description:
    'Lady Jarana, grup en directe per a casaments a Barcelona i Catalunya. Pop-rock, rumba i latineig per a cerimònia, còctel i festa. Quartet des de 1000 €.',
  alternates: {
    canonical: '/ca/serveis/casaments',
    languages: {
      es: 'https://ladyjarana.com/servicios/bodas',
      ca: 'https://ladyjarana.com/ca/serveis/casaments',
      'x-default': 'https://ladyjarana.com/servicios/bodas',
    },
  },
};

export default function CasamentsPage() {
  return (
    <ServicioStubCA
      titulo="Grup en directe per a casaments"
      intro="Cerimònia, còctel i festa. Lady Jarana adapta el seu format per acompanyar cada moment del casament amb pop-rock, rumba i latineig en directe — 100 % banda, 0 % pista pregravada. Xou bilingüe ES/CA."
    />
  );
}
