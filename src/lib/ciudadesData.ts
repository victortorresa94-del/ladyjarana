export interface CiudadContent {
  ciudad: string;
  /** Slug ES */
  slugES: string;
  /** Slug CA */
  slugCA: string;
  provincia: string;
  /** Comarcas o subzonas que cubre */
  zonas: string[];
  /** Frase de apertura */
  intro: string;
  /** Por qué Lady Jarana en esta ciudad */
  porQue: string[];
  /** Tipos de evento típicos en esta zona */
  tiposEvento: string;
}

export const ciudadesES: Record<string, CiudadContent> = {
  barcelona: {
    ciudad: 'Barcelona',
    slugES: 'banda-musica-barcelona',
    slugCA: 'grup-musica-barcelona',
    provincia: 'Barcelona',
    zonas: [
      'Barcelona ciudad',
      'Área metropolitana',
      'Maresme',
      'Garraf',
      'Vallès Occidental',
      'Vallès Oriental',
      'Baix Llobregat',
    ],
    intro:
      'Lady Jarana es la banda en directo de Barcelona para bodas, festes majors, eventos privados y empresariales en la ciudad y el área metropolitana. Cuatro músicos profesionales con base en Barcelona, repertorio bilingüe ES/CA y show 100% en directo sin pistas pregrabadas. Cuarteto desde 1000 €.',
    porQue: [
      'Tocamos en el Puerto de la Barceloneta cada temporada — escenario de cabecera consolidado.',
      'Hemos colaborado con la Asociación de Vecinos de la Barceloneta (Rumba Beach Festival, 2 ediciones) y la Asociación de Vecinos del Arc de Triomf (Revetlla Sant Joan 2026).',
      'Show bilingüe ES/CA — adaptamos la proporción al barrio: más castellano en zonas turísticas, más catalán en festes de barrio.',
      'Conocemos las salas, fincas y hoteles de Barcelona donde se hacen eventos: Centro Asturiano, espacios del Born, Poblenou, Eixample.',
    ],
    tiposEvento:
      'Bodas en hoteles del Eixample, masías del Maresme y del Vallès, fincas de bodas del Garraf y Baix Llobregat. Eventos corporativos en espacios del Poblenou. Festes majors de distrito (Gràcia, Sants, Sant Andreu, Poblenou). Revetlles de Sant Joan en plazas de la ciudad. Eventos privados en restaurantes y terrazas.',
  },

  girona: {
    ciudad: 'Girona',
    slugES: 'banda-musica-girona',
    slugCA: 'grup-musica-girona',
    provincia: 'Girona',
    zonas: [
      'Girona ciudad',
      'Costa Brava',
      'Baix Empordà',
      'Alt Empordà',
      'La Selva',
      'Pla de l\'Estany',
      'Garrotxa',
      'Ripollès',
      'Cerdanya',
    ],
    intro:
      'Lady Jarana toca para bodas, festes majors y eventos privados en Girona y toda la provincia: Costa Brava, Empordà, Garrotxa, Cerdanya y Ripollès. Banda de Barcelona con experiencia en fincas y masías de l\'Empordà. Cuarteto desde 1000 €, show bilingüe ES/CA.',
    porQue: [
      'Trabajamos las bodas en masías de l\'Empordà — espacios con encanto que requieren banda profesional y sonido propio para exteriores.',
      'Nos desplazamos sin recargo dentro de Catalunya: Barcelona-Girona es una hora.',
      'Repertorio con peso de pop-rock catalán (L\'Empordà de Sopa de Cabra, Els Catarres, La Marina sta morena) que conecta especialmente bien con público gironès.',
    ],
    tiposEvento:
      'Bodas en masías del Baix Empordà y Alt Empordà, fincas con encanto en Cadaqués, Begur, Palafrugell, Pals. Festes majors de pueblos y comarcas. Eventos privados en hoteles boutique de la Costa Brava.',
  },

  tarragona: {
    ciudad: 'Tarragona',
    slugES: 'banda-musica-tarragona',
    slugCA: 'grup-musica-tarragona',
    provincia: 'Tarragona',
    zonas: [
      'Tarragona ciudad',
      'Costa Daurada',
      'Camp de Tarragona',
      'Conca de Barberà',
      'Priorat',
      'Baix Camp',
      'Tarragonès',
      'Terra Alta',
    ],
    intro:
      'Lady Jarana es la banda en directo para bodas, festes majors y eventos privados en Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada. Desplazamiento incluido dentro de Catalunya. Cuarteto desde 1000 €.',
    porQue: [
      'Cubrimos toda la Costa Daurada y el interior (Priorat, Conca de Barberà) sin recargo.',
      'Banda con experiencia en espacios al aire libre — opción de sonido propio (PA + 2 técnicos desde 600 €) para fincas y bodas en playa.',
      'Repertorio que mezcla pop-rock español/catalán con rumba y latineo — encaja en bodas de la Costa Daurada y festes majors del Camp.',
    ],
    tiposEvento:
      'Bodas en hoteles de Salou y Cambrils, fincas vinícolas del Priorat y Penedès, masías del Camp de Tarragona. Festes majors municipales. Eventos corporativos en complejos de PortAventura. Verbenas de barrio.',
  },

  lleida: {
    ciudad: 'Lleida',
    slugES: 'banda-musica-lleida',
    slugCA: 'grup-musica-lleida',
    provincia: 'Lleida',
    zonas: [
      'Lleida ciudad',
      'Segrià',
      'Noguera',
      'Garrigues',
      'Urgell',
      'Pla d\'Urgell',
      'Pallars',
      'Alta Ribagorça',
      'Val d\'Aran',
    ],
    intro:
      'Lady Jarana toca en Lleida ciudad, las comarcas del Segrià y l\'Urgell, y los Pirineos. Banda en directo para bodas, festes majors y eventos privados en Ponent y la Catalunya interior. Cuarteto desde 1000 €.',
    porQue: [
      'Tocamos en Lleida el 27 de junio de 2026 — el salto al circuito catalán más allá del área metropolitana.',
      'Desplazamiento dentro de Catalunya incluido (Barcelona-Lleida ~2 h por autopista).',
      'Repertorio adaptable: mezclamos el pop-rock catalán con verbeneras y latineo, encaja con el público de Ponent y comarcas del Pirineu.',
    ],
    tiposEvento:
      'Bodas en masías y caserías del Segrià y l\'Urgell, fincas en l\'Anoia limítrofe. Festes majors municipales del Ponent. Eventos en estaciones de esquí (Baqueira, Boí) — sonido propio recomendado por logística de montaña.',
  },
};

