export interface Integrante {
  nombre: string;
  rol: string;
  descripcion: string;
  emoji: string;
  imagen: string;
  color: 'sol' | 'naranja' | 'rojo' | 'azul' | 'verde';
}

export const integrantes: Integrante[] = [
  {
    nombre: 'Víctor Torres',
    rol: 'Voz + Guitarra española',
    descripcion:
      'El frontman. Dirección del show, conexión rumbera y el encargado de la interacción constante con el público.',
    emoji: '🎤',
    imagen: '/integrantes/victor.png',
    color: 'rojo',
  },
  {
    nombre: 'Alejo Finger',
    rol: 'Guitarra eléctrica',
    descripcion:
      'La fuerza rock. Aporta la energía, los riffs reconocibles y los solos que levantan el concierto.',
    emoji: '🎸',
    imagen: '/integrantes/alejo.png',
    color: 'naranja',
  },
  {
    nombre: 'Iván Cortés',
    rol: 'Teclado / Bajo',
    descripcion:
      'El motor armónico. Doble rol para dar profundidad rítmica, groove y capas de sonido masivas.',
    emoji: '🎹',
    imagen: '/integrantes/ivan.png',
    color: 'sol',
  },
  {
    nombre: 'Diego Aquino',
    rol: 'Batería',
    descripcion:
      'El latido. Define la energía del concierto, domina los cortes y dirige los finales explosivos.',
    emoji: '🥁',
    imagen: '/integrantes/diego.png',
    color: 'azul',
  },
  {
    nombre: 'Antonio',
    rol: 'Trompeta',
    descripcion:
      'El brillo metálico. Su trompeta corona los temas, abre las cumbias y pone los remates sobre la rumba.',
    emoji: '🎺',
    imagen: '/integrantes/antonio.png',
    color: 'verde',
  },
];
