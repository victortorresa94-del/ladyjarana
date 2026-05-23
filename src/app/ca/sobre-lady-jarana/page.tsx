import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';
import { integrantesCA } from '@/lib/i18nData';

export const metadata: Metadata = {
  title: 'Sobre Lady Jarana — Història, membres, gèneres i trajectòria',
  description:
    'Lady Jarana és un grup de pop-rock, rumba i latineig format a Barcelona el 2025. Cinc músics professionals, repertori bilingüe ES/CA, especialitzats en casaments, festes majors i esdeveniments privats a tota Catalunya.',
  alternates: {
    canonical: 'https://ladyjarana.es/ca/sobre-lady-jarana',
    languages: {
      es: 'https://ladyjarana.es/sobre-lady-jarana',
      ca: 'https://ladyjarana.es/ca/sobre-lady-jarana',
      'x-default': 'https://ladyjarana.es/sobre-lady-jarana',
    },
  },
  openGraph: {
    title: 'Sobre Lady Jarana — grup en directe Barcelona i Catalunya',
    description:
      'Història, membres, gèneres musicals i trajectòria de Lady Jarana. Cinc músics, dos idiomes, una sola jarana.',
    url: 'https://ladyjarana.es/ca/sobre-lady-jarana',
    type: 'profile',
    locale: 'ca_ES',
    images: ['/og-image.jpg'],
  },
};

const milestones = [
  { year: '2025 · primavera', text: 'Fundació de Lady Jarana a Barcelona. Primer concert "El Bateig" al Port de la Barceloneta.' },
  { year: '2025 · primavera', text: 'Xou en sala al Centro Asturiano de Barcelona — primera connexió amb públic local.' },
  { year: '2025 · estiu', text: 'Festa Major de Barberà del Vallès. Primera prova de foc al circuit municipal.' },
  { year: '2025 · setembre', text: 'Festa Major de Sant Adrià de Besòs. Escenari principal, format XXL, producció ampliada.' },
  { year: '2025 · desembre', text: 'Casament a Cangabarró. Consolidació en esdeveniments nupcials d\'alt nivell.' },
  { year: '2026 · abril', text: 'Obertura de temporada al Port de la Barceloneta — tornada al lloc fundacional.' },
  { year: '2026 · 31 maig', text: 'Segon concert a la Barceloneta. Escenari de capçalera consolidat.' },
  { year: '2026 · 23 juny', text: 'Revetlla de Sant Joan a l\'Arc de Triomf, Barcelona (Associació de Veïns de l\'Arc de Triomf).' },
  { year: '2026 · 27 juny', text: 'Lleida. Salt al circuit català fora de l\'àrea metropolitana.' },
];

const generes = [
  {
    nombre: 'Pop-rock català i espanyol dels 2000',
    descripcion:
      'El nucli del concepte Lady Jarana: himnes en castellà i català que connecten amb diverses generacions. El Canto del Loco, Fito & Fitipaldis, Jarabe de Palo, Sopa de Cabra, Els Catarres, Pignoise.',
  },
  {
    nombre: 'Rumba catalana i flamenco-pop',
    descripcion:
      'El motor del ball. Arranjaments orgànics amb guitarra espanyola, palmes i molt groove. Estopa, Los Delinqüentes, El Barrio, Manu Chao.',
  },
  {
    nombre: 'Pop llatí actual',
    descripcion:
      'El toc modern. Adaptats a un estil propi més acústic i rumber. Manuel Turizo, Sebastián Yatra, The Tyets.',
  },
  {
    nombre: 'Revetlleres i clàssics festius',
    descripcion:
      'Els himnes festius que canta fins i tot la sogra. Tancament de festa garantit.',
  },
];

