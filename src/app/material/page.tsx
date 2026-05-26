'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

interface Asset {
  src: string;
  name: string;
  filename: string;
  bg?: string;
}

const logos: Asset[] = [
  { src: '/logo/lady-jarana-nuevo.png', name: 'Logo principal (palmera nueva)', filename: 'lady-jarana-nuevo.png', bg: 'bg-crema' },
  { src: '/logo/palmera-nueva.png', name: 'Palmera nueva (transparente)', filename: 'palmera-nueva.png', bg: 'bg-azul' },
  { src: '/logo/lady-jarana-blanco.png', name: 'Wordmark blanco', filename: 'lady-jarana-blanco.png', bg: 'bg-negro' },
  { src: '/logo/lady-jarana-crema.png', name: 'Wordmark crema', filename: 'lady-jarana-crema.png', bg: 'bg-azul' },
  { src: '/logo/lady-jarana-melon.png', name: 'Wordmark melón', filename: 'lady-jarana-melon.png', bg: 'bg-rojo' },
  { src: '/logo/lady-jarana-sol.png', name: 'Wordmark sol', filename: 'lady-jarana-sol.png', bg: 'bg-negro' },
  { src: '/logo/palmera.png', name: 'Palmera original', filename: 'palmera.png', bg: 'bg-crema' },
  { src: '/logo/palmera-melon.png', name: 'Palmera melón', filename: 'palmera-melon.png', bg: 'bg-azul' },
  { src: '/logo/palmera-sol.png', name: 'Palmera sol', filename: 'palmera-sol.png', bg: 'bg-negro' },
];

const fotos: Asset[] = [
  { src: '/fotos/grupo-2.jpg', name: 'Lady Jarana — grupo', filename: 'lady-jarana-grupo-2.jpg' },
  { src: '/fotos/grupo-1.jpg', name: 'Lady Jarana — grupo (alt 1)', filename: 'lady-jarana-grupo-1.jpg' },
  { src: '/fotos/grupo-publico.jpg', name: 'Con el público', filename: 'lady-jarana-publico.jpg' },
  { src: '/fotos/backstage.jpg', name: 'Backstage', filename: 'lady-jarana-backstage.jpg' },
];

const ilustraciones: Asset[] = [
  { src: '/generated/palm-left.png', name: 'Palmera izq.', filename: 'palm-left.png' },
  { src: '/generated/palm-right.png', name: 'Palmera der.', filename: 'palm-right.png' },
  { src: '/generated/sun-burst.png', name: 'Sol burst', filename: 'sun-burst.png' },
  { src: '/generated/bombillas.png', name: 'Bombillas', filename: 'bombillas.png' },
  { src: '/generated/fiesta-crowd.png', name: 'Crowd fiesta', filename: 'fiesta-crowd.png' },
  { src: '/generated/guitar-fiesta.png', name: 'Guitarra', filename: 'guitar-fiesta.png' },
  { src: '/generated/maracas-palmas.png', name: 'Maracas y palmas', filename: 'maracas-palmas.png' },
  { src: '/generated/hero-bg.png', name: 'Fondo hero', filename: 'hero-bg.png' },
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
          aria-label={`Descargar ${asset.name}`}
        >
          ↓
        </a>
      </div>
    </div>
  );
}

