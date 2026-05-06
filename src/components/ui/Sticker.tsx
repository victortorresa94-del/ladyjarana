'use client';

import { motion } from 'framer-motion';

interface StickerProps {
  children: React.ReactNode;
  rotation?: number;
  className?: string;
  color?: 'amarillo' | 'coral' | 'azul' | 'blanco';
}

const colorMap = {
  amarillo: 'bg-amarillo text-negro',
  coral: 'bg-coral text-blanco',
  azul: 'bg-azul text-blanco',
  blanco: 'bg-blanco text-negro',
};

export default function Sticker({
  children,
  rotation = -3,
  className = '',
  color = 'amarillo',
}: StickerProps) {
  return (
    <motion.span
      className={`inline-block rounded-lg px-4 py-1.5 font-body font-semibold text-sm shadow-md ${colorMap[color]} ${className}`}
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
