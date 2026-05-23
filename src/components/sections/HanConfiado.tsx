'use client';

import { motion } from 'framer-motion';

const clientes = [
  { nombre: 'Ayuntamiento de Sant Adrià de Besòs', tipo: 'Fiesta Mayor' },
  { nombre: 'Ayuntamiento de Barberà del Vallès', tipo: 'Fiesta Mayor' },
  { nombre: 'Centro Asturiano de Barcelona', tipo: 'Sala / Verbena' },
  {
    nombre: 'Asociación de Vecinos de la Barceloneta',
    tipo: 'Rumba Beach Festival · 2 ediciones',
  },
  {
    nombre: 'Asociación de Vecinos del Arc de Triomf',
    tipo: 'Verbena Sant Joan 2026',
  },
];

export default function HanConfiado() {
  return (
    <section className="relative bg-crema py-14 lg:py-20 border-y-2 border-negro/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center sm:text-left">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
            ✦ Han confiado en nosotros
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold italic text-negro sm:text-3xl lg:text-4xl">
            Ayuntamientos, asociaciones y salas <br className="hidden sm:block" />
            <span className="text-rojo">que ya han montado jarana.</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clientes.map((c, i) => (
            <motion.div
              key={c.nombre}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border-2 border-negro/15 bg-blanco p-4 transition-colors hover:border-rojo/40 sm:p-5"
            >
              <p className="font-display text-base font-bold italic leading-tight text-negro sm:text-lg">
                {c.nombre}
              </p>
              <p className="mt-1 font-body text-xs font-medium text-negro/60 sm:text-sm">
                {c.tipo}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
