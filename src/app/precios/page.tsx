import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Precios · Banda en directo Lady Jarana — Cuarteto desde 1000 €',
  description:
    'Precios claros de Lady Jarana para bodas, fiestas mayores y eventos privados en Catalunya. Cuarteto desde 1000 €, sonido propio opcional, presupuesto en minutos por WhatsApp.',
  alternates: { canonical: 'https://ladyjarana.com/precios' },
  openGraph: {
    title: 'Precios · Lady Jarana',
    description:
      'Cuarteto desde 1000 €. +200 € por músico extra (quinteto, sexteto). Sonido propio opcional con 2 técnicos. Toda Catalunya.',
    url: 'https://ladyjarana.com/precios',
    type: 'website',
    images: ['/fotos/eventos-empresa.jpg'],
  },
};

const tiers = [
  {
    nombre: 'Cuarteto',
    precio: '1.000 €',
    musicos: '4 músicos',
    descripcion:
      'Formato base. Voz/guitarra, eléctrica, teclado/bajo y batería. Pop-rock, rumba y latineo en directo.',
    ideal: 'Bodas, eventos privados, salas',
    destacado: true,
  },
  {
    nombre: 'Quinteto',
    precio: '1.200 €',
    musicos: '5 músicos',
    descripcion:
      'Cuarteto + trompeta. Vientos para verbenas grandes y momentos de máxima energía.',
    ideal: 'Fiestas mayores, bodas grandes',
  },
  {
    nombre: 'Banda completa',
    precio: 'desde 1.400 €',
    musicos: '6 músicos o más',
    descripcion:
      'Quinteto + bajista, percusión, guitarra o saxo adicional. Sonido orquestal en escenarios XXL.',
    ideal: 'Festivales, escenarios grandes',
  },
];

const incluye = [
  'Show en directo de 120 min (extras a pactar)',
  'Repertorio bilingüe ES/CA — pop-rock, rumba catalana, latineo y verbeneras',
  'Cuatro músicos con experiencia tocando en bodas, salas y fiestas mayores',
  'Personalización de canción clave (entrada, primer baile, momento especial)',
  'Coordinación previa con vuestro wedding planner o programador',
];

const noIncluye = [
  'Sonido y técnico (ver bloque abajo)',
  'Backline en venues sin instalación',
  'Desplazamientos largos fuera de Catalunya (presupuesto aparte)',
];

const clientes = [
  'Ayuntamiento de Sant Adrià de Besòs',
  'Ayuntamiento de Barberà del Vallès',
  'Centro Asturiano de Barcelona',
  'Asociación de Vecinos de la Barceloneta · Rumba Beach Festival (× 2)',
  'Asociación de Vecinos del Arc de Triomf',
];

export default function PreciosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Banda de música en directo',
    provider: {
      '@type': 'MusicGroup',
      name: 'Lady Jarana',
      url: 'https://ladyjarana.com',
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Catalunya, España' },
    offers: tiers.map((t) => ({
      '@type': 'Offer',
      name: `Banda en directo — ${t.nombre}`,
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

        {/* HERO */}
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
              ✦ Precios sin sorpresas
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-crema sm:text-5xl lg:text-7xl">
              Cuánto cuesta <br />
              <span className="text-sol">contratar la jarana.</span>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-base text-crema/90 lg:text-lg">
              Sin tarifas crípticas ni "depende". Aquí los números base. Lo
              afinamos contigo según fecha, sitio y formato por WhatsApp.
            </p>
          </div>
        </section>

        {/* TIERS */}
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
                      ★ El más pedido
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
                    Pedir presupuesto →
                  </Button>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center font-body text-sm text-negro/70">
              <strong className="text-negro">A partir de cuarteto.</strong>{' '}
              Cada músico adicional sobre el cuarteto suma 200 €. No hacemos
              dúo ni trío.
            </p>
          </div>
        </section>

        {/* SONIDO */}
        <section className="bg-negro py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ Equipo de sonido
            </p>
            <h2 className="mt-1 mb-6 font-display text-3xl font-bold italic text-crema sm:text-4xl lg:text-5xl">
              Lo ponemos nosotros <br />
              <span className="text-sol">o lo pones tú.</span>
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-crema/15 bg-negro/40 p-6">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-sol">
                  Opción A · recomendada
                </p>
                <h3 className="mt-1 mb-3 font-display text-2xl font-bold italic text-crema">
                  Sonido del venue
                </h3>
                <p className="font-body text-sm text-crema/80 leading-relaxed">
                  Si tu boda, sala o ayuntamiento ya tiene PA y técnico, perfecto. Mandamos rider y nos coordinamos con su técnico. Ahorras coste y simplificas logística.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-sol/40 bg-negro p-6">
                <p className="font-body text-xs font-bold uppercase tracking-wider text-sol">
                  Opción B
                </p>
                <h3 className="mt-1 mb-3 font-display text-2xl font-bold italic text-crema">
                  Sonido propio · desde 600 €
                </h3>
                <p className="mb-3 font-body text-sm text-crema/80 leading-relaxed">
                  PA y monitores propios + 2 técnicos. Ideal para fiestas privadas, espacios sin equipo y bodas en finca.
                </p>
                <p className="font-body text-xs text-crema/60">
                  Precio según aforo y necesidad de potencia. Ajustamos por WhatsApp.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border-2 border-sol/30 bg-sol/10 p-5">
              <p className="font-body text-sm text-crema">
                <strong className="text-sol">¿Quieres el rider técnico?</strong>{' '}
                <a
                  href="/rider-lady-jarana.pdf"
                  className="font-bold text-sol underline hover:text-blanco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descárgalo en PDF →
                </a>{' '}
                <span className="text-crema/70">
                  (necesidades por músico, plano de escenario, sistema de PA mínimo).
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* INCLUYE / NO INCLUYE */}
        <section className="bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Qué entra <span className="text-rojo">y qué no.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-4 border-negro bg-blanco p-6 shadow-[6px_6px_0_var(--negro)]">
                <h3 className="mb-4 font-display text-xl font-bold italic text-negro">
                  ✓ Incluido en el precio
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
                  ✗ Va aparte
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

        {/* ZONA */}
        <section className="bg-naranja py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-blanco">
              ✦ Dónde tocamos
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold italic text-blanco sm:text-4xl lg:text-5xl">
              Toda <span className="text-sol">Catalunya.</span>
            </h2>
            <p className="mx-auto max-w-2xl font-body text-base text-blanco/90">
              Sin recargo en Barcelona ciudad, área metropolitana, costa
              catalana y comarcas. Fuera de Catalunya consultamos
              desplazamiento — <strong>no cerramos puertas</strong>.
            </p>
            <p className="mt-3 font-body text-sm text-blanco/75">
              Show bilingüe español + catalán. El público manda.
            </p>
          </div>
        </section>

        {/* CLIENTES */}
        <section className="bg-blanco py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
              ✦ Han confiado
            </p>
            <h2 className="mt-1 mb-8 font-display text-3xl font-bold italic text-negro sm:text-4xl">
              Quién <span className="text-rojo">nos contrata.</span>
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

        {/* CTA FINAL */}
        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl lg:text-5xl">
              ¿Te encajan los números? <br />
              <span className="text-sol">Cuéntanos tu fiesta.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              Fecha, sitio y formato. Te decimos sí en minutos con presupuesto
              cerrado. Sin formularios.
            </p>
            <Button href={WHATSAPP_URL} variant="secondary">
              Hablemos por WhatsApp →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
