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
    'Banda en directo para bodas, fiestas mayores y eventos privados en Barcelona y toda Catalunya. Pop-rock español y catalán, rumba y latineo. Cuarteto desde 1000 €. Show bilingüe ES/CA.',
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
      'Banda en directo para bodas, fiestas mayores y eventos privados en toda Catalunya. Pop-rock ES/CA, rumba y latineo. Cuarteto desde 1000 €.',
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
      'Pop-rock ES/CA, rumba y latineo en directo. La banda que convierte tu evento en fiesta mayor. Cuarteto desde 1000 €.',
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

const members = [
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#victor-torres`,
    name: 'Víctor Torres',
    roleName: 'Voz y guitarra española',
    image: `${BASE_URL}/integrantes/victor-v4.png`,
    nationality: { '@type': 'Country', name: 'España' },
    knowsAbout: ['Guitarra española', 'Voz principal', 'Rumba catalana', 'Pop-rock español'],
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#alejo-finger`,
    name: 'Alejo Finger',
    roleName: 'Guitarra eléctrica',
    image: `${BASE_URL}/integrantes/alejo-v4.png`,
    knowsAbout: ['Guitarra eléctrica', 'Rock', 'Riffs y solos'],
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#ivan-cortes`,
    name: 'Iván Cortés',
    roleName: 'Teclado y bajo',
    image: `${BASE_URL}/integrantes/ivan-v4.png`,
    knowsAbout: ['Teclado', 'Bajo eléctrico', 'Producción musical'],
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#diego-aquino`,
    name: 'Diego Aquino',
    roleName: 'Batería',
    image: `${BASE_URL}/integrantes/diego-v4.png`,
    knowsAbout: ['Batería', 'Percusión', 'Ritmo latino'],
    memberOf: { '@id': MUSICGROUP_ID },
  },
  {
    '@type': 'Person',
    '@id': `${BASE_URL}/#antonio`,
    name: 'Antonio',
    roleName: 'Trompeta',
    image: `${BASE_URL}/integrantes/antonio-v4.png`,
    knowsAbout: ['Trompeta', 'Vientos', 'Música latina'],
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
    'Banda de Rumba & Rock de Barcelona para bodas, fiestas mayores y eventos privados en toda Catalunya. Show bilingüe español + catalán. Cuarteto desde 1000 €.',
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
    'Banda de música en directo para bodas, fiestas mayores y eventos privados en Barcelona y toda Catalunya. Show bilingüe ES/CA. Cuarteto desde 1000 €.',
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
    lowPrice: 1000,
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
