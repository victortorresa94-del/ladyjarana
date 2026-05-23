import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';
import Button from '@/components/ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';
import {
  REPERTORIO,
  TOTAL_CANCIONES,
  SPOTIFY_PLAYLIST_ID,
  SPOTIFY_PLAYLIST_URL,
} from '@/data/repertorio';

export const metadata: Metadata = {
  title: 'Repertori — Lady Jarana | Cançons per a casaments, revetlles i festes',
  description: `Més de ${TOTAL_CANCIONES} cançons en directe: pop-rock català i espanyol, rumba, latineig i revetlleres. Escolta la playlist de Spotify i descarrega el repertori en PDF.`,
  alternates: {
    canonical: 'https://ladyjarana.com/ca/repertori',
    languages: {
      es: 'https://ladyjarana.com/repertorio',
      ca: 'https://ladyjarana.com/ca/repertori',
      'x-default': 'https://ladyjarana.com/repertorio',
    },
  },
  openGraph: {
    title: 'Repertori Lady Jarana — playlist Spotify + PDF',
    description: `${TOTAL_CANCIONES} cançons organitzades per estil. Pop-rock, rumba, latineig i revetlleres.`,
    url: 'https://ladyjarana.com/ca/repertori',
    type: 'website',
    locale: 'ca_ES',
  },
};

// Traduccions per a títols/descripcions dels blocs ES → CA
const bloqueCA: Record<string, { titulo: string; descripcion: string }> = {
  'pop-rock-espanol': {
    titulo: 'Pop-rock català i espanyol',
    descripcion:
      'Els himnes en castellà i català que canta tothom sense adonar-se\'n. L\'esquelet del xou.',
  },
  rumba: {
    titulo: 'Rumba i flamenco-pop',
    descripcion:
      'El moment groove. Guitarra espanyola, palmes i ball garantit.',
  },
  latineo: {
    titulo: 'Latineig actual',
    descripcion:
      'Pop llatí adaptat al nostre estil acústic i rumber.',
  },
  verbenas: {
    titulo: 'Revetlles i clàssics festius',
    descripcion:
      'Els himnes festius que canta tothom: cap de setmana fora.',
  },
};

