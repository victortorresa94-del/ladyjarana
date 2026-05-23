import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title:
    'Preus · Grup en directe Lady Jarana — Quartet des de 1.000 € | Catalunya',
  description:
    'Preus clars de Lady Jarana per a casaments, festes majors i esdeveniments privats a Catalunya. Quartet 1.000–1.300 €, quintet 1.200–1.500 €, banda completa des de 1.400 €. So propi opcional, pressupost en minuts per WhatsApp.',
  alternates: {
    canonical: 'https://ladyjarana.es/ca/preus',
    languages: {
      es: 'https://ladyjarana.es/precios',
      ca: 'https://ladyjarana.es/ca/preus',
      'x-default': 'https://ladyjarana.es/precios',
    },
  },
  openGraph: {
    title: 'Preus · Lady Jarana',
    description:
      'Quartet 1.000–1.300 €. Quintet 1.200–1.500 €. Banda completa des de 1.400 €. So propi opcional amb 2 tècnics. Tota Catalunya.',
    url: 'https://ladyjarana.es/ca/preus',
    type: 'website',
    locale: 'ca_ES',
    images: ['/fotos/eventos-empresa.jpg'],
  },
};

const tiers = [
  {
    nombre: 'Quartet',
    precio: '1.000–1.300 €',
    musicos: '4 músics',
    descripcion:
      'Format base. Veu/guitarra, elèctrica, teclat/baix i bateria. Pop-rock, rumba i latineig en directe.',
    ideal: 'Casaments, esdeveniments privats, sales',
    destacado: true,
  },
  {
    nombre: 'Quintet',
    precio: '1.200–1.500 €',
    musicos: '5 músics',
    descripcion:
      'Quartet + trompeta. Vents per a revetlles grans i moments de màxima energia.',
    ideal: 'Festes majors, casaments grans',
  },
  {
    nombre: 'Banda completa',
    precio: 'des de 1.400 €',
    musicos: '6 músics o més',
    descripcion:
      'Quintet + baixista, percussió, guitarra o saxo addicional. So orquestral a escenaris XXL.',
    ideal: 'Festivals, escenaris grans',
  },
];

const incluye = [
  'Xou en directe de 120 min (extres a pactar)',
  'Repertori bilingüe ES/CA — pop-rock, rumba catalana, latineig i revetlleres',
  'Quatre músics amb experiència en casaments, sales i festes majors',
  'Personalització de cançó clau (entrada, primer ball, moment especial)',
  'Coordinació prèvia amb el vostre wedding planner o programador',
];

const noIncluye = [
  'So i tècnic (mira el bloc de sota)',
  'Backline en espais sense instal·lació',
  'Desplaçaments llargs fora de Catalunya (pressupost a part)',
];

const clientes = [
  'Ajuntament de Sant Adrià de Besòs',
  'Ajuntament de Barberà del Vallès',
  'Centro Asturiano de Barcelona',
  'Associació de Veïns de la Barceloneta · Rumba Beach Festival (× 2)',
  "Associació de Veïns de l'Arc de Triomf",
];

