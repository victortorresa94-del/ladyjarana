'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionNumber from '../../ui/SectionNumber';
import DriveVideo from '../../ui/DriveVideo';
import NativeVideo from '../../ui/NativeVideo';
import ReelCard from '../../ui/ReelCard';
import ReelsFeed from '../../ui/ReelsFeed';
import InstagramReel from '../../ui/InstagramReel';
import { liveVideos } from '@/lib/videos';
import { INSTAGRAM_URL } from '@/lib/contact';

export default function GaleriaCA() {
  const [feedIndex, setFeedIndex] = useState<number | null>(null);

  const reels = useMemo(
    () =>
      liveVideos.filter(
        (v) => v.aspectRatio === '9:16' && v.source !== 'instagram',
      ),
    [],
  );
  const reelKey = (idx: number) => {
    const r = reels[idx];
    return r ? `${r.source}-${r.id}` : '';
  };
  const findReelIndex = (source: string, id: string) =>
    reels.findIndex((r) => r.source === source && r.id === id);

  return (
    <section
      id="galeria"
      className="relative bg-blanco py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionNumber number="04" label="Mira i escolta" />

        <h2 className="mb-4 max-w-3xl font-display text-4xl font-bold text-negro leading-[1.05] lg:text-6xl">
          Així sona <span className="italic text-rojo">en directe</span>.
        </h2>
        <p className="mb-16 max-w-2xl font-body text-lg text-negro/70">
          Vídeos d&apos;esdeveniments reals. Sense pistes pregravades, 100%
          interacció.
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
              {video.source === 'instagram' ? (
                <InstagramReel
                  reelId={video.id}
                  title={video.title}
                  description={video.description}
                />
              ) : video.aspectRatio === '9:16' ? (
                <ReelCard
                  reel={video}
                  onClick={() =>
                    setFeedIndex(findReelIndex(video.source, video.id))
                  }
                />
              ) : video.source === 'native' ? (
                <NativeVideo
                  src={video.id}
                  title={video.title}
                  description={video.description}
                  poster={video.thumbnail}
                  aspectRatio={
                    (video.aspectRatio as '9:16' | '16:9' | '1:1') ?? '16:9'
                  }
                />
              ) : (
                <DriveVideo
                  fileId={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={video.thumbnail}
                  aspectRatio={
                    (video.aspectRatio as '9:16' | '16:9' | '1:1') ?? '16:9'
                  }
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 mx-auto flex max-w-2xl items-center gap-4 rounded-3xl border-4 border-negro p-5 shadow-[8px_8px_0_var(--negro)] transition-all duration-150 hover:shadow-[4px_4px_0_var(--negro)] hover:translate-x-1 hover:translate-y-1 cursor-pointer sm:p-6"
          style={{
            background:
              'linear-gradient(45deg, #F5B73C 0%, #F47A1F 30%, #D63B36 65%, #C13584 100%)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-blanco/40 bg-blanco/10 sm:h-14 sm:w-14">
            <svg
              className="h-7 w-7 text-blanco sm:h-8 sm:w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="font-display text-lg font-bold italic text-blanco sm:text-xl">
              Vols més? Segueix-nos a Instagram
            </p>
            <p className="font-body text-xs text-blanco/90 sm:text-sm">
              Directes, casaments i backstage. L&apos;últim a @lady.jarana.
            </p>
          </div>
          <span className="hidden shrink-0 rounded-full border-2 border-negro bg-blanco px-4 py-2 font-body text-sm font-bold text-negro shadow-[3px_3px_0_var(--negro)] sm:inline-block">
            @lady.jarana →
          </span>
        </motion.a>
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
