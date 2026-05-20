'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let scriptInjected = false;

function ensureInstagramEmbed() {
  if (typeof window === 'undefined') return;
  if (window.instgrm) {
    window.instgrm.Embeds.process();
    return;
  }
  if (!scriptInjected) {
    scriptInjected = true;
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }
  const start = Date.now();
  const poll = setInterval(() => {
    if (window.instgrm) {
      clearInterval(poll);
      window.instgrm.Embeds.process();
    } else if (Date.now() - start > 8000) {
      clearInterval(poll);
    }
  }, 200);
}

interface InstagramReelProps {
  reelId: string;
  title: string;
  description?: string;
}

export default function InstagramReel({ reelId, title, description }: InstagramReelProps) {
  const [open, setOpen] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    ensureInstagramEmbed();
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative flex aspect-[9/16] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-negro shadow-[6px_6px_0_var(--negro)] cursor-pointer"
        style={{
          background:
            'linear-gradient(150deg, #F5B73C 0%, #F47A1F 45%, #D63B36 100%)',
        }}
        whileHover={{ scale: 1.02, rotate: -1 }}
        aria-label={`Reproducir reel: ${title}`}
      >
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(var(--blanco) 1.5px, transparent 1.5px)', backgroundSize: '22px 22px' }} />

        <svg className="h-10 w-10 text-blanco/90 drop-shadow" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z" />
        </svg>

        <div className="relative z-10 mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-blanco border-4 border-negro shadow-[3px_3px_0_var(--negro)] transition-transform group-hover:scale-110">
          <svg className="ml-1 h-7 w-7 text-rojo" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/80 to-transparent p-4 text-left">
          <p className="font-display text-base font-bold italic text-blanco">{title}</p>
          {description && <p className="font-body text-xs text-blanco/80">{description}</p>}
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-negro/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-[380px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-3xl text-blanco/80 hover:text-sol cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Cerrar vídeo"
              >
                ✕
              </button>
              <div
                ref={embedRef}
                className="max-h-[80vh] overflow-y-auto rounded-2xl border-4 border-sol bg-blanco"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/`}
                  data-instgrm-version="14"
                  style={{ background: '#FFF', border: 0, margin: 0, padding: 0, width: '100%', minWidth: 0 }}
                />
              </div>
              <p className="mt-3 text-center font-display italic text-blanco/80 text-sm">
                {title}
                {description ? ` — ${description}` : ''}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
