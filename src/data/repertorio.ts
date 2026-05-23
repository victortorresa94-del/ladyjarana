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

/**
 * Repertorio extraído del playlist oficial de Spotify (16vDugJ1aVlRRlEKY8wECC),
 * 35 canciones únicas repartidas en 4 bloques estilísticos. El orden dentro
 * de cada bloque es el orden de aparición en la playlist.
 */
export const REPERTORIO: BloqueRepertorio[] = [
  {
    id: 'pop-rock-espanol',
    titulo: 'Pop-rock español y catalán',
    descripcion:
      'Los himnos en castellano y catalán que canta todo el mundo sin darse cuenta. El esqueleto del show.',
    emoji: '🎸',
    canciones: [
      { titulo: 'Mucho mejor', artista: 'Los Rodríguez ft. Coque Malla' },
      { titulo: 'La flaca', artista: 'Jarabe de Palo' },
      { titulo: 'No puedo vivir sin ti', artista: 'Los Ronaldos' },
      { titulo: 'La madre de José', artista: 'El Canto del Loco' },
      { titulo: 'Sin documentos', artista: 'Los Rodríguez' },
      { titulo: 'Por la boca vive el pez', artista: 'Fito & Fitipaldis' },
      { titulo: 'La casa por el tejado', artista: 'Fito & Fitipaldis' },
      { titulo: 'Zapatillas', artista: 'El Canto del Loco' },
      { titulo: 'La camisa negra', artista: 'Juanes' },
      { titulo: 'Carolina', artista: 'M-Clan' },
      { titulo: 'Nada que perder', artista: 'Pignoise' },
      { titulo: 'Física o química', artista: 'Despistaos' },
      { titulo: 'Nada fue un error', artista: 'Coti & Andrés Calamaro' },
      { titulo: 'Jennifer', artista: 'Els Catarres' },
      { titulo: "L'Empordà", artista: 'Sopa de Cabra' },
    ],
  },
  {
    id: 'rumba-flamenquito',
    titulo: 'Rumba y flamenquito',
    descripcion:
      'Palmas arriba. Estopa, Fondo Flamenco, El Barrio y Gipsy Kings poniendo la sandunga.',
    emoji: '💃',
    canciones: [
      { titulo: 'Como Camarón', artista: 'Estopa' },
      { titulo: 'Tu calorro', artista: 'Estopa' },
      { titulo: 'Bamboléo', artista: 'Gipsy Kings' },
      { titulo: 'Mi estrella blanca', artista: 'Fondo Flamenco' },
      { titulo: 'El toro y la luna (Taburete edit)', artista: 'Taburete' },
      { titulo: 'Orgullo', artista: 'El Barrio' },
      { titulo: 'Caminando por la vida', artista: 'Melendi' },
      { titulo: 'Amigos para siempre', artista: 'Los Manolos' },
      { titulo: 'El muerto vivo', artista: 'Peret' },
    ],
  },
  {
    id: 'latineo-reggaeton',
    titulo: 'Latineo, reggaetón y sabrosura',
    descripcion:
      'Lo que pone a bailar a la cuñada y al primo a la vez. Bad Bunny, Enrique Iglesias y la cumbia que no falla.',
    emoji: '🪇',
    canciones: [
      { titulo: 'NuevaYoL', artista: 'Bad Bunny' },
      { titulo: 'Baile inolvidable', artista: 'Bad Bunny' },
      { titulo: 'Bailando (Spanish Version)', artista: 'Enrique Iglesias, Descemer Bueno & Gente de Zona' },
      { titulo: 'El merengue', artista: 'Marshmello & Manuel Turizo' },
      { titulo: 'La Morocha', artista: 'Luck Ra & BM' },
      { titulo: 'Vivir mi vida', artista: 'Marc Anthony' },
    ],
  },
  {
    id: 'verbeneras-fiesteras',
    titulo: 'Verbeneras, fiesteras y chimponas',
    descripcion:
      'La sección sinvergüenza. Cuando la gente ya no se acuerda ni de cómo se llama, suena esto.',
    emoji: '🎊',
    canciones: [
      { titulo: '¡Salta!', artista: 'Tequila' },
      { titulo: 'La Marina sta morena', artista: 'Figa Flawas' },
      { titulo: 'Coti x Coti', artista: 'The Tyets' },
      { titulo: 'Todos los días sale el sol', artista: 'Bongo Botrako' },
      { titulo: 'La vida es un carnaval', artista: 'Celia Cruz' },
      { titulo: 'Para no verte más', artista: 'La Mosca Tsé-Tsé' },
    ],
  },
];

export const TOTAL_CANCIONES = REPERTORIO.reduce(
  (acc, b) => acc + b.canciones.length,
  0,
);

export const SPOTIFY_PLAYLIST_ID = '16vDugJ1aVlRRlEKY8wECC';
export const SPOTIFY_PLAYLIST_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;
