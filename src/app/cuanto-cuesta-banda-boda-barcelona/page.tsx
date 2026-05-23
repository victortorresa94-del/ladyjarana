import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Cuánto cuesta contratar una banda para boda en Barcelona (2026)',
  description:
    'Guía honesta de precios de banda en directo para boda en Barcelona y Catalunya: tarifas reales 2026, qué entra, qué no, comparativa banda vs DJ, cuándo cuarteto y cuándo quinteto. Lady Jarana desde 1000 €.',
  alternates: {
    canonical: 'https://ladyjarana.es/cuanto-cuesta-banda-boda-barcelona',
    languages: {
      es: 'https://ladyjarana.es/cuanto-cuesta-banda-boda-barcelona',
      ca: 'https://ladyjarana.es/ca/quant-costa-grup-casament-barcelona',
      'x-default': 'https://ladyjarana.es/cuanto-cuesta-banda-boda-barcelona',
    },
  },
  openGraph: {
    title: 'Cuánto cuesta contratar una banda para boda en Barcelona',
    description:
      'Tarifas reales 2026, qué incluye, comparativa con DJ y guía de decisión. Cuarteto, quinteto, banda completa.',
    type: 'article',
  },
};

export default function CuantoCuestaPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'es-ES',
    headline: 'Cuánto cuesta contratar una banda para boda en Barcelona (2026)',
    description:
      'Guía completa de precios para contratar banda en directo en una boda en Barcelona y Catalunya: tarifas, formatos, sonido, comparativa con DJ.',
    author: { '@id': 'https://ladyjarana.es/#musicgroup' },
    publisher: { '@id': 'https://ladyjarana.es/#musicgroup' },
    datePublished: '2026-01-15',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://ladyjarana.es/cuanto-cuesta-banda-boda-barcelona',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.lead'],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es-ES',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta una banda en directo para boda en Barcelona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En 2026, una banda profesional para boda en Barcelona cuesta entre 1000 € (cuarteto) y 2000 € (banda completa con 7 músicos). Lady Jarana sale a 1000 € cuarteto, 1200 € quinteto, desde 1400 € banda completa. Cada músico adicional sobre el cuarteto suma unos 200 €.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es más caro, banda o DJ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un DJ de boda en Barcelona cuesta entre 600 y 1500 € (según experiencia y equipo). Una banda en directo arranca en 1000 € (cuarteto). La banda da experiencia única, energía sostenida y momento foto inolvidable; el DJ da catálogo infinito y pista todo el rato. Muchas bodas combinan: banda 2h + DJ continúa.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo se paga la banda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anticipo del 30% al firmar contrato (bloquea la fecha). 70% restante el día de la boda o por transferencia previa.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ladyjarana.es/' },
      { '@type': 'ListItem', position: 2, name: 'Cuánto cuesta una banda para boda', item: 'https://ladyjarana.es/cuanto-cuesta-banda-boda-barcelona' },
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
          {/* Hero */}
          <header className="mb-12">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
              Guía · actualizada mayo 2026
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic text-negro leading-[1.05] lg:text-5xl">
              Cuánto cuesta contratar una banda para boda en Barcelona
            </h1>
            <p className="lead font-body text-lg text-negro/80 leading-relaxed">
              Resumen rápido: una banda en directo profesional para boda en
              Barcelona y Catalunya cuesta entre <strong>1.000 € y 2.000 €</strong>{' '}
              en 2026, según formato (cuarteto, quinteto, banda completa) y
              extras de sonido. Lady Jarana arranca en <strong>1.000 € el
              cuarteto</strong>. Esta guía explica por qué, qué entra, qué no, y
              cuándo conviene cada formato.
            </p>
          </header>

          {/* TOC */}
          <nav className="mb-12 rounded-2xl border-2 border-negro/15 bg-blanco p-5">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-wider text-negro/60">
              En esta guía
            </p>
            <ul className="space-y-1 font-body text-sm text-negro/80">
              <li>1. <a href="#tarifas" className="text-rojo underline font-bold">Tarifas reales 2026 por formato</a></li>
              <li>2. <a href="#que-entra" className="text-rojo underline font-bold">Qué entra en el precio y qué se paga aparte</a></li>
              <li>3. <a href="#sonido" className="text-rojo underline font-bold">El sonido: cuándo lo pone el venue, cuándo la banda</a></li>
              <li>4. <a href="#cuarteto-quinteto" className="text-rojo underline font-bold">Cuándo cuarteto y cuándo quinteto</a></li>
              <li>5. <a href="#banda-vs-dj" className="text-rojo underline font-bold">Banda vs DJ vs solista: cuál encaja</a></li>
              <li>6. <a href="#senal" className="text-rojo underline font-bold">Anticipo, contrato y cancelaciones</a></li>
              <li>7. <a href="#antelacion" className="text-rojo underline font-bold">Con cuánta antelación reservar</a></li>
            </ul>
          </nav>

          {/* Sección 1 */}
          <section id="tarifas" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              1. Tarifas reales 2026 por formato
            </h2>
            <p className="mb-4 font-body text-base text-negro/80 leading-relaxed">
              Las tarifas de banda en directo en Barcelona varían según el
              número de músicos. Lady Jarana mantiene precios públicos:
            </p>
            <div className="mb-4 overflow-hidden rounded-2xl border-2 border-negro">
              <table className="w-full text-left text-sm">
                <thead className="bg-negro text-crema">
                  <tr>
                    <th className="p-3 font-body font-bold">Formato</th>
                    <th className="p-3 font-body font-bold">Músicos</th>
                    <th className="p-3 font-body font-bold">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-negro/15 bg-blanco">
                    <td className="p-3 font-body text-negro">Cuarteto</td>
                    <td className="p-3 font-body text-negro">4</td>
                    <td className="p-3 font-body font-bold text-rojo">1.000 €</td>
                  </tr>
                  <tr className="border-b border-negro/15 bg-sol/30">
                    <td className="p-3 font-body text-negro">Quinteto (más demandado)</td>
                    <td className="p-3 font-body text-negro">5</td>
                    <td className="p-3 font-body font-bold text-rojo">1.200 €</td>
                  </tr>
                  <tr className="bg-blanco">
                    <td className="p-3 font-body text-negro">Banda completa</td>
                    <td className="p-3 font-body text-negro">6-7</td>
                    <td className="p-3 font-body font-bold text-rojo">desde 1.400 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-body text-sm text-negro/70 italic">
              Regla simple: cuarteto = 1.000 €, cada músico adicional +200 €.
              No hay tarifa por dúo o trío — no lo ofrecemos porque consideramos
              que no entrega la energía del show.
            </p>
          </section>

          {/* Sección 2 */}
          <section id="que-entra" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              2. Qué entra en el precio y qué se paga aparte
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-negro bg-blanco p-5">
                <p className="mb-3 font-display text-lg font-bold italic text-negro">
                  ✓ Incluido
                </p>
                <ul className="space-y-2 font-body text-sm text-negro/80">
                  <li>● 120 min de show en directo</li>
                  <li>● Repertorio bilingüe ES/CA (37 canciones)</li>
                  <li>● Personalización de canción clave (primer baile, ceremonia, entrada)</li>
                  <li>● Coordinación previa con wedding planner / técnico</li>
                  <li>● Cuatro músicos profesionales</li>
                  <li>● Desplazamiento dentro de Catalunya</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-negro bg-blanco p-5">
                <p className="mb-3 font-display text-lg font-bold italic text-negro">
                  ✗ Va aparte
                </p>
                <ul className="space-y-2 font-body text-sm text-negro/80">
                  <li>○ Sonido (PA + técnico): desde 600 € si lo pone la banda</li>
                  <li>○ Backline en venues sin equipo</li>
                  <li>○ Desplazamiento fuera de Catalunya</li>
                  <li>○ Catering / alojamiento (eventos lejanos)</li>
                  <li>○ Extras a pactar (bises largos, segundo set)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section id="sonido" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              3. El sonido: cuándo lo pone el venue, cuándo la banda
            </h2>
            <p className="mb-4 font-body text-base text-negro/80 leading-relaxed">
              El precio del formato no incluye sonido (PA + técnico). Hay dos
              escenarios típicos en boda:
            </p>
            <p className="mb-3 font-body text-base text-negro/80 leading-relaxed">
              <strong>Opción A — Sonido del venue (recomendada).</strong>{' '}
              Hoteles, masías y fincas grandes suelen tener PA preinstalado +
              técnico. Si es tu caso, no pagas extra de sonido: mandamos rider
              en PDF y nos coordinamos con su técnico. Es lo más eficiente.
            </p>
            <p className="font-body text-base text-negro/80 leading-relaxed">
              <strong>Opción B — Sonido propio.</strong> Si tu venue (finca
              pequeña, terraza, jardín particular) no tiene PA, Lady Jarana lo
              aporta desde <strong>600 €</strong> con 2 técnicos. El precio
              sube según aforo: para más de 200 invitados o ambiente exterior
              grande, contar 800-1000 € de sonido.
            </p>
          </section>

          {/* Sección 4 */}
          <section id="cuarteto-quinteto" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              4. ¿Cuarteto, quinteto o banda completa?
            </h2>
            <p className="mb-4 font-body text-base text-negro/80 leading-relaxed">
              La diferencia entre formatos es 200 € por músico extra. La
              pregunta real es cuál encaja con tu evento:
            </p>
            <ul className="mb-4 space-y-3 font-body text-base text-negro/80">
              <li>
                <strong>Cuarteto (1.000 €)</strong> — bodas íntimas, hasta 100
                invitados, salones interiores. Sonido pleno de banda sin
                vientos, mejor cuando el evento es contenido.
              </li>
              <li>
                <strong>Quinteto (1.200 €)</strong> — la opción más demandada.
                Cuarteto + trompeta. La trompeta marca diferencia en rumbas y
                temas festivos. Ideal para bodas de 100-200 invitados o
                espacios al aire libre.
              </li>
              <li>
                <strong>Banda completa (desde 1.400 €)</strong> — quinteto +
                bajista, percusión o saxo adicional. Sonido orquestal para
                bodas grandes o ambientes muy resonantes (carpas grandes,
                escenarios al aire libre con mucho espacio).
              </li>
            </ul>
            <p className="font-body text-sm text-negro/70">
              Si dudas, el quinteto cubre el 70% de bodas en Catalunya bien.
            </p>
          </section>

          {/* Sección 5 */}
          <section id="banda-vs-dj" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              5. Banda en directo vs DJ vs solista
            </h2>
            <div className="overflow-hidden rounded-2xl border-2 border-negro">
              <table className="w-full text-left text-sm">
                <thead className="bg-negro text-crema">
                  <tr>
                    <th className="p-3 font-body font-bold"></th>
                    <th className="p-3 font-body font-bold">Banda directo</th>
                    <th className="p-3 font-body font-bold">DJ</th>
                    <th className="p-3 font-body font-bold">Solista</th>
                  </tr>
                </thead>
                <tbody className="bg-blanco">
                  <tr className="border-b border-negro/15">
                    <td className="p-3 font-body font-bold text-negro">Precio</td>
                    <td className="p-3 font-body text-negro/80">1.000-2.000 €</td>
                    <td className="p-3 font-body text-negro/80">600-1.500 €</td>
                    <td className="p-3 font-body text-negro/80">400-800 €</td>
                  </tr>
                  <tr className="border-b border-negro/15">
                    <td className="p-3 font-body font-bold text-negro">Energía</td>
                    <td className="p-3 font-body text-negro/80">Máxima sostenida</td>
                    <td className="p-3 font-body text-negro/80">Variable, depende</td>
                    <td className="p-3 font-body text-negro/80">Íntima, suave</td>
                  </tr>
                  <tr className="border-b border-negro/15">
                    <td className="p-3 font-body font-bold text-negro">Catálogo</td>
                    <td className="p-3 font-body text-negro/80">37 canciones</td>
                    <td className="p-3 font-body text-negro/80">Infinito</td>
                    <td className="p-3 font-body text-negro/80">~20 canciones</td>
                  </tr>
                  <tr className="border-b border-negro/15">
                    <td className="p-3 font-body font-bold text-negro">Duración show</td>
                    <td className="p-3 font-body text-negro/80">2-3 h</td>
                    <td className="p-3 font-body text-negro/80">4-6 h</td>
                    <td className="p-3 font-body text-negro/80">1-2 h</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-body font-bold text-negro">Momento foto</td>
                    <td className="p-3 font-body text-negro/80">★★★★★</td>
                    <td className="p-3 font-body text-negro/80">★★</td>
                    <td className="p-3 font-body text-negro/80">★★★</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-body text-sm text-negro/70 italic">
              La combinación más común en bodas grandes: <strong>banda 2h tras
              la cena + DJ continúa hasta barra libre</strong>. Lo mejor de
              ambos mundos.
            </p>
          </section>

          {/* Sección 6 */}
          <section id="senal" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              6. Anticipo, contrato y cancelaciones
            </h2>
            <ul className="space-y-2 font-body text-base text-negro/80">
              <li>● <strong>Anticipo 30%</strong> al firmar contrato — bloquea la fecha.</li>
              <li>● <strong>70% restante</strong> el día de la boda o por transferencia previa.</li>
              <li>● <strong>Cancelación &gt;60 días</strong> antes: devolución 100%.</li>
              <li>● <strong>Cancelación 30-60 días</strong>: devolución 50%.</li>
              <li>● <strong>Cancelación &lt;30 días</strong>: anticipo retenido.</li>
              <li>● Factura completa con IVA (proyecto de 94 Music).</li>
            </ul>
          </section>

          {/* Sección 7 */}
          <section id="antelacion" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              7. Con cuánta antelación reservar
            </h2>
            <p className="font-body text-base text-negro/80 leading-relaxed">
              Para sábados de mayo a septiembre — la temporada alta de bodas
              en Catalunya — entre <strong>6 y 12 meses</strong> de antelación.
              Para fechas fuera de temporada (otoño, invierno, viernes y
              domingos), 2-4 meses suele bastar. Si tu fecha está cerca y
              quieres saber rápido, pregunta por WhatsApp con fecha + lugar +
              formato y respondemos en minutos.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border-4 border-negro bg-rojo p-8 text-center shadow-[8px_8px_0_var(--negro)] lg:p-10">
            <h2 className="mb-3 font-display text-2xl font-bold italic text-blanco lg:text-3xl">
              ¿Pasamos a tu fecha?
            </h2>
            <p className="mb-6 font-body text-sm text-blanco/90">
              Mándanos fecha, lugar y formato. Te decimos sí en minutos con
              presupuesto cerrado.
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              Hablemos por WhatsApp →
            </Button>
            <p className="mt-4 font-body text-xs text-blanco/70">
              <Link href="/precios" className="text-sol underline">
                Ver precios detallados
              </Link>{' '}
              ·{' '}
              <Link href="/faq" className="text-sol underline">
                FAQ completa
              </Link>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
