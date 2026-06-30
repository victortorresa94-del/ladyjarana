import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Banda en directo vs DJ para boda — comparativa honesta (Barcelona 2026)',
  description:
    'Comparativa real banda en directo vs DJ para boda en Barcelona y Catalunya: precio, energía, momento foto, repertorio, espacio, sonido. Cuándo elegir banda, cuándo DJ, cuándo combinar. Lady Jarana 800-1.400 €.',
  alternates: {
    canonical: 'https://ladyjarana.es/banda-versus-dj-boda',
  },
  openGraph: {
    title: 'Banda vs DJ para boda — comparativa honesta',
    description:
      'Precio, energía, repertorio, espacio. Cuándo banda, cuándo DJ, cuándo los dos. Sin marketing.',
    type: 'article',
  },
};

const filas = [
  {
    criterio: 'Precio típico (Barcelona 2026)',
    banda: '800–2.000 € según formato',
    dj: '600–1.500 € según experiencia y equipo',
    gana: 'dj',
  },
  {
    criterio: 'Momento foto / wow',
    banda: 'Sí — fotos icónicas en escenario',
    dj: 'Menor protagonismo visual',
    gana: 'banda',
  },
  {
    criterio: 'Energía sostenida sin descanso',
    banda: 'Sets de 45-60 min + pausas',
    dj: '4-6 h continuas sin parar',
    gana: 'dj',
  },
  {
    criterio: 'Catálogo musical',
    banda: '60-120 temas trabajados',
    dj: 'Catálogo infinito + remixes',
    gana: 'dj',
  },
  {
    criterio: 'Personalización (primer baile, ceremonia)',
    banda: 'Versión a medida en directo',
    dj: 'Mezcla del tema original',
    gana: 'banda',
  },
  {
    criterio: 'Espacio físico necesario',
    banda: '4×3 m mínimo + tomas de luz',
    dj: '2×2 m con mesa y altavoces',
    gana: 'dj',
  },
  {
    criterio: 'Sonido (PA) incluido',
    banda: 'A veces (Lady Jarana: +600 € PA propio)',
    dj: 'Casi siempre incluido',
    gana: 'dj',
  },
  {
    criterio: 'Show bilingüe ES/CA',
    banda: 'Sí (depende de la banda)',
    dj: 'Sí (depende del DJ)',
    gana: 'empate',
  },
  {
    criterio: 'Adaptación a la energía de la sala',
    banda: 'Lectura en vivo, cambio de tempo',
    dj: 'Lectura con catálogo enorme',
    gana: 'empate',
  },
  {
    criterio: 'Riesgo de fallo técnico',
    banda: 'Más equipo en escena = más puntos críticos',
    dj: 'Setup más simple = menos puntos críticos',
    gana: 'dj',
  },
];

const ganaIcono: Record<string, string> = {
  banda: '🎸',
  dj: '🎧',
  empate: '🤝',
};

