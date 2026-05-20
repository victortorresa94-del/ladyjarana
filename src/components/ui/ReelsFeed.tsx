'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { LiveVideo } from '@/lib/videos';

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
                <video
                  src={reel.id}
                  controls
                  playsInline
                  poster={reel.thumbnail}
                  className="absolute inset-0 h-full w-full object-cover"
                />
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
      </div>

      <div className="pointer-events-none fixed bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-negro/60 px-3 py-1 text-[10px] uppercase tracking-widest text-blanco/70 backdrop-blur">
        Desliza ↑↓
      </div>
    </motion.div>
  );
}
