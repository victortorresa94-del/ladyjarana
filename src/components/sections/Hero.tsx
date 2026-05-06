'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-negro">
      {/* Real footage from a Lady Jarana event */}
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

      {/* Color overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,26,24,0.50) 0%, rgba(214,59,54,0.25) 60%, rgba(31,26,24,0.85) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-sol drop-shadow-lg sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ Rumba & Rock Band ✦ Barcelona ✦
        </motion.p>

        <motion.div
          className="relative mx-auto mb-8 w-full max-w-md lg:max-w-lg"
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

        <motion.h1
          className="sr-only"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Lady Jarana — Banda en directo de pop-rock español, rumba y latineo en Barcelona
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-3xl text-lg text-crema leading-relaxed lg:text-2xl font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Banda en directo para <strong className="text-sol">bodas</strong>,{' '}
          <strong className="text-sol">fiestas mayores</strong> y eventos privados en{' '}
          <strong className="text-sol">Barcelona y toda Cataluña</strong>. Pop-rock, rumba y latineo en formato cuarteto.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
