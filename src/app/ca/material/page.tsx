'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

interface Asset {
  src: string;
  name: string;
  filename: string;
  bg?: string;
}

const logos: Asset[] = [
  { src: '/logo/lady-jarana-blanco.png', name: 'Wordmark blanc', filename: 'lady-jarana-blanco.png', bg: 'bg-negro' },
  { src: '/logo/lady-jarana-crema.png', name: 'Wordmark crema', filename: 'lady-jarana-crema.png', bg: 'bg-azul' },
  { src: '/logo/lady-jarana-melon.png', name: 'Wordmark meló', filename: 'lady-jarana-melon.png', bg: 'bg-rojo' },
  { src: '/logo/lady-jarana-sol.png', name: 'Wordmark sol', filename: 'lady-jarana-sol.png', bg: 'bg-negro' },
  { src: '/logo/palmera.png', name: 'Palmera original', filename: 'palmera.png', bg: 'bg-crema' },
  { src: '/logo/palmera-melon.png', name: 'Palmera meló', filename: 'palmera-melon.png', bg: 'bg-azul' },
  { src: '/logo/palmera-sol.png', name: 'Palmera sol', filename: 'palmera-sol.png', bg: 'bg-negro' },
];

const ilustraciones: Asset[] = [
  { src: '/generated/palm-left.png', name: 'Palmera esq.', filename: 'palm-left.png' },
  { src: '/generated/palm-right.png', name: 'Palmera dr.', filename: 'palm-right.png' },
  { src: '/generated/sun-burst.png', name: 'Sol burst', filename: 'sun-burst.png' },
  { src: '/generated/bombillas.png', name: 'Bombetes', filename: 'bombillas.png' },
  { src: '/generated/fiesta-crowd.png', name: 'Crowd festa', filename: 'fiesta-crowd.png' },
  { src: '/generated/guitar-fiesta.png', name: 'Guitarra', filename: 'guitar-fiesta.png' },
  { src: '/generated/maracas-palmas.png', name: 'Maraques i palmes', filename: 'maracas-palmas.png' },
  { src: '/generated/hero-bg.png', name: 'Fons hero', filename: 'hero-bg.png' },
];

function DownloadCard({ asset, accent }: { asset: Asset; accent?: string }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border-4 border-negro bg-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1">
      <div className={`relative flex aspect-square items-center justify-center ${asset.bg ?? accent ?? 'bg-crema'}`}>
        <Image
          src={asset.src}
          alt={asset.name}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
          className="object-contain p-6"
        />
      </div>
      <div className="flex items-center justify-between gap-3 border-t-4 border-negro bg-blanco p-4">
        <div className="min-w-0">
          <p className="truncate font-body text-sm font-bold text-negro">{asset.name}</p>
          <p className="truncate font-body text-[10px] text-negro/50">{asset.filename}</p>
        </div>
        <a
          href={asset.src}
          download={asset.filename}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rojo text-blanco shadow-[2px_2px_0_var(--negro)] transition-transform hover:scale-110 border-2 border-negro"
          aria-label={`Descarregar ${asset.name}`}
        >
          ↓
        </a>
      </div>
    </div>
  );
}

export default function MaterialPageCA() {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-24">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-rojo">
              ✦ Material gràfic
            </p>
            <h1 className="mb-4 max-w-3xl font-display text-4xl text-negro leading-[1.05] lg:text-6xl">
              Descarrega tot el que et faci falta per al <em className="text-rojo">teu cartell</em>.
            </h1>
            <p className="max-w-2xl font-body text-lg text-negro/70">
              Logos, fotos, vídeo promocional, il·lustracions i dossier
              complet. Ús lliure per a organitzadors que vagin a anunciar un
              dels nostres bolos.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.a
              href="/dossier-lady-jarana.pdf"
              download
              className="group flex flex-col justify-between rounded-3xl border-4 border-negro bg-rojo p-6 text-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">PDF · 1.8 MB</p>
                <h2 className="mt-2 font-display text-2xl italic">Dossier complet</h2>
                <p className="mt-2 text-sm opacity-90">Bio, fotos, formats, rider tècnic i contacte.</p>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Descarregar ↓</p>
            </motion.a>

            <motion.a
              href="/videos/hero.mp4"
              download="lady-jarana-promo.mp4"
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border-4 border-negro bg-negro text-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <div className="relative aspect-video w-full">
                <Image src="/videos/hero-poster.jpg" alt="Vídeo promocional" fill sizes="33vw" className="object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rojo border-4 border-blanco text-2xl">↓</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">MP4 · 2.7 MB · 12s</p>
                <h2 className="mt-2 font-display text-2xl italic">Vídeo promocional</h2>
              </div>
            </motion.a>

            <motion.a
              href="/fotos/grupo-1.jpg"
              download="lady-jarana-foto-grupo.jpg"
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border-4 border-negro bg-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative aspect-video w-full bg-negro">
                <Image src="/fotos/grupo-1.jpg" alt="Foto del grup" fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-6 text-negro">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">JPG · 2.5 MB · alta resolució</p>
                <h2 className="mt-2 font-display text-2xl italic">Foto del grup</h2>
              </div>
            </motion.a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.h2
            className="mb-2 font-display text-3xl text-negro lg:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Logos
          </motion.h2>
          <p className="mb-8 font-body text-negro/70">Wordmark Lady Jarana i palmera, en diverses versions de color. PNG amb transparència.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {logos.map((l) => (
              <DownloadCard key={l.filename} asset={l} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.h2
            className="mb-2 font-display text-3xl text-negro lg:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Elements per a cartells
          </motion.h2>
          <p className="mb-8 font-body text-negro/70">Il·lustracions soltes (palmeres, sol, bombetes, multitud…) llestes per compondre cartells del bolo.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ilustraciones.map((i) => (
              <DownloadCard key={i.filename} asset={i} accent="bg-azul/10" />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-6 font-body text-negro/70">
            Necessites algun format concret, una altra foto o una idea de
            cartell a mida?
          </p>
          <Button href={WHATSAPP_URL} variant="primary">
            Escriu-nos per WhatsApp →
          </Button>
        </section>
      </main>
      <FooterCA />
    </>
  );
}
