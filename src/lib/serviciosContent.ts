export interface ServicioContent {
  slug: string;
  /** Slug equivalente en el otro idioma */
  slugAlt: string;
  titulo: string;
  intro: string;
  eyebrow: string;
  hero: {
    foto: string;
    objectPosition?: string;
  };
  /** "Qué hacemos en una boda / festa major / ..." — 2-3 párrafos */
  queHacemos: string[];
  /** Bloque de cómo es el show en este contexto */
  comoEs: string[];
  /** Tipo de repertorio que solemos tocar */
  repertorio: string;
  /** Caso real concreto o cliente que avala */
  casoReal?: string;
  /** Formato más recomendado para este tipo de evento */
  formatoRecomendado: string;
  /** Q&A inline */
  faqs: { q: string; a: string }[];
  /** Service.serviceType para JSON-LD */
  serviceType: string;
  audience: string;
}

// ─── ES ───────────────────────────────────────────────────────────────────
export const serviciosES: Record<string, ServicioContent> = {
  bodas: {
    slug: 'bodas',
    slugAlt: 'casaments',
    titulo: 'Banda en directo para bodas en Barcelona y Catalunya',
    intro:
      'Lady Jarana es la banda en directo para bodas que convierte una recepción en fiesta mayor. Cuatro músicos profesionales, repertorio bilingüe ES/CA y un show 100% en directo que cubre desde el cóctel hasta la barra libre. Cuarteto desde 1.000 €, ideal para bodas en finca, masía, hotel o restaurante en toda Catalunya.',
    eyebrow: 'Bodas',
    hero: { foto: '/fotos/bodas.jpg', objectPosition: 'center 30%' },
    queHacemos: [
      'Acompañamos cada momento clave de la boda: ceremonia con guitarra acústica, cóctel ambiental con repertorio suave, banquete con set festivo cuidado, y barra libre con la jarana al máximo. Adaptamos volumen, intensidad y selección según el momento.',
      'Personalizamos canción de ceremonia, primer baile y entrada de los novios sin coste adicional. Necesitamos 4-6 semanas de antelación para ensayar versiones a medida con garantía.',
      'Coordinamos con tu wedding planner y con el técnico de sonido del venue. Mandamos rider técnico en PDF, ficha de necesidades y planning de prueba de sonido + montaje.',
    ],
    comoEs: [
      'Show 100% en directo de 120 minutos (extensible). Sin pistas pregrabadas. Voz, guitarra española, guitarra eléctrica, teclado/bajo y batería.',
      'Repertorio bilingüe ES/CA: pop-rock de los 2000, rumba catalana, latineo y verbeneras. Lo equilibramos según el público — manda el contexto.',
      'Interacción cercana con la audiencia, vestuario adaptado al tono de la boda (elegante o festivo según prefieras).',
    ],
    repertorio:
      'Para bodas mezclamos clásicos universales (Sin documentos, La flaca, La camisa negra) con rumba catalana (Estopa, El Barrio), pop-rock catalán (Sopa de Cabra, Els Catarres) y los himnos festivos que cierran la noche. Ajustamos el orden de los bloques al timing del banquete.',
    casoReal:
      'Diciembre 2025 — boda en Cangabarró. Show de 120 minutos para cien invitados, sonido propio + 2 técnicos, personalización del primer baile con versión rumbera a medida.',
    formatoRecomendado:
      'Cuarteto (1.000–1.300 €) para bodas íntimas o medianas. Quinteto con trompeta (1.200–1.500 €) si quieres añadir vientos a los temas de rumba.',
    faqs: [
      {
        q: '¿Cuánto cuesta contratar una banda para una boda en Barcelona?',
        a: 'Lady Jarana en formato cuarteto cuesta 1.000–1.300 €. Quinteto 1.200–1.500 €. Banda completa desde 1.400 €. Sonido propio + 2 técnicos desde 600 € si el venue no tiene PA. Toda Catalunya sin recargo.',
      },
      {
        q: '¿Tocáis durante la ceremonia?',
        a: 'Sí. Para la ceremonia adaptamos el formato a versión más acústica e íntima (voz + guitarra española, opcionalmente con teclado). Preparamos la canción de entrada y la canción de cierre que elijáis sin coste adicional.',
      },
      {
        q: '¿Cómo es el primer baile con banda en directo?',
        a: 'Lo tocamos en vivo, en la tonalidad que prefieras. Podemos hacer la versión original, una versión rumbera o acústica, o un medley con otro tema. Te enviamos grabación de prueba antes de la boda para que apruebes la propuesta.',
      },
      {
        q: '¿Cuánto dura el show en una boda?',
        a: 'Show estándar 120 minutos. Podemos dividirlo en dos sets (uno tras la cena, otro después del corte de tarta) o tocar de seguido. Para barra libre extendida añadimos extras a pactar.',
      },
      {
        q: '¿Cuándo hay que reservar fecha para una boda?',
        a: 'Para sábados de mayo a septiembre, 6-12 meses de antelación. Resto del año, 2-4 meses. Anticipo del 30% al firmar contrato.',
      },
    ],
    serviceType: 'Banda en directo para bodas',
    audience: 'Parejas que se casan en Barcelona, Catalunya y resto de España',
  },

  'fiestas-mayores': {
    slug: 'fiestas-mayores',
    slugAlt: 'festes-majors',
    titulo: 'Banda para festes majors en Catalunya',
    intro:
      'Lady Jarana es la banda que la plaça estaba esperando. Pop-rock, rumba catalana, latineo y verbeneras en directo para festes majors municipales en toda Catalunya. Formato quinteto con trompeta o banda completa para escenarios XXL. Cuarteto 1.000–1.300 €, quinteto 1.200–1.500 €, banda completa desde 1.400 €.',
    eyebrow: 'Festes Majors',
    hero: { foto: '/fotos/fiestas-mayores.jpg', objectPosition: 'center 40%' },
    queHacemos: [
      'Llenamos la plaza con energía sostenida durante 120 minutos. Repertorio diseñado para que cante todo el pueblo: pop-rock español y catalán de los 2000, rumba catalana, verbeneras y latineo. La proporción ES/CA se adapta al contexto de la festa.',
      'Trabajamos con técnicos del ayuntamiento y producción local. Mandamos rider técnico en PDF, dossier completo con fotos en alta para programación y comunicación, y nos coordinamos con el equipo del bolo desde semanas antes.',
      'Facturamos con NIF y régimen fiscal regularizado (proyecto de 94 Music). Listado de canciones interpretadas para declaración a SGAE si corresponde.',
    ],
    comoEs: [
      'Show 100% en directo de 120 minutos + bises. Voz, guitarra española, guitarra eléctrica, teclado/bajo, batería y trompeta (formato quinteto, el más demandado para festes majors).',
      'Capacidad de escalar a banda completa con percusión menor, saxo o guitarra adicional para escenarios grandes.',
      'Interacción constante con el público, energía adaptada al volumen de la plaza, vestuario festivo.',
    ],
    repertorio:
      'Para festes majors damos peso a la rumba catalana, el pop-rock catalán (Sopa de Cabra, Els Catarres, The Tyets) y las verbeneras. Cerramos con himnos festivos que canta hasta la suegra.',
    casoReal:
      'Festa Major de Sant Adrià de Besòs (septiembre 2025): escenario principal, formato XXL, producción ampliada. Festa Major de Barberà del Vallès (verano 2025): primer bolo en circuito municipal. Rumba Beach Festival × 2 ediciones (organizado por la AAVV Barceloneta).',
    formatoRecomendado:
      'Quinteto (1.200–1.500 €) — formato principal y el más demandado para festes majors. La trompeta marca diferencia en plaza grande. Banda completa (desde 1.400 €) para escenarios XXL.',
    faqs: [
      {
        q: '¿Cuánto cobráis para una festa major?',
        a: 'Quinteto 1.200–1.500 €. Cuarteto 1.000–1.300 € (suficiente para fiestas menores). Banda completa desde 1.400 € para escenarios grandes. Sonido del venue suele estar incluido en festes municipales.',
      },
      {
        q: '¿Trabajáis con ayuntamientos?',
        a: 'Sí, ya hemos tocado para los ayuntamientos de Sant Adrià de Besòs y Barberà del Vallès. Tenemos protocolo profesional: rider, dossier PDF, factura completa con IVA, declaración SGAE y coordinación con técnico municipal.',
      },
      {
        q: '¿En qué idioma cantáis?',
        a: 'Show bilingüe ES/CA. En festes majors la proporción suele cargar hacia el catalán: pop-rock catalán (L\'Empordà, Coti x Coti, La Marina sta morena), rumba catalana y verbeneras tradicionales mezcladas con clásicos en castellano.',
      },
      {
        q: '¿Cuánto necesitáis para el montaje?',
        a: 'Acceso al escenario 2 horas antes del show. Prueba de sonido mínimo 1 hora con técnico disponible. Si el venue tiene PA preinstalado, 1 hora es suficiente.',
      },
      {
        q: '¿Dónde tocáis?',
        a: 'Toda Catalunya sin recargo: Barcelona, área metropolitana, Costa Brava, Maresme, Garraf, Vallès, Anoia, Penedès, Osona, Pirineu y todas las comarcas catalanas.',
      },
    ],
    serviceType: 'Banda para festes majors municipales',
    audience: 'Ayuntamientos, asociaciones de vecinos, productoras de festes majors en Catalunya',
  },

  'eventos-privados': {
    slug: 'eventos-privados',
    slugAlt: 'esdeveniments-privats',
    titulo: 'Banda en directo para eventos privados en Barcelona y Catalunya',
    intro:
      'Lady Jarana para aniversarios, cumpleaños grandes, fiestas en finca, fiestas de barrio, celebraciones familiares o cualquier evento privado que merezca banda en directo. Formato flexible desde cuarteto (1.000–1.300 €), sonido propio opcional si el espacio no tiene equipo. Toda Catalunya sin recargo.',
    eyebrow: 'Eventos privados',
    hero: { foto: '/fotos/eventos-privados.jpg', objectPosition: 'center 30%' },
    queHacemos: [
      'Adaptamos el show al espacio, al aforo y al tono de la celebración. Desde una fiesta familiar de 40 invitados hasta una celebración de barrio de 300 personas — el formato escala.',
      'Si tu espacio (finca, terraza, jardín, local) no tiene PA, llevamos sonido propio con 2 técnicos desde 600 €. Si tienes equipo o el venue lo aporta, mejor para tu bolsillo y nos coordinamos con el técnico que toque.',
      'Personalizamos el repertorio si hay momentos especiales (sorpresa, regalo, dedicatoria) que quieras integrar al show. Sin coste adicional.',
    ],
    comoEs: [
      'Show de 120 minutos en directo, ajustable en duración según el evento. Energía adaptada al aforo y al ambiente que quieras crear.',
      'Repertorio versátil bilingüe ES/CA. Si tu gente es más rumba, vamos a rumba. Si es más pop, vamos a pop. Lo afinamos en la llamada de coordinación.',
    ],
    repertorio:
      'Mezcla equilibrada de pop-rock español y catalán, rumba catalana, latineo y verbeneras. Para eventos privados solemos cargar más en hits universales que en clásicos catalanes (a menos que el cliente lo pida explícitamente).',
    formatoRecomendado:
      'Cuarteto (1.000–1.300 €) cubre la mayoría de eventos privados. Quinteto con trompeta (1.200–1.500 €) si quieres añadir el toque festivo de los vientos.',
    faqs: [
      {
        q: '¿Cuánto cuesta una banda para una fiesta privada?',
        a: 'Cuarteto 1.000–1.300 €, quinteto 1.200–1.500 €. Si el espacio no tiene equipo de sonido, sumamos PA propio + 2 técnicos desde 600 €. Sin desplazamiento dentro de Catalunya.',
      },
      {
        q: '¿Tocáis en fincas y espacios al aire libre?',
        a: 'Sí, frecuentemente. Para espacios sin instalación llevamos sonido propio (Opción B, desde 600 €). Necesitamos punto de luz, espacio mínimo para montar el escenario (4×3 metros) y acceso para descarga.',
      },
      {
        q: '¿Cuál es el aforo mínimo para que tenga sentido contratar banda?',
        a: 'No hay aforo mínimo formal, pero a partir de 40-50 invitados la banda en directo tiene impacto. Para grupos más pequeños puede compensar más un DJ o un dúo acústico — preferimos decírtelo si tu evento no encaja antes de aceptar.',
      },
      {
        q: '¿Podéis tocar temas específicos que pidan los invitados?',
        a: 'Si nos lo decís con antelación (mínimo 4 semanas), podemos preparar versiones a medida. Para peticiones en directo durante el show, hacemos lo que está dentro del repertorio o muy próximo a él.',
      },
      {
        q: '¿Cómo es el proceso de reserva?',
        a: 'WhatsApp con fecha, lugar y formato. Te respondemos con disponibilidad y presupuesto en minutos. Si encaja, contrato simple por email y anticipo del 30% para bloquear fecha.',
      },
    ],
    serviceType: 'Banda en directo para eventos privados',
    audience: 'Particulares organizando aniversarios, cumpleaños, fiestas en finca o celebraciones privadas',
  },

  'eventos-empresa': {
    slug: 'eventos-empresa',
    slugAlt: 'esdeveniments-empresa',
    titulo: 'Banda en directo para eventos de empresa en Barcelona',
    intro:
      'Lady Jarana para cenas corporativas, fin de año, team buildings, inauguraciones, presentaciones de producto y fiestas de empresa en Barcelona y Catalunya. Formato escalable, repertorio adaptable al tono corporativo, profesionalidad para evento de empresa. Cuarteto desde 1.000 €.',
    eyebrow: 'Eventos de empresa',
    hero: { foto: '/fotos/eventos-empresa.jpg', objectPosition: 'center 50%' },
    queHacemos: [
      'Adaptamos el show al tono del evento: ambiente sofisticado para cenas y networking, energía total para fiestas de fin de año o team buildings. La selección de repertorio y el volumen se ajustan.',
      'Coordinamos con el equipo de eventos de la empresa o con la agencia de eventos. Profesionalidad en la comunicación, facturación regular con IVA, puntualidad y vestuario adaptado al dress code del evento.',
      'Si el evento incluye discurso, presentación o gala antes del show, sincronizamos timings y volúmenes para no interferir.',
    ],
    comoEs: [
      'Show 100% en directo de 120 minutos (ajustable). Repertorio versátil que funciona bien en contexto corporativo: pop-rock internacional, rumba, latineo accesible.',
      'Formato cuarteto o quinteto según el espacio. Para galas grandes podemos escalar a banda completa.',
    ],
    repertorio:
      'Para empresa solemos cargar repertorio más universal (clásicos del pop-rock español + algo de pop latino) y menos verbenera, salvo que la empresa quiera ambiente más festivo. Ajustamos según briefing.',
    formatoRecomendado:
      'Cuarteto (1.000–1.300 €) para cenas y eventos medianos. Quinteto (1.200–1.500 €) para fiestas grandes de fin de año.',
    faqs: [
      {
        q: '¿Cuánto cuesta contratar una banda para un evento de empresa?',
        a: 'Cuarteto 1.000–1.300 €, quinteto 1.200–1.500 €, banda completa desde 1.400 €. Sonido propio + técnicos desde 600 € si el espacio no tiene PA. Factura con IVA emitida por 94 Music.',
      },
      {
        q: '¿Tocáis en cenas corporativas?',
        a: 'Sí. Adaptamos el volumen y el repertorio para que la cena sea cómoda (música ambient) y subimos energía para el momento de baile tras la cena. Coordinamos con el catering y el regidor del evento.',
      },
      {
        q: '¿Trabajáis con agencias de eventos?',
        a: 'Sí. Tenemos dossier completo en PDF y material gráfico para uso libre (logos, fotos, vídeo promo) en /material. Facturación profesional con IVA, NIF regularizado, contrato simple.',
      },
      {
        q: '¿Cuánto dura el show?',
        a: 'Estándar 120 minutos. Podemos dividirlo en dos sets si la gala incluye discurso o cena previa. Para fiestas largas añadimos extras a pactar.',
      },
      {
        q: '¿Tocáis fuera de Catalunya?',
        a: 'Toda Catalunya sin recargo. Fuera de Catalunya consultamos desplazamiento, dietas y alojamiento. No cerramos puertas — hemos tocado en otras zonas de España con presupuesto adecuado.',
      },
    ],
    serviceType: 'Banda en directo para eventos corporativos',
    audience: 'Empresas, agencias de eventos, productoras de gala corporativa',
  },
};

