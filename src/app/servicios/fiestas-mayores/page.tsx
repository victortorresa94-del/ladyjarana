import type { Metadata } from 'next';
import ServicioRich from '@/components/sections/ServicioRich';
import { serviciosES } from '@/lib/serviciosContent';

const content = serviciosES['fiestas-mayores'];

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/servicios/fiestas-mayores',
    languages: {
      es: 'https://ladyjarana.com/servicios/fiestas-mayores',
      ca: 'https://ladyjarana.com/ca/serveis/festes-majors',
      'x-default': 'https://ladyjarana.com/servicios/fiestas-mayores',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.com/servicios/fiestas-mayores',
    type: 'website',
    images: [content.hero.foto],
  },
};

export default function FiestasMayoresPage() {
  return <ServicioRich content={content} locale="es" />;
}