export default function RepertoriPage() {
  const totalBloques = REPERTORIO.length;

  const allTracks = REPERTORIO.flatMap((b) => b.canciones);
  const playlistJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicPlaylist',
    name: 'Repertori Lady Jarana',
    description:
      'Repertori oficial de Lady Jarana: pop-rock català i espanyol, rumba catalana, latineig i revetlleres. 37 cançons bilingües ES/CA tocades en directe.',
    url: 'https://ladyjarana.com/ca/repertori',
    numTracks: TOTAL_CANCIONES,
    inLanguage: ['ca-ES', 'es-ES'],
    creator: { '@id': 'https://ladyjarana.com/#musicgroup' },
    track: allTracks.map((c, i) => ({
      '@type': 'MusicRecording',
      position: i + 1,
      name: c.titulo,
      ...(c.artista
        ? { byArtist: { '@type': 'MusicGroup', name: c.artista } }
        : {}),
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inici', item: 'https://ladyjarana.com/ca' },
      { '@type': 'ListItem', position: 2, name: 'Repertori', item: 'https://ladyjarana.com/ca/repertori' },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="bg-crema pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(playlistJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <section className="relative overflow-hidden bg-naranja pb-20 pt-16 lg:pb-28 lg:pt-24">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/generated/hero-bg.png"
              alt=""
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          <div className="pointer-events-none absolute -right-6 top-4 hidden w-44 md:block lg:-right-2 lg:w-60 animate-sway">
            <Image
              src="/personajes/palmera-jaranera.png"
              alt=""
              width={512}
              height={512}
              className="h-auto w-full drop-shadow-[6px_6px_0_var(--negro)]"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <p className="mb-4 font-body text-sm font-bold uppercase tracking-[0.25em] text-negro/70">
              El repertori
            </p>
            <h1 className="mb-6 max-w-3xl font-display text-5xl font-bold italic leading-[0.95] text-negro lg:text-7xl">
              {TOTAL_CANCIONES} cançons,
              <br />
              <span className="text-blanco">una sola intenció:</span>
              <br />
              que no paris <span className="text-rojo">de ballar.</span>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-negro/85">
              Pop-rock català i espanyol, rumba catalana, latineig de revetlla i
              els himnes festius que canta fins i tot la sogra. Això és el que
              sonarà al teu casament, revetlla o festa d&apos;empresa quan
              sortim a l&apos;escenari.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Stat label="cançons" value={String(TOTAL_CANCIONES)} />
              <Stat label="estils" value={String(totalBloques)} />
              <Stat label="hores de xou" value="2-3 h" />
            </div>
          </div>
        </section>

        <section className="relative bg-crema py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_360px] lg:items-start">
            <div className="order-2 lg:order-1">
              <h2 className="mb-3 font-display text-3xl font-bold italic text-negro lg:text-4xl">
                Escolta el que sona en directe
              </h2>
              <p className="mb-6 font-body text-base text-negro/75 leading-relaxed">
                Playlist oficial a Spotify amb les versions originals de tot el
                repertori. Dóna-li al play i fes-te una idea de l&apos;ambient.
              </p>
              <div className="overflow-hidden rounded-2xl border-4 border-negro shadow-[10px_10px_0_var(--negro)]">
                <iframe
                  title="Playlist Lady Jarana a Spotify"
                  src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=ladyjarana_ca_repertori&theme=0`}
                  width="100%"
                  height="420"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block"
                />
              </div>
              <p className="mt-3 font-body text-xs text-negro/60">
                No es veu la playlist?{' '}
                <a
                  href={SPOTIFY_PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-rojo underline"
                >
                  Obre-la directament a Spotify
                </a>
                .
              </p>
            </div>

            <aside className="order-1 lg:order-2 lg:sticky lg:top-24">
              <div className="rounded-2xl border-4 border-negro bg-sol p-7 shadow-[10px_10px_0_var(--negro)]">
                <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-negro/70">
                  Per a programadors
                </p>
                <h3 className="mt-1 mb-3 font-display text-2xl font-bold italic leading-tight text-negro">
                  Descarrega el repertori en PDF
                </h3>
                <p className="mb-5 font-body text-sm text-negro/80 leading-relaxed">
                  Llistat complet amb blocs, medleys i artistes — llest per
                  enviar a l&apos;equip de l&apos;esdeveniment.
                </p>
                <Button
                  href="/repertorio-lady-jarana.pdf"
                  variant="primary"
                  className="w-full justify-center text-base"
                >
                  Descarregar PDF ↓
                </Button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center font-body text-sm font-bold text-negro underline underline-offset-4 hover:text-rojo"
                >
                  Vols una versió a mida? Escriu-nos →
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-crema-oscuro py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 font-body text-sm font-bold uppercase tracking-[0.25em] text-negro/60">
              Per estils
            </p>
            <h2 className="mb-12 max-w-3xl font-display text-4xl font-bold italic leading-[1] text-negro lg:text-6xl">
              El xou està dividit en{' '}
              <span className="text-rojo">{totalBloques} blocs</span>.
            </h2>

            <div className="space-y-12">
              {REPERTORIO.map((bloque, idx) => {
                const ca = bloqueCA[bloque.id];
                const titulo = ca?.titulo ?? bloque.titulo;
                const descripcion = ca?.descripcion ?? bloque.descripcion;
                return (
                  <article
                    key={bloque.id}
                    id={bloque.id}
                    className="rounded-2xl border-4 border-negro bg-blanco p-7 shadow-[10px_10px_0_var(--negro)] lg:p-10"
                  >
                    <header className="mb-6 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <span className="font-display text-5xl font-bold italic text-rojo lg:text-6xl">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-3xl font-bold italic leading-tight text-negro lg:text-4xl">
                          <span className="mr-2" aria-hidden>
                            {bloque.emoji}
                          </span>
                          {titulo}
                        </h3>
                        <p className="mt-1 font-body text-sm text-negro/70 lg:text-base">
                          {descripcion}
                        </p>
                      </div>
                      <span className="rounded-full border-2 border-negro bg-sol px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-negro">
                        {bloque.canciones.length} cançons
                      </span>
                    </header>

                    <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {bloque.canciones.map((cancion, i) => (
                        <li
                          key={`${bloque.id}-${i}`}
                          className="group flex items-baseline gap-3 border-b border-negro/15 py-2"
                        >
                          <span className="font-body text-xs font-bold text-negro/40 tabular-nums">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-body text-base font-bold text-negro leading-snug">
                              {cancion.titulo}
                            </p>
                            {cancion.artista && (
                              <p className="font-body text-xs text-negro/55 leading-snug">
                                {cancion.artista}
                                {cancion.medley && (
                                  <span className="ml-1 text-rojo">
                                    · medley amb {cancion.medley}
                                  </span>
                                )}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </article>
                );
              })}
            </div>

            <p className="mt-12 max-w-2xl font-body text-sm text-negro/60 italic leading-relaxed">
              Trobes a faltar alguna cançó? Sempre estem afegint-ne de noves i
              també podem preparar versions a mida per al primer ball, entrades
              o sorpreses.{' '}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-rojo underline underline-offset-2 not-italic"
              >
                Explica&apos;ns què tens al cap →
              </a>
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-rojo py-20 lg:py-28">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="/generated/hero-bg.png"
              alt=""
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-6 font-display text-4xl font-bold italic leading-[1] text-blanco lg:text-6xl">
              T&apos;encaixen aquestes cançons <br />
              <span className="text-sol">per a la teva festa?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl font-body text-base text-blanco/85 leading-relaxed lg:text-lg">
              Explica&apos;ns data i lloc i et diem en minuts si hi som,
              quin format encaixa i a quin preu.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={WHATSAPP_URL} variant="primary">
                Demanar pressupost per WhatsApp
              </Button>
              <Link
                href="/ca"
                className="font-body text-sm font-bold text-blanco underline underline-offset-4 hover:text-sol"
              >
                ← Tornar a la portada
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterCA />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border-4 border-negro bg-blanco px-5 py-3 shadow-[6px_6px_0_var(--negro)]">
      <span className="block font-display text-3xl font-bold italic text-rojo leading-none">
        {value}
      </span>
      <span className="font-body text-xs font-bold uppercase tracking-wider text-negro/65">
        {label}
      </span>
    </div>
  );
}
