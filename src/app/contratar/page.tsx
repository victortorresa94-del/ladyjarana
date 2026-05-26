import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContratarForm from './ContratarForm';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contratar Lady Jarana — Banda en directo para tu evento | Barcelona',
  description:
    'Contrata Lady Jarana para tu boda, fiesta mayor o evento privado en Catalunya. Cuarteto 800–1.000 €, quinteto 1.000–1.300 €. Respuesta en minutos por WhatsApp.',
  alternates: {
    canonical: '/contratar',
    languages: {
      es: 'https://ladyjarana.es/contratar',
      ca: 'https://ladyjarana.es/ca/contractar',
      'x-default': 'https://ladyjarana.es/contratar',
    },
  },
};

const faqs = [
  {
    q: '¿Cuánto cuesta contratar la banda?',
    a: 'Cuarteto 800–1.000 €, quinteto 1.000–1.300 €, banda completa desde 1.400 €. El precio dentro de cada rango varía por fecha, sitio y extras. No hacemos dúo ni trío. Ver precios completos en /precios.',
  },
  {
    q: '¿Traéis equipo de sonido?',
    a: 'Preferimos que el sonido lo aporte el venue cuando es posible. Si no, llevamos PA propio y 2 técnicos desde 600 € — ideal para bodas en finca o fiestas privadas sin equipo.',
  },
  {
    q: '¿Dónde tocáis?',
    a: 'Toda Catalunya · +100 € de desplazamiento: Barcelona ciudad, área metropolitana, costa catalana y comarcas. Fuera de Catalunya consultamos desplazamiento — no cerramos puertas, pero suma logística.',
  },
  {
    q: '¿Cantáis en catalán?',
    a: 'Show bilingüe español + catalán. Tenemos pop-rock catalán (L\'Empordà de Sopa de Cabra, Jennifer dels Catarres, Coti x Coti de The Tyets, La Marina sta morena…) además del castellano. El público manda.',
  },
  {
    q: '¿Se puede personalizar el repertorio?',
    a: 'Por supuesto. Si tenéis un tema especial para la ceremonia, el primer baile o un momento clave, lo preparamos.',
  },
  {
    q: '¿Cuál es la formación mínima?',
    a: 'Cuarteto. Voz/guitarra española (Víctor), eléctrica (Alejo), teclado/bajo (Iván) y batería (Diego). Quinteto si añadimos vientos. No hacemos formato más pequeño porque la fiesta lo notaría.',
  },
];

export default function ContratarPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-crema min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="mx-auto max-w-7xl px-6">
          {/* CTA rápido WhatsApp — la vía recomendada */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-10 flex items-center gap-4 rounded-3xl border-4 border-negro bg-[#25D366] p-5 shadow-[8px_8px_0_var(--negro)] transition-all duration-150 hover:shadow-[4px_4px_0_var(--negro)] hover:translate-x-1 hover:translate-y-1 sm:p-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blanco/15 ring-2 ring-blanco/40 sm:h-14 sm:w-14">
              <svg
                className="h-6 w-6 text-blanco sm:h-8 sm:w-8"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden
              >
                <path d="M16.003 0C7.16 0 .003 7.16.003 16c0 2.819.74 5.569 2.142 7.997L0 32l8.226-2.16A15.951 15.951 0 0 0 16.003 32C24.84 32 32 24.84 32 16S24.84 0 16.003 0zm0 29.366c-2.519 0-4.97-.683-7.114-1.974l-.51-.302-5.247 1.376 1.402-5.114-.332-.527A13.224 13.224 0 0 1 2.633 16c0-7.376 6-13.376 13.37-13.376C23.376 2.624 29.37 8.624 29.37 16c0 7.376-6 13.366-13.367 13.366zm7.339-10.014c-.402-.201-2.378-1.173-2.747-1.307-.369-.134-.638-.201-.907.201-.268.402-1.04 1.308-1.275 1.576-.234.268-.469.302-.871.1-.402-.2-1.698-.625-3.234-1.997-1.196-1.067-2.003-2.384-2.238-2.786-.234-.402-.025-.62.176-.82.18-.179.402-.469.603-.703.2-.234.268-.402.402-.67.134-.268.067-.503-.033-.703-.1-.201-.907-2.183-1.241-2.987-.327-.785-.659-.678-.907-.69-.234-.013-.503-.016-.771-.016-.268 0-.704.1-1.073.503-.368.402-1.408 1.375-1.408 3.354 0 1.978 1.441 3.892 1.642 4.16.2.268 2.836 4.33 6.87 6.073.96.414 1.708.661 2.291.847.962.305 1.838.262 2.531.16.772-.116 2.378-.972 2.713-1.91.335-.939.335-1.744.234-1.911-.1-.167-.368-.268-.77-.469z" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-bold italic text-blanco sm:text-2xl">
                Lo más rápido: escríbenos por WhatsApp
              </p>
              <p className="font-body text-xs text-blanco/90 sm:text-sm">
                Respondemos en minutos · {PHONE_DISPLAY}
              </p>
            </div>
            <span className="hidden shrink-0 rounded-full border-2 border-negro bg-blanco px-5 py-2 font-body font-bold text-negro shadow-[3px_3px_0_var(--negro)] transition-transform group-hover:translate-x-1 sm:inline-block">
              WhatsApp →
            </span>
          </a>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left column - Info */}
            <div className="lg:col-span-2">
              <h1 className="mb-6 font-display text-4xl font-bold text-negro lg:text-5xl">
                ¿Prefieres formulario o email?
              </h1>
              <p className="mb-8 font-body text-negro/70 leading-relaxed">
                Si no usas WhatsApp, déjanos lo mínimo y te contactamos. También
                puedes escribirnos a{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-rojo underline font-bold"
                >
                  {EMAIL}
                </a>
                .
              </p>

              <div className="mb-10 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-rojo text-xl">⚡</span>
                  <div>
                    <p className="font-body font-semibold text-negro">
                      Respuesta en 24h
                    </p>
                    <p className="font-body text-sm text-negro/60">
                      Te enviamos disponibilidad y presupuesto rápido.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-rojo text-xl">🎸</span>
                  <div>
                    <p className="font-body font-semibold text-negro">
                      Cuarteto, quinteto o banda completa
                    </p>
                    <p className="font-body text-sm text-negro/60">
                      Cuarteto 800–1.000 €. Quinteto 1.000–1.300 €. Banda completa desde 1.400 €. No hacemos dúo ni trío.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-rojo text-xl">📍</span>
                  <div>
                    <p className="font-body font-semibold text-negro">
                      Toda Catalunya
                    </p>
                    <p className="font-body text-sm text-negro/60">
                      100 € de desplazamiento en toda Catalunya. Fuera consultamos. Show bilingüe ES/CA.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-negro">
                  Preguntas frecuentes
                </h3>
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl bg-blanco border-2 border-negro p-5"
                  >
                    <summary className="cursor-pointer font-body font-semibold text-negro list-none flex items-center justify-between">
                      {faq.q}
                      <span className="text-rojo transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 font-body text-sm text-negro/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-blanco border-4 border-negro shadow-[8px_8px_0_var(--negro)] p-8 lg:p-10">
                <ContratarForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
