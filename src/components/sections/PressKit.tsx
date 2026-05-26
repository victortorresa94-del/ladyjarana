'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import Button from '../ui/Button';

export default function PressKit() {
  return (
    <section className="relative bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionNumber number="09" label="Press Kit" />

        <motion.div
          className="rounded-3xl bg-azul p-10 text-center text-blanco relative overflow-hidden border-4 border-negro shadow-[8px_8px_0_var(--negro)] lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h2 className="mb-4 font-display text-3xl font-bold italic lg:text-5xl">
              ¿Eres organizador <br />de eventos?
            </h2>
            <p className="mb-8 mx-auto max-w-lg font-body text-blanco/90 leading-relaxed">
              Logos, fotos, vídeo promocional, ilustraciones y dossier completo
              para anunciar tu bolo o publicarnos en prensa.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:flex-wrap">
              <Button href="/material" variant="secondary">
                Material gráfico ↓
              </Button>
              <Button href="/dossier-lady-jarana.pdf" variant="primary">
                Dossier PDF →
              </Button>
              <Button href="/material#rider-tecnico" variant="secondary">
                Rider técnico ↓
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
