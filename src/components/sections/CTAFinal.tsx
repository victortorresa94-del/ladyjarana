'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-rojo py-24 lg:py-32">
      {/* Decorative scene */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/generated/hero-bg.png" alt="" fill className="object-cover mix-blend-overlay" />
      </div>

      {/* Decorative palms */}
      <div className="absolute -right-12 top-10 w-48 opacity-30 pointer-events-none animate-sway">
        <Image src="/generated/palm-right.png" alt="" width={300} height={500} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          className="mb-4 font-body text-sm font-bold uppercase tracking-[0.4em] text-sol"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✦ Pop-rock, rumba y latineo ✦
        </motion.p>

        <motion.h2
          className="mb-6 font-display text-5xl font-bold text-blanco leading-[0.95] italic lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Para que nadie <br/>
          <span className="text-sol">se quede sentado.</span>
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-2xl font-body text-lg text-blanco/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Cuéntanos qué celebras, dónde y cuándo. Te respondemos en menos de
          24h con disponibilidad y propuesta personalizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button href="/contratar" variant="secondary" className="text-lg">
            Contratar la banda →
          </Button>
        </motion.div>

        <motion.p
          className="mt-12 font-display italic text-blanco/80 lg:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Nos vemos en la próxima jarana 🌴
        </motion.p>
      </div>
    </section>
  );
}
