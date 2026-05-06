'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Link from 'next/link';

const servicios = [
  {
    icon: '💍',
    titulo: 'Bodas',
    descripcion: 'Ceremonia, cóctel y fiesta. El pack completo.',
    param: 'boda',
    color: 'bg-sol',
  },
  {
    icon: '🎉',
    titulo: 'Fiestas mayores',
    descripcion: 'La banda que la plaza estaba esperando.',
    param: 'fiesta-mayor',
    color: 'bg-naranja text-blanco',
  },
  {
    icon: '🏢',
    titulo: 'Eventos de empresa',
    descripcion: 'Cenas, inauguraciones, fiestas corporativas con energía.',
    param: 'empresa',
    color: 'bg-rojo text-blanco',
  },
  {
    icon: '🎂',
    titulo: 'Cumpleaños',
    descripcion: 'Para celebraciones que merecen banda en directo.',
    param: 'cumpleaños',
    color: 'bg-azul text-blanco',
  },
  {
    icon: '🎓',
    titulo: 'Fiestas universitarias',
    descripcion: 'Pop-rock, rumba y latineo para llenar la pista.',
    param: 'universidad',
    color: 'bg-sol',
  },
  {
    icon: '🍻',
    titulo: 'Bares y salas',
    descripcion: 'Conciertos en directo en formato trío o cuarteto.',
    param: 'bar',
    color: 'bg-naranja text-blanco',
  },
];

export default function Servicios() {
  return (
    <section className="relative bg-blanco py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="07" label="Tu evento, nuestra fiesta" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-[1.05] lg:text-6xl">
          Dinos qué celebras y nosotros ponemos la <span className="italic text-rojo">banda sonora.</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
            >
              <Link
                href={`/contratar?evento=${encodeURIComponent(s.param)}`}
                className={`group block rounded-3xl ${s.color} border-4 border-negro shadow-[6px_6px_0_var(--negro)] p-8 transition-shadow`}
              >
                <span className="mb-4 block text-5xl">{s.icon}</span>
                <h3 className="mb-2 font-display text-2xl font-bold italic">
                  {s.titulo}
                </h3>
                <p className="font-body text-sm leading-relaxed">
                  {s.descripcion}
                </p>
                <span className="mt-4 inline-block font-body text-sm font-bold underline">
                  Pedir presupuesto →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
