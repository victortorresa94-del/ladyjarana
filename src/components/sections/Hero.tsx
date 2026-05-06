'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-azul">
      {/* Decorative palm tree */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.08] lg:opacity-[0.12]">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none" className="text-blanco">
          <path d="M220 250c-15-60-80-120-120-140 40 10 100 50 130 100-30-70-100-130-160-140 50 5 130 60 170 120-20-80-90-150-150-170 60 10 140 80 165 155-10-50-50-120-100-160 50 20 110 100 115 170l5 30c2 20 3 40 2 60l-5 80c-2 30-3 60-5 90l-3 60c-1 15-2 30-4 45h-20c2-15 3-30 5-45l3-60c2-30 3-60 5-90l5-80c1-15 0-30-2-45" fill="currentColor"/>
          <path d="M195 280c5 40 2 80-5 120l-8 60c-3 20-5 40-8 60l-5 45c-2 15-3 30-5 35h-15c2-10 4-25 6-40l5-45c3-20 5-40 8-60l8-60c7-35 10-70 8-105" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.3em] text-blanco/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rumba & Rock Band · Barcelona
        </motion.p>

        <motion.h1
          className="mb-6 font-display text-7xl font-bold text-blanco italic sm:text-8xl lg:text-[10rem] leading-[0.85]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Lady
          <br />
          Jarana
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl font-body text-lg text-blanco/80 leading-relaxed lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Pop-rock español, rumba y latineo en directo.
          <br className="hidden sm:block" />
          La banda que convierte tu evento en fiesta mayor.
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
          <span className="font-body text-xs text-blanco/40 uppercase tracking-widest">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-blanco/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
