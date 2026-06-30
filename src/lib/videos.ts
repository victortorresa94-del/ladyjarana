export interface LiveVideo {
  source: 'drive' | 'instagram' | 'native';
  // Drive ID, IG reel shortcode, or full public URL for native sources
  id: string;
  /** Sources alternativas (mismo archivo, distinta extensión / fallback).
   *  Útil cuando no sabemos la extensión exacta del Blob. El browser
   *  prueba en orden y carga el primero que resuelva 2xx. */
  sources?: string[];
  title: string;
  description: string;
  thumbnail?: string;
  aspectRatio?: string;
}

const BLOB = 'https://f8gfdg48kikp71xk.public.blob.vercel-storage.com';

// Orden visible en la galería (sm=2 cols, lg=3 cols).
// Posiciones 7 y 8 elegidas por Víctor: 7 = Centro Asturiano (nuevo),
// 8 = reel de Instagram (único que enlaza al perfil, estrategia "síguenos").
export const liveVideos: LiveVideo[] = [
  // 1 — Arc de Triomf, Revetlla de Sant Joan 23 jun 2026 (concierto pleno
  // organizado por la AAVV del Arc de Triomf). Subido al Blob por Víctor
  // como "Lady Jarana Arc de Triomf". Multi-source para que el browser
  // pruebe extensiones .mp4/.MP4/.mov/.MOV — la que el Blob tenga gana.
  {
    source: 'native',
    id: `${BLOB}/Lady%20Jarana%20Arc%20de%20Triomf.mp4`,
    sources: [
      `${BLOB}/Lady%20Jarana%20Arc%20de%20Triomf.mp4`,
      `${BLOB}/Lady%20Jarana%20Arc%20de%20Triomf.MP4`,
      `${BLOB}/Lady%20Jarana%20Arc%20de%20Triomf.mov`,
      `${BLOB}/Lady%20Jarana%20Arc%20de%20Triomf.MOV`,
    ],
    // Poster temporal mientras el video carga (evita el rectángulo negro
    // del primer frame que el browser no extrae bien con multi-source).
    thumbnail: '/fotos/grupo-publico.jpg',
    title: 'Arc de Triomf',
    description: 'Revetlla de Sant Joan · 23 jun 2026',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: `${BLOB}/Presentacion%20Lady%20Jarana.mp4`,
    title: 'Presentación',
    description: 'Lady Jarana en pocos minutos',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: `${BLOB}/FM%20Sant%20Adria.mp4`,
    title: 'FM Sant Adrià',
    description: 'Festival · directo',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: `${BLOB}/CAN%20GABARRO%20LADY%20JARANA.mp4`,
    title: 'Cangabarró',
    description: 'Boda · Diciembre 2025',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: `${BLOB}/No%20puedo%20vivir%20sin%20ti.MP4`,
    title: 'No puedo vivir sin ti',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: `${BLOB}/Volare.MOV`,
    title: 'Volare',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: `${BLOB}/Bamboleo.MP4`,
    title: 'Bamboleo',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  // 7 — Centro Asturiano. Filename real en Blob confirmado por Víctor:
  // /Centro Astur.mov (minúsculas). El workflow optimize-videos.mjs
  // se encarga de re-encodear el contenido a h264/mp4 manteniendo el
  // pathname .mov pero con Content-Type video/mp4 — así Chrome y
  // Firefox lo reproducen (sino el HEVC original del iPhone solo va
  // en Safari).
  {
    source: 'native',
    id: `${BLOB}/Centro%20Astur.mov`,
    title: 'Centro Asturiano',
    description: 'Verbena · directo',
    aspectRatio: '9:16',
  },
  // 8 — El chipirón
  {
    source: 'native',
    id: `${BLOB}/El%20chipiron.MP4`,
    title: 'El chipirón',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  // 9 — único reel de Instagram, cierra la galería como CTA
  // "síguenos en @lady.jarana"
  {
    source: 'instagram',
    id: 'DOniq2XjBRE',
    title: 'Más en Instagram',
    description: 'Síguenos en @lady.jarana →',
    aspectRatio: '9:16',
  },
];
