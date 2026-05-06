'use client';

interface InstagramReelProps {
  reelId: string;
  title: string;
  description?: string;
}

export default function InstagramReel({ reelId, title, description }: InstagramReelProps) {
  return (
    <div className="group">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border-4 border-negro bg-negro shadow-[6px_6px_0_var(--negro)] transition-transform group-hover:-translate-y-1">
        <iframe
          src={`https://www.instagram.com/reel/${reelId}/embed/captioned/`}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          title={title}
          scrolling="no"
        />
      </div>
      <div className="mt-3 px-1 text-left">
        <p className="font-display text-base font-bold italic text-negro">{title}</p>
        {description && <p className="font-body text-xs text-negro/70">{description}</p>}
      </div>
    </div>
  );
}
