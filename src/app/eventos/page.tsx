import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import { proximosEventos, trayectoria } from '@/lib/trayectoria';
import { WHATSAPP_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Eventos · Lady Jarana en directo — bodas, verbenas y fiestas',
  description:
    'Próximos conciertos de Lady Jarana en Barcelona y alrededores + trayectoria con todos los bolos: bodas, fiestas mayores, salas y eventos privados.',
  alternates: {
    canonical: 'https://ladyjarana.es/eventos',
    languages: {
      es: 'https://ladyjarana.es/eventos',
      ca: 'https://ladyjarana.es/ca/esdeveniments',
      'x-default': 'https://ladyjarana.es/eventos',
    },
  },
  openGraph: {
    title: 'Eventos · Lady Jarana',
    description:
      'Próximos conciertos en Barcelona y todos los bolos que hemos hecho: bodas, fiestas mayores, salas, eventos privados.',
    url: 'https://ladyjarana.es/eventos',
    type: 'website',
    images: ['/fotos/fiestas-mayores.jpg'],
  },
};

const tipoLabel: Record<string, string> = {
  concierto: 'Concierto',
  'fiesta-mayor': 'Fiesta mayor',
  boda: 'Boda',
  sala: 'Sala',
};

const tipoColor: Record<string, string> = {
  concierto: 'bg-sol text-negro',
  'fiesta-mayor': 'bg-naranja text-blanco',
  boda: 'bg-azul text-blanco',
  sala: 'bg-rojo text-blanco',
};

export default function EventosPage() {
  // JSON-LD para Google: lista de eventos con datos estructurados
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...proximosEventos.map((ev) => ({
        '@type': 'MusicEvent',
        name: `Lady Jarana — ${ev.lugar}`,
        startDate: ev.fecha,
        location: { '@type': 'Place', name: ev.lugar },
        performer: { '@type': 'MusicGroup', name: 'Lady Jarana' },
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      })),
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema">
        {/* JSON-LD para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ============ HERO ============ */}
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
              ✦ Calendario en directo
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold italic leading-[1.02] text-blanco sm:text-5xl lg:text-7xl">
              Todos los eventos <br />
              <span className="text-sol">de Lady Jarana.</span>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-base text-blanco/90 lg:text-lg">
              Lo que viene y lo que ya hemos tocado. De salas íntimas a fiestas
              mayores con escenario gigante.
            </p>
          </div>
        </section>

        {/* ============ PRÓXIMOS ============ */}
        <section className="relative bg-crema py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-rojo">
                  ✦ Próximos bolos
                </p>
                <h2 className="mt-1 font-display text-3xl font-bold italic text-negro sm:text-4xl lg:text-5xl">
                  Cuándo y dónde.
                </h2>
              </div>
              <p className="hidden font-body text-sm text-negro/60 sm:block">
                {proximosEventos.length} confirmados
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {proximosEventos.map((ev, i) => (
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

        {/* ============ TRAYECTORIA ============ */}
        <section className="relative bg-negro py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10">
              <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-sol">
                ✦ Trayectoria
              </p>
              <h2 className="mt-1 font-display text-3xl font-bold italic text-crema sm:text-4xl lg:text-5xl">
                Lo que ya hemos <span className="text-sol">tocado.</span>
              </h2>
              <p className="mt-3 max-w-2xl font-body text-sm text-crema/70 lg:text-base">
                Desde el bautismo en el Puerto de la Barceloneta hasta fiestas
                mayores y bodas: estos son los bolos por los que hemos pasado.
              </p>
            </div>

            <ol className="relative space-y-5 border-l-2 border-sol/40 pl-6 sm:pl-8">
              {[...trayectoria].reverse().map((h, i) => (
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

        {/* ============ CTA FINAL ============ */}
        <section className="relative bg-sol py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold italic leading-tight text-negro sm:text-4xl lg:text-5xl">
              ¿Quieres ver tu evento <br />
              <span className="text-rojo">en esta lista?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-negro/80">
              Cuéntanos fecha, lugar y formato. Te decimos sí en minutos por
              WhatsApp.
            </p>
            <Button href={WHATSAPP_URL} variant="primary">
              Reservar fecha por WhatsApp →
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
