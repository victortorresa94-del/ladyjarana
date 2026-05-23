import type { MetadataRoute } from 'next';

const BASE = 'https://ladyjarana.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const esRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: { es: `${BASE}/`, ca: `${BASE}/ca`, 'x-default': `${BASE}/` },
      },
    },
    {
      url: `${BASE}/precios`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
      alternates: {
        languages: {
          es: `${BASE}/precios`,
          ca: `${BASE}/ca/preus`,
          'x-default': `${BASE}/precios`,
        },
      },
    },
    {
      url: `${BASE}/contratar`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${BASE}/contratar`,
          ca: `${BASE}/ca/contractar`,
          'x-default': `${BASE}/contratar`,
        },
      },
    },
    { url: `${BASE}/eventos`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/repertorio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/galeria`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/dossier`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/material`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/politica-privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/politica-cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const caRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/ca`, lastModified: now, changeFrequency: 'weekly', priority: 0.98 },
    { url: `${BASE}/ca/preus`, lastModified: now, changeFrequency: 'monthly', priority: 0.93 },
    { url: `${BASE}/ca/contractar`, lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/ca/repertori`, lastModified: now, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${BASE}/ca/esdeveniments`, lastModified: now, changeFrequency: 'weekly', priority: 0.83 },
    { url: `${BASE}/ca/serveis/casaments`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ca/serveis/festes-majors`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ca/serveis/esdeveniments-privats`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/ca/serveis/esdeveniments-empresa`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ];

  return [...esRoutes, ...caRoutes];
}
