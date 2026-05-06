'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-negro">
      {/* Hero video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Color overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,26,24,0.55) 0%, rgba(214,59,54,0.35) 60%, rgba(31,26,24,0.85) 100%)',
        }}
      />

      {/* Bombillas */}
      <div className="absolute top-20 left-0 right-0 flex items-center justify-center gap-3 px-4 opacity-90">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#F47A1F' : i % 3 === 1 ? '#F5B73C' : '#FBF1DC',
              boxShadow: '0 0 12px currentColor',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-sol"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ Rumba & Rock Band ✦ Barcelona ✦
        </motion.p>

        <motion.h1
          className="mb-6 font-display text-blanco leading-[0.85]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
        >
          <span className="italic text-sol">Lady</span>
          <br />
          <span className="italic">Jarana</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-crema leading-relaxed lg:text-2xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          No somos una banda tributo.
          <br className="hidden sm:block" />
          <em className="font-display text-3xl lg:text-4xl text-sol not-italic">
            <em>Somos una verbena en directo.</em>
          </em>
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
