'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionNumber from '../../ui/SectionNumber';
import Sticker from '../../ui/Sticker';

const bullets = [
  { icon: '🎸', text: 'Quartet professional' },
  { icon: '🎉', text: 'Casaments, festes majors i esdeveniments privats' },
  { icon: '📍', text: 'Barcelona i tota Catalunya' },
  { icon: '⚡', text: 'Xou de 120 minuts' },
];

export default function BioCA() {
  return (
    <section
      id="banda"
      className="relative bg-crema py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute -left-20 top-10 w-72 opacity-60 pointer-events-none animate-sway">
        <Image
          src="/generated/palm-left.png"
          alt=""
          width={400}
          height={700}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="01" label="La banda" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-sol shadow-[8px_8px_0_var(--negro)] border-4 border-negro">
              <Image
                src="/generated/fiesta-crowd.png"
                alt="Lady Jarana - festa en directe"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-4 rotate-6 rounded-full bg-rojo px-5 py-3 font-body text-sm font-bold text-blanco shadow-[4px_4px_0_var(--negro)] border-2 border-negro">
              Revetlla en directe!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-negro leading-[1.05] lg:text-6xl">
              Fem que la gent <span className="italic text-rojo">canti</span>,{' '}
              <span className="italic text-naranja">balli</span> i es quedi sense
              veu.
            </h2>

            <p className="mb-8 font-body text-lg text-negro/80 leading-relaxed">
              Lady Jarana neix a Barcelona la primavera de 2025 amb un únic
              objectiu: fer que la gent canti, balli i gaudeixi. Fusionem la
              nostàlgia del pop-rock espanyol dels 2000 amb l&apos;energia, el
              groove de la rumba i el pols del pop llatí actual. Un xou festiu,
              proper i altament ballable. Una proposta de festa pura en directe.
              Xou bilingüe ES/CA.
            </p>

            <div className="flex flex-wrap gap-3">
              {bullets.map((b, i) => (
                <Sticker
                  key={i}
                  rotation={i % 2 === 0 ? -2 : 2}
                  color={
                    i % 4 === 0
                      ? 'sol'
                      : i % 4 === 1
                      ? 'naranja'
                      : i % 4 === 2
                      ? 'rojo'
                      : 'azul'
                  }
                >
                  {b.icon} {b.text}
                </Sticker>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
