'use client';

import { motion } from 'framer-motion';
import { SPOTIFY_PLAYLIST_ID, SPOTIFY_PLAYLIST_URL } from '@/data/repertorio';

export default function SpotifyCTA() {
  return (
    <section className="relative overflow-hidden bg-negro py-16 lg:py-20">
      {/* Banda diagonal de Spotify verde detrás */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[140%] w-[150%] -translate-y-1/2 -rotate-6 opacity-15"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, #1DB954 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_400px]">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-[#1DB954]/40 bg-[#1DB954]/10 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-[#1DB954]">
              <svg
                className="h-4 w-4"
                viewBox="0 0 168 168"
                fill="currentColor"
                aria-hidden
              >
                <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07-2.99.68-5.97-1.19-6.65-4.18-.68-2.99 1.18-5.97 4.17-6.65 31.9-7.29 59.263-4.15 81.337 9.4 2.46 1.51 3.24 4.72 1.73 7.18l.16-.41zm10.25-22.81c-1.892 3.07-5.92 4.04-8.99 2.16-22.503-13.83-56.787-17.84-83.378-9.76-3.453 1.05-7.1-.9-8.148-4.34-1.04-3.45.91-7.09 4.35-8.14 30.36-9.21 68.13-4.74 93.97 11.04 3.07 1.89 4.04 5.92 2.16 8.99l.036.05zm.88-23.75c-26.99-16.03-71.52-17.5-97.289-9.68-4.138 1.25-8.514-1.08-9.768-5.21-1.25-4.14 1.08-8.51 5.22-9.77 29.581-8.98 78.756-7.25 109.83 11.2 3.73 2.21 4.95 7.02 2.74 10.74-2.2 3.73-7.02 4.95-10.74 2.73l.007-.01z" />
              </svg>
              Playlist oficial en Spotify
            </p>

            <h2 className="mb-4 font-display text-4xl font-bold italic leading-[1.05] text-crema lg:text-5xl">
              ¿Quieres oír cómo <br />
              <span className="text-[#1DB954]">suena el show?</span>
            </h2>
            <p className="mb-6 max-w-xl font-body text-base text-crema/80 leading-relaxed">
              Las {/* 36 */} versiones originales de todo lo que tocamos en
              directo, en orden de bloque. Dale al play y haz simulacro de
              ambientazo.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={SPOTIFY_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border-4 border-negro bg-[#1DB954] px-6 py-4 font-display text-lg font-bold italic text-negro shadow-[6px_6px_0_var(--sol)] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_var(--sol)]"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 168 168"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07-2.99.68-5.97-1.19-6.65-4.18-.68-2.99 1.18-5.97 4.17-6.65 31.9-7.29 59.263-4.15 81.337 9.4 2.46 1.51 3.24 4.72 1.73 7.18l.16-.41zm10.25-22.81c-1.892 3.07-5.92 4.04-8.99 2.16-22.503-13.83-56.787-17.84-83.378-9.76-3.453 1.05-7.1-.9-8.148-4.34-1.04-3.45.91-7.09 4.35-8.14 30.36-9.21 68.13-4.74 93.97 11.04 3.07 1.89 4.04 5.92 2.16 8.99l.036.05zm.88-23.75c-26.99-16.03-71.52-17.5-97.289-9.68-4.138 1.25-8.514-1.08-9.768-5.21-1.25-4.14 1.08-8.51 5.22-9.77 29.581-8.98 78.756-7.25 109.83 11.2 3.73 2.21 4.95 7.02 2.74 10.74-2.2 3.73-7.02 4.95-10.74 2.73l.007-.01z" />
                </svg>
                Abrir en Spotify
              </a>
              <a
                href="/repertorio"
                className="inline-flex items-center gap-2 rounded-full border-2 border-crema/40 px-5 py-3 font-body text-sm font-bold text-crema transition-colors hover:bg-crema/10"
              >
                Ver el repertorio completo →
              </a>
            </div>
          </div>

          {/* Embed lazy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border-4 border-negro shadow-[8px_8px_0_var(--sol)]"
          >
            <iframe
              title="Playlist Lady Jarana en Spotify"
              src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=ladyjarana_home&theme=0`}
              width="100%"
              height="380"
              frameBorder={0}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
