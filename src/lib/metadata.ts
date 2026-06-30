import type { Metadata } from 'next';

const BASE_URL = 'https://ladyjarana.es';

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      'Lady Jarana — Banda en directo de pop-rock, rumba y latineo | Barcelona y Catalunya',
    template: '%s | Lady Jarana',
  },
  description:
    'Banda en directo para bodas, fiestas mayores y eventos privados en Barcelona y toda Catalunya. Pop-rock español y catalán, rumba y latineo. Cuarteto 800–1.000 €, quinteto 1.000–1.300 €, banda completa desde 1.400 €. Show bilingüe ES/CA.',
  keywords: [
    'banda para bodas Barcelona',
    'banda en directo Catalunya',
    'grupo música en vivo Barcelona',
    'banda para fiesta mayor Catalunya',
    'grupo versiones bodas catalán',
    'contratar banda en directo Barcelona',
    'banda rumba Barcelona',
    'banda pop rock catalán bodas',
    'música en directo bodas Cataluña',
    'banda fiesta mayor ayuntamiento',
    'Lady Jarana',
    'grupo verbena Catalunya',
  ],
  authors: [{ name: 'Lady Jarana' }],
  creator: 'Lady Jarana',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'Lady Jarana',
    title:
      'Lady Jarana — Banda en directo de pop-rock, rumba y latineo | Barcelona y Catalunya',
    description:
      'Banda en directo para bodas, fiestas mayores y eventos privados en toda Catalunya. Pop-rock ES/CA, rumba y latineo. Cuarteto desde 800 €.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lady Jarana — Rumba & Rock Band de Barcelona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lady Jarana — Banda en directo · Barcelona y Catalunya',
    description:
      'Pop-rock ES/CA, rumba y latineo en directo. La banda que convierte tu evento en fiesta mayor. Cuarteto desde 800 €.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      es: `${BASE_URL}/`,
      ca: `${BASE_URL}/ca`,
      'x-default': `${BASE_URL}/`,
    },
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

// IDs estables para referencias cruzadas entre nodos del Knowledge Graph
const MUSICGROUP_ID = `${BASE_URL}/#musicgroup`;
const LOCALBUSINESS_ID = `${BASE_URL}/#business`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const knowsAboutLanding = [
  'Música en directe',
  'Rumba catalana',
  'Pop-rock español',
  'Pop-rock catalán',
  'Flamenco-pop',
  'Latineo',
  'Bodas en Barcelona',
  'Festes majors Catalunya',
  'Verbenes',
];

const memberLanguages = ['es-ES', 'ca-ES'];

const members = [
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#victor-torres`,
    name: 'Víctor Torres',
    roleName: 'Voz y guitarra española',
    image: `${BASE_URL}/integrantes/victor-v4.png`,
    nationality: { '@type': 'Country', name: 'España' },
    knowsAbout: ['Guitarra española', 'Voz principal', 'Rumba catalana', 'Pop-rock español'],
    knowsLanguage: memberLanguages,
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#alejo-finger`,
    name: 'Alejo Finger',
    roleName: 'Guitarra eléctrica',
    image: `${BASE_URL}/integrantes/alejo-v4.png`,
    knowsAbout: ['Guitarra eléctrica', 'Rock', 'Riffs y solos'],
    knowsLanguage: memberLanguages,
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#ivan-cortes`,
    name: 'Iván Cortés',
    roleName: 'Teclado y bajo',
    image: `${BASE_URL}/integrantes/ivan-v4.png`,
    knowsAbout: ['Teclado', 'Bajo eléctrico', 'Producción musical'],
    knowsLanguage: memberLanguages,
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#diego-aquino`,
    name: 'Diego Aquino',
    roleName: 'Batería',
    image: `${BASE_URL}/integrantes/diego-v4.png`,
    knowsAbout: ['Batería', 'Percusión', 'Ritmo latino'],
    knowsLanguage: memberLanguages,
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#antonio`,
    name: 'Antonio',
    roleName: 'Trompeta',
    image: `${BASE_URL}/integrantes/antonio-v4.png`,
    knowsAbout: ['Trompeta', 'Vientos', 'Música latina'],
    knowsLanguage: memberLanguages,
    memberOf: { '@id': MUSICGROUP_ID },
  },
];

