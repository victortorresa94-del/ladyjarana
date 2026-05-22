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
  {
    source: 'native',
    id: `${BLOB}/El%20chipiron.MP4`,
    title: 'El chipirón',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
];
