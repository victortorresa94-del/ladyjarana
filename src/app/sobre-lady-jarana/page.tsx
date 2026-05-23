import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';
import { integrantes } from '@/lib/integrantes';

export const metadata: Metadata = {
  title: 'Sobre Lady Jarana — Historia, miembros, géneros y trayectoria',
  description:
    'Lady Jarana es una banda de pop-rock, rumba y latineo formada en Barcelona en 2025. Cinco músicos profesionales, repertorio bilingüe ES/CA, especializados en bodas, festes majors y eventos privados en toda Catalunya.',
  alternates: {
    canonical: 'https://ladyjarana.com/sobre-lady-jarana',
    languages: {
      es: 'https://ladyjarana.com/sobre-lady-jarana',
      ca: 'https://ladyjarana.com/ca/sobre-lady-jarana',
      'x-default': 'https://ladyjarana.com/sobre-lady-jarana',
    },
  },
  openGraph: {
    title: 'Sobre Lady Jarana — banda en directo Barcelona y Catalunya',
    description:
      'Historia, miembros, géneros musicales y trayectoria de Lady Jarana. Cinco músicos, dos idiomas, una sola jarana.',
    url: 'https://ladyjarana.com/sobre-lady-jarana',
    type: 'profile',
    images: ['/og-image.jpg'],
  },
};

const milestones = [
  { year: '2025 · primavera', text: 'Fundación de Lady Jarana en Barcelona. Primer concierto "El Bautizo" en el Puerto de la Barceloneta.' },
  { year: '2025 · primavera', text: 'Show en sala en el Centro Asturiano de Barcelona — primera conexión con público local.' },
  { year: '2025 · verano', text: 'Festa Major de Barberà del Vallès. Primera prueba de fuego en circuito municipal.' },
  { year: '2025 · septiembre', text: 'Festa Major de Sant Adrià de Besòs. Escenario principal, formato XXL, producción ampliada.' },
  { year: '2025 · diciembre', text: 'Boda en Cangabarró. Consolidación en eventos nupciales de alto nivel.' },
  { year: '2026 · abril', text: 'Apertura de temporada en el Puerto de la Barceloneta — vuelta al lugar fundacional.' },
  { year: '2026 · 31 mayo', text: 'Segundo concierto en la Barceloneta. Escenario de cabecera consolidado.' },
  { year: '2026 · 23 junio', text: 'Revetlla de Sant Joan en el Arc de Triomf, Barcelona (organizado por la Asociación de Vecinos del Arc de Triomf).' },
  { year: '2026 · 27 junio', text: 'Lleida. Salto al circuito catalán fuera del área metropolitana.' },
];

const generos = [
  {
    nombre: 'Pop-rock español y catalán de los 2000',
    descripcion:
      'El núcleo del concepto Lady Jarana: himnos en castellano y catalán que conectan con varias generaciones. El Canto del Loco, Fito & Fitipaldis, Jarabe de Palo, Sopa de Cabra, Els Catarres, Pignoise.',
  },
  {
    nombre: 'Rumba catalana y flamenco-pop',
    descripcion:
      'El motor del baile. Arreglos orgánicos con guitarra española, palmas y mucho groove. Estopa, Los Delinqüentes, El Barrio, Manu Chao.',
  },
  {
    nombre: 'Pop latino actual',
    descripcion:
      'El toque moderno. Adaptados a un estilo propio más acústico y rumbero. Manuel Turizo, Sebastián Yatra, The Tyets.',
  },
  {
    nombre: 'Verbeneras y clásicos festivos',
    descripcion:
      'Los himnos festivos que canta hasta la suegra. Cierre de fiesta garantizado.',
  },
];

