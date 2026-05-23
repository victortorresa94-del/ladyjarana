import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';

export const metadata: Metadata = {
  title: 'Política de Privacitat',
  robots: { index: false },
  alternates: {
    canonical: '/ca/politica-privacitat',
    languages: {
      es: 'https://ladyjarana.com/politica-privacidad',
      ca: 'https://ladyjarana.com/ca/politica-privacitat',
    },
  },
};

export default function PoliticaPrivacitat() {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-28 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-display text-4xl font-bold text-negro">
            Política de Privacitat
          </h1>
          <div className="prose prose-lg font-body text-negro/80 space-y-6">
            <p>
              En compliment del Reglament General de Protecció de Dades (RGPD)
              i la Llei Orgànica 3/2018 de Protecció de Dades Personals, et
              informem sobre el tractament de les teves dades personals.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Responsable del tractament
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responsable: Lady Jarana / 94 Music</li>
              <li>Email: ladyjaranamusic@gmail.com</li>
              <li>Finalitat: gestió de sol·licituds de contractació</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-negro">
              Dades que recopilem
            </h2>
            <p>
              A través del formulari de contacte recopilem: nom, email,
              telèfon, i les dades de l&apos;esdeveniment que ens proporciones
              voluntàriament.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Finalitat
            </h2>
            <p>
              Les dades s&apos;utilitzen exclusivament per respondre a la
              teva sol·licitud de contractació i enviar-te un pressupost
              personalitzat.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Conservació
            </h2>
            <p>
              Les dades es conservaran mentre existeixi un interès mutu i
              durant els terminis legalment establerts.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Drets
            </h2>
            <p>
              Pots exercir els teus drets d&apos;accés, rectificació,
              supressió, portabilitat, limitació i oposició escrivint a
              ladyjaranamusic@gmail.com.
            </p>
          </div>
        </div>
      </main>
      <FooterCA />
    </>
  );
}
