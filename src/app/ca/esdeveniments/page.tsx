import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { proximosEventosCA, trayectoriaCA } from '@/lib/i18nData';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Esdeveniments · Lady Jarana en directe — casaments, revetlles i festes',
  description:
    'Pròxims concerts de Lady Jarana a Barcelona i rodalies + trajectòria amb tots els bolos: casaments, festes majors, sales i esdeveniments privats.',
  alternates: {
    canonical: 'https://ladyjarana.com/ca/esdeveniments',
    languages: {
      es: 'https://ladyjarana.com/eventos',
      ca: 'https://ladyjarana.com/ca/esdeveniments',
      'x-default': 'https://ladyjarana.com/eventos',
    },
  },
  openGraph: {
    title: 'Esdeveniments · Lady Jarana',
    description:
      'Pròxims concerts a Barcelona i tots els bolos que hem fet: casaments, festes majors, sales, esdeveniments privats.',
    url: 'https://ladyjarana.com/ca/esdeveniments',
    type: 'website',
    locale: 'ca_ES',
    images: ['/fotos/fiestas-mayores.jpg'],
  },
};

const tipoLabel: Record<string, string> = {
  concierto: 'Concert',
  'fiesta-mayor': 'Festa major',
  boda: 'Casament',
  sala: 'Sala',
};

const tipoColor: Record<string, string> = {
  concierto: 'bg-sol text-negro',
  'fiesta-mayor': 'bg-naranja text-blanco',
  boda: 'bg-azul text-blanco',
  sala: 'bg-rojo text-blanco',
};

export default function EsdevenimentsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...proximosEventosCA.map((ev) => ({
        '@type': 'MusicEvent',
        name: `Lady Jarana — ${ev.lugar}`,
        startDate: ev.fecha,
        location: { '@type': 'Place', name: ev.lugar },
        performer: { '@type': 'MusicGroup', name: 'Lady Jarana' },
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        inLanguage: 'ca-ES',
      })),
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="relative overflow-hidden bg-rojo pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 opacity-25 mix-blend-overlay">
            <Image
              src="/fotos/fiestas-mayores.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
              ✦ Calendari en directe
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-blanco sm:text-5xl lg:text-7xl">
              Tots els esdeveniments <br />
              <span className="text-sol">de Lady Jarana.</span>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-base text-blanco/90 lg:text-lg">
              El que ve i el que ja hem tocat. De sales íntimes a festes majors
              amb escenari gegant.
            </p>
          </div>
        </section>

        <section className="relative bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
                  ✦ Pròxims bolos
                </p>
                <h2 className="mt-1 font-display text-3xl font-bold italic text-negro sm:text-4xl lg:text-5xl">
                  Quan i on.
                </h2>
              </div>
              <p className="hidden font-body text-sm text-negro/60 sm:block">
                {proximosEventosCA.length} confirmats
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {proximosEventosCA.map((ev, i) => (
                <a
                  key={i}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-4 rounded-2xl border-4 border-negro p-5 shadow-[6px_6px_0_var(--negro)] transition-all duration-150 hover:shadow-[3px_3px_0_var(--negro)] hover:translate-x-[3px] hover:translate-y-[3px] ${
                    ev.destacado ? 'bg-sol' : 'bg-blanco'
                  }`}
                >
                  {ev.destacado && (
                    <span className="absolute -top-3 -right-3 rotate-6 rounded-full bg-rojo border-2 border-negro px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blanco shadow-[2px_2px_0_var(--negro)]">
                      ★ Top
                    </span>
                  )}
                  <div className="rounded-xl bg-blanco border-2 border-negro px-3 py-2 text-center min-w-[64px]">
                    <p className="font-display text-2xl font-bold leading-none italic text-negro">
                      {ev.fechaCorta.split(' ')[0]}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-negro">
                      {ev.fechaCorta.split(' ')[1] || ''}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-xl leading-tight italic text-negro">
                      {ev.lugar}
                    </p>
                    <p className="text-xs font-medium text-negro/70">
                      {ev.fecha}
                      {ev.hora && ` · ${ev.hora}h`}
                    </p>
                  </div>
                  <span className="text-xl text-negro/60 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-negro py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
                ✦ Trajectòria
              </p>
              <h2 className="mt-1 font-display text-3xl font-bold italic text-crema sm:text-4xl lg:text-5xl">
                El que ja hem <span className="text-sol">tocat.</span>
              </h2>
              <p className="mt-3 max-w-2xl font-body text-sm text-crema/70 lg:text-base">
                Des del bateig al Port de la Barceloneta fins a festes majors
                i casaments: aquests són els bolos pels quals hem passat.
              </p>
            </div>

            <ol className="relative space-y-5 border-l-2 border-sol/40 pl-6 sm:pl-8">
              {[...trayectoriaCA].reverse().map((h, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[34px] top-2 h-4 w-4 rounded-full border-2 border-negro bg-sol sm:-left-[42px]" />
                  <div className="rounded-2xl border-2 border-crema/15 bg-negro/40 p-5 backdrop-blur-sm transition-colors hover:border-sol/40">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border-2 border-negro px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-[2px_2px_0_var(--negro)] ${tipoColor[h.tipo]}`}
                      >
                        {tipoLabel[h.tipo]}
                      </span>
                      <span className="font-body text-xs font-bold uppercase tracking-wider text-crema/60">
                        {h.fecha}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold italic leading-tight text-crema lg:text-2xl">
                      {h.lugar}
                    </h3>
                    <p className="mt-1 font-body text-sm text-crema/70">
                      {h.descripcion}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative bg-sol py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-negro sm:text-4xl lg:text-5xl">
              Vols veure el teu esdeveniment <br />
              <span className="text-rojo">en aquesta llista?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-negro/80">
              Explica&apos;ns data, lloc i format. Et diem sí en minuts per
              WhatsApp.
            </p>
            <Button href={WHATSAPP_URL} variant="primary">
              Reservar data per WhatsApp →
            </Button>
          </div>
        </section>
      </main>
      <FooterCA />
    </>
  );
}
