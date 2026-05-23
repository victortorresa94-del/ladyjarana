export type Cancion = {
  titulo: string;
  artista?: string;
  /** Cuando la canción se enlaza con otra en el repertorio en directo. */
  medley?: string;
};

export type BloqueRepertorio = {
  id: string;
  titulo: string;
  /** Una línea sobre qué hace este bloque dentro del show. */
  descripcion: string;
  emoji: string;
  canciones: Cancion[];
};

export const REPERTORIO: BloqueRepertorio[] = [
  {
    id: 'pop-rock-espanol',
    titulo: 'Pop-rock español',
    descripcion:
      'Los himnos en castellano que se canta todo el mundo sin darse cuenta. La base del show.',
    emoji: '🎸',
    canciones: [
      { titulo: 'Mucho mejor', artista: 'Andy y Lucas' },
      { titulo: 'La camisa negra', artista: 'Juanes' },
      { titulo: 'Zapatillas', artista: 'El Canto del Loco' },
      { titulo: 'Sin documentos', artista: 'Los Rodríguez' },
      { titulo: 'No puedo vivir sin ti', artista: 'Los Ronaldos' },
      { titulo: 'La flaca', artista: 'Jarabe de Palo' },
      { titulo: 'Soldadito marinero', artista: 'Fito & Fitipaldis' },
      { titulo: 'Por la boca vive el pez', artista: 'Fito & Fitipaldis' },
      { titulo: 'La casa por el tejado', artista: 'Fito & Fitipaldis' },
      { titulo: 'Caminando por la vida', artista: 'Melendi' },
      { titulo: 'Salta', artista: 'Tequila' },
      { titulo: 'Mi estrella blanca', artista: 'Manolo García' },
      { titulo: 'El aire de la calle', artista: 'Hombres G' },
      { titulo: 'Hola, mi amor', artista: 'Junior' },
      { titulo: 'No estaba muerto', artista: 'La Sonora Dinamita' },
    ],
  },
  {
    id: 'rumba-flamenquito',
    titulo: 'Rumba, flamenquito y catalana',
    descripcion:
      'Estopa al mando, Gipsy Kings al fondo y la palma siempre alta. La sección más jaranera.',
    emoji: '💃',
    canciones: [
      { titulo: 'La madre de José', artista: 'El Koala' },
      { titulo: 'Como Camarón', artista: 'Estopa' },
      { titulo: 'Por la raja de tu falda', artista: 'Estopa', medley: 'Tu calorro' },
      { titulo: 'Tu calorro', artista: 'Estopa', medley: 'Por la raja de tu falda' },
      { titulo: 'Petardos', artista: 'Estopa' },
      { titulo: 'Bamboleo', artista: 'Gipsy Kings' },
      { titulo: 'El legionario', artista: 'Popular / coplilla' },
    ],
  },
  {
    id: 'latineo-reggaeton',
    titulo: 'Latineo, reggaetón y sabrosura',
    descripcion:
      'Lo que pone a bailar a la cuñada y al primo a la vez. Don Omar, Bad Bunny, Marc Anthony y compañía.',
    emoji: '🪇',
    canciones: [
      { titulo: 'El perdón', artista: 'Nicky Jam & Enrique Iglesias', medley: 'Bailando' },
      { titulo: 'Bailando', artista: 'Enrique Iglesias', medley: 'El perdón' },
      { titulo: 'Don Omar (medley)', artista: 'Don Omar' },
      { titulo: 'Bad Bunny (medley)', artista: 'Bad Bunny' },
      { titulo: 'Orgullo', artista: 'Bad Bunny' },
      { titulo: 'Vivir mi vida', artista: 'Marc Anthony', medley: 'Carnaval te vas' },
      { titulo: 'El merengue', artista: 'Manny Manuel' },
      { titulo: 'Volare', artista: 'Gipsy Kings' },
    ],
  },
  {
    id: 'verbeneras-festivas',
    titulo: 'Verbeneras, fiesteras y chimponas',
    descripcion:
      'La sección sin vergüenza. Cuando la gente ya no se acuerda ni de cómo se llama, suena esto.',
    emoji: '🎊',
    canciones: [
      { titulo: 'Amigos para siempre', artista: 'Los Manolos / popular' },
      { titulo: 'Para no verte más', artista: 'La Mosca Tsé-Tsé' },
      { titulo: 'Hace calor', artista: 'La Mosca Tsé-Tsé' },
      { titulo: 'Vivir sin ti', artista: 'Andy y Lucas' },
      { titulo: 'El chipirón', artista: 'Popular festivo' },
      { titulo: 'Sarandonga', artista: 'Lolita Sevilla / popular' },
      { titulo: 'Carnaval te vas', artista: 'Celia Cruz' },
    ],
  },
];

export const TOTAL_CANCIONES = REPERTORIO.reduce(
  (acc, b) => acc + b.canciones.length,
  0,
);

export const SPOTIFY_PLAYLIST_ID = '16vDugJ1aVlRRlEKY8wECC';
export const SPOTIFY_PLAYLIST_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;
