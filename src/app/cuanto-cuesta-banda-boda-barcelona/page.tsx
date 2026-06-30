import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Cuánto cuesta contratar una banda para boda en Barcelona (2026)',
  description:
    'Guía honesta de lo que influye en el precio de una banda en directo para boda en Barcelona y Catalunya: formato, fecha, sonido, distancia, extras. Pide presupuesto cerrado por WhatsApp.',
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
      'Qué influye en el precio, qué entra, qué va aparte, comparativa con DJ y guía de decisión. Sin tarifas listadas.',
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
      'Guía completa sobre qué influye en el precio de contratar banda en directo para boda en Barcelona y Catalunya: formatos, sonido, comparativa con DJ.',
    author: { '@id': 'https://ladyjarana.es/#musicgroup' },
    publisher: { '@id': 'https://ladyjarana.es/#musicgroup' },
    datePublished: '2026-01-15',
    dateModified: '2026-06-30',
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
        name: '¿De qué depende el precio de una banda en directo para boda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Del formato (cuarteto, quinteto o banda completa), la fecha (temporada alta o baja), el lugar y la distancia, si el venue aporta sonido o lo pone la banda, y de los extras (segundo set, versión a medida del primer baile, etc.). Pídenos presupuesto cerrado por WhatsApp y te lo cerramos en minutos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el precio de Lady Jarana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Show de 120 minutos en directo, repertorio bilingüe ES/CA, personalización de canción clave (primer baile, ceremonia o entrada), coordinación previa con wedding planner o técnico, músicos profesionales, factura con IVA. El sonido (PA + técnico) y el desplazamiento fuera de Catalunya van aparte.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuándo se paga la banda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anticipo del 30 % al firmar contrato (bloquea la fecha). 70 % restante el día de la boda o por transferencia previa.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Con cuánta antelación hay que reservar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para sábados de mayo a septiembre — temporada alta de bodas en Catalunya — entre 6 y 12 meses. Fechas fuera de temporada (otoño, invierno, viernes y domingos), 2-4 meses suele bastar.',
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
          <header className="mb-12">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
              Guía · actualizada 2026
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic text-negro leading-[1.05] lg:text-5xl">
              Cuánto cuesta contratar una banda para boda en Barcelona
            </h1>
            <p className="lead font-body text-lg text-negro/80 leading-relaxed">
              Respuesta corta: <strong>depende</strong>. Y eso no es una
              evasiva. El precio de una banda en directo profesional varía por
              formato, fecha, lugar y extras. Esta guía explica honestamente
              qué influye en el presupuesto, qué entra, qué va aparte y cómo
              decidir entre cuarteto, quinteto o banda completa. Cierre cerrado
              te lo damos en minutos por WhatsApp.
            </p>
          </header>

          <nav className="mb-12 rounded-2xl border-2 border-negro/15 bg-blanco p-5">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-wider text-negro/60">
              En esta guía
            </p>
            <ul className="space-y-1 font-body text-sm text-negro/80">
              <li>1. <a href="#influye" className="text-rojo underline font-bold">Qué influye en el precio</a></li>
              <li>2. <a href="#que-entra" className="text-rojo underline font-bold">Qué entra y qué se paga aparte</a></li>
              <li>3. <a href="#sonido" className="text-rojo underline font-bold">El sonido: cuándo lo pone el venue, cuándo la banda</a></li>
              <li>4. <a href="#cuarteto-quinteto" className="text-rojo underline font-bold">Cuándo cuarteto y cuándo quinteto</a></li>
              <li>5. <a href="#banda-vs-dj" className="text-rojo underline font-bold">Banda vs DJ vs solista</a></li>
              <li>6. <a href="#senal" className="text-rojo underline font-bold">Anticipo, contrato y cancelaciones</a></li>
              <li>7. <a href="#antelacion" className="text-rojo underline font-bold">Con cuánta antelación reservar</a></li>
            </ul>
          </nav>

          <section id="influye" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              1. Qué influye en el precio
            </h2>
            <p className="mb-4 font-body text-base text-negro/80 leading-relaxed">
              No publicamos tarifas porque cada boda es un mundo. Lo que hace
              moverse el presupuesto:
            </p>
            <ul className="space-y-3 font-body text-base text-negro/80 leading-relaxed">
              <li>● <strong>Formato</strong> — cuántos músicos (cuarteto, quinteto o banda completa).</li>
              <li>● <strong>Fecha</strong> — sábado de mayo a septiembre va distinto que un viernes de marzo.</li>
              <li>● <strong>Lugar</strong> — Barcelona ciudad vs. Pirineu vs. fuera de Catalunya.</li>
              <li>● <strong>Sonido</strong> — si el venue aporta PA + técnico o lo llevamos nosotros.</li>
              <li>● <strong>Extras</strong> — versión a medida del primer baile, segundo set, set extendido, bises pactados.</li>
              <li>● <strong>Aforo</strong> — un escenario para 80 invitados no es lo mismo que uno para 400.</li>
            </ul>
          </section>

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
                  <li>● Repertorio bilingüe ES/CA</li>
                  <li>● Personalización de canción clave (primer baile, ceremonia, entrada)</li>
                  <li>● Coordinación previa con wedding planner / técnico</li>
                  <li>● Músicos profesionales</li>
                  <li>● Factura con IVA</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-negro bg-blanco p-5">
                <p className="mb-3 font-display text-lg font-bold italic text-negro">
                  ✗ Va aparte
                </p>
                <ul className="space-y-2 font-body text-sm text-negro/80">
                  <li>○ Sonido (PA + técnico) si lo pone la banda</li>
                  <li>○ Backline en venues sin equipo</li>
                  <li>○ Desplazamiento fuera de Catalunya</li>
                  <li>○ Catering / alojamiento (eventos lejanos)</li>
                  <li>○ Extras a pactar (segundo set, bises largos)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sonido" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              3. El sonido: cuándo lo pone el venue, cuándo la banda
            </h2>
            <p className="mb-4 font-body text-base text-negro/80 leading-relaxed">
              El precio del formato no incluye sonido. Dos escenarios típicos
              en boda:
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
              aporta con 2 técnicos. Presupuesto aparte según aforo y
              características del espacio.
            </p>
          </section>

          <section id="cuarteto-quinteto" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              4. ¿Cuarteto, quinteto o banda completa?
            </h2>
            <p className="mb-4 font-body text-base text-negro/80 leading-relaxed">
              La pregunta real es cuál encaja con tu evento:
            </p>
            <ul className="mb-4 space-y-3 font-body text-base text-negro/80">
              <li>
                <strong>Cuarteto</strong> — bodas íntimas, hasta 100 invitados,
                salones interiores. Sonido pleno de banda sin vientos, mejor
                cuando el evento es contenido.
              </li>
              <li>
                <strong>Quinteto</strong> — la opción más demandada. Cuarteto +
                trompeta. La trompeta marca diferencia en rumbas y temas
                festivos. Ideal para bodas de 100-200 invitados o espacios al
                aire libre.
              </li>
              <li>
                <strong>Banda completa</strong> — quinteto + bajista,
                percusión o saxo adicional. Sonido orquestal para bodas grandes
                o ambientes muy resonantes (carpas grandes, escenarios al aire
                libre con mucho espacio).
              </li>
            </ul>
            <p className="font-body text-sm text-negro/70">
              Si dudas, el quinteto cubre el 70 % de bodas en Catalunya bien.
            </p>
          </section>

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
                    <td className="p-3 font-body font-bold text-negro">Energía</td>
                    <td className="p-3 font-body text-negro/80">Máxima sostenida</td>
                    <td className="p-3 font-body text-negro/80">Variable, depende</td>
                    <td className="p-3 font-body text-negro/80">Íntima, suave</td>
                  </tr>
                  <tr className="border-b border-negro/15">
                    <td className="p-3 font-body font-bold text-negro">Catálogo</td>
                    <td className="p-3 font-body text-negro/80">Trabajado, finito</td>
                    <td className="p-3 font-body text-negro/80">Infinito</td>
                    <td className="p-3 font-body text-negro/80">Limitado</td>
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
              ambos mundos. Más en <Link href="/banda-versus-dj-boda" className="text-rojo underline font-bold">banda vs DJ para boda</Link>.
            </p>
          </section>

          <section id="senal" className="mb-12 scroll-mt-24">
            <h2 className="mb-5 font-display text-3xl font-bold italic text-negro">
              6. Anticipo, contrato y cancelaciones
            </h2>
            <ul className="space-y-2 font-body text-base text-negro/80">
              <li>● <strong>Anticipo 30 %</strong> al firmar contrato — bloquea la fecha.</li>
              <li>● <strong>70 % restante</strong> el día de la boda o por transferencia previa.</li>
              <li>● <strong>Cancelación &gt;60 días</strong> antes: devolución 100 %.</li>
              <li>● <strong>Cancelación 30-60 días</strong>: devolución 50 %.</li>
              <li>● <strong>Cancelación &lt;30 días</strong>: anticipo retenido.</li>
              <li>● Factura completa con IVA (proyecto de 94 Music).</li>
            </ul>
          </section>

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
