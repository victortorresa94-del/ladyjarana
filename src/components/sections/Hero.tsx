'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-negro">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,26,24,0.55) 0%, rgba(31,26,24,0.35) 40%, rgba(214,59,54,0.25) 70%, rgba(31,26,24,0.85) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.p
          className="mb-1 text-[10px] font-bold uppercase tracking-[0.4em] text-sol drop-shadow-lg sm:text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ Rumba & Rock Band ✦ Barcelona ✦
        </motion.p>

        <motion.div
          className="relative mx-auto -mt-6 mb-2 w-full max-w-md sm:max-w-lg lg:-mt-10 lg:mb-3 lg:max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Image
            src="/logo/lady-jarana-melon.png"
            alt="Lady Jarana"
            width={1024}
            height={1024}
            priority
            className="mx-auto h-auto w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        <h1 className="sr-only">
          Lady Jarana — Banda en directo de pop-rock español, rumba y latineo en Barcelona
        </h1>

        <motion.p
          className="mx-auto -mt-4 mb-8 max-w-sm text-[10px] font-light leading-relaxed text-crema/70 drop-shadow-md sm:text-xs lg:-mt-6 lg:mb-10 lg:max-w-md lg:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Banda en directo para <strong className="font-semibold">bodas</strong>,{' '}
          <strong className="font-semibold">fiestas mayores</strong> y eventos privados en{' '}
          <strong className="font-semibold">Barcelona y toda Cataluña</strong>. Pop-rock, rumba y latineo en formato cuarteto.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button href="/contratar" variant="primary">
            Contratar la banda →
          </Button>
          <Button href="#galeria" variant="secondary">
            Ver vídeo en directo
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-crema/70 uppercase tracking-widest font-bold">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-crema/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
