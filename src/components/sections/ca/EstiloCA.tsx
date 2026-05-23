'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../../ui/SectionNumber';
import Marquee from '../../ui/Marquee';

const pilares = [
  {
    titulo: 'Pop-Rock dels 2000',
    texto:
      'El nucli del concepte. Cançons que connecten amb diverses generacions, en castellà i en català. El Canto del Loco, Fito & Fitipaldis, Jarabe de Palo, Sopa de Cabra.',
    icon: '🎸',
    color: 'sol',
  },
  {
    titulo: 'Rumba catalana & Flamenco-pop',
    texto:
      'El motor del ball. Arranjaments orgànics amb guitarra espanyola, palmes i molt groove. Estopa, Los Delinqüentes, El Barrio, Manu Chao.',
    icon: '🌴',
    color: 'naranja',
  },
  {
    titulo: 'Pop llatí actual',
    texto:
      'El toc modern. Adaptats al nostre estil propi, més acústics i rumbers. Manuel Turizo, Sebastián Yatra, The Tyets.',
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
  '★ Sopa de Cabra',
  '★ Melendi',
  '★ El Canto del Loco',
  '★ Els Catarres',
  '★ Fito & Fitipaldis',
  '★ The Tyets',
  '★ Manuel Turizo',
  '★ Sebastián Yatra',
];

export default function EstiloCA() {
  return (
    <section
      id="musica"
      className="relative bg-negro py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, var(--sol) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="03" label="L'ADN musical" inverted />

        <h2 className="mb-4 max-w-3xl font-display text-4xl font-bold text-crema leading-[1.05] lg:text-6xl">
          Tres pilars,{' '}
          <span className="italic text-sol">una sola jarana.</span>
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-crema/70">
          El so Lady Jarana és{' '}
          <strong className="text-sol">festa mediterrània</strong> en directe:
          pop-rock dels 2000 ES/CA, rumba flamenca i latineig actual fusionats
          en un únic xou.
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
                <p className="font-body leading-relaxed">{pilar.texto}</p>
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
