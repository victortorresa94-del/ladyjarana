'use client';

import { motion } from 'framer-motion';

interface SectionNumberProps {
  number: string;
  label: string;
}

export default function SectionNumber({ number, label }: SectionNumberProps) {
  return (
    <motion.div
      className="mb-8 flex items-baseline gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-display text-6xl font-bold text-azul/10 leading-none lg:text-8xl">
        {number}
      </span>
      <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-azul">
        {label}
      </span>
    </motion.div>
  );
}
