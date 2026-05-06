'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import { trayectoria } from '@/lib/trayectoria';

const tipoColors: Record<string, string> = {
  concierto: 'bg-azul text-blanco',
  'fiesta-mayor': 'bg-azul-oscuro text-blanco',
  boda: 'bg-blanco text-azul',
  sala: 'bg-negro text-blanco',
};

export default function Trayectoria() {
  return (
    <section id="eventos" className="relative bg-azul py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="05" label="Dónde hemos tocado" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-blanco leading-tight lg:text-5xl">
          De la Barceloneta a tu evento
        </h2>

        {/* Desktop: horizontal scroll */}
        <div className="hidden lg:block">
          <div className="flex gap-6 overflow-x-auto pb-6">
            {trayectoria.map((hito, i) => (
              <motion.div
                key={i}
                className="min-w-[320px] flex-shrink-0 rounded-3xl bg-blanco/10 backdrop-blur-sm border border-blanco/20 p-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-body text-sm text-blanco/50">
                    {hito.fecha}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${tipoColors[hito.tipo]}`}
                  >
                    {hito.tipo.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-blanco">
                  {hito.lugar}
                </h3>
                <p className="font-body text-sm text-blanco/60 leading-relaxed">
                  {hito.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="space-y-4 lg:hidden">
          {trayectoria.map((hito, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl bg-blanco/10 backdrop-blur-sm border border-blanco/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-body text-xs text-blanco/50">
                  {hito.fecha}
                </span>
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-semibold ${tipoColors[hito.tipo]}`}
                >
                  {hito.tipo.replace('-', ' ')}
                </span>
              </div>
              <h3 className="mb-1 font-display text-lg font-bold text-blanco">
                {hito.lugar}
              </h3>
              <p className="font-body text-sm text-blanco/60">
                {hito.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center font-display text-2xl font-bold text-blanco/90 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Y la temporada 2026 acaba de empezar.
        </motion.p>
      </div>
    </section>
  );
}
