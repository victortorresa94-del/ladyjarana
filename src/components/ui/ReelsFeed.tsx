'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { LiveVideo } from '@/lib/videos';

function ReelSlide({ reel, muted }: { reel: LiveVideo; muted: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && e.intersectionRatio > 0.6) {
          setLoaded(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: [0, 0.6, 1] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Apply mute state via ref (React's muted prop is unreliable on updates)
  useEffect(() => {
    if (ref.current) ref.current.muted = muted;
  }, [muted, loaded]);

  // Start playback once the src has actually been applied
  useEffect(() => {
    if (loaded) ref.current?.play().catch(() => {});
  }, [loaded]);

  return (
    <video
      ref={ref}
      src={loaded ? reel.id : undefined}
      poster={reel.thumbnail}
      playsInline
      loop
      controls
      muted
      preload="none"
      className="absolute inset-0 h-full w-full object-contain"
    />
  );
}

interface ReelsFeedProps {
  reels: LiveVideo[];
  initialIndex: number;
  onClose: () => void;
}

export default function ReelsFeed({ reels, initialIndex, onClose }: ReelsFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const id = requestAnimationFrame(() => {
      const c = containerRef.current;
      const slide = c?.children[initialIndex] as HTMLElement | undefined;
      if (c && slide) c.scrollTop = slide.offsetTop;
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      cancelAnimationFrame(id);
      window.removeEventListener('keydown', onKey);
    };
  }, [initialIndex, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-negro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-negro/70 text-2xl text-blanco backdrop-blur border border-blanco/20 cursor-pointer"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ✕
      </button>

      <button
        className="absolute left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-negro/70 text-blanco backdrop-blur border border-blanco/20 cursor-pointer"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1c2.9.9 5 3.5 5 6.7s-2.1 5.8-5 6.7v2.1c4-1 7-4.6 7-8.8s-3-7.8-7-8.8z" opacity="0.35" />
            <path d="M4 4l16 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1c2.9.9 5 3.5 5 6.7s-2.1 5.8-5 6.7v2.1c4-1 7-4.6 7-8.8s-3-7.8-7-8.8z" />
          </svg>
        )}
      </button>

      {muted && (
        <button
          onClick={() => setMuted(false)}
          className="absolute left-1/2 top-20 z-20 -translate-x-1/2 rounded-full bg-blanco/95 px-4 py-2 text-xs font-bold text-negro shadow-[3px_3px_0_var(--negro)] border-2 border-negro cursor-pointer"
        >
          🔊 Toca para activar sonido
        </button>
      )}

      <div
        ref={containerRef}
        className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {reels.map((reel) => (
          <section
            key={`${reel.source}-${reel.id}`}
            className="relative flex h-[100dvh] w-full snap-start items-center justify-center px-2"
          >
            <div
              className="relative mx-auto h-full max-h-[100dvh] max-w-full overflow-hidden rounded-xl bg-negro"
              style={{ aspectRatio: '9 / 16' }}
            >
              <ReelSlide reel={reel} muted={muted} />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-6 px-6 text-center">
              <p className="font-display text-lg italic text-blanco drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {reel.title}
              </p>
              {reel.description && (
                <p className="text-xs text-blanco/80 drop-shadow">{reel.description}</p>
              )}
            </div>
          </section>
        ))}

        <section className="relative flex h-[100dvh] w-full snap-start items-center justify-center px-6">
          <div className="mx-auto max-w-sm text-center">
            <div className="mb-6 flex justify-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-3xl border-4 border-blanco/30"
                style={{
                  background:
                    'linear-gradient(45deg, #F5B73C 0%, #F47A1F 30%, #D63B36 65%, #C13584 100%)',
                }}
              >
                <svg className="h-10 w-10 text-blanco" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-display text-3xl italic text-blanco">
              ¿Te quedas con ganas?
            </h3>
            <p className="mb-8 text-blanco/80 font-body">
              Subimos directos, ensayos y backstage casi cada semana. Sigue la fiesta en Instagram.
            </p>
            <a
              href="https://instagram.com/lady.jarana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blanco px-8 py-4 font-body font-bold text-negro shadow-[4px_4px_0_var(--sol)] transition-transform hover:scale-105"
            >
              Seguir @lady.jarana →
            </a>
          </div>
        </section>
      </div>

      <div className="pointer-events-none fixed bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-negro/60 px-3 py-1 text-[10px] uppercase tracking-widest text-blanco/70 backdrop-blur">
        Desliza ↑↓
      </div>
    </motion.div>
  );
}
