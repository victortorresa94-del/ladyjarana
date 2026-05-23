import type { Metadata } from 'next';
import CiudadLanding from '@/components/sections/CiudadLanding';
import { ciudadesCA } from '@/lib/ciudadesData';

const content = ciudadesCA.barcelona;

export const metadata: Metadata = {
  title: 'Grup de música en directe a Barcelona — Lady Jarana',
  description: content.intro,
  alternates: {
    canonical: `/ca/${content.slugCA}`,
    languages: {
      es: `https://ladyjarana.com/${content.slugES}`,
      ca: `https://ladyjarana.com/ca/${content.slugCA}`,
      'x-default': `https://ladyjarana.com/${content.slugES}`,
    },
  },
};

export default function Page() {
  return <CiudadLanding content={content} locale="ca" />;
}
