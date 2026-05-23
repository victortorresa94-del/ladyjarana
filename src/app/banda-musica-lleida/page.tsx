import type { Metadata } from 'next';
import CiudadLanding from '@/components/sections/CiudadLanding';
import { ciudadesES } from '@/lib/ciudadesData';

const content = ciudadesES.lleida;

export const metadata: Metadata = {
  title: 'Banda de música en directo en Lleida y Pirineu — Lady Jarana',
  description: content.intro,
  alternates: {
    canonical: `/${content.slugES}`,
    languages: {
      es: `https://ladyjarana.com/${content.slugES}`,
      ca: `https://ladyjarana.com/ca/${content.slugCA}`,
      'x-default': `https://ladyjarana.com/${content.slugES}`,
    },
  },
};

export default function Page() {
  return <CiudadLanding content={content} locale="es" />;
}
