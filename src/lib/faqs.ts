export interface FAQ {
  q: string;
  a: string;
  /** Categoría para agrupar en la UI */
  cat: 'precios' | 'formato' | 'sonido' | 'zona' | 'show' | 'reserva' | 'banda';
}

// ─── FAQs Castellano ───────────────────────────────────────────────────────
export const faqsES: FAQ[] = [
  // Precios
  {
    cat: 'precios',
    q: '¿Cuánto cuesta contratar Lady Jarana?',
    a: 'Cuarteto desde 1000 €. Quinteto 1200 €. Banda completa desde 1400 €. Cada músico adicional sobre el cuarteto suma 200 €. No hacemos dúo ni trío. El precio incluye 120 minutos de show, repertorio personalizable y coordinación previa con tu wedding planner o programador.',
  },
  {
    cat: 'precios',
    q: '¿Qué incluye el precio?',
    a: 'Show en directo de 120 minutos, repertorio bilingüe ES/CA con canciones personalizadas (ceremonia, primer baile, entradas), cuatro músicos profesionales y coordinación previa con el organizador. No incluye sonido (ver opciones de equipo), backline en venues sin instalación, ni desplazamientos largos fuera de Catalunya.',
  },
  {
    cat: 'precios',
    q: '¿Hacéis dúo o trío para presupuestos más bajos?',
    a: 'No. Nuestra formación mínima es cuarteto porque consideramos que un dúo o trío no entrega la energía y el sonido pleno que define a Lady Jarana. Si tu presupuesto no llega al cuarteto, te recomendamos buscar otra banda más adecuada — preferimos eso a darte un show por debajo del estándar.',
  },
  {
    cat: 'precios',
    q: '¿Pedís señal o anticipo para reservar fecha?',
    a: 'Sí. Para bloquear fecha pedimos un anticipo del 30% al firmar el contrato. El 70% restante se abona el día del evento o por transferencia previa según preferencia del cliente.',
  },
  {
    cat: 'precios',
    q: '¿Qué pasa si cancelo el evento?',
    a: 'Las condiciones de cancelación se especifican en el contrato. En general: hasta 60 días antes se devuelve el 100% del anticipo. Entre 30 y 60 días, el 50%. Menos de 30 días, el anticipo se retiene como compensación por la fecha bloqueada.',
  },

  // Formato
  {
    cat: 'formato',
    q: '¿Cuántos músicos sois?',
    a: 'Lady Jarana es un cuarteto base: Víctor Torres (voz y guitarra española), Alejo Finger (guitarra eléctrica), Iván Cortés (teclado y bajo) y Diego Aquino (batería). En formato quinteto se incorpora Antonio (trompeta). En banda completa añadimos bajista, percusión menor, saxo o guitarra adicional según el evento.',
  },
  {
    cat: 'formato',
    q: '¿Cuál es el formato más recomendado?',
    a: 'El quinteto es el formato principal y el que más nos piden: cuarteto + trompeta. La trompeta llena los temas de rumba y los himnos verbeneros, y para festes majors o bodas grandes marca la diferencia. Para bodas íntimas o salas pequeñas el cuarteto sobra. Para festivales y escenarios XXL recomendamos banda completa.',
  },
  {
    cat: 'formato',
    q: '¿Cuánto dura el show?',
    a: '120 minutos en formato estándar. Podemos ampliar con bises, segundo set tras la cena, o pasar directamente a barra libre con set extendido. Lo afinamos en el presupuesto según necesidades del evento.',
  },

  // Sonido
  {
    cat: 'sonido',
    q: '¿Lleváis equipo de sonido?',
    a: 'Tenemos dos opciones. Opción A (recomendada): el venue aporta PA y técnico de sonido, nosotros mandamos rider y nos coordinamos con su técnico. Opción B: PA propio + 2 técnicos desde 600 €. La opción B es ideal para bodas en finca, espacios sin equipo o eventos privados al aire libre.',
  },
  {
    cat: 'sonido',
    q: '¿Cómo es vuestro rider técnico?',
    a: 'Cuatro micrófonos vocales SM58, DI para guitarra española, ampli de bajo y cabezal, ampli de guitarra eléctrica (combo de válvulas), kit completo de batería con micros, 4 monitores idealmente con mezclas independientes, mesa de 12 canales mínimo. Te lo pasamos en PDF cuando lo pidas por WhatsApp.',
  },
  {
    cat: 'sonido',
    q: '¿Cuánto tiempo necesitáis para montar y probar sonido?',
    a: 'Mínimo 1 hora de prueba de sonido antes del show. Idealmente acceso al venue 2 horas antes para montaje completo. Si el venue tiene PA preinstalado, 1 hora es suficiente.',
  },

  // Zona
  {
    cat: 'zona',
    q: '¿Dónde tocáis?',
    a: 'Toda Catalunya sin recargo de desplazamiento: Barcelona ciudad, área metropolitana, costa catalana (Costa Brava, Maresme, Garraf), comarcas interiores y Pirineos. Fuera de Catalunya consultamos desplazamiento + dietas, pero no cerramos puertas: hemos tocado en otras zonas de España bajo presupuesto específico.',
  },
  {
    cat: 'zona',
    q: '¿Cobráis desplazamiento dentro de Catalunya?',
    a: 'No. El desplazamiento dentro de Catalunya está incluido en el precio del formato. Solo se aplica recargo en eventos fuera de Catalunya, donde sumamos kilometraje + alojamiento si corresponde.',
  },

  // Show
  {
    cat: 'show',
    q: '¿Qué estilos musicales tocáis?',
    a: 'Tres pilares principales: pop-rock de los 2000 en castellano y catalán (El Canto del Loco, Fito & Fitipaldis, Jarabe de Palo, Sopa de Cabra, Els Catarres), rumba catalana y flamenco-pop (Estopa, Los Delinqüentes, El Barrio, Manu Chao) y pop latino actual (Manuel Turizo, Sebastián Yatra, The Tyets). El repertorio completo (37 canciones) está en la playlist oficial de Spotify y en /repertorio.',
  },
  {
    cat: 'show',
    q: '¿Cantáis en catalán?',
    a: 'Sí, el show es bilingüe ES/CA. Tenemos pop-rock catalán (L\'Empordà de Sopa de Cabra, Jennifer dels Catarres, Coti x Coti de The Tyets, La Marina sta morena), rumba catalana y temas en castellano. La proporción ES/CA la adaptamos al público — manda el contexto del evento.',
  },
  {
    cat: 'show',
    q: '¿Tocáis música en directo o pinchais pistas pregrabadas?',
    a: '100% banda en directo, 0% pista pregrabada. Cuatro músicos tocando todos los instrumentos cada noche. Si quieres una experiencia híbrida con DJ entre nuestros sets, lo coordinamos con el técnico o DJ del evento.',
  },
  {
    cat: 'show',
    q: '¿Se puede personalizar el repertorio?',
    a: 'Sí. Si tenéis un tema especial para la ceremonia, primer baile, entrada de los novios o un momento clave, lo preparamos. Necesitamos 4-6 semanas de antelación para ensayar una versión a medida con garantía. Las versiones especiales no tienen coste adicional.',
  },
  {
    cat: 'show',
    q: '¿Cómo es el primer baile?',
    a: 'Lo tocamos en directo, en la tonalidad y arreglo que prefieras. Podemos hacer la versión original, una versión rumbera, acústica o medley con otra canción. Te enviamos una grabación de prueba antes del evento para que apruebes la propuesta.',
  },

  // Reserva
  {
    cat: 'reserva',
    q: '¿Con cuánta antelación hay que reservar?',
    a: 'Para sábados de primavera-verano (mayo a septiembre), 6-12 meses de antelación. El resto del año, 2-4 meses. Si la fecha está libre, podemos cerrar reservas con menos margen. Lo más rápido es preguntar por WhatsApp.',
  },
  {
    cat: 'reserva',
    q: '¿Cómo es el proceso de reserva?',
    a: 'Tres pasos. 1) Nos escribes fecha, lugar y formato por WhatsApp; te enviamos disponibilidad y presupuesto en minutos. 2) Si encaja, firmamos contrato simple por email y abonas el 30% de anticipo. 3) Coordinamos detalles (repertorio, primer baile, rider, horarios) 4-6 semanas antes del evento.',
  },
  {
    cat: 'reserva',
    q: '¿Trabajáis con wedding planners y programadores municipales?',
    a: 'Sí, ya hemos colaborado con ayuntamientos (Sant Adrià de Besòs, Barberà del Vallès) y asociaciones de vecinos (Barceloneta, Arc de Triomf). Tenemos protocolo profesional para esos circuitos: rider, dossier PDF, factura completa y coordinación con el técnico del evento.',
  },
  {
    cat: 'reserva',
    q: '¿Emitís factura?',
    a: 'Sí, emitimos factura completa con IVA. Lady Jarana es un proyecto de 94 Music, con NIF y régimen fiscal regularizado.',
  },

  // Banda
  {
    cat: 'banda',
    q: '¿Quién es Lady Jarana?',
    a: 'Lady Jarana es una banda de música en directo formada en Barcelona en la primavera de 2025. Cuarteto base con voz, guitarra española, guitarra eléctrica, teclado/bajo y batería. Especializada en bodas, festes majors y eventos privados en Catalunya. Repertorio bilingüe ES/CA centrado en pop-rock, rumba catalana y latineo. Proyecto de 94 Music.',
  },
  {
    cat: 'banda',
    q: '¿Dónde habéis tocado?',
    a: 'Festes majors de Sant Adrià de Besòs y Barberà del Vallès (ayuntamientos), Centro Asturiano de Barcelona, dos ediciones del Rumba Beach Festival organizado por la Asociación de Vecinos de la Barceloneta, conciertos en el Puerto de la Barceloneta y la Revetlla de Sant Joan 2026 en el Arc de Triomf (Asociación de Vecinos del Arc de Triomf). Lista completa en /eventos.',
  },
  {
    cat: 'banda',
    q: '¿Tenéis dossier descargable?',
    a: 'Sí, dossier PDF con bio, fotos en alta resolución, formatos y rider técnico en /dossier. También material gráfico (logos, vídeo promocional, ilustraciones para cartel) en /material — libre uso para organizadores que vayan a anunciar uno de nuestros bolos.',
  },
  {
    cat: 'banda',
    q: '¿Sois miembros de SGAE o algún colectivo musical?',
    a: 'Cada músico gestiona sus derechos individualmente. Para eventos donde el contratante necesita justificar derechos de autor (eventos públicos, festivales) emitimos el listado de canciones interpretadas para que se declare a SGAE.',
  },
  {
    cat: 'banda',
    q: '¿Cómo os contacto?',
    a: 'WhatsApp +34 627 281 459 (lo más rápido — respondemos en minutos), email ladyjaranamusic@gmail.com o por el formulario en /contratar. Instagram @lady.jarana.',
  },
];

