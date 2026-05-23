'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { tiposEventosCA } from '@/lib/i18nData';

export default function TiposEventosCA() {
  return (
    <section className="relative bg-blanco py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 sm:mb-10">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
            ✦ Tipus d&apos;esdeveniments que fem
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold italic text-negro sm:text-4xl lg:text-5xl">
            Cada esdeveniment, la seva{' '}
            <span className="text-rojo">jarana</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {tiposEventosCA.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/ca/serveis/${t.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border-4 border-negro shadow-[6px_6px_0_var(--negro)] transition-all duration-150 hover:shadow-[3px_3px_0_var(--negro)] hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                <Image
                  src={t.foto}
                  alt={`Lady Jarana a ${t.titulo.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{ objectPosition: t.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-negro/90 via-negro/40 to-negro/15" />

                <span className="absolute right-4 top-4 text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:text-3xl">
                  {t.icon}
                </span>

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-4 sm:p-5">
                  <h3 className="font-display text-xl font-bold italic leading-tight text-blanco sm:text-2xl">
                    {t.titulo}
                  </h3>
                  <p className="hidden font-body text-xs text-blanco/85 sm:block sm:text-sm">
                    {t.descripcion}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 font-body text-xs font-bold text-sol underline-offset-2 group-hover:underline sm:text-sm">
                    Veure més <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
