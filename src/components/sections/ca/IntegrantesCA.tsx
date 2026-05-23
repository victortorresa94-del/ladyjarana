'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionNumber from '../../ui/SectionNumber';
import { integrantesCA } from '@/lib/i18nData';

const cardStyles: Record<string, string> = {
  sol: 'bg-sol text-negro',
  naranja: 'bg-naranja text-blanco',
  rojo: 'bg-rojo text-blanco',
  azul: 'bg-azul text-blanco',
  verde: 'bg-verde text-blanco',
};

export default function IntegrantesCA() {
  return (
    <section className="relative bg-crema py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 animate-spin-slow"
        style={{
          background:
            'radial-gradient(circle, var(--naranja) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="02" label="Els Arquitectes de la Festa" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl text-negro leading-[1.05] lg:text-7xl">
          Cinc músics, una sola{' '}
          <em className="text-rojo">missió</em>: que no pari la festa.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {integrantesCA.map((m, i) => (
            <motion.div
              key={m.nombre}
              className={`group relative overflow-hidden rounded-3xl border-4 border-negro shadow-[6px_6px_0_var(--negro)] ${cardStyles[m.color]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2 }}
            >
              <div className="relative aspect-square bg-negro/10">
                <Image
                  src={m.imagen}
                  alt={m.nombre}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-display text-2xl leading-tight italic">
                  {m.nombre}
                </h3>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider opacity-80">
                  {m.rol}
                </p>
                <p className="text-sm leading-relaxed">{m.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
