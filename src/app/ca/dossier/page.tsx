import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Dossier — Lady Jarana Press Kit',
  description:
    'Descarrega el dossier complet de Lady Jarana amb bio, fotos en alta resolució i rider tècnic.',
  alternates: {
    canonical: '/ca/dossier',
    languages: {
      es: 'https://ladyjarana.com/dossier',
      ca: 'https://ladyjarana.com/ca/dossier',
      'x-default': 'https://ladyjarana.com/dossier',
    },
  },
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
            Bio completa, fotos en alta resolució, rider tècnic i tota la
            informació que necessites per programar-nos al teu esdeveniment.
          </p>
          <Button
            href="/dossier-lady-jarana.pdf"
            variant="primary"
            className="text-lg"
          >
            Descarregar dossier (PDF) ↓
          </Button>
          <p className="mt-6 font-body text-sm text-blanco/50">
            Necessites més material?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amarillo underline"
            >
              Escriu-nos per WhatsApp
            </a>
          </p>
        </div>
      </main>
      <FooterCA />
    </>
  );
}
