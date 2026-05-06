'use client';

import { motion } from 'framer-motion';

interface SectionNumberProps {
  number: string;
  label: string;
  inverted?: boolean;
}

export default function SectionNumber({ number, label, inverted = false }: SectionNumberProps) {
  return (
    <motion.div
      className="mb-8 flex items-baseline gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <span className={`font-display text-6xl font-bold leading-none italic lg:text-8xl ${inverted ? 'text-sol/30' : 'text-rojo/20'}`}>
        {number}
      </span>
      <span className={`font-body text-sm font-bold uppercase tracking-[0.25em] ${inverted ? 'text-sol' : 'text-rojo'}`}>
        ✦ {label}
      </span>
    </motion.div>
  );
}