export const ciudadesCA: Record<string, Omit<CiudadContent, 'porQue' | 'tiposEvento' | 'intro'> & {
  intro: string;
  porQue: string[];
  tiposEvento: string;
}> = {
  barcelona: {
    ciudad: 'Barcelona',
    slugES: 'banda-musica-barcelona',
    slugCA: 'grup-musica-barcelona',
    provincia: 'Barcelona',
    zonas: ciudadesES.barcelona.zonas,
    intro:
      'Lady Jarana és el grup en directe de Barcelona per a casaments, festes majors, esdeveniments privats i empresarials a la ciutat i l\'àrea metropolitana. Quatre músics professionals amb base a Barcelona, repertori bilingüe ES/CA i xou 100% en directe sense pistes pregravades. Quartet des de 1000 €.',
    porQue: [
      'Toquem al Port de la Barceloneta cada temporada — escenari de capçalera consolidat.',
      'Hem col·laborat amb l\'Associació de Veïns de la Barceloneta (Rumba Beach Festival, 2 edicions) i l\'Associació de Veïns de l\'Arc de Triomf (Revetlla Sant Joan 2026).',
      'Xou bilingüe ES/CA — adaptem la proporció al barri: més castellà en zones turístiques, més català en festes de barri.',
      'Coneixem les sales, finques i hotels de Barcelona on es fan esdeveniments: Centro Asturiano, espais del Born, Poblenou, Eixample.',
    ],
    tiposEvento:
      'Casaments en hotels de l\'Eixample, masies del Maresme i del Vallès, finques de casaments del Garraf i Baix Llobregat. Esdeveniments corporatius en espais del Poblenou. Festes majors de districte (Gràcia, Sants, Sant Andreu, Poblenou). Revetlles de Sant Joan en places de la ciutat. Esdeveniments privats en restaurants i terrasses.',
  },
  girona: {
    ciudad: 'Girona',
    slugES: 'banda-musica-girona',
    slugCA: 'grup-musica-girona',
    provincia: 'Girona',
    zonas: ciudadesES.girona.zonas,
    intro:
      'Lady Jarana toca per a casaments, festes majors i esdeveniments privats a Girona i tota la província: Costa Brava, Empordà, Garrotxa, Cerdanya i Ripollès. Grup de Barcelona amb experiència en finques i masies de l\'Empordà. Quartet des de 1000 €, xou bilingüe ES/CA.',
    porQue: [
      'Treballem els casaments en masies de l\'Empordà — espais amb encant que requereixen banda professional i so propi per a exteriors.',
      'Ens desplacem sense recàrrec dins de Catalunya: Barcelona-Girona és una hora.',
      'Repertori amb pes de pop-rock català (L\'Empordà de Sopa de Cabra, Els Catarres, La Marina sta morena) que connecta especialment bé amb públic gironí.',
    ],
    tiposEvento:
      'Casaments en masies del Baix Empordà i Alt Empordà, finques amb encant a Cadaqués, Begur, Palafrugell, Pals. Festes majors de pobles i comarques. Esdeveniments privats en hotels boutique de la Costa Brava.',
  },
  tarragona: {
    ciudad: 'Tarragona',
    slugES: 'banda-musica-tarragona',
    slugCA: 'grup-musica-tarragona',
    provincia: 'Tarragona',
    zonas: ciudadesES.tarragona.zonas,
    intro:
      'Lady Jarana és el grup en directe per a casaments, festes majors i esdeveniments privats a Tarragona, Reus, Salou, Cambrils i tota la Costa Daurada. Desplaçament inclòs dins de Catalunya. Quartet des de 1000 €.',
    porQue: [
      'Cobrim tota la Costa Daurada i l\'interior (Priorat, Conca de Barberà) sense recàrrec.',
      'Banda amb experiència en espais a l\'aire lliure — opció de so propi (PA + 2 tècnics des de 600 €) per a finques i casaments a la platja.',
      'Repertori que barreja pop-rock espanyol/català amb rumba i latineig — encaixa en casaments de la Costa Daurada i festes majors del Camp.',
    ],
    tiposEvento:
      'Casaments en hotels de Salou i Cambrils, finques vinícoles del Priorat i Penedès, masies del Camp de Tarragona. Festes majors municipals. Esdeveniments corporatius en complexos de PortAventura. Revetlles de barri.',
  },
  lleida: {
    ciudad: 'Lleida',
    slugES: 'banda-musica-lleida',
    slugCA: 'grup-musica-lleida',
    provincia: 'Lleida',
    zonas: ciudadesES.lleida.zonas,
    intro:
      'Lady Jarana toca a Lleida ciutat, les comarques del Segrià i l\'Urgell, i els Pirineus. Grup en directe per a casaments, festes majors i esdeveniments privats a Ponent i la Catalunya interior. Quartet des de 1000 €.',
    porQue: [
      'Toquem a Lleida el 27 de juny de 2026 — el salt al circuit català més enllà de l\'àrea metropolitana.',
      'Desplaçament dins de Catalunya inclòs (Barcelona-Lleida ~2 h per autopista).',
      'Repertori adaptable: barregem el pop-rock català amb revetlleres i latineig, encaixa amb el públic de Ponent i comarques del Pirineu.',
    ],
    tiposEvento:
      'Casaments en masies i caserías del Segrià i l\'Urgell, finques a l\'Anoia limítrof. Festes majors municipals del Ponent. Esdeveniments en estacions d\'esquí (Baqueira, Boí) — so propi recomanat per logística de muntanya.',
  },
};