export default function SobreCAPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    inLanguage: 'ca-ES',
    name: 'Sobre Lady Jarana',
    url: 'https://ladyjarana.es/ca/sobre-lady-jarana',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.lead'],
    },
    about: { '@id': 'https://ladyjarana.es/#musicgroup' },
    mainEntity: { '@id': 'https://ladyjarana.es/#musicgroup' },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://ladyjarana.es/ca' },
      { '@type': 'ListItem', position: 2, name: 'Sobre Lady Jarana', item: 'https://ladyjarana.es/ca/sobre-lady-jarana' },
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
              Cinc músics. <br />
              Dos idiomes. <br />
              <span className="text-sol">Una sola jarana.</span>
            </h1>
            <p className="lead mx-auto max-w-2xl font-body text-base text-crema/90 lg:text-lg">
              Lady Jarana és un grup de música en directe format a Barcelona
              la primavera de 2025. Pop-rock, rumba catalana i latineig en
              format quartet. Especialitzat en casaments, festes majors i
              esdeveniments privats a tota Catalunya. Xou bilingüe ES/CA.
            </p>
          </div>
        </section>

        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Què és Lady Jarana
            </h2>
            <div className="space-y-4 font-body text-lg text-negro/80 leading-relaxed">
              <p>
                <strong>Lady Jarana</strong> és un quartet professional de
                música en directe amb base a Barcelona, fundat la primavera
                de 2025. La formació base la integren cinc músics: veu i
                guitarra espanyola (Víctor Torres), guitarra elèctrica (Alejo
                Finger), teclat i baix (Iván Cortés), bateria (Diego Aquino)
                i trompeta (Antonio, en format quintet).
              </p>
              <p>
                El projecte fusiona la nostàlgia del pop-rock espanyol dels
                2000 amb l&apos;energia de la rumba catalana, el flamenco-pop,
                i el pols del pop llatí actual. El xou és 100% en directe,
                sense pistes pregravades, i el repertori (37 cançons,
                actualitzant-se contínuament) s&apos;interpreta en castellà i
                català segons el context de l&apos;esdeveniment.
              </p>
              <p>
                Lady Jarana actua en casaments, festes majors municipals,
                concerts en sales, festes de barri, esdeveniments corporatius
                i revetlles a tota Catalunya. És un projecte de{' '}
                <strong>94 Music</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-naranja/15 py-16 lg:py-24 border-y-2 border-negro/10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Història
            </h2>
            <div className="space-y-4 font-body text-base text-negro/80 leading-relaxed">
              <p>
                Lady Jarana neix a Barcelona la primavera de 2025 amb un
                únic objectiu: <strong>fer que la gent canti, balli i
                gaudeixi</strong>. El primer concert, conegut internament
                com a &quot;El Bateig&quot;, va ser un bolo acústic al Port
                de la Barceloneta davant una audiència nombrosa que va
                marcar el naixement oficial del projecte.
              </p>
              <p>
                Durant aquell mateix any la banda va recórrer un circuit
                creixent: sala (Centro Asturiano de Barcelona), festa major
                de Barberà del Vallès a l&apos;estiu, festa major XXL de Sant
                Adrià de Besòs al setembre, i casament de gamma alta a
                Cangabarró al desembre. Cada bolo va demostrar la capacitat
                de la banda per adaptar-se a escenaris molt diferents: des
                de la intimitat d&apos;una sala cultural fins a la plaça gran
                amb producció ampliada.
              </p>
              <p>
                El 2026 Lady Jarana obre temporada al Port de la Barceloneta
                — el lloc fundacional, ja convertit en escenari de
                capçalera. L&apos;agenda inclou Rumba Beach Festival
                (Associació de Veïns de la Barceloneta, després de dues
                edicions consolidades), la Revetlla de Sant Joan a l&apos;Arc
                de Triomf (Associació de Veïns de l&apos;Arc de Triomf) i el
                salt al circuit català fora de l&apos;àrea metropolitana, amb
                bolo a Lleida al juny.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Concepte del xou
            </h2>
            <p className="mb-4 font-body text-lg text-negro/80 leading-relaxed">
              El xou Lady Jarana és{' '}
              <strong>festa mediterrània en directe</strong>. 120 minuts de
              música ininterrompuda (ampliables), repertori bilingüe que
              s&apos;adapta al públic, interacció constant amb l&apos;audiència
              des del frontman, i arranjaments orgànics on la guitarra
              espanyola i les palmes marquen el caràcter rumber del projecte.
            </p>
            <p className="mb-4 font-body text-lg text-negro/80 leading-relaxed">
              No hi ha pistes pregravades ni metrònoms invisibles: quatre
              músics tocant tots els instruments cada nit. Aquesta decisió
              és deliberada — defineix el que Lady Jarana ofereix davant
              d&apos;un DJ o un duo acústic amb backing tracks.
            </p>
            <p className="font-body text-lg text-negro/80 leading-relaxed">
              El repertori es personalitza per esdeveniment: cerimònia,
              primer ball, entrada dels nuvis o qualsevol moment clau es
              prepara amb 4-6 setmanes d&apos;antelació amb versió a mida
              sense cost addicional.
            </p>
          </div>
        </section>

        <section className="bg-blanco py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-10 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Membres
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {integrantesCA.map((m) => (
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

        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Gèneres musicals
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {generes.map((g) => (
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
              Repertori complet (37 cançons) a{' '}
              <Link href="/ca/repertori" className="font-bold text-rojo underline">
                /ca/repertori
              </Link>{' '}
              amb playlist oficial a Spotify.
            </p>
          </div>
        </section>

        <section className="bg-negro py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 font-display text-3xl font-bold italic text-crema sm:text-4xl">
              Trajectòria
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

        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Han confiat en Lady Jarana
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>Ajuntament de Sant Adrià de Besòs</strong> · Festa Major
              </li>
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>Ajuntament de Barberà del Vallès</strong> · Festa Major
              </li>
              <li className="rounded-xl border-2 border-negro/15 bg-blanco p-4 font-body text-sm">
                <strong>Centro Asturiano de Barcelona</strong> · Sala / Revetlla
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

        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl">
              Vols Lady Jarana <br />
              <span className="text-sol">al teu esdeveniment?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              Explica&apos;ns data, lloc i format. Disponibilitat i pressupost
              en minuts per WhatsApp.
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              Parlem per WhatsApp →
            </Button>
            <p className="mt-6 font-body text-sm text-blanco/70">
              També pots veure{' '}
              <Link href="/ca/preus" className="text-sol underline font-bold">
                preus
              </Link>{' '}
              o les{' '}
              <Link href="/ca/faq" className="text-sol underline font-bold">
                preguntes freqüents
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <FooterCA />
    </>
  );
}
