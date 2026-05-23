export interface LiveVideo {
  source: 'drive' | 'instagram' | 'native';
  // Drive ID, IG reel shortcode, or full public URL for native sources
  id: string;
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
  // 7 — Centro Asturiano. El archivo original en Drive es .mov (quicktime,
  // ID 1THGgChoIoiO9Ex7ZJsqGV8kr6w_Z8qao). El filename en Blob mantiene
  // mayúsculas .MOV siguiendo el patrón de Volare.
  {
    source: 'native',
    id: `${BLOB}/Centro%20Astur.MOV`,
    title: 'Centro Asturiano',
    description: 'Verbena · directo',
    aspectRatio: '9:16',
  },
  // 8 — único reel de Instagram, sirve de CTA "síguenos en @lady.jarana"
  {
    source: 'instagram',
    id: 'DOniq2XjBRE',
    title: 'Más en Instagram',
    description: 'Síguenos en @lady.jarana →',
    aspectRatio: '9:16',
  },
  // 9 — El chipirón conservado al final
  {
    source: 'native',
    id: `${BLOB}/El%20chipiron.MP4`,
    title: 'El chipirón',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
];
