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
    nombre: 'Dúo acústico',
    musicos: 'Voz + guitarra española + teclado o segunda guitarra',
    ideal: 'Ceremonias, cócteles, restaurantes, eventos íntimos',
    volumen: 'Bajo-medio',
    duracion: 'Hasta 2h',
  },
  {
    nombre: 'Trío',
    musicos: 'Tres músicos en formato semi-acústico',
    ideal: 'Bares, terrazas, bodas pequeñas, eventos privados',
    volumen: 'Medio',
    duracion: '90-120 min',
  },
  {
    nombre: 'Cuarteto',
    musicos:
      'Banda completa: voz, guitarra española, guitarra eléctrica, teclado/bajo, batería',
    ideal: 'Bodas, fiestas mayores, conciertos, eventos con escenario',
    volumen: 'Pleno',
    duracion: '90-120 min + posibles extras',
    destacado: true,
    etiqueta: 'El más popular',
  },
];
