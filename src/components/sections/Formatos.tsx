'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Button from '../ui/Button';
import { formatos } from '@/lib/formatos';

export default function Formatos() {
  return (
    <section id="formatos" className="relative bg-azul-claro py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="04" label="Formatos" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
          Nos adaptamos a tu evento
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {formatos.map((f, i) => (
            <motion.div
              key={f.nombre}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 ${
                f.destacado
                  ? 'bg-azul text-blanco ring-4 ring-blanco/30 shadow-2xl shadow-azul/30'
                  : 'bg-blanco text-negro shadow-sm'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {f.etiqueta && (
                <span className="absolute -top-3 left-6 rounded-full bg-blanco px-4 py-1 font-body text-xs font-bold text-azul shadow-md">
                  {f.etiqueta}
                </span>
              )}

              <h3 className="mb-4 font-display text-3xl font-bold">
                {f.nombre}
              </h3>

              <div className="mb-6 flex-1 space-y-4 text-sm">
                <div>
                  <span
                    className={`font-semibold ${f.destacado ? 'text-blanco/90' : 'text-azul'}`}
                  >
                    Músicos
                  </span>
                  <p className={f.destacado ? 'text-blanco/70' : 'text-gris'}>
                    {f.musicos}
                  </p>
                </div>
                <div>
                  <span
                    className={`font-semibold ${f.destacado ? 'text-blanco/90' : 'text-azul'}`}
                  >
                    Ideal para
                  </span>
                  <p className={f.destacado ? 'text-blanco/70' : 'text-gris'}>
                    {f.ideal}
                  </p>
                </div>
                <div className="flex gap-6">
                  <div>
                    <span
                      className={`font-semibold ${f.destacado ? 'text-blanco/90' : 'text-azul'}`}
                    >
                      Volumen
                    </span>
                    <p className={f.destacado ? 'text-blanco/70' : 'text-gris'}>
                      {f.volumen}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`font-semibold ${f.destacado ? 'text-blanco/90' : 'text-azul'}`}
                    >
                      Duración
                    </span>
                    <p className={f.destacado ? 'text-blanco/70' : 'text-gris'}>
                      {f.duracion}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                href={`/contratar?formato=${encodeURIComponent(f.nombre.toLowerCase())}`}
                variant={f.destacado ? 'primary' : 'secondary'}
              >
                Pedir presupuesto →
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center font-body text-gris"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Necesitas otro formato? Tenemos opción de banda ampliada con
          percusión adicional.{' '}
          <a href="/contratar" className="text-azul underline hover:text-azul-oscuro">
            Pregúntanos
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
