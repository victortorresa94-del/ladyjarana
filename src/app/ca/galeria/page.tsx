import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import GaleriaCA from '@/components/sections/ca/GaleriaCA';

export const metadata: Metadata = {
  title: 'Galeria — Lady Jarana en directe | Vídeos i fotos de casaments i festes majors',
  description:
    'Vídeos i fotos de Lady Jarana en directe: casaments, festes majors, sales i esdeveniments privats a Catalunya. Mira com sona la banda abans de contractar-la.',
  alternates: {
    canonical: 'https://ladyjarana.com/ca/galeria',
    languages: {
      es: 'https://ladyjarana.com/galeria',
      ca: 'https://ladyjarana.com/ca/galeria',
      'x-default': 'https://ladyjarana.com/galeria',
    },
  },
  openGraph: {
    title: 'Galeria · Lady Jarana en directe',
    description:
      "Vídeos i fotos d'esdeveniments reals. Sense pistes pregravades.",
    url: 'https://ladyjarana.com/ca/galeria',
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
