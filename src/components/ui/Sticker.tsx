'use client';

import { motion } from 'framer-motion';

interface StickerProps {
  children: React.ReactNode;
  rotation?: number;
  className?: string;
  color?: 'azul' | 'blanco' | 'azul-claro';
}

const colorMap = {
  azul: 'bg-azul text-blanco',
  blanco: 'bg-blanco text-azul border border-azul/10',
  'azul-claro': 'bg-azul-claro text-azul-oscuro',
};

export default function Sticker({
  children,
  rotation = -3,
  className = '',
  color = 'azul-claro',
}: StickerProps) {
  return (
    <motion.span
      className={`inline-block rounded-lg px-4 py-1.5 font-body font-semibold text-sm shadow-sm ${colorMap[color]} ${className}`}
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
