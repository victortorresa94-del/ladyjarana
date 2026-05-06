export interface Hito {
  fecha: string;
  tipo: 'concierto' | 'fiesta-mayor' | 'boda' | 'sala';
  lugar: string;
  descripcion: string;
}

export const trayectoria: Hito[] = [
  {
    fecha: 'Primavera 2025',
    tipo: 'concierto',
    lugar: 'Puerto de la Barceloneta',
    descripcion:
      'El Bautizo. Primer bolo acústico ante una audiencia numerosa. El nacimiento oficial de la jarana.',
  },
  {
    fecha: 'Primavera 2025',
    tipo: 'sala',
    lugar: 'Centro Asturiano de Barcelona',
    descripcion:
      'Intimidad cultural. Formato sala, conexión cercana con el público local.',
  },
  {
    fecha: 'Verano 2025',
    tipo: 'fiesta-mayor',
    lugar: 'Fiesta Mayor de Barberà del Vallès',
    descripcion:
      'El Salto a la Plaza. Primera prueba de fuego en el circuito municipal.',
  },
  {
    fecha: 'Septiembre 2025',
    tipo: 'fiesta-mayor',
    lugar: 'Fiesta Mayor de Sant Adrià de Besòs',
    descripcion:
      'Formato XXL. Escenario principal, producción ampliada, sonido gigante.',
  },
  {
    fecha: 'Diciembre 2025',
    tipo: 'boda',
    lugar: 'Boda — Cangabarró',
    descripcion:
      'Circuito Privado. Consolidación en eventos corporativos y nupciales de alto nivel.',
  },
  {
    fecha: '2026',
    tipo: 'boda',
    lugar: 'Temporada en expansión',
    descripcion:
      'Una banda en plena expansión, lista para los escenarios de 2026.',
  },
];
