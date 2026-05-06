'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Marquee from '../ui/Marquee';

const pilares = [
  {
    titulo: 'Pop-Rock Español 2000s',
    texto:
      'El núcleo del concepto. Canciones que conectan con varias generaciones. El Canto del Loco, Fito & Fitipaldis, Jarabe de Palo, Pignoise.',
    icon: '🎸',
    color: 'sol',
  },
  {
    titulo: 'Rumba / Flamenco Pop',
    texto:
      'El motor del baile. Arreglos orgánicos con guitarra española, palmas y mucho groove. Estopa, Los Delinqüentes, El Barrio.',
    icon: '🌴',
    color: 'naranja',
  },
  {
    titulo: 'Pop Latino Actual',
    texto:
      'El toque moderno. Adaptados a nuestro estilo propio, más acústicos y rumberos. Manuel Turizo, Sebastián Yatra.',
    icon: '💃',
    color: 'rojo',
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  sol: { bg: 'bg-sol', text: 'text-negro' },
  naranja: { bg: 'bg-naranja', text: 'text-blanco' },
  rojo: { bg: 'bg-rojo', text: 'text-blanco' },
};

const artistas = [
  '★ Jarabe de Palo',
  '★ Estopa',
  '★ Pignoise',
  '★ Melendi',
  '★ El Canto del Loco',
  '★ Los Delinqüentes',
  '★ Fito & Fitipaldis',
  '★ El Barrio',
  '★ Manuel Turizo',
  '★ Sebastián Yatra',
];

export default function Estilo() {
  return (
    <section id="musica" className="relative bg-negro py-24 lg:py-32 overflow-hidden">
      {/* Decorative sun */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, var(--sol) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="02" label="El ADN musical" inverted />

        <h2 className="mb-4 max-w-3xl font-display text-4xl font-bold text-crema leading-[1.05] lg:text-6xl">
          Tres pilares, <span className="italic text-sol">una sola jarana.</span>
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-crema/70">
          El sonido Lady Jarana es <strong className="text-sol">fiesta mediterránea</strong> en directo: pop-rock español, rumba flamenca y latineo actual fusionados en un único show.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {pilares.map((pilar, i) => {
            const c = colorClasses[pilar.color];
            return (
              <motion.div
                key={i}
                className={`group relative overflow-hidden rounded-3xl ${c.bg} ${c.text} p-8 border-2 border-negro shadow-[6px_6px_0_var(--crema)] lg:p-10`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
              >
                <span className="mb-4 block text-5xl">{pilar.icon}</span>
                <h3 className="mb-3 font-display text-2xl font-bold leading-tight">
                  {pilar.titulo}
                </h3>
                <p className="font-body leading-relaxed">
                  {pilar.texto}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-20 py-6 bg-sol border-y-4 border-negro -rotate-1">
        <Marquee
          items={artistas}
          className="font-display text-2xl font-bold italic text-negro lg:text-4xl"
        />
      </div>
    </section>
  );
}
