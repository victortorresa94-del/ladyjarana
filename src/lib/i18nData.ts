import type { Integrante } from './integrantes';
import type { Formato } from './formatos';
import type { Hito, ProximoEvento } from './trayectoria';

// ─── Integrants ────────────────────────────────────────────────────────────
export const integrantesCA: Integrante[] = [
  {
    nombre: 'Víctor Torres',
    rol: 'Veu + Guitarra espanyola',
    descripcion:
      'El frontman. Direcció del xou, connexió rumbera i l\'encarregat de la interacció constant amb el públic.',
    emoji: '🎤',
    imagen: '/integrantes/victor-v4.png',
    color: 'rojo',
  },
  {
    nombre: 'Alejo Finger',
    rol: 'Guitarra elèctrica',
    descripcion:
      'La força rock. Aporta l\'energia, els riffs reconeixibles i els solos que aixequen el concert.',
    emoji: '🎸',
    imagen: '/integrantes/alejo-v4.png',
    color: 'naranja',
  },
  {
    nombre: 'Iván Cortés',
    rol: 'Teclat / Baix',
    descripcion:
      'El motor harmònic. Doble rol per donar profunditat rítmica, groove i capes de so massives.',
    emoji: '🎹',
    imagen: '/integrantes/ivan-v4.png',
    color: 'sol',
  },
  {
    nombre: 'Diego Aquino',
    rol: 'Bateria',
    descripcion:
      'El batec. Defineix l\'energia del concert, domina els talls i dirigeix els finals explosius.',
    emoji: '🥁',
    imagen: '/integrantes/diego-v4.png',
    color: 'azul',
  },
  {
    nombre: 'Antonio',
    rol: 'Trompeta',
    descripcion:
      'La brillantor metàl·lica. La seva trompeta corona els temes, obre les cúmbies i posa els remats sobre la rumba.',
    emoji: '🎺',
    imagen: '/integrantes/antonio-v4.png',
    color: 'verde',
  },
];

// ─── Formats ──────────────────────────────────────────────────────────────
export const formatosCA: Formato[] = [
  {
    nombre: 'Quartet',
    musicos:
      'Víctor (veu/guitarra), Alejo (elèctrica), Iván (teclat/baix), Diego (bateria)',
    ideal: 'Casaments, sales i esdeveniments privats amb banda en directe',
    volumen: 'Energia completa, so ple de banda',
    duracion: '120 min',
  },
  {
    nombre: 'Quintet',
    musicos: 'Quartet + Antonio (trompeta)',
    ideal: 'Festes majors, casaments grans, esdeveniments amb escenari',
    volumen: 'Màxima energia amb vents — revetlla total',
    duracion: '120 min + extres',
    destacado: true,
    etiqueta: 'Format Principal',
  },
  {
    nombre: 'Banda Completa',
    musicos:
      'Quintet + baixista, percussió menor, saxo i guitarra addicional',
    ideal: 'Produccions grans, festivals, escenaris XXL',
    volumen: 'So orquestral, desplegament màxim a l\'escenari',
    duracion: '120 min + bisos',
  },
];

