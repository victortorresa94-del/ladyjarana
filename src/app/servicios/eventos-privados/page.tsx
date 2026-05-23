import type { Metadata } from 'next';
import ServicioRich from '@/components/sections/ServicioRich';
import { serviciosES } from '@/lib/serviciosContent';

const content = serviciosES['eventos-privados'];

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/servicios/eventos-privados',
    languages: {
      es: 'https://ladyjarana.es/servicios/eventos-privados',
      ca: 'https://ladyjarana.es/ca/serveis/esdeveniments-privats',
      'x-default': 'https://ladyjarana.es/servicios/eventos-privados',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.es/servicios/eventos-privados',
    type: 'website',
    images: [content.hero.foto],
  },
};

export default function EventosPrivadosPage() {
  return <ServicioRich content={content} locale="es" />;
}