export default function PreusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Banda de música en directe',
    provider: {
      '@type': 'MusicGroup',
      name: 'Lady Jarana',
      url: 'https://ladyjarana.es',
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Catalunya, Espanya' },
    offers: tiers.map((t) => ({
      '@type': 'Offer',
      name: `Grup en directe — ${t.nombre}`,
      price: t.precio.replace(/[^\d]/g, ''),
      priceCurrency: 'EUR',
      description: t.descripcion,
    })),
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden bg-azul pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
              src="/fotos/eventos-empresa.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ Preus sense sorpreses
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-crema sm:text-5xl lg:text-7xl">
              Quant costa <br />
              <span className="text-sol">contractar la jarana.</span>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-base text-crema/90 lg:text-lg">
              Sense tarifes críptiques ni &quot;depèn&quot;. Aquí els números
              base. Els afinem amb tu segons data, lloc i format per WhatsApp.
            </p>
          </div>
        </section>

        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.nombre}
                  className={`relative flex flex-col rounded-3xl border-4 border-negro p-7 shadow-[6px_6px_0_var(--negro)] lg:p-8 ${
                    t.destacado ? 'bg-sol lg:scale-[1.04]' : 'bg-blanco'
                  }`}
                >
                  {t.destacado && (
                    <span className="absolute -top-4 left-6 rounded-full border-2 border-negro bg-rojo px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-blanco shadow-[2px_2px_0_var(--negro)]">
                      ★ El més demanat
                    </span>
                  )}

                  <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                    {t.musicos}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-bold italic text-negro">
                    {t.nombre}
                  </h3>
                  <p className="my-4 font-display text-4xl font-bold italic text-negro lg:text-5xl">
                    {t.precio}
                  </p>
                  <p className="mb-5 flex-1 font-body text-sm text-negro/80 leading-relaxed">
                    {t.descripcion}
                  </p>
                  <p className="mb-5 rounded-xl border-2 border-negro/10 bg-negro/5 px-3 py-2 font-body text-xs text-negro/70">
                    <span className="font-bold">Ideal:</span> {t.ideal}
                  </p>
                  <Button
                    href={WHATSAPP_URL}
                    variant={t.destacado ? 'primary' : 'secondary'}
                  >
                    Demanar pressupost →
                  </Button>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center font-body text-sm text-negro/70">
              <strong className="text-negro">A partir de quartet.</strong> Cada
              músic addicional sobre el quartet suma 200 €. No fem duo ni trio.
            </p>
          </div>
        </section>

        <section className="bg-negro py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ Equip de so
            </p>
            <h2 className="mt-1 mb-6 font-display text-3xl font-bold italic text-crema sm:text-4xl lg:text-5xl">
              El posem nosaltres <br />
              <span className="text-sol">o el poses tu.</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-crema/15 bg-negro/40 p-6">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-sol">
                  Opció A · recomanada
                </p>
                <h3 className="mt-1 mb-3 font-display text-2xl font-bold italic text-crema">
                  So del venue
                </h3>
                <p className="font-body text-sm text-crema/80 leading-relaxed">
                  Si el teu casament, sala o ajuntament ja té PA i tècnic,
                  perfecte. Enviem rider i ens coordinem amb el seu tècnic.
                  Estalvies cost i simplifiques logística.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-sol/40 bg-negro p-6">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-sol">
                  Opció B
                </p>
                <h3 className="mt-1 mb-3 font-display text-2xl font-bold italic text-crema">
                  So propi · des de 600 €
                </h3>
                <p className="mb-3 font-body text-sm text-crema/80 leading-relaxed">
                  PA i monitors propis + 2 tècnics. Ideal per a festes
                  privades, espais sense equip i casaments a finca.
                </p>
                <p className="font-body text-xs text-crema/60">
                  Preu segons aforament i necessitat de potència. Afinem per
                  WhatsApp.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border-2 border-sol/30 bg-sol/10 p-5">
              <p className="font-body text-sm text-crema">
                <strong className="text-sol">
                  Necessites el rider tècnic?
                </strong>{' '}
                <span className="text-crema/80">
                  Te&apos;l passem al moment. Micros, monitors, plànol
                  d&apos;escenari i PA mínim segons aforament —{' '}
                </span>
                <a
                  href={WHATSAPP_URL}
                  className="font-bold text-sol underline hover:text-blanco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  demana&apos;l per WhatsApp →
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Què entra <span className="text-rojo">i què no.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-4 border-negro bg-blanco p-6 shadow-[6px_6px_0_var(--negro)]">
                <h3 className="mb-4 font-display text-xl font-bold italic text-negro">
                  ✓ Inclòs en el preu
                </h3>
                <ul className="space-y-2">
                  {incluye.map((i) => (
                    <li
                      key={i}
                      className="flex gap-2 font-body text-sm text-negro/80"
                    >
                      <span className="text-rojo">●</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-4 border-negro bg-blanco p-6 shadow-[6px_6px_0_var(--negro)]">
                <h3 className="mb-4 font-display text-xl font-bold italic text-negro">
                  ✗ Va a part
                </h3>
                <ul className="space-y-2">
                  {noIncluye.map((i) => (
                    <li
                      key={i}
                      className="flex gap-2 font-body text-sm text-negro/80"
                    >
                      <span className="text-naranja">○</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-naranja py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-blanco">
              ✦ On toquem
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold italic text-blanco sm:text-4xl lg:text-5xl">
              Tota <span className="text-sol">Catalunya.</span>
            </h2>
            <p className="mx-auto max-w-2xl font-body text-base text-blanco/90">
              Sense recàrrec a Barcelona ciutat, àrea metropolitana, costa
              catalana i comarques. Fora de Catalunya consultem desplaçament —{' '}
              <strong>no tanquem portes</strong>.
            </p>
            <p className="mt-3 font-body text-sm text-blanco/75">
              Xou bilingüe català + espanyol. Mana el públic.
            </p>
          </div>
        </section>

        <section className="bg-blanco py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
              ✦ Han confiat
            </p>
            <h2 className="mt-1 mb-8 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Qui <span className="text-rojo">ens contracta.</span>
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {clientes.map((c) => (
                <li
                  key={c}
                  className="rounded-xl border-2 border-negro/15 bg-crema p-4 font-body text-sm font-medium text-negro/85"
                >
                  ✦ {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl lg:text-5xl">
              T&apos;encaixen els números? <br />
              <span className="text-sol">Explica&apos;ns la teva festa.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              Data, lloc i format. Et diem sí en minuts amb pressupost tancat.
              Sense formularis.
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              Parlem per WhatsApp →
            </Button>
          </div>
        </section>
      </main>
      <FooterCA />
    </>
  );
}
