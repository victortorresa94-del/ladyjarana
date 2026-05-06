'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-crema">
      {/* Sun-rays radial background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 30%, var(--sol-claro) 0%, var(--crema) 60%, var(--crema-oscuro) 100%)',
          }}
        />
        {/* Background scene illustration */}
        <Image
          src="/generated/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-bottom mix-blend-multiply opacity-90"
        />
      </div>

      {/* Bombillas string lights at top */}
      <div className="absolute top-20 left-0 right-0 flex items-center justify-center gap-3 px-4 opacity-90">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#F47A1F' : i % 3 === 1 ? '#F5B73C' : '#D63B36',
              boxShadow: '0 0 8px currentColor',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          className="mb-6 font-body text-xs font-bold uppercase tracking-[0.4em] text-rojo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ✦ Rumba & Rock Band ✦ Barcelona ✦
        </motion.p>

        <motion.h1
          className="mb-6 font-display font-bold italic text-azul leading-[0.85]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            textShadow: '4px 4px 0 var(--sol)',
          }}
        >
          Lady
          <br />
          Jarana
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl font-body text-lg text-negro leading-relaxed lg:text-2xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          No somos una banda tributo.
          <br className="hidden sm:block" />
          <span className="font-display italic text-rojo">
            Somos una verbena en directo.
          </span>
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
          <Button href="#galeria" variant="outline">
            Ver vídeo en directo
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs text-negro/60 uppercase tracking-widest font-bold">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-negro/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
