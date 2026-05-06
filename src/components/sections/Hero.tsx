'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Sticker from '../ui/Sticker';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-negro noise-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-azul/30 via-negro/60 to-negro" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10 lg:opacity-20">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" className="text-amarillo">
          <path
            d="M100 0c-20 40-60 60-80 120s20 100 80 160c60-60 100-100 80-160S120 40 100 0z"
            fill="currentColor"
          />
          <line x1="100" y1="120" x2="100" y2="300" stroke="currentColor" strokeWidth="4" />
          <line x1="100" y1="180" x2="140" y2="140" stroke="currentColor" strokeWidth="3" />
          <line x1="100" y1="200" x2="60" y2="160" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          className="mb-6 font-body text-sm font-semibold uppercase tracking-[0.3em] text-amarillo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Rumba & Rock Band · Barcelona · 2025
        </motion.p>

        <motion.h1
          className="mb-6 font-display text-7xl font-bold text-blanco sm:text-8xl lg:text-[10rem] leading-[0.85]"
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

        <motion.div
          className="absolute bottom-24 right-8 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Sticker rotation={-6} color="amarillo">
            🌴 Disponible para 2026
          </Sticker>
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
