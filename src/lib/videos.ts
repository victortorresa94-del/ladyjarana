export interface LiveVideo {
  source: 'drive' | 'instagram';
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  aspectRatio?: string;
}

export const liveVideos: LiveVideo[] = [
  {
    source: 'instagram',
    id: 'DOeQihBDPfm',
    title: 'Reel @lady.jarana',
    description: 'En directo · Instagram',
    aspectRatio: '9:16',
  },
  {
    source: 'drive',
    id: '10ECkr7cIsqqtDwNwoQ6OslLUoF01_jyn',
    title: 'BDNBOX Live!',
    description: 'Fiesta Mayor — directo completo',
    aspectRatio: '16:9',
  },
  {
    source: 'drive',
    id: '13ZVGJMCheAPBGzvkonWfz9ozQMaOnnzh',
    title: 'Cangabarró',
    description: 'Boda privada · Diciembre 2025',
    aspectRatio: '16:9',
  },
  {
    source: 'drive',
    id: '1nHwRXsaIggwBfNpxSmVNFibef8350FKs',
    title: 'Orgullo',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    source: 'drive',
    id: '1QZuyM263BBwLeSWw9S9TpBXGKuGHrEPs',
    title: 'Presentación',
    description: 'La banda en pocos minutos',
    aspectRatio: '16:9',
  },
];
