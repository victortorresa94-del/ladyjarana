'use client';

import { motion } from 'framer-motion';
import { proximosEventos } from '@/lib/trayectoria';

export default function ProximosEventosBanner() {
  const top = proximosEventos.find((e) => e.destacado) ?? proximosEventos[0];
  if (!top) return null;

  return (
    <motion.aside
      className="fixed bottom-4 right-4 z-30 max-w-xs rounded-2xl bg-rojo border-4 border-negro shadow-[6px_6px_0_var(--negro)] p-4 sm:max-w-sm"
      initial={{ opacity: 0, y: 40, x: 40 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-sol border-2 border-negro px-3 py-2 text-center">
          <p className="font-display text-2xl font-bold leading-none text-negro">
            {top.fechaCorta.split(' ')[0]}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-negro">
            {top.fechaCorta.split(' ')[1] || ''}
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-sol">
            ✦ Próximo bolo
          </p>
          <p className="font-display text-lg leading-tight text-blanco italic">
            {top.lugar}
          </p>
          {top.hora && (
            <p className="text-xs font-bold text-blanco/90">
              {top.fecha} · {top.hora}h
            </p>
          )}
        </div>
      </div>
      <a
        href="/contratar?asunto=arco-de-triunfo"
        className="mt-3 block text-center text-xs font-bold text-sol underline hover:text-blanco"
      >
        Más info →
      </a>
    </motion.aside>
  );
}