export default function SobrePage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    inLanguage: 'es-ES',
    name: 'Sobre Lady Jarana',
    url: 'https://ladyjarana.com/sobre-lady-jarana',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.lead'],
    },
    about: { '@id': 'https://ladyjarana.com/#musicgroup' },
    mainEntity: { '@id': 'https://ladyjarana.com/#musicgroup' },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ladyjarana.com/' },
      { '@type': 'ListItem', position: 2, name: 'Sobre Lady Jarana', item: 'https://ladyjarana.com/sobre-lady-jarana' },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* HERO */}
        <section className="relative overflow-hidden bg-negro pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/fotos/grupo-publico.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-negro/40 via-negro/30 to-negro/95" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ Sobre Lady Jarana
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-crema sm:text-5xl lg:text-7xl">
              Cinco músicos. <br />
              Dos idiomas. <br />
              <span className="text-sol">Una sola jarana.</span>
            </h1>
            <p className="lead mx-auto max-w-2xl font-body text-base text-crema/90 lg:text-lg">
              Lady Jarana es una banda de música en directo formada en
              Barcelona en la primavera de 2025. Pop-rock, rumba catalana y
              latineo en formato cuarteto. Especializada en bodas, festes
              majors y eventos privados en toda Catalunya. Show bilingüe ES/CA.
            </p>
          </div>
        </section>

        {/* DEFINICIÓN */}
        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Qué es Lady Jarana
            </h2>
            <div className="space-y-4 font-body text-lg text-negro/80 leading-relaxed">
              <p>
                <strong>Lady Jarana</strong> es un cuarteto profesional de
                música en directo con base en Barcelona, fundado en la
                primavera de 2025. La formación base la integran cinco
                músicos: voz y guitarra española (Víctor Torres), guitarra
                eléctrica (Alejo Finger), teclado y bajo (Iván Cortés),
                batería (Diego Aquino) y trompeta (Antonio, en formato
                quinteto).
              </p>
              <p>
                El proyecto fusiona la nostalgia del pop-rock español de los
                2000 con la energía de la rumba catalana, el flamenco-pop, y
                el pulso del pop latino actual. El show es 100% en directo,
                sin pistas pregrabadas, y el repertorio (37 canciones,
                actualizándose continuamente) se interpreta en castellano y
                catalán según el contexto del evento.
              </p>
              <p>
                Lady Jarana actúa en bodas, festes majors municipales,
                conciertos en salas, fiestas de barrio, eventos corporativos
                y verbenas en toda Catalunya. Es un proyecto de{' '}
                <strong>94 Music</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* HISTORIA */}
        <section className="bg-naranja/15 py-16 lg:py-24 border-y-2 border-negro/10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Historia
            </h2>
            <div className="space-y-4 font-body text-base text-negro/80 leading-relaxed">
              <p>
                Lady Jarana nace en Barcelona en la primavera de 2025 con un
                único objetivo: <strong>hacer que la gente cante, baile y
                disfrute</strong>. El primer concierto, conocido internamente
                como &quot;El Bautizo&quot;, fue un bolo acústico en el Puerto
                de la Barceloneta ante una audiencia numerosa que marcó el
                nacimiento oficial del proyecto.
              </p>
              <p>
                Durante ese mismo año la banda recorrió un circuito creciente:
                sala (Centro Asturiano de Barcelona), festa major de Barberà
                del Vallès en verano, festa major XXL de Sant Adrià de Besòs
                en septiembre, y boda de gama alta en Cangabarró en diciembre.
                Cada bolo demostró la capacidad de la banda para adaptarse a
                escenarios muy diferentes: desde la intimidad de una sala
                cultural hasta la plaza grande con producción ampliada.
              </p>
              <p>
                En 2026 Lady Jarana abre temporada en el Puerto de la
                Barceloneta — el lugar fundacional, ya convertido en escenario
                de cabecera. La agenda incluye Rumba Beach Festival
                (organizado por la Asociación de Vecinos de la Barceloneta,
                tras dos ediciones consolidadas), la Revetlla de Sant Joan en
                el Arc de Triomf (Asociación de Vecinos del Arc de Triomf) y
                el salto al circuito catalán fuera del área metropolitana,
                con bolo en Lleida en junio.
              </p>
            </div>
          </div>
        </section>

        {/* CONCEPTO */}
        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Concepto del show
            </h2>
            <p className="mb-4 font-body text-lg text-negro/80 leading-relaxed">
              El show Lady Jarana es{' '}
              <strong>fiesta mediterránea en directo</strong>. 120 minutos de
              música ininterrumpida (extensibles), repertorio bilingüe que se
              adapta al público, interacción constante con la audiencia desde
              el frontman, y arreglos orgánicos donde la guitarra española y
              las palmas marcan el carácter rumbero del proyecto.
            </p>
            <p className="mb-4 font-body text-lg text-negro/80 leading-relaxed">
              No hay pistas pregrabadas ni metrónomos invisibles: cuatro
              músicos tocando todos los instrumentos cada noche. Esta
              decisión es deliberada — define lo que Lady Jarana ofrece
              frente a un DJ o un dúo acústico con backing tracks.
            </p>
            <p className="font-body text-lg text-negro/80 leading-relaxed">
              El repertorio se personaliza por evento: ceremonia, primer
              baile, entrada de los novios o cualquier momento clave se
              prepara con 4-6 semanas de antelación a través de versión a
              medida sin coste adicional.
            </p>
          </div>
        </section>

        {/* MIEMBROS */}
        <section className="bg-blanco py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Miembros
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {integrantes.map((m) => (
                <article
                  key={m.nombre}
                  className="rounded-2xl border-4 border-negro bg-crema p-5 shadow-[6px_6px_0_var(--negro)] sm:flex sm:gap-5"
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl border-2 border-negro/15 bg-negro/5 sm:h-auto sm:w-40">
                    <Image
                      src={m.imagen}
                      alt={m.nombre}
                      fill
                      sizes="(min-width: 640px) 10rem, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h3 className="font-display text-xl font-bold italic text-negro">
                      {m.nombre}
                    </h3>
                    <p className="mb-2 font-body text-xs font-bold uppercase tracking-wider text-rojo">
                      {m.rol}
                    </p>
                    <p className="font-body text-sm text-negro/75 leading-relaxed">
                      {m.descripcion}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GÉNEROS */}
        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Géneros musicales
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {generos.map((g) => (
                <article
                  key={g.nombre}
                  className="rounded-2xl border-2 border-negro/20 bg-blanco p-5"
                >
                  <h3 className="mb-2 font-display text-lg font-bold italic text-negro">
                    {g.nombre}
                  </h3>
                  <p className="font-body text-sm text-negro/75 leading-relaxed">
                    {g.descripcion}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 font-body text-sm text-negro/60">
              Repertorio completo (37 canciones) en{' '}
              <Link href="/repertorio" className="font-bold text-rojo underline">
                /repertorio
              </Link>{' '}
              con playlist oficial en Spotify.
            </p>
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section className="bg-negro py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 font-display text-3xl font-bold italic text-crema sm:text-4xl">
              Trayectoria
            </h2>
            <ol className="relative space-y-4 border-l-2 border-sol/40 pl-6">
              {milestones.map((m, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[34px] top-2 h-4 w-4 rounded-full border-2 border-negro bg-sol" />
                  <div className="rounded-2xl border-2 border-crema/15 bg-negro/40 p-5">
                    <p className="mb-1 font-body text-xs font-bold uppercase tracking-wider text-sol">
                      {m.year}
                    </p>
                    <p className="font-body text-sm text-crema/85 leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* HAN CONFIADO */}
        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Han confiado en Lady Jarana
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>Ayuntamiento de Sant Adrià de Besòs</strong> · Festa Major
              </li>
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>Ayuntamiento de Barberà del Vallès</strong> · Festa Major
              </li>
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>Centro Asturiano de Barcelona</strong> · Sala / Verbena
              </li>
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>AAVV Barceloneta</strong> · Rumba Beach Festival ×2
              </li>
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>AAVV Arc de Triomf</strong> · Revetlla Sant Joan 2026
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl">
              ¿Quieres a Lady Jarana <br />
              <span className="text-sol">en tu evento?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              Cuéntanos fecha, lugar y formato. Disponibilidad y presupuesto en
              minutos por WhatsApp.
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              Hablemos por WhatsApp →
            </Button>
            <p className="mt-6 font-body text-sm text-blanco/70">
              También puedes ver{' '}
              <Link href="/precios" className="text-sol underline font-bold">
                precios
              </Link>{' '}
              o las{' '}
              <Link href="/faq" className="text-sol underline font-bold">
                preguntas frecuentes
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
