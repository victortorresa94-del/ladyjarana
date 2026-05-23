import type { Metadata } from 'next';
import { ServicioRichCAFull } from '@/components/sections/ServicioRichCA';
import { serviciosCA } from '@/lib/serviciosContent';

const content = serviciosCA.casaments;

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/ca/serveis/casaments',
    languages: {
      es: 'https://ladyjarana.com/servicios/bodas',
      ca: 'https://ladyjarana.com/ca/serveis/casaments',
      'x-default': 'https://ladyjarana.com/servicios/bodas',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.com/ca/serveis/casaments',
    type: 'website',
    locale: 'ca_ES',
    images: [content.hero.foto],
  },
};

export default function CasamentsPage() {
  return <ServicioRichCAFull content={content} />;
}
