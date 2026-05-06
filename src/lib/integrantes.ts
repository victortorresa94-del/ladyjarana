export interface Integrante {
  nombre: string;
  rol: string;
  descripcion: string;
  imagen: string;
}

export const integrantes: Integrante[] = [
  {
    nombre: 'Víctor Torres',
    rol: 'Voz & Guitarra española',
    descripcion:
      'Frontman, alma rumbera y la voz que enciende el público. Si la banda tiene un capitán, es él. Y la guitarra española es su brújula.',
    imagen: '/images/victor.jpg',
  },
  {
    nombre: 'Alejo Finger',
    rol: 'Guitarra eléctrica',
    descripcion:
      'El que pone los riffs, los solos y la fuerza rock. Cuando suena Fito, suena por él.',
    imagen: '/images/alejo.jpg',
  },
  {
    nombre: 'Iván Cortés',
    rol: 'Teclado & Bajo',
    descripcion:
      'El multitarea oficial. Bajo y teclado al mismo tiempo. La banda suena el doble de grande gracias a él.',
    imagen: '/images/ivan.jpg',
  },
  {
    nombre: 'Diego Aquino',
    rol: 'Batería',
    descripcion:
      'El motor. El que marca el groove, los cortes, las subidas y los finales explosivos. Sin él, no hay fiesta.',
    imagen: '/images/diego.jpg',
  },
];
