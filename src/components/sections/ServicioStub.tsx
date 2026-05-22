import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

interface ServicioStubProps {
  titulo: string;
  intro: string;
  eyebrow?: string;
}

export default function ServicioStub({
  titulo,
  intro,
  eyebrow = 'Tipo de evento',
}: ServicioStubProps) {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-28 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
            ✦ {eyebrow}
          </p>
          <h1 className="mt-2 mb-6 font-display text-4xl font-bold italic text-negro lg:text-5xl">
            {titulo}
          </h1>
          <p className="mb-8 font-body text-lg text-negro/80 leading-relaxed">
            {intro}
          </p>
          <p className="mb-10 font-body text-base italic text-negro/60 leading-relaxed">
            Próximamente: más información, repertorio, fotos y testimonios reales.
          </p>
          <Button href={WHATSAPP_URL} variant="primary">
            Pedir presupuesto por WhatsApp →
          </Button>
          <p className="mt-6 font-body text-sm text-negro/60">
            ¿Prefieres email o formulario?{' '}
            <a href="/contratar" className="text-rojo underline font-bold">
              Otras formas de contactar →
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
