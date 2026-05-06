'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DriveVideoProps {
  fileId: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

export default function DriveVideo({
  fileId,
  title,
  description,
  thumbnail,
}: DriveVideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isPlaceholder = fileId.startsWith('TU_ID');

  return (
    <>
      <motion.button
        className="group relative aspect-video w-full overflow-hidden rounded-2xl border-4 border-negro bg-sol shadow-[6px_6px_0_var(--negro)] cursor-pointer"
        onClick={() => !isPlaceholder && setIsOpen(true)}
        whileHover={{ scale: 1.02, rotate: -1 }}
        aria-label={`Reproducir vídeo: ${title}`}
      >
        {thumbnail && !isPlaceholder ? (
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sol via-naranja to-rojo">
            <svg
              className="h-16 w-16 text-blanco drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-negro/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rojo border-4 border-blanco shadow-xl">
            <svg className="h-7 w-7 text-blanco ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro to-transparent p-4 text-left">
          <p className="font-display text-base font-bold italic text-blanco">
            {title}
          </p>
          {description && (
            <p className="font-body text-xs text-blanco/80">{description}</p>
          )}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-negro/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-blanco/80 hover:text-sol text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar vídeo"
              >
                ✕
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border-4 border-sol bg-negro">
                <iframe
                  src={`https://drive.google.com/file/d/${fileId}/preview`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={title}
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