// ─── Trayectoria ───────────────────────────────────────────────────────────
export const trayectoriaCA: Hito[] = [
  {
    fecha: 'Primavera 2025',
    tipo: 'concierto',
    lugar: 'Port de la Barceloneta',
    descripcion:
      'El Bateig. Primer bolo acústic davant una audiència nombrosa. El naixement oficial de la jarana.',
  },
  {
    fecha: 'Primavera 2025',
    tipo: 'sala',
    lugar: 'Centro Asturiano de Barcelona',
    descripcion:
      'Intimitat cultural. Format sala, connexió propera amb el públic local.',
  },
  {
    fecha: 'Estiu 2025',
    tipo: 'fiesta-mayor',
    lugar: 'Festa Major de Barberà del Vallès',
    descripcion:
      'El Salt a la Plaça. Primera prova de foc al circuit municipal.',
  },
  {
    fecha: 'Setembre 2025',
    tipo: 'fiesta-mayor',
    lugar: 'Festa Major de Sant Adrià de Besòs',
    descripcion:
      'Format XXL. Escenari principal, producció ampliada, so gegant.',
  },
  {
    fecha: 'Desembre 2025',
    tipo: 'boda',
    lugar: 'Casament — Cangabarró',
    descripcion:
      'Circuit Privat. Consolidació en esdeveniments corporatius i nupcials d\'alt nivell.',
  },
  {
    fecha: 'Abril 2026',
    tipo: 'concierto',
    lugar: 'Port de la Barceloneta',
    descripcion:
      'Obertura de la nova temporada. Tornem al lloc que ens va veure néixer.',
  },
  {
    fecha: '31 Maig 2026',
    tipo: 'concierto',
    lugar: 'Port de la Barceloneta',
    descripcion:
      'Segon concert a la Barceloneta. Ja és el nostre escenari de capçalera.',
  },
  {
    fecha: '23 Juny 2026',
    tipo: 'concierto',
    lugar: 'Arc de Triomf, Barcelona',
    descripcion:
      'Revetlla de Sant Joan. 23:00. Concert especial al cor de la ciutat.',
  },
];

// ─── Pròxims esdeveniments ────────────────────────────────────────────────
export const proximosEventosCA: ProximoEvento[] = [
  {
    fecha: '23 de Juny 2026',
    fechaCorta: '23 jun',
    lugar: 'Arc de Triomf, Barcelona',
    hora: '23:00',
    destacado: true,
  },
  {
    fecha: '31 de Maig 2026',
    fechaCorta: '31 mai',
    lugar: 'Port de la Barceloneta',
  },
  {
    fecha: '27 de Juny 2026',
    fechaCorta: '27 jun',
    lugar: 'Lleida',
  },
];

// ─── Clients ──────────────────────────────────────────────────────────────
export const clientesCA = [
  { nombre: 'Ajuntament de Sant Adrià de Besòs', tipo: 'Festa Major' },
  { nombre: 'Ajuntament de Barberà del Vallès', tipo: 'Festa Major' },
  { nombre: 'Centro Asturiano de Barcelona', tipo: 'Sala / Revetlla' },
  {
    nombre: 'Associació de Veïns de la Barceloneta',
    tipo: 'Rumba Beach Festival · 2 edicions',
  },
  {
    nombre: 'Associació de Veïns de l\'Arc de Triomf',
    tipo: 'Revetlla Sant Joan 2026',
  },
];

// ─── Tipus d'esdeveniments ────────────────────────────────────────────────
export const tiposEventosCA = [
  {
    slug: 'bodas',
    titulo: 'Casaments',
    descripcion:
      'Cerimònia, vermut, banquet i barra lliure. Tres formats.',
    icon: '💍',
    foto: '/fotos/bodas.jpg',
    objectPosition: 'center 30%',
  },
  {
    slug: 'fiestas-mayores',
    titulo: 'Festes majors',
    descripcion:
      'Concerts a l\'aire lliure, places i revetlles. Fitxa tècnica inclosa.',
    icon: '🎉',
    foto: '/fotos/fiestas-mayores.jpg',
    objectPosition: 'center 40%',
  },
  {
    slug: 'eventos-privados',
    titulo: 'Esdeveniments privats',
    descripcion:
      'Aniversaris, festes de barri o de finca. El que faci falta.',
    icon: '🥂',
    foto: '/fotos/eventos-privados.jpg',
    objectPosition: 'center 30%',
  },
  {
    slug: 'eventos-empresa',
    titulo: 'Esdeveniments d\'empresa',
    descripcion:
      'Cap d\'any, team buildings, presentacions. Professionals amb jarana.',
    icon: '🏢',
    foto: '/fotos/eventos-empresa.jpg',
    objectPosition: 'center 50%',
  },
];