export default function MaterialPage() {
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
              ✦ Material gráfico
            </p>
            <h1 className="mb-4 max-w-3xl font-display text-4xl text-negro leading-[1.05] lg:text-6xl">
              Descarga todo lo que necesites para <em className="text-rojo">tu cartel</em>.
            </h1>
            <p className="max-w-2xl font-body text-lg text-negro/70">
              Logos, fotos, vídeo promocional, ilustraciones y dossier completo.
              Libre uso para organizadores que vayan a anunciar uno de nuestros bolos.
            </p>
          </motion.div>
        </section>

        {/* Bloques destacados */}
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
                <h2 className="mt-2 font-display text-2xl italic">Dossier completo</h2>
                <p className="mt-2 text-sm opacity-90">Bio, fotos, formatos, rider técnico y contacto.</p>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Descargar ↓</p>
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
              href="/rider/rider-tecnico-lady-jarana-2026.png"
              download="rider-tecnico-lady-jarana-2026.png"
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border-4 border-negro bg-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative aspect-video w-full bg-crema">
                <Image
                  src="/rider/rider-tecnico-lady-jarana-2026.png"
                  alt="Rider técnico Lady Jarana 2026"
                  fill
                  sizes="33vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 text-negro">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">PNG + XLSX · 2026</p>
                <h2 className="mt-2 font-display text-2xl italic">Rider técnico</h2>
                <p className="mt-2 text-sm opacity-70">Plano de escenario + input list. PNG aquí, Excel en la sección Rider.</p>
              </div>
            </motion.a>
          </div>
        </section>

        {/* Fotos del grupo */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.h2
            className="mb-2 font-display text-3xl text-negro lg:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Fotos
          </motion.h2>
          <p className="mb-8 font-body text-negro/70">
            Fotos de Lady Jarana en alta resolución para uso de prensa y
            organizadores. ¿Necesitas alguna concreta o una sesión propia?
            Escríbenos.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {fotos.map((f) => (
              <DownloadCard key={f.filename} asset={f} />
            ))}
          </div>
        </section>

        {/* Rider técnico (PNG + XLSX) */}
        <section id="rider-tecnico" className="mx-auto max-w-7xl px-6 py-12 scroll-mt-24">
          <motion.h2
            className="mb-2 font-display text-3xl text-negro lg:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Rider técnico
          </motion.h2>
          <p className="mb-8 font-body text-negro/70">
            Documento técnico para el equipo de sonido del venue: plano de
            escenario, micros, monitores e input list. Dos formatos —
            imagen para visualizar e Excel para editar/imprimir.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.a
              href="/rider/rider-tecnico-lady-jarana-2026.png"
              download="rider-tecnico-lady-jarana-2026.png"
              className="group flex flex-col overflow-hidden rounded-2xl border-4 border-negro bg-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video w-full bg-crema">
                <Image
                  src="/rider/rider-tecnico-lady-jarana-2026.png"
                  alt="Rider técnico Lady Jarana 2026 (visual)"
                  fill
                  sizes="50vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-t-4 border-negro bg-blanco p-4">
                <div className="min-w-0">
                  <p className="font-body text-sm font-bold text-negro">
                    Rider técnico (imagen)
                  </p>
                  <p className="font-body text-[10px] text-negro/50">
                    rider-tecnico-lady-jarana-2026.png
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rojo text-blanco shadow-[2px_2px_0_var(--negro)] border-2 border-negro">
                  ↓
                </span>
              </div>
            </motion.a>

            <motion.a
              href="/rider/lady-jarana-input-list-2026.xlsx"
              download="lady-jarana-input-list-2026.xlsx"
              className="group flex flex-col overflow-hidden rounded-2xl border-4 border-negro bg-blanco shadow-[6px_6px_0_var(--negro)] transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <div className="relative flex aspect-video w-full items-center justify-center bg-verde/30">
                <div className="text-center">
                  <p className="font-display text-6xl font-bold italic text-verde">
                    XLS
                  </p>
                  <p className="mt-2 font-body text-xs font-bold uppercase tracking-widest text-negro/70">
                    Input list editable
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 border-t-4 border-negro bg-blanco p-4">
                <div className="min-w-0">
                  <p className="font-body text-sm font-bold text-negro">
                    Input list (Excel)
                  </p>
                  <p className="font-body text-[10px] text-negro/50">
                    lady-jarana-input-list-2026.xlsx
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rojo text-blanco shadow-[2px_2px_0_var(--negro)] border-2 border-negro">
                  ↓
                </span>
              </div>
            </motion.a>
          </div>
        </section>

        {/* Logos */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.h2
            className="mb-2 font-display text-3xl text-negro lg:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Logos
          </motion.h2>
          <p className="mb-8 font-body text-negro/70">Wordmark Lady Jarana y palmera, en varias versiones de color. PNG con transparencia.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {logos.map((l) => (
              <DownloadCard key={l.filename} asset={l} />
            ))}
          </div>
        </section>

        {/* Ilustraciones para carteles */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.h2
            className="mb-2 font-display text-3xl text-negro lg:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Elementos para carteles
          </motion.h2>
          <p className="mb-8 font-body text-negro/70">Ilustraciones sueltas (palmeras, sol, bombillas, multitud…) listas para componer carteles del bolo.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ilustraciones.map((i) => (
              <DownloadCard key={i.filename} asset={i} accent="bg-azul/10" />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-6 font-body text-negro/70">
            ¿Necesitas algún formato concreto, otra foto o una idea de cartel a medida?
          </p>
          <Button href={WHATSAPP_URL} variant="primary">
            Escríbenos por WhatsApp →
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
