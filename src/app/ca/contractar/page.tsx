import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  EMAIL,
} from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contractar Lady Jarana — Grup en directe per al teu esdeveniment | Catalunya',
  description:
    'Contracta Lady Jarana per al teu casament, festa major o esdeveniment privat a Catalunya. Quartet 1.000–1.300 €, quintet 1.200–1.500 €. Resposta en minuts per WhatsApp.',
  alternates: {
    canonical: 'https://ladyjarana.es/ca/contractar',
    languages: {
      es: 'https://ladyjarana.es/contratar',
      ca: 'https://ladyjarana.es/ca/contractar',
      'x-default': 'https://ladyjarana.es/contratar',
    },
  },
};

const faqs = [
  {
    q: 'Quant costa contractar la banda?',
    a: 'Quartet 1.000–1.300 €, quintet 1.200–1.500 €, banda completa des de 1.400 €. El preu dins de cada rang varia per data, lloc i extres. No fem duo ni trio. Tens els preus complets a /ca/preus.',
  },
  {
    q: 'Porteu equip de so?',
    a: 'Preferim que el so el posi el venue quan sigui possible. Si no, portem PA propi i 2 tècnics des de 600 € — ideal per a casaments a finca o festes privades sense equip.',
  },
  {
    q: 'On toqueu?',
    a: "Tota Catalunya sense recàrrec: Barcelona ciutat, àrea metropolitana, costa catalana i comarques. Fora de Catalunya consultem desplaçament — no tanquem portes, però suma logística.",
  },
  {
    q: 'Canteu en català?',
    a: "Xou bilingüe català + espanyol. Tenim pop-rock català (L'Empordà de Sopa de Cabra, Jennifer dels Catarres, Coti x Coti de The Tyets, La Marina sta morena…) a més del castellà. Mana el públic.",
  },
  {
    q: 'Es pot personalitzar el repertori?',
    a: 'És clar. Si teniu un tema especial per a la cerimònia, el primer ball o un moment clau, el preparem.',
  },
  {
    q: 'Quina és la formació mínima?',
    a: 'Quartet. Veu/guitarra espanyola (Víctor), elèctrica (Alejo), teclat/baix (Iván) i bateria (Diego). Quintet si afegim vents. No fem format més petit perquè la festa ho notaria.',
  },
];

export default function ContractarPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ca-ES',
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
        <div className="mx-auto max-w-4xl px-6">
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
                <path d="M16.003 0C7.16 0 .003 7.16.003 16c0 2.819.74 5.569 2.142 7.997L0 32l8.226-2.16A15.951 15.951 0 0 0 16.003 32C24.84 32 32 24.84 32 16S24.84 0 16.003 0zm0 29.366c-2.519 0-4.97-.683-7.114-1.974l-.51-.302-5.247 1.376 1.402-5.114-.332-.527A13.224 13.224 0 0 1 2.633 16c0-7.376 6-13.376 13.37-13.376C23.376 2.624 29.37 8.624 29.37 16c0 7.376-6 13.366-13.367 13.366z" />
              </svg>
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-lg font-bold italic text-blanco sm:text-2xl">
                El més ràpid: escriu-nos per WhatsApp
              </p>
              <p className="font-body text-xs text-blanco/90 sm:text-sm">
                Responem en minuts · {PHONE_DISPLAY}
              </p>
            </div>
            <span className="hidden shrink-0 rounded-full border-2 border-negro bg-blanco px-5 py-2 font-body font-bold text-negro shadow-[3px_3px_0_var(--negro)] transition-transform group-hover:translate-x-1 sm:inline-block">
              WhatsApp →
            </span>
          </a>

          <h1 className="mb-6 font-display text-4xl font-bold text-negro lg:text-5xl">
            Contractar Lady Jarana
          </h1>
          <p className="mb-8 font-body text-negro/70 leading-relaxed">
            Si no fas servir WhatsApp, escriu-nos a{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-rojo underline font-bold"
            >
              {EMAIL}
            </a>
            . Et responem amb disponibilitat i pressupost en menys de 24 h.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-negro/15 bg-blanco p-5">
              <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                ⚡ Resposta ràpida
              </p>
              <p className="mt-1 font-body text-sm text-negro/75">
                Disponibilitat i preu en minuts per WhatsApp, menys de 24 h
                per email.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-negro/15 bg-blanco p-5">
              <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                🎸 Quartet, quintet o banda completa
              </p>
              <p className="mt-1 font-body text-sm text-negro/75">
                Quartet 1.000–1.300 €. Quintet 1.200–1.500 €. Banda completa des de 1.400 €. No fem duo ni
                trio.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-negro/15 bg-blanco p-5">
              <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                📍 Tota Catalunya
              </p>
              <p className="mt-1 font-body text-sm text-negro/75">
                Sense recàrrec a Catalunya. Fora consultem desplaçament. Xou
                bilingüe ES/CA.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-negro/15 bg-blanco p-5">
              <p className="font-body text-xs font-bold uppercase tracking-wider text-rojo">
                🎚️ So opcional
              </p>
              <p className="mt-1 font-body text-sm text-negro/75">
                Si el venue té PA i tècnic, perfecte. Si no, des de 600 € amb
                2 tècnics.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-display text-2xl font-bold italic text-negro">
              Preguntes freqüents
            </h2>
            <div className="space-y-3">
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
        </div>
      </main>
      <FooterCA />
    </>
  );
}
