export interface LiveVideo {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  aspectRatio?: string;
}

// Real Google Drive video IDs from victortorresa94@gmail.com Drive
export const liveVideos: LiveVideo[] = [
  {
    id: '10ECkr7cIsqqtDwNwoQ6OslLUoF01_jyn',
    title: 'BDNBOX Live!',
    description: 'Fiesta Mayor — directo completo',
    aspectRatio: '16:9',
  },
  {
    id: '13ZVGJMCheAPBGzvkonWfz9ozQMaOnnzh',
    title: 'Cangabarró',
    description: 'Boda privada · Diciembre 2025',
    aspectRatio: '16:9',
  },
  {
    id: '1nHwRXsaIggwBfNpxSmVNFibef8350FKs',
    title: 'Orgullo',
    description: 'Versión Lady Jarana',
    aspectRatio: '9:16',
  },
  {
    id: '1QZuyM263BBwLeSWw9S9TpBXGKuGHrEPs',
    title: 'Presentación',
    description: 'La banda en pocos minutos',
    aspectRatio: '16:9',
  },
];
