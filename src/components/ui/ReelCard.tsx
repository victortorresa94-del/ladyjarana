'use client';

import { motion } from 'framer-motion';
import type { LiveVideo } from '@/lib/videos';

interface ReelCardProps {
  reel: LiveVideo;
  onClick: () => void;
}

export default function ReelCard({ reel, onClick }: ReelCardProps) {
  const hasThumbnail = !!reel.thumbnail;

  return (
    <div className="group">
      <motion.button
        type="button"
        onClick={onClick}
        className="group relative flex aspect-[9/16] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-4 border-negro shadow-[6px_6px_0_var(--negro)] cursor-pointer bg-negro"
        whileHover={{ scale: 1.02, rotate: -1 }}
        aria-label={`Reproducir reel: ${reel.title}`}
      >
        {hasThumbnail ? (
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(150deg, #F5B73C 0%, #F47A1F 45%, #D63B36 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(var(--blanco) 1.5px, transparent 1.5px)',
                backgroundSize: '22px 22px',
              }}
            />
            {reel.source === 'instagram' && (
              <svg
                className="absolute right-4 top-4 h-7 w-7 text-blanco/80"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z" />
              </svg>
            )}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-negro/20 transition-colors group-hover:bg-negro/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blanco/95 border-4 border-negro shadow-[3px_3px_0_var(--negro)] transition-transform group-hover:scale-110">
            <svg
              className="ml-1 h-7 w-7 text-rojo"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/85 to-transparent p-4 text-left">
          <p className="font-display text-base font-bold italic text-blanco">
            {reel.title}
          </p>
          {reel.description && (
            <p className="font-body text-xs text-blanco/80">{reel.description}</p>
          )}
        </div>
      </motion.button>
    </div>
  );
}