// ─── FAQs Català ───────────────────────────────────────────────────────────
export const faqsCA: FAQ[] = [
  // Preus
  {
    cat: 'precios',
    q: 'Quant costa contractar Lady Jarana?',
    a: 'Quartet des de 1000 €. Quintet 1200 €. Banda completa des de 1400 €. Cada músic addicional sobre el quartet suma 200 €. No fem duo ni trio. El preu inclou 120 minuts de xou, repertori personalitzable i coordinació prèvia amb el teu wedding planner o programador.',
  },
  {
    cat: 'precios',
    q: 'Què inclou el preu?',
    a: 'Xou en directe de 120 minuts, repertori bilingüe ES/CA amb cançons personalitzades (cerimònia, primer ball, entrades), quatre músics professionals i coordinació prèvia amb l\'organitzador. No inclou so (mira les opcions d\'equip), backline en venues sense instal·lació, ni desplaçaments llargs fora de Catalunya.',
  },
  {
    cat: 'precios',
    q: 'Feu duo o trio per a pressupostos més baixos?',
    a: 'No. La nostra formació mínima és quartet perquè considerem que un duo o trio no entrega l\'energia i el so ple que defineix Lady Jarana. Si el teu pressupost no arriba al quartet, et recomanem buscar una altra banda més adequada — preferim això a donar-te un xou per sota del nostre estàndard.',
  },
  {
    cat: 'precios',
    q: 'Demaneu senyal o bestreta per reservar data?',
    a: 'Sí. Per bloquejar data demanem una bestreta del 30% en signar el contracte. El 70% restant s\'abona el dia de l\'esdeveniment o per transferència prèvia segons preferència del client.',
  },
  {
    cat: 'precios',
    q: 'Què passa si cancel·lo l\'esdeveniment?',
    a: 'Les condicions de cancel·lació s\'especifiquen al contracte. En general: fins a 60 dies abans es retorna el 100% de la bestreta. Entre 30 i 60 dies, el 50%. Menys de 30 dies, la bestreta es reté com a compensació per la data bloquejada.',
  },

  // Format
  {
    cat: 'formato',
    q: 'Quants músics sou?',
    a: 'Lady Jarana és un quartet base: Víctor Torres (veu i guitarra espanyola), Alejo Finger (guitarra elèctrica), Iván Cortés (teclat i baix) i Diego Aquino (bateria). En format quintet s\'incorpora Antonio (trompeta). En banda completa afegim baixista, percussió menor, saxo o guitarra addicional segons l\'esdeveniment.',
  },
  {
    cat: 'formato',
    q: 'Quin és el format més recomanat?',
    a: 'El quintet és el format principal i el que més ens demanen: quartet + trompeta. La trompeta omple els temes de rumba i els himnes festius, i per a festes majors o casaments grans marca la diferència. Per a casaments íntims o sales petites el quartet va sobrat. Per a festivals i escenaris XXL recomanem banda completa.',
  },
  {
    cat: 'formato',
    q: 'Quant dura el xou?',
    a: '120 minuts en format estàndard. Podem ampliar amb bisos, segon set després del sopar, o passar directament a barra lliure amb set ampliat. L\'afinem al pressupost segons necessitats de l\'esdeveniment.',
  },

  // So
  {
    cat: 'sonido',
    q: 'Porteu equip de so?',
    a: 'Tenim dues opcions. Opció A (recomanada): el venue aporta PA i tècnic de so, nosaltres enviem rider i ens coordinem amb el seu tècnic. Opció B: PA propi + 2 tècnics des de 600 €. L\'opció B és ideal per a casaments a finca, espais sense equip o esdeveniments privats a l\'aire lliure.',
  },
  {
    cat: 'sonido',
    q: 'Com és el vostre rider tècnic?',
    a: 'Quatre micròfons vocals SM58, DI per a guitarra espanyola, ampli de baix i capçal, ampli de guitarra elèctrica (combo de vàlvules), kit complet de bateria amb micros, 4 monitors idealment amb mescles independents, taula de 12 canals mínim. Te\'l passem en PDF quan ens el demanis per WhatsApp.',
  },
  {
    cat: 'sonido',
    q: 'Quant temps necessiteu per muntar i provar so?',
    a: 'Mínim 1 hora de prova de so abans del xou. Idealment accés al venue 2 hores abans per muntatge complet. Si el venue té PA preinstal·lat, 1 hora és suficient.',
  },

  // Zona
  {
    cat: 'zona',
    q: 'On toqueu?',
    a: 'Tota Catalunya sense recàrrec de desplaçament: Barcelona ciutat, àrea metropolitana, costa catalana (Costa Brava, Maresme, Garraf), comarques interiors i Pirineu. Fora de Catalunya consultem desplaçament + dietes, però no tanquem portes: hem tocat en altres zones d\'Espanya amb pressupost específic.',
  },
  {
    cat: 'zona',
    q: 'Cobreu desplaçament dins de Catalunya?',
    a: 'No. El desplaçament dins de Catalunya està inclòs al preu del format. Només s\'aplica recàrrec en esdeveniments fora de Catalunya, on sumem quilometratge + allotjament si correspon.',
  },

  // Xou
  {
    cat: 'show',
    q: 'Quins estils musicals toqueu?',
    a: 'Tres pilars principals: pop-rock dels 2000 en castellà i català (El Canto del Loco, Fito & Fitipaldis, Jarabe de Palo, Sopa de Cabra, Els Catarres), rumba catalana i flamenco-pop (Estopa, Los Delinqüentes, El Barrio, Manu Chao) i pop llatí actual (Manuel Turizo, Sebastián Yatra, The Tyets). El repertori complet (37 cançons) és a la playlist oficial de Spotify i a /ca/repertori.',
  },
  {
    cat: 'show',
    q: 'Canteu en català?',
    a: 'Sí, el xou és bilingüe ES/CA. Tenim pop-rock català (L\'Empordà de Sopa de Cabra, Jennifer dels Catarres, Coti x Coti de The Tyets, La Marina sta morena), rumba catalana i temes en castellà. La proporció ES/CA l\'adaptem al públic — mana el context de l\'esdeveniment.',
  },
  {
    cat: 'show',
    q: 'Toqueu música en directe o punxeu pistes pregravades?',
    a: '100% banda en directe, 0% pista pregravada. Quatre músics tocant tots els instruments cada nit. Si vols una experiència híbrida amb DJ entre els nostres sets, ho coordinem amb el tècnic o DJ de l\'esdeveniment.',
  },
  {
    cat: 'show',
    q: 'Es pot personalitzar el repertori?',
    a: 'Sí. Si teniu un tema especial per a la cerimònia, primer ball, entrada dels nuvis o un moment clau, el preparem. Necessitem 4-6 setmanes d\'antelació per assajar una versió a mida amb garantia. Les versions especials no tenen cost addicional.',
  },
  {
    cat: 'show',
    q: 'Com és el primer ball?',
    a: 'El toquem en directe, en la tonalitat i arranjament que prefereixis. Podem fer la versió original, una versió rumbera, acústica o medley amb una altra cançó. T\'enviem una gravació de prova abans de l\'esdeveniment perquè aprovis la proposta.',
  },

  // Reserva
  {
    cat: 'reserva',
    q: 'Amb quanta antelació cal reservar?',
    a: 'Per a dissabtes de primavera-estiu (maig a setembre), 6-12 mesos d\'antelació. La resta de l\'any, 2-4 mesos. Si la data és lliure, podem tancar reserves amb menys marge. El més ràpid és preguntar per WhatsApp.',
  },
  {
    cat: 'reserva',
    q: 'Com és el procés de reserva?',
    a: 'Tres passos. 1) Ens escrius data, lloc i format per WhatsApp; t\'enviem disponibilitat i pressupost en minuts. 2) Si encaixa, signem contracte simple per email i abones el 30% de bestreta. 3) Coordinem detalls (repertori, primer ball, rider, horaris) 4-6 setmanes abans de l\'esdeveniment.',
  },
  {
    cat: 'reserva',
    q: 'Treballeu amb wedding planners i programadors municipals?',
    a: 'Sí, ja hem col·laborat amb ajuntaments (Sant Adrià de Besòs, Barberà del Vallès) i associacions de veïns (Barceloneta, Arc de Triomf). Tenim protocol professional per a aquests circuits: rider, dossier PDF, factura completa i coordinació amb el tècnic de l\'esdeveniment.',
  },
  {
    cat: 'reserva',
    q: 'Emeteu factura?',
    a: 'Sí, emetem factura completa amb IVA. Lady Jarana és un projecte de 94 Music, amb NIF i règim fiscal regularitzat.',
  },

  // Banda
  {
    cat: 'banda',
    q: 'Qui és Lady Jarana?',
    a: 'Lady Jarana és una banda de música en directe formada a Barcelona la primavera de 2025. Quartet base amb veu, guitarra espanyola, guitarra elèctrica, teclat/baix i bateria. Especialitzada en casaments, festes majors i esdeveniments privats a Catalunya. Repertori bilingüe ES/CA centrat en pop-rock, rumba catalana i latineig. Projecte de 94 Music.',
  },
  {
    cat: 'banda',
    q: 'On heu tocat?',
    a: 'Festes majors de Sant Adrià de Besòs i Barberà del Vallès (ajuntaments), Centro Asturiano de Barcelona, dues edicions del Rumba Beach Festival organitzat per l\'Associació de Veïns de la Barceloneta, concerts al Port de la Barceloneta i la Revetlla de Sant Joan 2026 a l\'Arc de Triomf (Associació de Veïns de l\'Arc de Triomf). Llista completa a /ca/esdeveniments.',
  },
  {
    cat: 'banda',
    q: 'Teniu dossier descarregable?',
    a: 'Sí, dossier PDF amb bio, fotos en alta resolució, formats i rider tècnic a /ca/dossier. També material gràfic (logos, vídeo promocional, il·lustracions per a cartell) a /ca/material — ús lliure per a organitzadors que vagin a anunciar un dels nostres bolos.',
  },
  {
    cat: 'banda',
    q: 'Sou membres de la SGAE o algun col·lectiu musical?',
    a: 'Cada músic gestiona els seus drets individualment. Per a esdeveniments on el contractant necessita justificar drets d\'autor (esdeveniments públics, festivals) emetem el llistat de cançons interpretades perquè es declari a la SGAE.',
  },
  {
    cat: 'banda',
    q: 'Com us contacto?',
    a: 'WhatsApp +34 627 281 459 (el més ràpid — responem en minuts), email ladyjaranamusic@gmail.com o pel formulari a /ca/contractar. Instagram @lady.jarana.',
  },
];

export const categoriaLabelES: Record<FAQ['cat'], string> = {
  precios: 'Precios y reserva',
  formato: 'Formatos y duración',
  sonido: 'Sonido y equipo',
  zona: 'Zona y desplazamiento',
  show: 'El show',
  reserva: 'Reserva y contrato',
  banda: 'La banda',
};

export const categoriaLabelCA: Record<FAQ['cat'], string> = {
  precios: 'Preus i reserva',
  formato: 'Formats i durada',
  sonido: 'So i equip',
  zona: 'Zona i desplaçament',
  show: 'El xou',
  reserva: 'Reserva i contracte',
  banda: 'La banda',
};
