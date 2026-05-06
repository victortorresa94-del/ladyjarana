'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import { integrantes } from '@/lib/integrantes';

export default function Integrantes() {
  return (
    <section className="relative bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="03" label="La gente" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
          Cuatro músicos, una sola misión: que no pare la fiesta.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {integrantes.map((m, i) => (
            <motion.div
              key={m.nombre}
              className="group relative overflow-hidden rounded-3xl bg-blanco shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotate: -1, scale: 1.02 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-azul/10 to-azul/5">
                <div className="flex h-full items-center justify-center">
                  <span className="font-display text-7xl text-azul/15">
                    {m.nombre.split(' ')[0][0]}
                    {m.nombre.split(' ')[1]?.[0]}
                  </span>
                </div>
                {/* Replace with: <Image src={m.imagen} alt={m.nombre} fill className="object-cover" /> */}
              </div>
              <div className="p-6 lg:p-8">
                <span className="mb-2 inline-block rounded-full bg-amarillo px-3 py-1 font-body text-xs font-semibold text-negro">
                  {m.rol}
                </span>
                <h3 className="mb-2 font-display text-2xl font-bold text-negro lg:text-3xl">
                  {m.nombre}
                </h3>
                <p className="font-body text-negro/70 leading-relaxed">
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
