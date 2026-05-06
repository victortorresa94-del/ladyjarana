'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Marquee from '../ui/Marquee';

const pilares = [
  {
    titulo: 'El soundtrack de una generación',
    texto:
      'Jarabe de Palo, Pignoise, El Canto del Loco, Fito & Fitipaldis. Las canciones que se saben de memoria, tocadas con la energía con la que se merecen.',
    color: 'from-azul/20 to-azul/5',
    icon: '🎸',
  },
  {
    titulo: 'El sello Lady Jarana',
    texto:
      'Estopa, Melendi, Los Delinqüentes, El Barrio. La rumba es nuestro ingrediente diferencial: groove, palmas, guitarra española y mucha mucha fiesta.',
    color: 'from-coral/20 to-coral/5',
    icon: '🌴',
  },
  {
    titulo: 'Para que baile todo el mundo',
    texto:
      'Manuel Turizo, Sebastián Yatra y los hits del momento. Pero a nuestra manera: más acústicos, más rumberos, más nuestros.',
    color: 'from-amarillo/20 to-amarillo/5',
    icon: '💃',
  },
];

const artistas = [
  'Jarabe de Palo',
  'Estopa',
  'Pignoise',
  'Melendi',
  'El Canto del Loco',
  'Los Delinqüentes',
  'Fito & Fitipaldis',
  'El Barrio',
  'Manuel Turizo',
  'Sebastián Yatra',
];

export default function Estilo() {
  return (
    <section id="musica" className="relative bg-blanco py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="02" label="Nuestro sonido" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
          Tres mundos, un solo show
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {pilares.map((pilar, i) => (
            <motion.div
              key={i}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${pilar.color} p-8 lg:p-10`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <span className="mb-4 block text-4xl">{pilar.icon}</span>
              <h3 className="mb-3 font-display text-2xl font-bold text-negro">
                {pilar.titulo}
              </h3>
              <p className="font-body text-negro/70 leading-relaxed">
                {pilar.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-negro/10 py-5 bg-negro text-blanco">
        <Marquee
          items={artistas}
          className="font-display text-2xl font-bold opacity-60 lg:text-3xl"
        />
      </div>
    </section>
  );
}
