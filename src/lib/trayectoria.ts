export interface Hito {
  fecha: string;
  tipo: 'concierto' | 'fiesta-mayor' | 'boda' | 'sala';
  lugar: string;
  descripcion: string;
  imagen?: string;
}

export const trayectoria: Hito[] = [
  {
    fecha: 'Primavera 2025',
    tipo: 'concierto',
    lugar: 'Puerto de la Barceloneta, Barcelona',
    descripcion:
      'El bautizo en directo. Primer concierto, mucho público, mar de fondo.',
    imagen: '/images/barceloneta.jpg',
  },
  {
    fecha: 'Primavera 2025',
    tipo: 'sala',
    lugar: 'Centro Asturiano de Barcelona',
    descripcion: 'Sala cultural. Concierto íntimo, formato cuarteto.',
    imagen: '/images/centro-asturiano.jpg',
  },
  {
    fecha: 'Verano 2025',
    tipo: 'fiesta-mayor',
    lugar: 'Fiesta Mayor de Barberà del Vallès',
    descripcion: 'Primera fiesta mayor municipal. Plaza llena.',
    imagen: '/images/barbera.jpg',
  },
  {
    fecha: 'Septiembre 2025',
    tipo: 'fiesta-mayor',
    lugar: 'Fiesta Mayor de Sant Adrià de Besòs',
    descripcion:
      'Formato ampliado, escenario grande, producción completa.',
    imagen: '/images/sant-adria.jpg',
  },
  {
    fecha: 'Diciembre 2025',
    tipo: 'boda',
    lugar: 'Boda — Cangavarró',
    descripcion:
      'Primera boda. Celebración privada con público entregado.',
    imagen: '/images/boda-cangavarro.jpg',
  },
  {
    fecha: 'Enero 2026',
    tipo: 'boda',
    lugar: 'Boda privada',
    descripcion: 'Confirmando el formato bodas como mercado clave.',
    imagen: '/images/boda-privada.jpg',
  },
];
