import type { Metadata } from 'next';
import { ServicioRichCAFull } from '@/components/sections/ServicioRichCA';
import { serviciosCA } from '@/lib/serviciosContent';

const content = serviciosCA['esdeveniments-empresa'];

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/ca/serveis/esdeveniments-empresa',
    languages: {
      es: 'https://ladyjarana.com/servicios/eventos-empresa',
      ca: 'https://ladyjarana.com/ca/serveis/esdeveniments-empresa',
      'x-default': 'https://ladyjarana.com/servicios/eventos-empresa',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.com/ca/serveis/esdeveniments-empresa',
    type: 'website',
    locale: 'ca_ES',
    images: [content.hero.foto],
  },
};

export default function EsdevenimentsEmpresaPage() {
  return <ServicioRichCAFull content={content} />;
}
