'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionNumber from '../ui/SectionNumber';
import { WHATSAPP_URL } from '@/lib/contact';

export default function ContactoCTA() {
  return (
    <section className="relative overflow-hidden bg-rojo py-24 lg:py-32">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <Image
          src="/generated/hero-bg.png"
          alt=""
          fill
          className="object-cover mix-blend-overlay"
        />
      </div>
      <div className="absolute -right-12 top-10 w-48 opacity-25 pointer-events-none animate-sway">
        <Image src="/generated/palm-right.png" alt="" width={300} height={500} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex justify-center">
          <SectionNumber number="07" label="Hablemos" inverted />
        </div>

        <motion.h2
          className="mb-6 font-display text-5xl font-bold italic leading-[0.95] text-blanco lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Para que nadie <br />
          <span className="text-sol">se quede sentado.</span>
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-2xl font-body text-lg leading-relaxed text-blanco/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          WhatsApp directo, sin formularios kilométricos. Te contestamos en
          minutos con disponibilidad y precio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: 'spring',
            stiffness: 220,
            damping: 14,
          }}
          className="inline-block"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 rounded-full border-4 border-negro bg-[#25D366] px-7 py-5 font-display text-xl font-bold italic text-blanco shadow-[10px_10px_0_var(--negro)] transition-all duration-150 hover:shadow-[5px_5px_0_var(--negro)] hover:translate-x-[5px] hover:translate-y-[5px] active:shadow-[2px_2px_0_var(--negro)] active:translate-x-[8px] active:translate-y-[8px] sm:px-10 sm:py-6 sm:text-3xl"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blanco/15 ring-2 ring-blanco/40 sm:h-14 sm:w-14">
              <svg
                className="h-6 w-6 sm:h-9 sm:w-9"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden
              >
                <path d="M16.003 0C7.16 0 .003 7.16.003 16c0 2.819.74 5.569 2.142 7.997L0 32l8.226-2.16A15.951 15.951 0 0 0 16.003 32C24.84 32 32 24.84 32 16S24.84 0 16.003 0zm0 29.366c-2.519 0-4.97-.683-7.114-1.974l-.51-.302-5.247 1.376 1.402-5.114-.332-.527A13.224 13.224 0 0 1 2.633 16c0-7.376 6-13.376 13.37-13.376C23.376 2.624 29.37 8.624 29.37 16c0 7.376-6 13.366-13.367 13.366zm7.339-10.014c-.402-.201-2.378-1.173-2.747-1.307-.369-.134-.638-.201-.907.201-.268.402-1.04 1.308-1.275 1.576-.234.268-.469.302-.871.1-.402-.2-1.698-.625-3.234-1.997-1.196-1.067-2.003-2.384-2.238-2.786-.234-.402-.025-.62.176-.82.18-.179.402-.469.603-.703.2-.234.268-.402.402-.67.134-.268.067-.503-.033-.703-.1-.201-.907-2.183-1.241-2.987-.327-.785-.659-.678-.907-.69-.234-.013-.503-.016-.771-.016-.268 0-.704.1-1.073.503-.368.402-1.408 1.375-1.408 3.354 0 1.978 1.441 3.892 1.642 4.16.2.268 2.836 4.33 6.87 6.073.96.414 1.708.661 2.291.847.962.305 1.838.262 2.531.16.772-.116 2.378-.972 2.713-1.91.335-.939.335-1.744.234-1.911-.1-.167-.368-.268-.77-.469z" />
              </svg>
            </span>
            <span>Hablemos por WhatsApp</span>
            <span className="text-xl transition-transform group-hover:translate-x-1 sm:text-2xl">
              →
            </span>
          </a>
        </motion.div>

        <p className="mt-10 font-body text-sm text-blanco/70">
          ¿Prefieres formulario o email?{' '}
          <a
            href="/contratar"
            className="text-sol underline font-bold hover:text-blanco"
          >
            Otras formas de contactar →
          </a>
        </p>
      </div>
    </section>
  );
}
