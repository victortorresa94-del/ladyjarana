import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';
import type { CiudadContent } from '@/lib/ciudadesData';

interface Props {
  content: CiudadContent;
  locale: 'es' | 'ca';
}

const labels = {
  es: {
    eyebrow: 'SEO local · ',
    tarifas: 'Tarifas en {ciudad}',
    porQue: 'Por qué Lady Jarana en {ciudad}',
    zonas: 'Zonas que cubrimos en {ciudad}',
    tiposEvento: 'Eventos típicos donde tocamos',
    cuarteto: 'Cuarteto',
    quinteto: 'Quinteto (más demandado)',
    bandaCompleta: 'Banda completa',
    cta: 'Lady Jarana en {ciudad}',
    ctaSub:
      'Mándanos fecha, lugar y formato por WhatsApp. Respondemos en minutos.',
    ctaButton: 'Hablemos por WhatsApp →',
    faq: 'FAQ general',
    breadcrumbHome: 'Inicio',
    musicos: 'músicos',
  },
  ca: {
    eyebrow: 'SEO local · ',
    tarifas: 'Tarifes a {ciudad}',
    porQue: 'Per què Lady Jarana a {ciudad}',
    zonas: 'Zones que cobrim a {ciudad}',
    tiposEvento: 'Esdeveniments típics on toquem',
    cuarteto: 'Quartet',
    quinteto: 'Quintet (més demanat)',
    bandaCompleta: 'Banda completa',
    cta: 'Lady Jarana a {ciudad}',
    ctaSub:
      "Envia'ns data, lloc i format per WhatsApp. Responem en minuts.",
    ctaButton: 'Parlem per WhatsApp →',
    faq: 'FAQ general',
    breadcrumbHome: 'Inici',
    musicos: 'músics',
  },
};

export default function CiudadLanding({ content, locale }: Props) {
  const t = labels[locale];
  const baseUrl = 'https://ladyjarana.es';
  const slug = locale === 'es' ? content.slugES : content.slugCA;
  const altSlug = locale === 'es' ? content.slugCA : content.slugES;
  const path = `/${slug}`;
  const altPath = locale === 'es' ? `/ca/${altSlug}` : `/${altSlug}`;
  const homePath = locale === 'es' ? '/' : '/ca';
  const faqPath = locale === 'es' ? '/faq' : '/ca/faq';

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Lady Jarana',
    url: `${baseUrl}${path}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${content.provincia}, Catalunya, España`,
    },
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: content.ciudad,
        addressRegion: 'Catalunya',
        addressCountry: 'ES',
      },
    },
    sameAs: [`${baseUrl}/#musicgroup`],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: `${baseUrl}${homePath}` },
      { '@type': 'ListItem', position: 2, name: content.ciudad, item: `${baseUrl}${path}` },
    ],
  };

  const interpolate = (str: string) => str.replace('{ciudad}', content.ciudad);

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        {/* HERO */}
        <section className="relative overflow-hidden bg-negro pt-28 pb-14 lg:pt-36 lg:pb-20">
          <div className="absolute inset-0 opacity-25">
            <Image src="/fotos/fiestas-mayores.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-negro/50 via-negro/40 to-negro/95" />
          <div className="relative mx-auto max-w-4xl px-6">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              {t.eyebrow} {content.provincia}
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-crema sm:text-5xl lg:text-6xl">
              {locale === 'es' ? 'Banda en directo en ' : 'Grup en directe a '}
              <span className="text-sol">{content.ciudad}</span>
            </h1>
            <p className="lead max-w-2xl font-body text-base text-crema/90 lg:text-lg leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* POR QUÉ */}
        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {interpolate(t.porQue)}
            </h2>
            <ul className="space-y-3 font-body text-base text-negro/80 leading-relaxed">
              {content.porQue.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-rojo mt-1 shrink-0">●</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ZONAS */}
        <section className="bg-naranja/15 py-16 lg:py-20 border-y-2 border-negro/10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {interpolate(t.zonas)}
            </h2>
            <div className="flex flex-wrap gap-2">
              {content.zonas.map((z) => (
                <span
                  key={z}
                  className="rounded-full border-2 border-negro/20 bg-blanco px-4 py-1.5 font-body text-sm font-medium text-negro/85"
                >
                  {z}
                </span>
              ))}
            </div>
            <p className="mt-6 font-body text-sm text-negro/65">
              {locale === 'es'
                ? 'Desplazamiento de 100 € dentro de Catalunya (incluido en el presupuesto).'
                : 'Desplaçament de 100 € dins de Catalunya (inclòs al pressupost).'}
            </p>
          </div>
        </section>

        {/* TIPOS EVENTO */}
        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {t.tiposEvento}
            </h2>
            <p className="font-body text-base text-negro/80 leading-relaxed">
              {content.tiposEvento}
            </p>
          </div>
        </section>

        {/* TARIFAS */}
        <section className="bg-blanco py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {interpolate(t.tarifas)}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border-4 border-negro bg-crema p-5 shadow-[4px_4px_0_var(--negro)]">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                  4 {t.musicos}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold italic text-negro">
                  {t.cuarteto}
                </h3>
                <p className="mt-2 font-display text-2xl font-bold italic text-negro">
                  800–1.000 €
                </p>
              </div>
              <div className="rounded-2xl border-4 border-negro bg-sol p-5 shadow-[4px_4px_0_var(--negro)]">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                  5 {t.musicos}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold italic text-negro">
                  {t.quinteto}
                </h3>
                <p className="mt-2 font-display text-2xl font-bold italic text-negro">
                  1.000–1.300 €
                </p>
              </div>
              <div className="rounded-2xl border-4 border-negro bg-crema p-5 shadow-[4px_4px_0_var(--negro)]">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                  6+ {t.musicos}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold italic text-negro">
                  {t.bandaCompleta}
                </h3>
                <p className="mt-2 font-display text-2xl font-bold italic text-negro">
                  desde 1.400 €
                </p>
              </div>
            </div>
            <p className="mt-4 font-body text-sm text-negro/65 text-center">
              {locale === 'es'
                ? 'Presupuesto cerrado en minutos por WhatsApp.'
                : 'Pressupost tancat en minuts per WhatsApp.'}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl">
              {interpolate(t.cta)}
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              {t.ctaSub}
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              {t.ctaButton}
            </Button>
            <p className="mt-6 font-body text-sm text-blanco/70">
              <Link href={faqPath} className="text-sol underline font-bold">
                {t.faq}
              </Link>
            </p>
          </div>
        </section>
      </main>
      {locale === 'es' ? <Footer /> : <FooterCA />}
    </>
  );
}