export const jsonLdMusicGroup = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  '@id': MUSICGROUP_ID,
  name: 'Lady Jarana',
  alternateName: ['Lady Jarana Rumba & Rock Band', 'LadyJarana'],
  url: BASE_URL,
  logo: `${BASE_URL}/logo/logo-lady-jarana.png`,
  image: [
    `${BASE_URL}/og-image.jpg`,
    `${BASE_URL}/fotos/grupo-publico.jpg`,
  ],
  description:
    'Banda de Rumba & Rock de Barcelona para bodas, fiestas mayores y eventos privados en toda Catalunya. Show bilingüe español + catalán. Cuarteto desde 800 €.',
  slogan: 'Rumba & Rock Band',
  foundingDate: '2025',
  foundingLocation: {
    '@type': 'Place',
    name: 'Barcelona, Catalunya, España',
  },
  genre: [
    'Rumba catalana',
    'Pop-rock español',
    'Pop-rock catalán',
    'Flamenco-pop',
    'Latineo',
    'Rock',
  ],
  knowsAbout: knowsAboutLanding,
  brand: { '@type': 'Brand', name: 'Lady Jarana' },
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 5 },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Barcelona' },
    { '@type': 'AdministrativeArea', name: 'Catalunya' },
    { '@type': 'Country', name: 'España' },
  ],
  member: members,
  subjectOf: [
    { '@id': `${BASE_URL}/sobre-lady-jarana` },
    { '@id': `${BASE_URL}/ca/sobre-lady-jarana` },
  ],
  sameAs: [
    'https://instagram.com/lady.jarana',
    'https://tiktok.com/@LadyJaranaOficial',
    'https://youtube.com/@ladyjarana',
    'https://open.spotify.com/playlist/16vDugJ1aVlRRlEKY8wECC',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34627281459',
    email: 'ladyjaranamusic@gmail.com',
    contactType: 'booking',
    availableLanguage: ['Spanish', 'Catalan', 'es', 'ca'],
    areaServed: ['ES'],
  },
};

export const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': LOCALBUSINESS_ID,
  name: 'Lady Jarana',
  description:
    'Banda de música en directo para bodas, fiestas mayores y eventos privados en Barcelona y toda Catalunya. Show bilingüe ES/CA. Cuarteto desde 800 €.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Barcelona' },
    { '@type': 'AdministrativeArea', name: 'Catalunya' },
    { '@type': 'Country', name: 'España' },
  ],
  priceRange: '€€',
  telephone: '+34627281459',
  email: 'ladyjaranamusic@gmail.com',
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo/logo-lady-jarana.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'Catalunya',
    addressCountry: 'ES',
  },
  makesOffer: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: 800,
    highPrice: 2000,
    offerCount: 3,
    availability: 'https://schema.org/InStock',
    seller: { '@id': MUSICGROUP_ID },
    eligibleRegion: { '@type': 'AdministrativeArea', name: 'Catalunya' },
  },
  sameAs: [
    'https://instagram.com/lady.jarana',
    'https://tiktok.com/@LadyJaranaOficial',
    'https://youtube.com/@ladyjarana',
  ],
};

// HowTo — pasos para contratar la banda. Optimizado para Google AI Overviews
// y citas en Perplexity/ChatGPT: respuesta directa a "cómo contratar Lady Jarana".
export const jsonLdHowToContratarES = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `${BASE_URL}/contratar#howto-es`,
  inLanguage: 'es-ES',
  name: 'Cómo contratar Lady Jarana para tu boda o evento',
  description:
    'Proceso paso a paso para reservar fecha con Lady Jarana en Barcelona y Catalunya: WhatsApp → presupuesto → contrato → coordinación → bolo.',
  totalTime: 'PT24H',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '800',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Fecha del evento' },
    { '@type': 'HowToSupply', name: 'Ubicación / venue' },
    { '@type': 'HowToSupply', name: 'Aforo aproximado' },
    { '@type': 'HowToSupply', name: 'Formato deseado (cuarteto, quinteto o banda completa)' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Escribe por WhatsApp',
      text:
        'Mándanos fecha, lugar y formato preferido por WhatsApp al +34 627 281 459. También vale el email ladyjaranamusic@gmail.com.',
      url: 'https://wa.me/34627281459',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Recibe disponibilidad y presupuesto',
      text:
        'En minutos te confirmamos si la fecha está libre y te enviamos presupuesto cerrado: cuarteto 800–1.000 €, quinteto 1.000–1.300 €, banda completa desde 1.400 €.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Firmamos contrato y anticipo',
      text:
        'Bloqueamos la fecha con un contrato simple + 30 % de anticipo. El resto se paga el día del evento.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Coordinamos detalles 4-6 semanas antes',
      text:
        'Repaso de timing (ceremonia, primer baile, set largo), repertorio, rider técnico y, si toca, opción de PA propio (+600 €) o coordinación con el técnico del venue.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Tocamos en directo',
      text:
        'Show 100 % en directo, sin pistas pregrabadas, bilingüe español + catalán. Pop-rock, rumba catalana y latineo. La pista no se vacía.',
    },
  ],
};

