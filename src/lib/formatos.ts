export interface Formato {
  nombre: string;
  musicos: string;
  ideal: string;
  volumen: string;
  duracion: string;
  destacado?: boolean;
  etiqueta?: string;
}

export const formatos: Formato[] = [
  {
    nombre: 'Cuarteto',
    musicos: 'Víctor (voz/guitarra), Alejo (eléctrica), Iván (teclado/bajo), Diego (batería)',
    ideal: 'Bodas, salas y eventos privados con banda en directo',
    volumen: 'Energía completa, sonido pleno de banda',
    duracion: '120 min',
  },
  {
    nombre: 'Quinteto',
    musicos: 'Cuarteto + Antonio (trompeta)',
    ideal: 'Fiestas mayores, bodas grandes, eventos con escenario',
    volumen: 'Máxima energía con vientos — verbena total',
    duracion: '120 min + extras',
    destacado: true,
    etiqueta: 'Formato Principal',
  },
  {
    nombre: 'Banda Completa',
    musicos: 'Quinteto + bajista, percusión menor, saxo y guitarra adicional',
    ideal: 'Producciones grandes, festivales, escenarios XXL',
    volumen: 'Sonido orquestal, despliegue máximo en escena',
    duracion: '120 min + bises',
  },
];
