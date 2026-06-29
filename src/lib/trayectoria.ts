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
    fecha: 'Abril 2026',
    tipo: 'concierto',
    lugar: 'Puerto de la Barceloneta',
    descripcion:
      'Apertura de la nueva temporada. Volvemos al lugar que nos vio nacer.',
  },
  {
    fecha: '31 Mayo 2026',
    tipo: 'concierto',
    lugar: 'Puerto de la Barceloneta',
    descripcion:
      'Segundo concierto en la Barceloneta. Ya es nuestro escenario de cabecera.',
  },
  {
    fecha: '23 Junio 2026',
    tipo: 'concierto',
    lugar: 'Arco de Triunfo, Barcelona',
    descripcion:
      'Revetlla de Sant Joan. 23:00. Lleno en el corazón de la ciudad, con la Asociación de Vecinos del Arc de Triomf.',
  },
  {
    fecha: '27 Junio 2026',
    tipo: 'concierto',
    lugar: 'Lleida',
    descripcion:
      'Salto al circuito catalán fuera del área metropolitana de Barcelona.',
  },
];

// Próximos eventos (futuros) — mostrados en el banner de TOP NEWS
export interface ProximoEvento {
  fecha: string;
  fechaCorta: string;
  lugar: string;
  hora?: string;
  destacado?: boolean;
}

export const proximosEventos: ProximoEvento[] = [
  {
    fecha: '11 de Julio 2026',
    fechaCorta: '11 jul',
    lugar: 'Correpintxos · Torregrossa',
    hora: '00:00',
    destacado: true,
  },
];
