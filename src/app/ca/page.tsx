import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroCA from '@/components/sections/ca/HeroCA';
import ProximosEventosCA from '@/components/sections/ca/ProximosEventosCA';
import ProximosEventosBannerCA from '@/components/ProximosEventosBannerCA';
import BioCA from '@/components/sections/ca/BioCA';
import EstiloCA from '@/components/sections/ca/EstiloCA';
import IntegrantesCA from '@/components/sections/ca/IntegrantesCA';
import FormatosCA from '@/components/sections/ca/FormatosCA';
import TrayectoriaCA from '@/components/sections/ca/TrayectoriaCA';
import GaleriaCA from '@/components/sections/ca/GaleriaCA';
import HanConfiadoCA from '@/components/sections/ca/HanConfiadoCA';
import ContactoCTACA from '@/components/sections/ca/ContactoCTACA';
import SpotifyCTACA from '@/components/sections/ca/SpotifyCTACA';
import TestimoniosCA from '@/components/sections/ca/TestimoniosCA';
import PressKitCA from '@/components/sections/ca/PressKitCA';
import TiposEventosCA from '@/components/sections/ca/TiposEventosCA';
import FooterCA from '@/components/FooterCA';

export const metadata: Metadata = {
  title:
    'Lady Jarana — Grup en directe de pop-rock, rumba i latineig | Barcelona i Catalunya',
  description:
    'Grup de música en directe per a casaments, festes majors i esdeveniments privats a Barcelona i tota Catalunya. Pop-rock català i espanyol, rumba i latineig. Quartet des de 1.000 €. Xou bilingüe ES/CA.',
  alternates: {
    canonical: 'https://ladyjarana.es/ca',
    languages: {
      es: 'https://ladyjarana.es/',
      ca: 'https://ladyjarana.es/ca',
      'x-default': 'https://ladyjarana.es/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ca_ES',
    url: 'https://ladyjarana.es/ca',
    siteName: 'Lady Jarana',
    title: 'Lady Jarana — Grup en directe a Barcelona i Catalunya',
    description:
      'Pop-rock, rumba i latineig en directe per a casaments, festes majors i esdeveniments privats. Xou bilingüe ES/CA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lady Jarana — Rumba & Rock Band',
      },
    ],
  },
};

export default function HomeCA() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCA />
        <ProximosEventosCA />
        <BioCA />
        <IntegrantesCA />
        <EstiloCA />
        <GaleriaCA />
        <FormatosCA />
        <TrayectoriaCA />
        <HanConfiadoCA />
        <ContactoCTACA />
        <SpotifyCTACA />
        <TestimoniosCA />
        <PressKitCA />
        <TiposEventosCA />
      </main>
      <FooterCA />
      <ProximosEventosBannerCA />
    </>
  );
}
