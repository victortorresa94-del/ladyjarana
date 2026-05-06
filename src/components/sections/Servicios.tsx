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
  },
  {
    icon: '🎉',
    titulo: 'Fiestas mayores y verbenas',
    descripcion: 'La banda que la plaza estaba esperando.',
    param: 'fiesta-mayor',
  },
  {
    icon: '🏢',
    titulo: 'Eventos de empresa',
    descripcion: 'Cenas, inauguraciones, fiestas corporativas con energía.',
    param: 'empresa',
  },
  {
    icon: '🎂',
    titulo: 'Cumpleaños y aniversarios',
    descripcion: 'Para celebraciones que merecen banda en directo.',
    param: 'cumpleaños',
  },
  {
    icon: '🎓',
    titulo: 'Fiestas universitarias',
    descripcion: 'Pop-rock, rumba y latineo para llenar la pista.',
    param: 'universidad',
  },
  {
    icon: '🍻',
    titulo: 'Bares y salas',
    descripcion: 'Conciertos en directo en formato trío o cuarteto.',
    param: 'bar',
  },
];

export default function Servicios() {
  return (
    <section className="relative bg-blanco py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="07" label="Tu evento, nuestra fiesta" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
          Dinos qué celebras y nosotros ponemos la banda sonora
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/contratar?evento=${encodeURIComponent(s.param)}`}
                className="group block rounded-3xl bg-crema p-8 transition-all duration-300 hover:bg-azul hover:shadow-xl hover:shadow-azul/20"
              >
                <span className="mb-4 block text-4xl">{s.icon}</span>
                <h3 className="mb-2 font-display text-xl font-bold text-negro group-hover:text-blanco">
                  {s.titulo}
                </h3>
                <p className="font-body text-sm text-negro/60 group-hover:text-blanco/80">
                  {s.descripcion}
                </p>
                <span className="mt-4 inline-block font-body text-sm font-semibold text-azul group-hover:text-amarillo">
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
