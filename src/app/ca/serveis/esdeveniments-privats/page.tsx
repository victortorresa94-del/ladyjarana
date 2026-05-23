import type { Metadata } from 'next';
import { ServicioRichCAFull } from '@/components/sections/ServicioRichCA';
import { serviciosCA } from '@/lib/serviciosContent';

const content = serviciosCA['esdeveniments-privats'];

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/ca/serveis/esdeveniments-privats',
    languages: {
      es: 'https://ladyjarana.com/servicios/eventos-privados',
      ca: 'https://ladyjarana.com/ca/serveis/esdeveniments-privats',
      'x-default': 'https://ladyjarana.com/servicios/eventos-privados',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.com/ca/serveis/esdeveniments-privats',
    type: 'website',
    locale: 'ca_ES',
    images: [content.hero.foto],
  },
};

export default function EsdevenimentsPrivatsPage() {
  return <ServicioRichCAFull content={content} />;
}