export const jsonLdHowToContractarCA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `${BASE_URL}/ca/contractar#howto-ca`,
  inLanguage: 'ca-ES',
  name: 'Com contractar Lady Jarana per al teu casament o esdeveniment',
  description:
    'Procés pas a pas per reservar data amb Lady Jarana a Barcelona i Catalunya: WhatsApp → pressupost → contracte → coordinació → bolo.',
  totalTime: 'PT24H',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '800',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Data de l’esdeveniment' },
    { '@type': 'HowToSupply', name: 'Ubicació / venue' },
    { '@type': 'HowToSupply', name: 'Aforament aproximat' },
    { '@type': 'HowToSupply', name: 'Format desitjat (quartet, quintet o banda completa)' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Escriu per WhatsApp',
      text:
        'Envia’ns data, lloc i format preferit per WhatsApp al +34 627 281 459. També val el correu ladyjaranamusic@gmail.com.',
      url: 'https://wa.me/34627281459',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Rep disponibilitat i pressupost',
      text:
        'En minuts et confirmem si la data és lliure i t’enviem pressupost tancat: quartet 800–1.000 €, quintet 1.000–1.300 €, banda completa des de 1.400 €.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Signem contracte i bestreta',
      text:
        'Bloquegem la data amb un contracte simple + 30 % de bestreta. La resta es paga el dia de l’esdeveniment.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Coordinem detalls 4-6 setmanes abans',
      text:
        'Repàs de timing (cerimònia, primer ball, set llarg), repertori, rider tècnic i, si cal, opció de PA propi (+600 €) o coordinació amb el tècnic del venue.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Toquem en directe',
      text:
        'Xou 100 % en directe, sense pistes pregravades, bilingüe català + espanyol. Pop-rock, rumba catalana i latineo. La pista no es buida.',
    },
  ],
};

// EventSeries — Rumba Beach Festival: 2 ediciones organizadas por la AAVV
// Barceloneta donde Lady Jarana ha sido cabeza de cartel. Da contexto histórico
// a los LLM cuando preguntan "qué es Rumba Beach Festival".
export const jsonLdEventSeriesRumbaBeach = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  '@id': `${BASE_URL}/eventos#rumba-beach-festival`,
  name: 'Rumba Beach Festival',
  description:
    'Festival de rumba catalana en el Puerto de la Barceloneta organizado por la Associació de Veïns de la Barceloneta. Lady Jarana ha participado en 2 ediciones consecutivas.',
  organizer: {
    '@type': 'Organization',
    name: 'Associació de Veïns de la Barceloneta',
    areaServed: { '@type': 'Place', name: 'Barceloneta, Barcelona' },
  },
  location: {
    '@type': 'Place',
    name: 'Puerto de la Barceloneta',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barcelona',
      addressRegion: 'Catalunya',
      addressCountry: 'ES',
    },
  },
  performer: { '@id': MUSICGROUP_ID },
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  genre: ['Rumba catalana', 'Pop-rock español', 'Latineo'],
};

// VideoObject — un schema por reel del Blob para que Google Vídeos, ChatGPT
// y Perplexity descubran los directos. uploadDate es la fecha del evento
// real, no la del Blob (más informativo).
type ReelMeta = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601
  contentUrl: string;
};

export function jsonLdVideoObjects(reels: ReelMeta[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': reels.map((r) => ({
      '@type': 'VideoObject',
      '@id': `${BASE_URL}/galeria#${r.id}`,
      name: `Lady Jarana — ${r.name}`,
      description: r.description,
      thumbnailUrl: r.thumbnailUrl.startsWith('http')
        ? r.thumbnailUrl
        : `${BASE_URL}${r.thumbnailUrl}`,
      uploadDate: r.uploadDate,
      contentUrl: r.contentUrl,
      embedUrl: `${BASE_URL}/galeria`,
      publisher: { '@id': MUSICGROUP_ID },
      inLanguage: ['es-ES', 'ca-ES'],
      isFamilyFriendly: true,
    })),
  };
}

// Speakable — selectores CSS que TTS y asistentes de voz pueden leer en alto.
// Aplicado a H1 + primer párrafo de páginas-respuesta (FAQ, pricing, sobre).
export const speakableSpec = {
  '@type': 'SpeakableSpecification',
  cssSelector: ['h1', '.speakable', 'main h2:first-of-type', 'main p:first-of-type'],
};

export const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Lady Jarana',
  alternateName: 'Lady Jarana — Banda en directo Barcelona y Catalunya',
  url: BASE_URL,
  inLanguage: ['es-ES', 'ca-ES'],
  publisher: { '@id': MUSICGROUP_ID },
  about: { '@id': MUSICGROUP_ID },
  potentialAction: {
    '@type': 'ContactAction',
    name: 'Contratar Lady Jarana por WhatsApp',
    target: 'https://wa.me/34627281459',
  },
};
