'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import { trayectoria } from '@/lib/trayectoria';

const tipoIcon: Record<string, string> = {
  concierto: '🎤',
  'fiesta-mayor': '🎉',
  boda: '💍',
  sala: '🎶',
};

const tipoColors: Record<string, string> = {
  concierto: 'bg-rojo text-blanco',
  'fiesta-mayor': 'bg-naranja text-blanco',
  boda: 'bg-sol text-negro',
  sala: 'bg-azul text-blanco',
};

export default function Trayectoria() {
  return (
    <section id="eventos" className="relative bg-crema py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="06" label="Trayectoria" />

        <h2 className="mb-4 max-w-3xl font-display text-4xl font-bold text-negro leading-[1.05] lg:text-6xl">
          De la <span className="italic text-rojo">playa</span> a las <span className="italic text-naranja">fiestas mayores</span>.
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-negro/80">
          En menos de un año, Lady Jarana ha demostrado su capacidad de adaptación en todos los escenarios.
        </p>

        <div className="relative">
          {/* Timeline path */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-naranja/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {trayectoria.map((hito, i) => (
              <motion.div
                key={i}
                className={`relative flex gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Pin */}
                <div className="absolute left-8 top-6 -translate-x-1/2 md:left-1/2 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rojo border-4 border-crema text-blanco shadow-[3px_3px_0_var(--negro)]">
                    📍
                  </div>
                </div>

                {/* Card */}
                <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)]">
                  <div className="rounded-3xl bg-blanco border-4 border-negro shadow-[6px_6px_0_var(--negro)] p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                        {hito.fecha}
                      </span>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-bold border-2 border-negro ${tipoColors[hito.tipo]}`}
                      >
                        {tipoIcon[hito.tipo]} {hito.tipo.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="mb-2 font-display text-2xl font-bold italic text-negro">
                      {hito.lugar}
                    </h3>
                    <p className="font-body text-sm text-negro/80 leading-relaxed">
                      {hito.descripcion}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternation */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 mx-auto max-w-2xl rounded-3xl bg-rojo border-4 border-negro shadow-[8px_8px_0_var(--negro)] p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-2xl font-bold text-blanco italic lg:text-3xl">
            Una banda en plena expansión, lista para los escenarios de 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
