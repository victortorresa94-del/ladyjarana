import type { Metadata } from 'next';

const BASE_URL = 'https://ladyjarana.com';

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

export const jsonLdMusicGroup = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Lady Jarana',
  alternateName: 'Lady Jarana Rumba & Rock Band',
  url: BASE_URL,
  logo: `${BASE_URL}/logo/logo-lady-jarana.png`,
  image: `${BASE_URL}/og-image.jpg`,
  description:
    'Banda de Rumba & Rock de Barcelona para bodas, fiestas mayores y eventos privados en toda Catalunya. Show bilingüe español + catalán.',
  foundingDate: '2025',
  foundingLocation: 'Barcelona, España',
  genre: ['Rumba catalana', 'Pop-rock español', 'Pop-rock catalán', 'Latineo', 'Rock'],
  member: [
    {
      '@type': 'Person',
      name: 'Víctor Torres',
      roleName: 'Voz y guitarra española',
    },
    {
      '@type': 'Person',
      name: 'Alejo Finger',
      roleName: 'Guitarra eléctrica',
    },
    {
      '@type': 'Person',
      name: 'Iván Cortés',
      roleName: 'Teclado y bajo',
    },
    {
      '@type': 'Person',
      name: 'Diego Aquino',
      roleName: 'Batería',
    },
  ],
  sameAs: [
    'https://instagram.com/ladyjarana',
    'https://tiktok.com/@ladyjarana',
    'https://youtube.com/@ladyjarana',
  ],
};

export const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lady Jarana',
  description:
    'Banda de música en directo para bodas, fiestas mayores y eventos privados en Barcelona y toda Catalunya. Show bilingüe ES/CA.',
  areaServed: ['Barcelona', 'Catalunya', 'Cataluña', 'España'],
  priceRange: '€€',
  telephone: '+34 627 281 459',
  email: 'ladyjaranamusic@gmail.com',
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressRegion: 'Catalunya',
    addressCountry: 'ES',
  },
};
