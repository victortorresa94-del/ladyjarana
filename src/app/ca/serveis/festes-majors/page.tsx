import type { Metadata } from 'next';
import { ServicioRichCAFull } from '@/components/sections/ServicioRichCA';
import { serviciosCA } from '@/lib/serviciosContent';

const content = serviciosCA['festes-majors'];

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/ca/serveis/festes-majors',
    languages: {
      es: 'https://ladyjarana.com/servicios/fiestas-mayores',
      ca: 'https://ladyjarana.com/ca/serveis/festes-majors',
      'x-default': 'https://ladyjarana.com/servicios/fiestas-mayores',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.com/ca/serveis/festes-majors',
    type: 'website',
    locale: 'ca_ES',
    images: [content.hero.foto],
  },
};

export default function FestesMajorsPage() {
  return <ServicioRichCAFull content={content} />;
}
