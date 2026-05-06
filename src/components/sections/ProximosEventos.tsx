'use client';

import { motion } from 'framer-motion';
import { proximosEventos } from '@/lib/trayectoria';

export default function ProximosEventos() {
  return (
    <section className="relative bg-rojo py-10 lg:py-14 overflow-hidden border-y-4 border-negro">
      {/* dotted background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(var(--blanco) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-block rounded-full bg-sol border-2 border-negro px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-negro shadow-[3px_3px_0_var(--negro)]">
            ✦ Próximos eventos
          </span>
          <span className="text-blanco/80 text-xs font-bold uppercase tracking-wider">
            Temporada 2026
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {proximosEventos.map((ev, i) => (
            <motion.a
              href="/contratar?asunto=evento"
              key={i}
              className={`group relative flex items-center gap-4 rounded-2xl border-4 border-negro p-5 shadow-[6px_6px_0_var(--negro)] transition-transform ${
                ev.destacado ? 'bg-sol text-negro lg:scale-[1.03]' : 'bg-crema text-negro'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {ev.destacado && (
                <span className="absolute -top-3 -right-3 rotate-6 rounded-full bg-rojo border-2 border-negro px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blanco shadow-[2px_2px_0_var(--negro)]">
                  ★ Top
                </span>
              )}
              <div className="rounded-xl bg-blanco border-2 border-negro px-3 py-2 text-center min-w-[64px]">
                <p className="font-display text-2xl font-bold leading-none italic">
                  {ev.fechaCorta.split(' ')[0]}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider">
                  {ev.fechaCorta.split(' ')[1] || ''}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-xl leading-tight italic">
                  {ev.lugar}
                </p>
                <p className="text-xs font-medium opacity-80">
                  {ev.fecha}
                  {ev.hora && ` · ${ev.hora}h`}
                </p>
              </div>
              <span className="text-xl opacity-60 group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
