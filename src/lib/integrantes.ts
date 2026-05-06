export interface Integrante {
  nombre: string;
  rol: string;
  descripcion: string;
  emoji: string;
  color: 'sol' | 'naranja' | 'rojo' | 'azul';
}

export const integrantes: Integrante[] = [
  {
    nombre: 'Víctor Torres',
    rol: 'Voz + Guitarra española',
    descripcion:
      'El frontman. Dirección del show, conexión rumbera y el encargado de la interacción constante con el público.',
    emoji: '🎤',
    color: 'rojo',
  },
  {
    nombre: 'Alejo Finger',
    rol: 'Guitarra eléctrica',
    descripcion:
      'La fuerza rock. Aporta la energía, los riffs reconocibles y los solos que levantan el concierto.',
    emoji: '🎸',
    color: 'naranja',
  },
  {
    nombre: 'Iván Cortés',
    rol: 'Teclado / Bajo',
    descripcion:
      'El motor armónico. Doble rol para dar profundidad rítmica, groove y capas de sonido masivas (pianos, pads).',
    emoji: '🎹',
    color: 'sol',
  },
  {
    nombre: 'Diego Aquino',
    rol: 'Batería',
    descripcion:
      'El latido. Define la energía del concierto, domina los cortes y dirige los finales explosivos.',
    emoji: '🥁',
    color: 'azul',
  },
];
