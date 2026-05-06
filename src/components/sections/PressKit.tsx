'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Button from '../ui/Button';

export default function PressKit() {
  return (
    <section className="relative bg-blanco py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionNumber number="09" label="Press Kit" />

        <motion.div
          className="rounded-3xl bg-azul p-10 text-center text-blanco relative overflow-hidden lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h2 className="mb-4 font-display text-3xl font-bold lg:text-4xl">
              ¿Eres organizador de eventos?
            </h2>
            <p className="mb-8 mx-auto max-w-lg font-body text-blanco/80 leading-relaxed">
              Descárgate el dossier completo con bio, fotos en alta resolución y
              rider técnico.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/dossier" variant="primary">
                Descargar dossier (PDF) ↓
              </Button>
              <Button
                href="/contratar?asunto=rider"
                variant="outline"
              >
                Solicitar rider técnico →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
