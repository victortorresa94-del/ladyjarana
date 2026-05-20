'use client';

import { motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import DriveVideo from '../ui/DriveVideo';
import InstagramReel from '../ui/InstagramReel';
import NativeVideo from '../ui/NativeVideo';
import { liveVideos } from '@/lib/videos';

export default function Galeria() {
  return (
    <section id="galeria" className="relative bg-blanco py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="06" label="Mira y escucha" />

        <h2 className="mb-4 max-w-3xl font-display text-4xl font-bold text-negro leading-[1.05] lg:text-6xl">
          Así suena <span className="italic text-rojo">en directo</span>.
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-negro/70">
          Vídeos de eventos reales. Sin pistas pregrabadas, 100% interacción.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {liveVideos.map((video, i) => (
            <motion.div
              key={`${video.source}-${video.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {video.source === 'native' ? (
                <NativeVideo
                  src={video.id}
                  title={video.title}
                  description={video.description}
                  poster={video.thumbnail}
                  aspectRatio={(video.aspectRatio as '9:16' | '16:9' | '1:1') ?? '9:16'}
                />
              ) : video.source === 'instagram' ? (
                <InstagramReel
                  reelId={video.id}
                  title={video.title}
                  description={video.description}
                />
              ) : (
                <DriveVideo
                  fileId={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={video.thumbnail}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center font-body text-negro/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Síguenos en{' '}
          <a
            href="https://instagram.com/lady.jarana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rojo underline font-bold hover:text-rojo-oscuro"
          >
            @lady.jarana
          </a>{' '}
          para ver más →
        </motion.p>
      </div>
    </section>
  );
}
