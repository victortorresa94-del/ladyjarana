'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Sticker from '../ui/Sticker';

const bullets = [
  { icon: '🎸', text: 'Cuarteto profesional' },
  { icon: '🎉', text: 'Bodas, fiestas mayores y eventos privados' },
  { icon: '📍', text: 'Barcelona y desplazamientos' },
  { icon: '⚡', text: 'Show de 90-120 minutos' },
];

export default function Bio() {
  return (
    <section id="banda" className="relative bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="01" label="La banda" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-azul/10 rotate-[-2deg] shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-azul/20 to-azul/5">
                <span className="font-display text-6xl text-azul/20">LJ</span>
              </div>
              {/* Replace with: <Image src="/images/banda-completa.jpg" ... /> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
              Hacemos que la gente cante, baile y se quede sin voz.
            </h2>

            <p className="mb-8 font-body text-lg text-negro/70 leading-relaxed">
              Lady Jarana nace en Barcelona en la primavera de 2025 con una idea
              clara: rescatar la música con la que crecimos, cargarla de groove
              rumbero y devolvérsela al público en directo. Cuatro músicos, una
              guitarra española al frente, y un repertorio pensado para que
              nadie se quede sentado. No somos una banda tributo: somos la banda
              que llamas cuando quieres que tu evento se recuerde durante años.
            </p>

            <div className="flex flex-wrap gap-3">
              {bullets.map((b, i) => (
                <Sticker
                  key={i}
                  rotation={i % 2 === 0 ? -2 : 2}
                  color={i % 2 === 0 ? 'amarillo' : 'azul'}
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
