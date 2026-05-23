import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import GaleriaCA from '@/components/sections/ca/GaleriaCA';

export const metadata: Metadata = {
  title: 'Galeria — Lady Jarana en directe | Vídeos i fotos de casaments i festes majors',
  description:
    'Vídeos i fotos de Lady Jarana en directe: casaments, festes majors, sales i esdeveniments privats a Catalunya. Mira com sona la banda abans de contractar-la.',
  alternates: {
    canonical: 'https://ladyjarana.es/ca/galeria',
    languages: {
      es: 'https://ladyjarana.es/galeria',
      ca: 'https://ladyjarana.es/ca/galeria',
      'x-default': 'https://ladyjarana.es/galeria',
    },
  },
  openGraph: {
    title: 'Galeria · Lady Jarana en directe',
    description:
      "Vídeos i fotos d'esdeveniments reals. Sense pistes pregravades.",
    url: 'https://ladyjarana.es/ca/galeria',
    type: 'website',
    locale: 'ca_ES',
  },
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-blanco pt-20">
        <GaleriaCA />
      </main>
      <FooterCA />
    </>
  );
}
