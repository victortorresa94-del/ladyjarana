'use client';

interface NativeVideoProps {
  src: string;
  /** Fuentes alternativas para fallback automático del browser. Si están
   *  definidas, se renderizan como <source> adicionales después de `src`. */
  sources?: string[];
  title: string;
  description?: string;
  poster?: string;
  aspectRatio?: '9:16' | '16:9' | '1:1';
}

const aspectClass: Record<NonNullable<NativeVideoProps['aspectRatio']>, string> = {
  '9:16': 'aspect-[9/16]',
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
};

function mimeFor(url: string): string {
  const lower = url.toLowerCase();
  if (lower.endsWith('.mov') || lower.endsWith('.m4v')) return 'video/quicktime';
  return 'video/mp4';
}

export default function NativeVideo({ src, sources, title, description, poster, aspectRatio = '9:16' }: NativeVideoProps) {
  // Lista única: src primero + sources extras filtrados sin duplicados.
  const allSources = [src, ...(sources ?? [])].filter(
    (u, i, arr) => u && arr.indexOf(u) === i,
  );

  return (
    <div className="group">
      <div className={`relative ${aspectClass[aspectRatio]} w-full overflow-hidden rounded-2xl border-4 border-negro bg-negro shadow-[6px_6px_0_var(--negro)]`}>
        <video
          controls
          preload="metadata"
          playsInline
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          {allSources.map((url) => (
            <source key={url} src={url} type={mimeFor(url)} />
          ))}
        </video>
      </div>
      <div className="mt-3 px-1 text-left">
        <p className="font-display text-base font-bold italic text-negro">{title}</p>
        {description && <p className="font-body text-xs text-negro/70">{description}</p>}
      </div>
    </div>
  );
}
