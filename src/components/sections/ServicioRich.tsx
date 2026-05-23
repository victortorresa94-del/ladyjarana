import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';
import type { ServicioContent } from '@/lib/serviciosContent';

interface Props {
  content: ServicioContent;
  locale: 'es' | 'ca';
}

const labels = {
  es: {
    queHacemos: 'Qué hacemos en este tipo de eventos',
    comoEs: 'Cómo es el show',
    repertorio: 'Repertorio para este tipo de evento',
    casoReal: 'Caso real',
    formatoRecomendado: 'Formato recomendado',
    faq: 'Preguntas frecuentes',
    cta: '¿Quieres a Lady Jarana en tu evento?',
    ctaText:
      'Cuéntanos fecha, lugar y formato. Te respondemos en minutos por WhatsApp con disponibilidad y presupuesto.',
    ctaButton: 'Hablemos por WhatsApp →',
    ctaSecondary: 'Ver precios completos',
    ctaTertiary: 'FAQ general',
    breadcrumbHome: 'Inicio',
    breadcrumbServices: 'Servicios',
  },
  ca: {
    queHacemos: "Què fem en aquest tipus d'esdeveniments",
    comoEs: 'Com és el xou',
    repertorio: "Repertori per a aquest tipus d'esdeveniment",
    casoReal: 'Cas real',
    formatoRecomendado: 'Format recomanat',
    faq: 'Preguntes freqüents',
    cta: 'Vols Lady Jarana al teu esdeveniment?',
    ctaText:
      "Explica'ns data, lloc i format. Et responem en minuts per WhatsApp amb disponibilitat i pressupost.",
    ctaButton: 'Parlem per WhatsApp →',
    ctaSecondary: 'Veure preus complets',
    ctaTertiary: 'FAQ general',
    breadcrumbHome: 'Inici',
    breadcrumbServices: 'Serveis',
  },
};

export default function ServicioRich({ content, locale }: Props) {
  const t = labels[locale];
  const baseUrl = 'https://ladyjarana.com';
  const servicePath =
    locale === 'es'
      ? `/servicios/${content.slug}`
      : `/ca/serveis/${content.slug}`;
  const altPath =
    locale === 'es'
      ? `/ca/serveis/${content.slugAlt}`
      : `/servicios/${content.slugAlt}`;
  const homePath = locale === 'es' ? '/' : '/ca';
  const preciosPath = locale === 'es' ? '/precios' : '/ca/preus';
  const faqPath = locale === 'es' ? '/faq' : '/ca/faq';

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: content.titulo,
    description: content.intro,
    serviceType: content.serviceType,
    provider: { '@id': `${baseUrl}/#musicgroup` },
    areaServed: { '@type': 'AdministrativeArea', name: 'Catalunya' },
    audience: { '@type': 'Audience', audienceType: content.audience },
    url: `${baseUrl}${servicePath}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: 1000,
      highPrice: 2000,
      offerCount: 3,
      availability: 'https://schema.org/InStock',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale === 'es' ? 'es-ES' : 'ca-ES',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.breadcrumbHome,
        item: `${baseUrl}${homePath}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.breadcrumbServices,
        item: `${baseUrl}${homePath === '/' ? '' : '/ca'}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: content.eyebrow,
        item: `${baseUrl}${servicePath}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* HERO */}
        <section className="relative overflow-hidden bg-negro pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="absolute inset-0 opacity-40">
            <Image
              src={content.hero.foto}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: content.hero.objectPosition }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-negro/40 via-negro/40 to-negro/95" />
          <div className="relative mx-auto max-w-4xl px-6">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ {content.eyebrow}
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-crema sm:text-5xl lg:text-6xl">
              {content.titulo}
            </h1>
            <p className="max-w-2xl font-body text-base text-crema/90 lg:text-lg leading-relaxed">
              {content.intro}
            </p>
          </div>
        </section>

        {/* QUÉ HACEMOS */}
        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {t.queHacemos}
            </h2>
            <div className="space-y-4 font-body text-base text-negro/80 leading-relaxed">
              {content.queHacemos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO ES EL SHOW */}
        <section className="bg-naranja/15 py-16 lg:py-20 border-y-2 border-negro/10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {t.comoEs}
            </h2>
            <div className="space-y-4 font-body text-base text-negro/80 leading-relaxed">
              {content.comoEs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* REPERTORIO + FORMATO */}
        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-4 border-negro bg-blanco p-6 shadow-[6px_6px_0_var(--negro)]">
              <h3 className="mb-3 font-display text-xl font-bold italic text-negro">
                {t.repertorio}
              </h3>
              <p className="font-body text-sm text-negro/80 leading-relaxed">
                {content.repertorio}
              </p>
            </div>
            <div className="rounded-2xl border-4 border-negro bg-sol p-6 shadow-[6px_6px_0_var(--negro)]">
              <h3 className="mb-3 font-display text-xl font-bold italic text-negro">
                {t.formatoRecomendado}
              </h3>
              <p className="font-body text-sm text-negro/80 leading-relaxed">
                {content.formatoRecomendado}
              </p>
            </div>
          </div>

          {content.casoReal && (
            <div className="mx-auto mt-6 max-w-4xl px-6">
              <div className="rounded-2xl border-2 border-rojo/30 bg-rojo/5 p-5">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                  ✦ {t.casoReal}
                </p>
                <p className="mt-1 font-body text-sm text-negro/85 leading-relaxed">
                  {content.casoReal}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="bg-blanco py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              {t.faq}
            </h2>
            <div className="space-y-3">
              {content.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border-2 border-negro bg-crema p-5 shadow-[4px_4px_0_var(--negro)]"
                >
                  <summary className="cursor-pointer font-body font-semibold text-negro list-none flex items-start justify-between gap-3 faq-question">
                    <span>{f.q}</span>
                    <span className="text-rojo transition-transform group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-body text-sm text-negro/75 leading-relaxed faq-answer">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl">
              {t.cta}
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              {t.ctaText}
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              {t.ctaButton}
            </Button>
            <p className="mt-6 font-body text-sm text-blanco/70">
              <Link href={preciosPath} className="text-sol underline font-bold">
                {t.ctaSecondary}
              </Link>{' '}
              ·{' '}
              <Link href={faqPath} className="text-sol underline font-bold">
                {t.ctaTertiary}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
