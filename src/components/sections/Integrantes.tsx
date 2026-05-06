'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import { integrantes } from '@/lib/integrantes';

const cardStyles: Record<string, string> = {
  sol: 'bg-sol text-negro',
  naranja: 'bg-naranja text-blanco',
  rojo: 'bg-rojo text-blanco',
  azul: 'bg-azul text-blanco',
};

export default function Integrantes() {
  return (
    <section className="relative bg-crema py-24 lg:py-32 overflow-hidden">
      {/* sun-burst */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 animate-spin-slow"
        style={{ background: 'radial-gradient(circle, var(--naranja) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="03" label="Los Arquitectos de la Fiesta" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-[1.05] lg:text-6xl">
          Cuatro músicos, una sola <span className="italic text-rojo">misión</span>: que no pare la fiesta.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrantes.map((m, i) => (
            <motion.div
              key={m.nombre}
              className={`group relative overflow-hidden rounded-3xl border-4 border-negro shadow-[6px_6px_0_var(--negro)] ${cardStyles[m.color]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2 }}
            >
              <div className="aspect-square flex items-center justify-center bg-negro/10">
                <span className="text-8xl">
                  {m.emoji}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-1 font-display text-2xl font-bold leading-tight italic">
                  {m.nombre}
                </h3>
                <p className="mb-3 font-body text-xs font-bold uppercase tracking-wider opacity-80">
                  ({m.rol})
                </p>
                <p className="font-body text-sm leading-relaxed">
                  {m.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
