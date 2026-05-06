import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Dossier — Lady Jarana Press Kit',
  description:
    'Descarga el dossier completo de Lady Jarana con bio, fotos en alta resolución y rider técnico.',
  alternates: { canonical: '/dossier' },
};

export default function DossierPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-azul pt-20 noise-overlay relative">
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center text-blanco">
          <span className="mb-6 block text-6xl">📄</span>
          <h1 className="mb-4 font-display text-4xl font-bold lg:text-5xl">
            Dossier Lady Jarana
          </h1>
          <p className="mb-8 font-body text-blanco/80 leading-relaxed">
            Bio completa, fotos en alta resolución, rider técnico y toda la
            información que necesitas para programarnos en tu evento.
          </p>
          <Button
            href="/dossier-lady-jarana.pdf"
            variant="primary"
            className="text-lg"
          >
            Descargar dossier (PDF) ↓
          </Button>
          <p className="mt-6 font-body text-sm text-blanco/50">
            ¿Necesitas más material?{' '}
            <a
              href="/contratar?asunto=material"
              className="text-amarillo underline"
            >
              Escríbenos
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
