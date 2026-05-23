import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';
import { faqsCA, categoriaLabelCA, type FAQ } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'FAQ — Preguntes freqüents sobre contractar Lady Jarana',
  description:
    'Tot el que cal saber per contractar Lady Jarana: preus, formats, so, zona d\'actuació, repertori bilingüe ES/CA, reserva i contracte. 27 preguntes reals amb resposta directa.',
  alternates: {
    canonical: 'https://ladyjarana.es/ca/faq',
    languages: {
      es: 'https://ladyjarana.es/faq',
      ca: 'https://ladyjarana.es/ca/faq',
      'x-default': 'https://ladyjarana.es/faq',
    },
  },
  openGraph: {
    title: 'FAQ Lady Jarana — preguntes freqüents',
    description:
      'Preus, formats, so, zona, repertori i reserva. Les respostes que ens feu una vegada i una altra.',
    url: 'https://ladyjarana.es/ca/faq',
    type: 'website',
    locale: 'ca_ES',
  },
};

function groupByCategory(faqs: FAQ[]) {
  const groups: Record<string, FAQ[]> = {};
  for (const f of faqs) {
    if (!groups[f.cat]) groups[f.cat] = [];
    groups[f.cat].push(f);
  }
  return groups;
}

export default function FaqCAPage() {
  const grouped = groupByCategory(faqsCA);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'ca-ES',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer'],
    },
    mainEntity: faqsCA.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://ladyjarana.es/ca' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://ladyjarana.es/ca/faq' },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <section className="relative overflow-hidden bg-azul pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ Preguntes freqüents
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-crema sm:text-5xl lg:text-6xl">
              Tot el que ens pregunteu <br />
              <span className="text-sol">abans de contractar-nos.</span>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-base text-crema/90">
              {faqsCA.length} preguntes reals amb resposta directa. Si la teva
              no hi és, escriu-nos per WhatsApp i responem en minuts.
            </p>
          </div>
        </section>

        <section className="bg-crema py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <nav aria-label="Categories" className="mb-12 flex flex-wrap gap-2">
              {Object.keys(grouped).map((cat) => (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="rounded-full border-2 border-negro/20 bg-blanco px-4 py-1.5 font-body text-xs font-bold text-negro/80 transition-colors hover:border-rojo hover:text-rojo"
                >
                  {categoriaLabelCA[cat as FAQ['cat']]}
                </a>
              ))}
            </nav>

            {Object.entries(grouped).map(([cat, faqs]) => (
              <section key={cat} id={cat} className="mb-12 scroll-mt-24">
                <h2 className="mb-5 font-display text-2xl font-bold italic text-negro sm:text-3xl">
                  {categoriaLabelCA[cat as FAQ['cat']]}
                </h2>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border-2 border-negro bg-blanco p-5 shadow-[4px_4px_0_var(--negro)]"
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
              </section>
            ))}
          </div>
        </section>

        <section className="bg-rojo py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-blanco sm:text-4xl">
              La teva pregunta no hi és? <br />
              <span className="text-sol">Escriu-nos directament.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-blanco/90">
              Responem en minuts per WhatsApp amb disponibilitat i pressupost
              tancat.
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
