'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Button from '../ui/Button';
import { formatos } from '@/lib/formatos';

export default function Formatos() {
  return (
    <section id="formatos" className="relative bg-naranja py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(var(--negro) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionNumber number="04" label="Formatos de Actuación" />

        <h2 className="mb-4 max-w-3xl font-display text-4xl font-bold text-blanco leading-[1.05] lg:text-6xl">
          Adaptabilidad <span className="italic text-sol">total.</span>
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-blanco/90">
          De una boda íntima al escenario de una fiesta mayor — tres formatos para que la jarana encaje en tu evento.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {formatos.map((f, i) => (
            <motion.div
              key={f.nombre}
              className={`relative flex flex-col rounded-3xl p-8 lg:p-10 border-4 border-negro shadow-[6px_6px_0_var(--negro)] ${
                f.destacado
                  ? 'bg-sol text-negro lg:scale-105'
                  : 'bg-crema text-negro'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {f.etiqueta && (
                <span className="absolute -top-4 left-6 rounded-full bg-rojo px-4 py-1.5 font-body text-xs font-bold text-blanco border-2 border-negro shadow-[3px_3px_0_var(--negro)]">
                  ★ {f.etiqueta}
                </span>
              )}

              <h3 className="mb-4 font-display text-3xl font-bold italic">
                {f.nombre}
              </h3>

              <div className="mb-6 flex-1 space-y-3 text-sm">
                <div>
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                    Formación
                  </span>
                  <p className="font-body">{f.musicos}</p>
                </div>
                <div>
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                    Ideal para
                  </span>
                  <p className="font-body">{f.ideal}</p>
                </div>
                <div className="flex gap-6">
                  <div>
                    <span className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                      Vibe
                    </span>
                    <p className="font-body">{f.volumen}</p>
                  </div>
                  <div>
                    <span className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                      Duración
                    </span>
                    <p className="font-body">{f.duracion}</p>
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
          className="mt-12 text-center font-body text-blanco/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ¿Necesitas otro formato? Tenemos opción de banda ampliada con
          percusión adicional.{' '}
          <a href="/contratar" className="text-sol underline font-bold hover:text-blanco">
            Pregúntanos
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