// ─── CA ───────────────────────────────────────────────────────────────────
export const serviciosCA: Record<string, ServicioContent> = {
  casaments: {
    slug: 'casaments',
    slugAlt: 'bodas',
    titulo: 'Grup en directe per a casaments a Barcelona i Catalunya',
    intro:
      'Lady Jarana és el grup en directe per a casaments que converteix una recepció en festa major. Quatre músics professionals, repertori bilingüe ES/CA i un xou 100% en directe que cobreix des del còctel fins a la barra lliure. Quartet des de 1.000 €, ideal per a casaments a finca, masia, hotel o restaurant a tota Catalunya.',
    eyebrow: 'Casaments',
    hero: { foto: '/fotos/bodas.jpg', objectPosition: 'center 30%' },
    queHacemos: [
      'Acompanyem cada moment clau del casament: cerimònia amb guitarra acústica, còctel ambiental amb repertori suau, banquet amb set festiu cuidat, i barra lliure amb la jarana al màxim. Adaptem volum, intensitat i selecció segons el moment.',
      'Personalitzem cançó de cerimònia, primer ball i entrada dels nuvis sense cost addicional. Necessitem 4-6 setmanes d\'antelació per assajar versions a mida amb garantia.',
      'Coordinem amb el teu wedding planner i amb el tècnic de so del venue. Enviem rider tècnic en PDF, fitxa de necessitats i planning de prova de so + muntatge.',
    ],
    comoEs: [
      'Xou 100% en directe de 120 minuts (ampliable). Sense pistes pregravades. Veu, guitarra espanyola, guitarra elèctrica, teclat/baix i bateria.',
      'Repertori bilingüe ES/CA: pop-rock dels 2000, rumba catalana, latineig i revetlleres. L\'equilibrem segons el públic — mana el context.',
      'Interacció propera amb l\'audiència, vestuari adaptat al to del casament.',
    ],
    repertorio:
      'Per a casaments barregem clàssics universals (Sin documentos, La flaca, La camisa negra) amb rumba catalana (Estopa, El Barrio), pop-rock català (Sopa de Cabra, Els Catarres) i els himnes festius que tanquen la nit.',
    casoReal:
      'Desembre 2025 — casament a Cangabarró. Xou de 120 minuts per a cent convidats, so propi + 2 tècnics, personalització del primer ball amb versió rumbera a mida.',
    formatoRecomendado:
      'Quartet (1.000–1.300 €) per a casaments íntims o mitjans. Quintet amb trompeta (1.200–1.500 €) si vols afegir vents als temes de rumba.',
    faqs: [
      {
        q: 'Quant costa contractar un grup per a un casament a Barcelona?',
        a: 'Lady Jarana en format quartet costa 1.000–1.300 €. Quintet 1.200–1.500 €. Banda completa des de 1.400 €. So propi + 2 tècnics des de 600 € si el venue no té PA. Tota Catalunya sense recàrrec.',
      },
      {
        q: 'Toqueu durant la cerimònia?',
        a: 'Sí. Per a la cerimònia adaptem el format a versió més acústica i íntima (veu + guitarra espanyola, opcionalment amb teclat). Preparem la cançó d\'entrada i la de tancament que trieu sense cost addicional.',
      },
      {
        q: 'Com és el primer ball amb banda en directe?',
        a: 'El toquem en directe, en la tonalitat que prefereixis. Podem fer la versió original, una rumbera o acústica, o un medley amb un altre tema. T\'enviem gravació de prova abans del casament perquè aprovis la proposta.',
      },
      {
        q: 'Quant dura el xou en un casament?',
        a: 'Estàndard 120 minuts. Podem dividir-lo en dos sets (un després del sopar, un després del tall del pastís) o tocar de seguit. Per a barra lliure ampliada afegim extres a pactar.',
      },
      {
        q: 'Amb quanta antelació cal reservar data per a un casament?',
        a: 'Per a dissabtes de maig a setembre, 6-12 mesos d\'antelació. Resta de l\'any, 2-4 mesos. Bestreta del 30% en signar contracte.',
      },
    ],
    serviceType: 'Grup en directe per a casaments',
    audience: 'Parelles que es casen a Barcelona, Catalunya i resta d\'Espanya',
  },

  'festes-majors': {
    slug: 'festes-majors',
    slugAlt: 'fiestas-mayores',
    titulo: 'Grup per a festes majors a Catalunya',
    intro:
      'Lady Jarana és el grup que la plaça estava esperant. Pop-rock, rumba catalana, latineig i revetlleres en directe per a festes majors municipals a tota Catalunya. Format quintet amb trompeta o banda completa per a escenaris XXL. Quartet 1.000–1.300 €, quintet 1.200–1.500 €, banda completa des de 1.400 €.',
    eyebrow: 'Festes majors',
    hero: { foto: '/fotos/fiestas-mayores.jpg', objectPosition: 'center 40%' },
    queHacemos: [
      'Omplim la plaça amb energia sostinguda durant 120 minuts. Repertori dissenyat perquè canti tot el poble: pop-rock català i espanyol dels 2000, rumba catalana, revetlleres i latineig. La proporció ES/CA s\'adapta al context de la festa.',
      'Treballem amb tècnics de l\'ajuntament i producció local. Enviem rider tècnic en PDF, dossier complet amb fotos en alta per a programació i comunicació, i ens coordinem amb l\'equip del bolo des de setmanes abans.',
      'Facturem amb NIF i règim fiscal regularitzat (projecte de 94 Music). Llistat de cançons interpretades per a declaració a la SGAE si correspon.',
    ],
    comoEs: [
      'Xou 100% en directe de 120 minuts + bisos. Veu, guitarra espanyola, guitarra elèctrica, teclat/baix, bateria i trompeta (format quintet, el més demanat per a festes majors).',
      'Capacitat d\'escalar a banda completa amb percussió menor, saxo o guitarra addicional per a escenaris grans.',
      'Interacció constant amb el públic, energia adaptada al volum de la plaça, vestuari festiu.',
    ],
    repertorio:
      'Per a festes majors donem pes a la rumba catalana, el pop-rock català (Sopa de Cabra, Els Catarres, The Tyets) i les revetlleres. Tanquem amb himnes festius que canta fins i tot la sogra.',
    casoReal:
      'Festa Major de Sant Adrià de Besòs (setembre 2025): escenari principal, format XXL, producció ampliada. Festa Major de Barberà del Vallès (estiu 2025): primer bolo en circuit municipal. Rumba Beach Festival × 2 edicions (AAVV Barceloneta).',
    formatoRecomendado:
      'Quintet (1.200–1.500 €) — format principal i el més demanat per a festes majors. La trompeta marca diferència en plaça gran. Banda completa (des de 1.400 €) per a escenaris XXL.',
    faqs: [
      {
        q: 'Quant cobreu per a una festa major?',
        a: 'Quintet 1.200–1.500 €. Quartet 1.000–1.300 €. Banda completa des de 1.400 €. El so del venue sol estar inclòs en festes municipals.',
      },
      {
        q: 'Treballeu amb ajuntaments?',
        a: 'Sí, ja hem tocat per als ajuntaments de Sant Adrià de Besòs i Barberà del Vallès. Tenim protocol professional: rider, dossier PDF, factura completa amb IVA, declaració SGAE i coordinació amb tècnic municipal.',
      },
      {
        q: 'En quin idioma canteu?',
        a: 'Xou bilingüe ES/CA. En festes majors la proporció sol carregar cap al català: pop-rock català (L\'Empordà, Coti x Coti, La Marina sta morena), rumba catalana i revetlleres tradicionals barrejades amb clàssics en castellà.',
      },
      {
        q: 'Quant necessiteu per al muntatge?',
        a: 'Accés a l\'escenari 2 hores abans del xou. Prova de so mínim 1 hora amb tècnic disponible. Si el venue té PA preinstal·lat, 1 hora és suficient.',
      },
      {
        q: 'On toqueu?',
        a: 'Tota Catalunya sense recàrrec: Barcelona, àrea metropolitana, Costa Brava, Maresme, Garraf, Vallès, Anoia, Penedès, Osona, Pirineu i totes les comarques catalanes.',
      },
    ],
    serviceType: 'Grup per a festes majors municipals',
    audience: 'Ajuntaments, associacions de veïns, productores de festes majors a Catalunya',
  },

  'esdeveniments-privats': {
    slug: 'esdeveniments-privats',
    slugAlt: 'eventos-privados',
    titulo: 'Grup en directe per a esdeveniments privats a Barcelona i Catalunya',
    intro:
      'Lady Jarana per a aniversaris, festes a finca, festes de barri, celebracions familiars o qualsevol esdeveniment privat que mereixi banda en directe. Format flexible des de quartet (1.000–1.300 €), so propi opcional si l\'espai no té equip. Tota Catalunya sense recàrrec.',
    eyebrow: 'Esdeveniments privats',
    hero: { foto: '/fotos/eventos-privados.jpg', objectPosition: 'center 30%' },
    queHacemos: [
      'Adaptem el xou a l\'espai, l\'aforament i el to de la celebració. Des d\'una festa familiar de 40 convidats fins a una celebració de barri de 300 persones — el format escala.',
      'Si el teu espai (finca, terrassa, jardí, local) no té PA, portem so propi amb 2 tècnics des de 600 €. Si tens equip o el venue l\'aporta, millor per a la teva butxaca i ens coordinem amb el tècnic que toqui.',
      'Personalitzem el repertori si hi ha moments especials (sorpresa, regal, dedicatòria) que vulguis integrar al xou. Sense cost addicional.',
    ],
    comoEs: [
      'Xou de 120 minuts en directe, ajustable en durada segons l\'esdeveniment. Energia adaptada a l\'aforament i l\'ambient que vulguis crear.',
      'Repertori versàtil bilingüe ES/CA. Si la teva gent és més rumba, anem a rumba. Si és més pop, anem a pop. L\'afinem a la trucada de coordinació.',
    ],
    repertorio:
      'Barreja equilibrada de pop-rock català i espanyol, rumba catalana, latineig i revetlleres. Per a esdeveniments privats solem carregar més en hits universals que en clàssics catalans (tret que el client ho demani explícitament).',
    formatoRecomendado:
      'Quartet (1.000–1.300 €) cobreix la majoria d\'esdeveniments privats. Quintet amb trompeta (1.200–1.500 €) si vols afegir el toc festiu dels vents.',
    faqs: [
      {
        q: 'Quant costa un grup per a una festa privada?',
        a: 'Quartet 1.000–1.300 €, quintet 1.200–1.500 €. Si l\'espai no té equip de so, sumem PA propi + 2 tècnics des de 600 €. Sense desplaçament dins de Catalunya.',
      },
      {
        q: 'Toqueu en finques i espais a l\'aire lliure?',
        a: 'Sí, freqüentment. Per a espais sense instal·lació portem so propi (Opció B, des de 600 €). Necessitem punt de llum, espai mínim per muntar l\'escenari (4×3 metres) i accés per descàrrega.',
      },
      {
        q: 'Quin és l\'aforament mínim perquè tingui sentit contractar banda?',
        a: 'No hi ha aforament mínim formal, però a partir de 40-50 convidats la banda en directe té impacte. Per a grups més petits pot compensar més un DJ o un duo acústic.',
      },
      {
        q: 'Podeu tocar temes específics que demanin els convidats?',
        a: 'Si ens ho dieu amb antelació (mínim 4 setmanes), podem preparar versions a mida. Per a peticions en directe durant el xou, fem el que està dins del repertori o molt a prop.',
      },
      {
        q: 'Com és el procés de reserva?',
        a: 'WhatsApp amb data, lloc i format. Et responem amb disponibilitat i pressupost en minuts. Si encaixa, contracte simple per email i bestreta del 30% per bloquejar data.',
      },
    ],
    serviceType: 'Grup en directe per a esdeveniments privats',
    audience: 'Particulars que organitzen aniversaris, festes a finca o celebracions privades',
  },

  'esdeveniments-empresa': {
    slug: 'esdeveniments-empresa',
    slugAlt: 'eventos-empresa',
    titulo: "Grup en directe per a esdeveniments d'empresa a Barcelona",
    intro:
      'Lady Jarana per a sopars corporatius, cap d\'any, team buildings, inauguracions, presentacions de producte i festes d\'empresa a Barcelona i Catalunya. Format escalable, repertori adaptable al to corporatiu, professionalitat per a esdeveniment d\'empresa. Quartet des de 1.000 €.',
    eyebrow: 'Esdeveniments d\'empresa',
    hero: { foto: '/fotos/eventos-empresa.jpg', objectPosition: 'center 50%' },
    queHacemos: [
      'Adaptem el xou al to de l\'esdeveniment: ambient sofisticat per a sopars i networking, energia total per a festes de cap d\'any o team buildings. La selecció de repertori i el volum s\'ajusten.',
      'Coordinem amb l\'equip d\'esdeveniments de l\'empresa o amb l\'agència. Professionalitat en la comunicació, facturació regular amb IVA, puntualitat i vestuari adaptat al dress code.',
      'Si l\'esdeveniment inclou discurs, presentació o gala abans del xou, sincronitzem timings i volums per no interferir.',
    ],
    comoEs: [
      'Xou 100% en directe de 120 minuts (ajustable). Repertori versàtil que funciona bé en context corporatiu: pop-rock internacional, rumba, latineig accessible.',
      'Format quartet o quintet segons l\'espai. Per a gales grans podem escalar a banda completa.',
    ],
    repertorio:
      'Per a empresa solem carregar repertori més universal (clàssics del pop-rock espanyol + alguna cosa de pop llatí) i menys revetllera, tret que l\'empresa vulgui ambient més festiu.',
    formatoRecomendado:
      'Quartet (1.000–1.300 €) per a sopars i esdeveniments mitjans. Quintet (1.200–1.500 €) per a festes grans de cap d\'any.',
    faqs: [
      {
        q: 'Quant costa contractar un grup per a un esdeveniment d\'empresa?',
        a: 'Quartet 1.000–1.300 €, quintet 1.200–1.500 €, banda completa des de 1.400 €. So propi + tècnics des de 600 € si l\'espai no té PA. Factura amb IVA emesa per 94 Music.',
      },
      {
        q: 'Toqueu en sopars corporatius?',
        a: 'Sí. Adaptem el volum i el repertori perquè el sopar sigui còmode (música ambient) i pugem energia per al moment de ball després. Coordinem amb el càtering i el regidor de l\'esdeveniment.',
      },
      {
        q: 'Treballeu amb agències d\'esdeveniments?',
        a: 'Sí. Tenim dossier complet en PDF i material gràfic per a ús lliure (logos, fotos, vídeo promo) a /ca/material. Facturació professional amb IVA, NIF regularitzat, contracte simple.',
      },
      {
        q: 'Quant dura el xou?',
        a: 'Estàndard 120 minuts. Podem dividir-lo en dos sets si la gala inclou discurs o sopar previ. Per a festes llargues afegim extres a pactar.',
      },
      {
        q: 'Toqueu fora de Catalunya?',
        a: 'Tota Catalunya sense recàrrec. Fora de Catalunya consultem desplaçament, dietes i allotjament. No tanquem portes.',
      },
    ],
    serviceType: 'Grup en directe per a esdeveniments corporatius',
    audience: 'Empreses, agències d\'esdeveniments, productores de gala corporativa',
  },
};
