'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-azul py-24 lg:py-32">
      {/* Decorative palm */}
      <div className="absolute -right-20 -top-10 opacity-[0.06]">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none" className="text-blanco">
          <path d="M220 250c-15-60-80-120-120-140 40 10 100 50 130 100-30-70-100-130-160-140 50 5 130 60 170 120-20-80-90-150-150-170 60 10 140 80 165 155-10-50-50-120-100-160 50 20 110 100 115 170l5 30c2 20 3 40 2 60l-5 80c-2 30-3 60-5 90l-3 60c-1 15-2 30-4 45h-20c2-15 3-30 5-45l3-60c2-30 3-60 5-90l5-80c1-15 0-30-2-45" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          className="mb-6 font-display text-5xl font-bold text-blanco leading-tight italic lg:text-7xl"
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
          className="mx-auto mb-10 max-w-2xl font-body text-lg text-blanco/70 leading-relaxed"
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
            className="text-xl px-12 py-5 bg-blanco text-azul hover:bg-blanco/90 shadow-2xl"
          >
            Contratar la banda →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
