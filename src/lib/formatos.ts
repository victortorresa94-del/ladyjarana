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
    nombre: 'Dúo Acústico',
    musicos: 'Voz + guitarra española & teclado o guitarra',
    ideal: 'Cócteles, restaurantes, eventos íntimos',
    volumen: 'Íntimo, acústico, relajado pero alegre',
    duracion: 'Hasta 2h',
  },
  {
    nombre: 'Trío',
    musicos: 'Voz/guitarra + eléctrica + teclado/bajo',
    ideal: 'Bares, terrazas, bodas pequeñas',
    volumen: 'Energía media, sonido orgánico y cercano',
    duracion: '90-120 min',
  },
  {
    nombre: 'Cuarteto',
    musicos: 'Banda completa (Víctor, Alejo, Iván, Diego)',
    ideal: 'Fiestas mayores, bodas grandes, eventos con escenario',
    volumen: 'Máxima energía, verbena total, sonido completo',
    duracion: '120 min + extras',
    destacado: true,
    etiqueta: 'Formato Principal',
  },
];
