'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tipos = [
  { slug: 'bodas', titulo: 'Bodas', icon: '💍', color: 'bg-sol text-negro' },
  {
    slug: 'fiestas-mayores',
    titulo: 'Fiestas mayores',
    icon: '🎉',
    color: 'bg-naranja text-blanco',
  },
  {
    slug: 'eventos-privados',
    titulo: 'Eventos privados',
    icon: '🥂',
    color: 'bg-azul text-blanco',
  },
  {
    slug: 'eventos-empresa',
    titulo: 'Eventos de empresa',
    icon: '🏢',
    color: 'bg-rojo text-blanco',
  },
];

export default function TiposEventos() {
  return (
    <section className="relative bg-blanco py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 sm:mb-8">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
            ✦ Tipos de eventos que hacemos
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold italic text-negro sm:text-3xl">
            Cada evento, su <span className="text-rojo">jarana</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {tipos.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <Link
                href={`/servicios/${t.slug}`}
                className={`group flex h-full flex-col gap-2 rounded-2xl border-4 border-negro p-4 shadow-[4px_4px_0_var(--negro)] transition-shadow hover:shadow-[2px_2px_0_var(--negro)] sm:p-5 ${t.color}`}
              >
                <span className="text-2xl sm:text-3xl">{t.icon}</span>
                <span className="font-display text-base font-bold italic leading-tight sm:text-lg">
                  {t.titulo}
                </span>
                <span className="mt-auto font-body text-xs font-bold underline opacity-80 group-hover:opacity-100">
                  Ver más →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
