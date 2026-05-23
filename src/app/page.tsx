import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import ProximosEventos from '@/components/sections/ProximosEventos';
import ProximosEventosBanner from '@/components/ProximosEventosBanner';
import Bio from '@/components/sections/Bio';
import Estilo from '@/components/sections/Estilo';
import Integrantes from '@/components/sections/Integrantes';
import Formatos from '@/components/sections/Formatos';
import Trayectoria from '@/components/sections/Trayectoria';
import Galeria from '@/components/sections/Galeria';
import ContactoCTA from '@/components/sections/ContactoCTA';
import SpotifyCTA from '@/components/sections/SpotifyCTA';
import Testimonios from '@/components/sections/Testimonios';
import PressKit from '@/components/sections/PressKit';
import TiposEventos from '@/components/sections/TiposEventos';
import HanConfiado from '@/components/sections/HanConfiado';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProximosEventos />
        <Bio />
        <Integrantes />
        <Estilo />
        <Galeria />
        <Formatos />
        <Trayectoria />
        <HanConfiado />
        <ContactoCTA />
        <SpotifyCTA />
        <Testimonios />
        <PressKit />
        <TiposEventos />
      </main>
      <Footer />
      <ProximosEventosBanner />
    </>
  );
}
