'use client';

import { motion } from 'framer-motion';

interface StickerProps {
  children: React.ReactNode;
  rotation?: number;
  className?: string;
  color?: 'sol' | 'naranja' | 'rojo' | 'azul' | 'crema' | 'verde';
}

const colorMap = {
  sol: 'bg-sol text-negro border-2 border-negro',
  naranja: 'bg-naranja text-blanco border-2 border-negro',
  rojo: 'bg-rojo text-blanco border-2 border-negro',
  azul: 'bg-azul text-blanco border-2 border-negro',
  crema: 'bg-crema text-negro border-2 border-negro',
  verde: 'bg-verde text-blanco border-2 border-negro',
};

export default function Sticker({
  children,
  rotation = -3,
  className = '',
  color = 'sol',
}: StickerProps) {
  return (
    <motion.span
      className={`inline-block rounded-full px-4 py-1.5 font-body font-bold text-sm shadow-[3px_3px_0_var(--negro)] ${colorMap[color]} ${className}`}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.span>
  );
}
