'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import { testimonios } from '@/lib/testimonios';

export default function Testimonios() {
  if (testimonios.length === 0) return null;

  return (
    <section className="relative bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="08" label="Nos lo dicen" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
          Lo que dicen quienes nos han vivido
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-3xl bg-blanco p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="mb-6 font-body text-lg text-negro/80 leading-relaxed italic">
                &ldquo;{t.cita}&rdquo;
              </p>
              <div>
                <p className="font-display font-bold text-negro">{t.nombre}</p>
                <p className="font-body text-sm text-negro/50">
                  {t.evento} · {t.fecha}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
