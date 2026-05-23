'use client';

import { motion } from 'framer-motion';
import { clientesCA } from '@/lib/i18nData';

export default function HanConfiadoCA() {
  return (
    <section className="relative bg-crema py-14 lg:py-20 border-y-2 border-negro/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center sm:text-left">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
            ✦ Han confiat en nosaltres
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold italic text-negro sm:text-3xl lg:text-4xl">
            Ajuntaments, associacions i sales{' '}
            <br className="hidden sm:block" />
            <span className="text-rojo">que ja han muntat jarana.</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clientesCA.map((c, i) => (
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
