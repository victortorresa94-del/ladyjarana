export interface LiveVideo {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  aspectRatio?: string;
}

export const liveVideos: LiveVideo[] = [
  {
    id: 'TU_ID_DE_GOOGLE_DRIVE_1',
    title: 'Fiesta Mayor de Sant Adrià de Besòs',
    description: 'Formato ampliado · Septiembre 2025',
    thumbnail: '/thumbnails/sant-adria.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'TU_ID_DE_GOOGLE_DRIVE_2',
    title: 'Fiesta Mayor de Barberà del Vallès',
    description: 'Cuarteto · Verano 2025',
    thumbnail: '/thumbnails/barbera.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'TU_ID_DE_GOOGLE_DRIVE_3',
    title: 'Puerto de la Barceloneta',
    description: 'Primer concierto · Primavera 2025',
    thumbnail: '/thumbnails/barceloneta.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'TU_ID_DE_GOOGLE_DRIVE_4',
    title: 'Boda en Cangavarró',
    description: 'Boda privada · Diciembre 2025',
    thumbnail: '/thumbnails/boda-cangavarro.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'TU_ID_DE_GOOGLE_DRIVE_5',
    title: 'Centro Asturiano de Barcelona',
    description: 'Sala cultural · 2025',
    thumbnail: '/thumbnails/centro-asturiano.jpg',
    aspectRatio: '16:9',
  },
  {
    id: 'TU_ID_DE_GOOGLE_DRIVE_6',
    title: 'Ensayo en directo',
    description: 'Sesión de estudio',
    thumbnail: '/thumbnails/ensayo.jpg',
    aspectRatio: '16:9',
  },
];
