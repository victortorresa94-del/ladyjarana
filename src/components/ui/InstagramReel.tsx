'use client';

import { useEffect } from 'react';

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
  if (scriptInjected) return;
  scriptInjected = true;
  const script = document.createElement('script');
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  script.onload = () => window.instgrm?.Embeds.process();
  document.body.appendChild(script);
}

interface InstagramReelProps {
  reelId: string;
  title: string;
  description?: string;
}

export default function InstagramReel({ reelId, title, description }: InstagramReelProps) {
  useEffect(() => {
    ensureInstagramEmbed();
  }, [reelId]);

  return (
    <div className="group">
      <div className="overflow-hidden rounded-2xl border-4 border-negro bg-blanco shadow-[6px_6px_0_var(--negro)] transition-transform group-hover:-translate-y-1">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/`}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            minWidth: 0,
          }}
        />
      </div>
      <div className="mt-3 px-1 text-left">
        <p className="font-display text-base font-bold italic text-negro">{title}</p>
        {description && <p className="font-body text-xs text-negro/70">{description}</p>}
      </div>
    </div>
  );
}
