'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-negro">
      {/* Real footage from Lady Jarana directo */}
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
            'linear-gradient(180deg, rgba(31,26,24,0.55) 0%, rgba(31,26,24,0.35) 40%, rgba(214,59,54,0.25) 70%, rgba(31,26,24,0.85) 100%)',
        }}
      />

      {/* Palm icon decoration top-right */}
      <motion.div
        className="absolute top-24 right-6 z-20 hidden md:block lg:right-12 lg:top-28"
        initial={{ opacity: 0, x: 30, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Image
          src="/logo/palmera-melon.png"
          alt=""
          width={140}
          height={140}
          className="h-24 w-auto opacity-80 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] lg:h-32 animate-sway"
        />
      </motion.div>

      {/* Bombillas */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 px-4 max-w-[60%]">
        {[...Array(13)].map((_, i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#F47A1F' : i % 3 === 1 ? '#F5B73C' : '#FBF1DC',
              boxShadow: '0 0 14px currentColor',
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.p
          className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-sol drop-shadow-lg sm:text-xs lg:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ Rumba & Rock Band ✦ Barcelona ✦
        </motion.p>

        <motion.div
          className="relative mx-auto mb-4 w-full max-w-lg sm:max-w-xl lg:mb-6 lg:max-w-3xl"
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
          className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-crema font-medium drop-shadow-md sm:text-base lg:mb-10 lg:text-lg lg:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Banda en directo para <strong className="text-sol">bodas</strong>,{' '}
          <strong className="text-sol">fiestas mayores</strong> y eventos privados en{' '}
          <strong className="text-sol">Barcelona y toda Cataluña</strong>. Pop-rock, rumba y latineo en formato cuarteto.
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