export default function BandaVsDjPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://ladyjarana.es/banda-versus-dj-boda#article',
    inLanguage: 'es-ES',
    headline: 'Banda en directo vs DJ para boda — comparativa honesta (Barcelona 2026)',
    description:
      'Comparativa real banda vs DJ para boda en Barcelona: precio, energía, momento foto, repertorio, espacio. Cuándo elegir cada uno y cuándo combinarlos.',
    author: { '@id': 'https://ladyjarana.es/#musicgroup' },
    publisher: { '@id': 'https://ladyjarana.es/#musicgroup' },
    datePublished: '2026-06-30',
    dateModified: '2026-06-30',
    mainEntityOfPage: 'https://ladyjarana.es/banda-versus-dj-boda',
    image: ['https://ladyjarana.es/og-image.jpg'],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.lead'],
    },
    articleSection: 'Bodas',
    keywords:
      'banda vs DJ boda, banda en directo boda Barcelona, DJ boda Barcelona, contratar banda boda, música boda Catalunya',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es-ES',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es mejor para una boda, banda en directo o DJ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende del momento y del presupuesto. La banda da el "momento foto" y la energía irrepetible del directo (ideal para cóctel + 2-3 sets durante el banquete y baile). El DJ da catálogo infinito y pista continua sin descanso (ideal para after-party hasta las 5). Lo que mejor funciona en boda en Barcelona es combinar: banda 2 horas + DJ continúa. Presupuesto típico combinado: 1.500–2.500 €.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta una banda en directo vs un DJ en Barcelona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Banda en directo: 800 € (cuarteto) a 2.000 € (banda completa 6-7 músicos). DJ: 600 € (DJ junior con equipo básico) a 1.500 € (DJ experimentado con cabina premium + iluminación). Lady Jarana cuarteto desde 800 €, quinteto 1.000-1.300 €, banda completa desde 1.400 €.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo contratar banda y DJ a la vez?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, y es la combinación más popular en bodas en Barcelona. Plan típico: cóctel con música ambiente (DJ o playlist), banda 2-3 sets durante banquete y primera hora de baile, DJ retoma para la noche larga hasta las 4-5 h. Aprovechas el "wow" del directo sin sacrificar la pista continua.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto espacio necesita una banda en directo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una banda cuarteto necesita un escenario o tarima de 4×3 metros mínimo, con 2 tomas de corriente cerca y techo o carpa si es exterior. Quinteto y banda completa: 5×4 m. Un DJ se monta en 2×2 m con una mesa y dos pies de altavoces.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Una banda en directo se puede personalizar para el primer baile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Lady Jarana prepara una versión a medida del tema del primer baile (rumbera, acústica, balada) sin coste extra si el tema es viable. Un DJ pincha el original o un remix; sin "magia" en directo. Si el primer baile es importante para vosotros, gana banda.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ladyjarana.es/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Banda vs DJ para boda',
        item: 'https://ladyjarana.es/banda-versus-dj-boda',
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

        <article className="mx-auto max-w-3xl px-6 pt-28 pb-16 lg:pt-36">
          <header className="mb-12">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
              Guía honesta · junio 2026
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.05] text-negro lg:text-6xl">
              Banda en directo <span className="text-rojo">vs</span> DJ para tu boda
            </h1>
            <p className="lead font-body text-lg text-negro/75 leading-relaxed">
              La pregunta que toda pareja se hace en Barcelona. Aquí va la
              comparativa sin marketing — diez criterios reales, una tabla
              honesta y la respuesta que casi nadie te da: <strong>los dos</strong>.
            </p>
          </header>

          <section className="mb-12 rounded-3xl border-4 border-negro bg-sol p-6 shadow-[8px_8px_0_var(--negro)] sm:p-8">
            <h2 className="mb-3 font-display text-2xl font-bold italic text-negro sm:text-3xl">
              TL;DR — la respuesta corta
            </h2>
            <ul className="space-y-2 font-body text-negro/85">
              <li>
                🎸 <strong>Banda</strong> gana en: momento foto, energía única,
                primer baile personalizado, fotos icónicas.
              </li>
              <li>
                🎧 <strong>DJ</strong> gana en: precio base, catálogo, pista
                continua, espacio, sonido autónomo.
              </li>
              <li>
                🤝 <strong>Banda + DJ</strong> gana casi siempre — banda 2 h en
                el "prime time" + DJ continúa hasta el final. 1.500–2.500 €.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro lg:text-4xl">
              La tabla — 10 criterios reales
            </h2>
            <div className="overflow-x-auto rounded-2xl border-4 border-negro bg-blanco">
              <table className="w-full font-body text-sm">
                <thead>
                  <tr className="bg-negro text-blanco">
                    <th className="px-4 py-3 text-left font-display italic">Criterio</th>
                    <th className="px-4 py-3 text-left font-display italic">🎸 Banda</th>
                    <th className="px-4 py-3 text-left font-display italic">🎧 DJ</th>
                    <th className="px-4 py-3 text-center font-display italic">Gana</th>
                  </tr>
                </thead>
                <tbody>
                  {filas.map((f, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-blanco' : 'bg-crema/50'}
                    >
                      <td className="px-4 py-3 font-semibold text-negro">
                        {f.criterio}
                      </td>
                      <td className="px-4 py-3 text-negro/80">{f.banda}</td>
                      <td className="px-4 py-3 text-negro/80">{f.dj}</td>
                      <td className="px-4 py-3 text-center text-2xl">
                        {ganaIcono[f.gana]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-body text-xs text-negro/60">
              Resultado: 4 a banda, 4 a DJ, 2 empates. Es decir: no hay ganador
              objetivo — depende de qué priorizáis.
            </p>
          </section>

          <section className="mb-12 space-y-6">
            <h2 className="font-display text-3xl font-bold italic text-negro lg:text-4xl">
              Cuándo elegir <span className="text-rojo">banda</span>
            </h2>
            <ul className="space-y-3 font-body text-base text-negro/80 leading-relaxed">
              <li>
                <strong>El cóctel y el banquete son el momento clave.</strong>{' '}
                Querés que la gente se acuerde de la música del primer plato,
                no de la pista a las 3 de la mañana.
              </li>
              <li>
                <strong>El primer baile importa.</strong> Versión rumbera de
                vuestra canción, transición en vivo a un tema rápido, momento
                "no me lo puedo creer".
              </li>
              <li>
                <strong>Sois fan del directo</strong> (conciertos, festivales).
                Replicáis vuestra cultura musical en vuestra boda.
              </li>
              <li>
                <strong>La sala / finca tiene escenario o lugar amplio.</strong>{' '}
                No es problema dar 4×3 m de tarima y dos enchufes.
              </li>
            </ul>
          </section>

          <section className="mb-12 space-y-6">
            <h2 className="font-display text-3xl font-bold italic text-negro lg:text-4xl">
              Cuándo elegir <span className="text-rojo">DJ</span>
            </h2>
            <ul className="space-y-3 font-body text-base text-negro/80 leading-relaxed">
              <li>
                <strong>Queréis fiesta hasta las 5 de la madrugada.</strong>{' '}
                Ninguna banda puede tocar 6 horas seguidas sin pausa.
              </li>
              <li>
                <strong>El presupuesto musical es ajustado.</strong> DJ base
                desde 600 €, banda cuarteto desde 800 €.
              </li>
              <li>
                <strong>El espacio es muy reducido</strong> (jardín, terraza
                pequeña, masía con techo bajo).
              </li>
              <li>
                <strong>Vuestro repertorio mental es muy diverso</strong> —
                reggaeton, techno, salsa, pop noventero todo seguido.
              </li>
            </ul>
          </section>

          <section className="mb-12 rounded-3xl border-4 border-negro bg-rojo p-6 text-blanco shadow-[8px_8px_0_var(--negro)] sm:p-8">
            <h2 className="mb-3 font-display text-3xl font-bold italic">
              🤝 La fórmula que casi siempre gana: banda + DJ
            </h2>
            <p className="mb-4 font-body leading-relaxed text-blanco/90">
              La combinación más popular en bodas en Barcelona y Catalunya:
            </p>
            <ol className="space-y-2 font-body text-blanco/90">
              <li>
                <strong>18:00–20:00 · Cóctel:</strong> playlist propia o DJ ambient.
              </li>
              <li>
                <strong>20:00–22:30 · Banquete + brindis:</strong> banda set 1
                (versiones, rumba acústica).
              </li>
              <li>
                <strong>23:00–00:30 · Banda set 2 + primer baile:</strong> el
                pico emocional de la noche.
              </li>
              <li>
                <strong>00:30–05:00 · DJ:</strong> pista hasta el final, sin pausa.
              </li>
            </ol>
            <p className="mt-4 font-body text-sm text-blanco/80">
              Presupuesto total típico (Barcelona 2026): 1.500–2.500 €. Lady
              Jarana cuarteto + DJ recomendado por nosotros = aprox. 1.500 €.
            </p>
          </section>

          <section className="mb-12 rounded-3xl border-2 border-negro/20 bg-blanco p-6 sm:p-8">
            <h2 className="mb-4 font-display text-2xl font-bold italic text-negro sm:text-3xl">
              ¿Quieres que os hagamos presupuesto?
            </h2>
            <p className="mb-6 font-body text-negro/75">
              Mándanos fecha, sitio y aforo. Te decimos en minutos qué formato
              encaja y con qué DJs de confianza solemos cerrar el combo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={WHATSAPP_URL} variant="primary">
                Pedir presupuesto →
              </Button>
              <Link
                href="/cuanto-cuesta-banda-boda-barcelona"
                className="rounded-full border-2 border-negro bg-blanco px-6 py-3 font-body font-bold text-negro shadow-[3px_3px_0_var(--negro)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0_var(--negro)] transition-all"
              >
                Guía completa de precios →
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
