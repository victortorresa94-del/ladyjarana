import type { Metadata } from 'next';
import CiudadLanding from '@/components/sections/CiudadLanding';
import { ciudadesES } from '@/lib/ciudadesData';

const content = ciudadesES.barcelona;

export const metadata: Metadata = {
  title: 'Banda de música en directo en Barcelona — Lady Jarana',
  description: content.intro,
  alternates: {
    canonical: `/${content.slugES}`,
    languages: {
      es: `https://ladyjarana.es/${content.slugES}`,
      ca: `https://ladyjarana.es/ca/${content.slugCA}`,
      'x-default': `https://ladyjarana.es/${content.slugES}`,
    },
  },
};

export default function Page() {
  return <CiudadLanding content={content} locale="es" />;
}
