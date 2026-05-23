import type { Metadata } from 'next';
import ServicioStubCA from '@/components/sections/ServicioStubCA';

export const metadata: Metadata = {
  title: "Grup per a esdeveniments d'empresa a Barcelona — Lady Jarana",
  description:
    'Banda en directe per a celebracions corporatives, festes de fi d\'any, team buildings i presentacions a Barcelona i Catalunya. Professionals amb jarana.',
  alternates: {
    canonical: '/ca/serveis/esdeveniments-empresa',
    languages: {
      es: 'https://ladyjarana.com/servicios/eventos-empresa',
      ca: 'https://ladyjarana.com/ca/serveis/esdeveniments-empresa',
      'x-default': 'https://ladyjarana.com/servicios/eventos-empresa',
    },
  },
};

export default function EsdevenimentsEmpresaPage() {
  return (
    <ServicioStubCA
      titulo="Grup per a esdeveniments d'empresa"
      intro="Fi d'any corporatiu, presentacions de producte, team buildings o sopars d'equip: Lady Jarana posa el ritme i la festa. Format escalable des de quartet acústic fins a banda completa amb vents. Repertori en català i castellà."
    />
  );
}
