import type { Metadata } from 'next';
import ServicioRich from '@/components/sections/ServicioRich';
import { serviciosES } from '@/lib/serviciosContent';

const content = serviciosES.bodas;

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/servicios/bodas',
    languages: {
      es: 'https://ladyjarana.com/servicios/bodas',
      ca: 'https://ladyjarana.com/ca/serveis/casaments',
      'x-default': 'https://ladyjarana.com/servicios/bodas',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.com/servicios/bodas',
    type: 'website',
    images: [content.hero.foto],
  },
};

export default function BodasPage() {
  return <ServicioRich content={content} locale="es" />;
}
