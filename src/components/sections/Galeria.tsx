'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import DriveVideo from '../ui/DriveVideo';
import { liveVideos } from '@/lib/videos';

export default function Galeria() {
  return (
    <section id="galeria" className="relative bg-crema py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="06" label="Mira y escucha" />

        <h2 className="mb-16 max-w-3xl font-display text-4xl font-bold text-negro leading-tight lg:text-5xl">
          Mejor ver que contar
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {liveVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <DriveVideo
                fileId={video.id}
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center font-body text-negro/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Síguenos en{' '}
          <a
            href="https://instagram.com/ladyjarana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-azul underline hover:text-coral"
          >
            Instagram
          </a>{' '}
          para ver más →
        </motion.p>
      </div>
    </section>
  );
}
