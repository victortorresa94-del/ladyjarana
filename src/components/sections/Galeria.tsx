'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionNumber from '../ui/SectionNumber';
import DriveVideo from '../ui/DriveVideo';
import NativeVideo from '../ui/NativeVideo';
import ReelCard from '../ui/ReelCard';
import ReelsFeed from '../ui/ReelsFeed';
import { liveVideos } from '@/lib/videos';

export default function Galeria() {
  const [feedIndex, setFeedIndex] = useState<number | null>(null);

  const reels = useMemo(
    () => liveVideos.filter((v) => v.aspectRatio === '9:16'),
    [],
  );
  const reelKey = (idx: number) => {
    const r = reels[idx];
    return r ? `${r.source}-${r.id}` : '';
  };
  const findReelIndex = (source: string, id: string) =>
    reels.findIndex((r) => r.source === source && r.id === id);

  return (
    <section id="galeria" className="relative bg-blanco py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="04" label="Mira y escucha" />

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
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {video.aspectRatio === '9:16' ? (
                <ReelCard
                  reel={video}
                  onClick={() => setFeedIndex(findReelIndex(video.source, video.id))}
                />
              ) : video.source === 'native' ? (
                <NativeVideo
                  src={video.id}
                  title={video.title}
                  description={video.description}
                  poster={video.thumbnail}
                  aspectRatio={(video.aspectRatio as '9:16' | '16:9' | '1:1') ?? '16:9'}
                />
              ) : (
                <DriveVideo
                  fileId={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={video.thumbnail}
                  aspectRatio={(video.aspectRatio as '9:16' | '16:9' | '1:1') ?? '16:9'}
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

      <AnimatePresence>
        {feedIndex !== null && (
          <ReelsFeed
            key={reelKey(feedIndex)}
            reels={reels}
            initialIndex={feedIndex}
            onClose={() => setFeedIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
