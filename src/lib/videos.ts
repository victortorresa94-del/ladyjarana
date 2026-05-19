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
    id: 'DWn3wnqjO5c',
    title: '@lady.jarana',
    description: 'Barceloneta al atardecer',
    aspectRatio: '9:16',
  },
  {
    source: 'instagram',
    id: 'DOniq2XjBRE',
    title: '@lady.jarana',
    description: 'Directo · pura energía',
    aspectRatio: '9:16',
  },
  {
    source: 'instagram',
    id: 'DMYftoWMhK_',
    title: '@lady.jarana',
    description: 'FM Sant Adrià',
    aspectRatio: '9:16',
  },
  {
    source: 'instagram',
    id: 'DOeQihBDPfm',
    title: '@lady.jarana',
    description: 'Última noche de verano',
    aspectRatio: '9:16',
  },
  {
    source: 'instagram',
    id: 'DPquEqBDKp8',
    title: '@lady.jarana',
    description: 'Reel · En directo',
    aspectRatio: '9:16',
  },
  {
    source: 'instagram',
    id: 'DL0gjhfs5vd',
    title: '@lady.jarana',
    description: 'Reel · Directo',
    aspectRatio: '9:16',
  },
  {
    source: 'instagram',
    id: 'DKaG2BNsrX5',
    title: '@lady.jarana',
    description: 'Reel · Directo',
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
