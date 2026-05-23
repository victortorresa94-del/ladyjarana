import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

interface ServicioStubCAProps {
  titulo: string;
  intro: string;
  eyebrow?: string;
}

export default function ServicioStubCA({
  titulo,
  intro,
  eyebrow = "Tipus d'esdeveniment",
}: ServicioStubCAProps) {
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
            Pròximament: més informació, repertori, fotos i testimonis reals.
          </p>
          <Button href={WHATSAPP_URL} variant="primary">
            Demanar pressupost per WhatsApp →
          </Button>
          <p className="mt-6 font-body text-sm text-negro/60">
            Prefereixes email o formulari?{' '}
            <a href="/ca/contractar" className="text-rojo underline font-bold">
              Altres formes de contactar →
            </a>
          </p>
        </article>
      </main>
      <FooterCA />
    </>
  );
}
