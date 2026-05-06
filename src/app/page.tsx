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
import Servicios from '@/components/sections/Servicios';
import Testimonios from '@/components/sections/Testimonios';
import PressKit from '@/components/sections/PressKit';
import CTAFinal from '@/components/sections/CTAFinal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProximosEventos />
        <Bio />
        <Estilo />
        <Integrantes />
        <Formatos />
        <Trayectoria />
        <Galeria />
        <Servicios />
        <Testimonios />
        <PressKit />
        <CTAFinal />
      </main>
      <Footer />
      <ProximosEventosBanner />
    </>
  );
}
