import type { Metadata } from 'next';

const BASE_URL = 'https://ladyjarana.com';

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      'Lady Jarana — Banda de Rumba & Rock para bodas y eventos | Barcelona',
    template: '%s | Lady Jarana',
  },
  description:
    'Banda de música en directo para bodas, fiestas mayores y eventos privados en Barcelona. Pop-rock español, rumba y latineo. Cuarteto, trío y dúo acústico. Reserva 2026.',
  keywords: [
    'banda para bodas Barcelona',
    'grupo música en vivo Barcelona',
    'banda para fiesta mayor',
    'grupo versiones bodas',
    'contratar banda en directo Barcelona',
    'banda rumba Barcelona',
    'música en directo bodas Cataluña',
    'Lady Jarana',
    'banda pop rock español bodas',
    'grupo rumba bodas Cataluña',
  ],
  authors: [{ name: 'Lady Jarana' }],
  creator: 'Lady Jarana',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'Lady Jarana',
    title:
      'Lady Jarana — Banda de Rumba & Rock para bodas y eventos | Barcelona',
    description:
      'Banda de música en directo para bodas, fiestas mayores y eventos privados en Barcelona. Pop-rock español, rumba y latineo.',
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
    title: 'Lady Jarana — Rumba & Rock Band | Barcelona',
    description:
      'Pop-rock español, rumba y latineo en directo. La banda que convierte tu evento en fiesta mayor.',
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
    'Banda de Rumba & Rock de Barcelona para bodas, fiestas mayores y eventos privados.',
  foundingDate: '2025',
  foundingLocation: 'Barcelona, España',
  genre: ['Rumba', 'Rock', 'Pop español', 'Pop latino'],
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
    'Banda de música en directo para bodas, fiestas mayores y eventos privados en Barcelona.',
  areaServed: ['Barcelona', 'Cataluña', 'España'],
  priceRange: '€€',
  telephone: '+34 XXX XXX XXX',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barcelona',
    addressCountry: 'ES',
  },
};
