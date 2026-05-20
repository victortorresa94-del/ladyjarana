export interface LiveVideo {
  source: 'drive' | 'instagram' | 'native';
  // Drive ID, IG reel shortcode, or public path like "/api/v/foo.mp4"
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  aspectRatio?: string;
}

export const liveVideos: LiveVideo[] = [
  {
    source: 'native',
    id: '/api/v/Bamboleo.MP4',
    title: 'Bamboleo',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: '/api/v/El%20chipiron.MP4',
    title: 'El chipirón',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: '/api/v/No%20puedo%20vivir%20sin%20ti.MP4',
    title: 'No puedo vivir sin ti',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: '/api/v/Volare.MOV',
    title: 'Volare',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: '/api/v/FM%20Sant%20Adria.mp4',
    title: 'FM Sant Adrià',
    description: 'Festival · directo',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: '/api/v/CAN%20GABARRO%20LADY%20JARANA.mp4',
    title: 'Cangabarró',
    description: 'Boda · Diciembre 2025',
    aspectRatio: '9:16',
  },
  {
    source: 'native',
    id: '/api/v/Presentacion%20Lady%20Jarana.mp4',
    title: 'Presentación',
    description: 'Lady Jarana en pocos minutos',
    aspectRatio: '9:16',
  },
];
