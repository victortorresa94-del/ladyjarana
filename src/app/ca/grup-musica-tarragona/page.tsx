import type { Metadata } from 'next';
import CiudadLanding from '@/components/sections/CiudadLanding';
import { ciudadesCA } from '@/lib/ciudadesData';

const content = ciudadesCA.tarragona;

export const metadata: Metadata = {
  title: 'Grup de música en directe a Tarragona i Costa Daurada — Lady Jarana',
  description: content.intro,
  alternates: {
    canonical: `/ca/${content.slugCA}`,
    languages: {
      es: `https://ladyjarana.es/${content.slugES}`,
      ca: `https://ladyjarana.es/ca/${content.slugCA}`,
      'x-default': `https://ladyjarana.es/${content.slugES}`,
    },
  },
};

export default function Page() {
  return <CiudadLanding content={content} locale="ca" />;
}
