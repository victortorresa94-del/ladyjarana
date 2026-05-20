'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { LiveVideo } from '@/lib/videos';

function AutoPlayReel({ src, poster, title }: { src: string; poster?: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0, 0.5, 1] },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      controls
      playsInline
      muted
      loop
      preload="metadata"
      title={title}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

interface ReelsFeedProps {
  reels: LiveVideo[];
  initialIndex: number;
  onClose: () => void;
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let igScriptInjected = false;

function ensureInstagramEmbed() {
  if (typeof window === 'undefined') return;
  if (window.instgrm) {
    window.instgrm.Embeds.process();
    return;
  }
  if (!igScriptInjected) {
    igScriptInjected = true;
    const s = document.createElement('script');
    s.src = 'https://www.instagram.com/embed.js';
    s.async = true;
    s.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(s);
  }
}

export default function ReelsFeed({ reels, initialIndex, onClose }: ReelsFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const id = requestAnimationFrame(() => {
      const c = containerRef.current;
      const slide = c?.children[initialIndex] as HTMLElement | undefined;
      if (c && slide) c.scrollTop = slide.offsetTop;
    });

    if (reels.some((r) => r.source === 'instagram')) ensureInstagramEmbed();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      cancelAnimationFrame(id);
      window.removeEventListener('keydown', onKey);
    };
  }, [initialIndex, reels, onClose]);

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
              {reel.source === 'drive' ? (
                <iframe
                  src={`https://drive.google.com/file/d/${reel.id}/preview`}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={reel.title}
                />
              ) : reel.source === 'native' ? (
                <AutoPlayReel src={reel.id} poster={reel.thumbnail} title={reel.title} />
              ) : reel.source === 'instagram' ? (
                <div className="absolute inset-0 overflow-y-auto bg-blanco">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={`https://www.instagram.com/reel/${reel.id}/`}
                    data-instgrm-version="14"
                    style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: 0 }}
                  />
                </div>
              ) : null}
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
