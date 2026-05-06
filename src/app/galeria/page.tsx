import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Galeria from '@/components/sections/Galeria';

export const metadata: Metadata = {
  title: 'Galería — Vídeos en directo de Lady Jarana',
  description:
    'Vídeos en directo de Lady Jarana en bodas, fiestas mayores y eventos privados en Barcelona. Mira la banda en acción.',
  alternates: { canonical: '/galeria' },
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Galeria />
      </main>
      <Footer />
    </>
  );
}
