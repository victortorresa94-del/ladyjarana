import type { MetadataRoute } from 'next';

const BASE = 'https://ladyjarana.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/precios`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/contratar`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/eventos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/repertorio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/galeria`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/dossier`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/material`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/politica-privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/politica-cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
