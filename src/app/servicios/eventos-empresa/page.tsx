import type { Metadata } from 'next';
import ServicioRich from '@/components/sections/ServicioRich';
import { serviciosES } from '@/lib/serviciosContent';

const content = serviciosES['eventos-empresa'];

export const metadata: Metadata = {
  title: `${content.titulo} | Lady Jarana`,
  description: content.intro,
  alternates: {
    canonical: '/servicios/eventos-empresa',
    languages: {
      es: 'https://ladyjarana.es/servicios/eventos-empresa',
      ca: 'https://ladyjarana.es/ca/serveis/esdeveniments-empresa',
      'x-default': 'https://ladyjarana.es/servicios/eventos-empresa',
    },
  },
  openGraph: {
    title: content.titulo,
    description: content.intro,
    url: 'https://ladyjarana.es/servicios/eventos-empresa',
    type: 'website',
    images: [content.hero.foto],
  },
};

export default function EventosEmpresaPage() {
  return <ServicioRich content={content} locale="es" />;
}
