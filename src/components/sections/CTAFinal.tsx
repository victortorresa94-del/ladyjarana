'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-amarillo py-24 lg:py-32">
      {/* Decorative palm */}
      <div className="absolute -right-20 -top-10 opacity-10">
        <svg width="300" height="400" viewBox="0 0 200 300" fill="none" className="text-negro">
          <path
            d="M100 0c-20 40-60 60-80 120s20 100 80 160c60-60 100-100 80-160S120 40 100 0z"
            fill="currentColor"
          />
          <line x1="100" y1="120" x2="100" y2="300" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          className="mb-6 font-display text-5xl font-bold text-negro leading-tight lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          ¿Tienes evento?
          <br />
          Te ponemos la banda sonora.
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-2xl font-body text-lg text-negro/70 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cuéntanos qué celebras, dónde y cuándo. Te respondemos en menos de
          24h con disponibilidad y propuesta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            href="/contratar"
            className="text-xl px-12 py-5 bg-negro text-blanco hover:bg-negro/80 shadow-2xl shadow-negro/30"
          >
            Contratar la banda →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
