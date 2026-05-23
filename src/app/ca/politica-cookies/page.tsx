import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  robots: { index: false },
  alternates: {
    canonical: '/ca/politica-cookies',
    languages: {
      es: 'https://ladyjarana.es/politica-cookies',
      ca: 'https://ladyjarana.es/ca/politica-cookies',
    },
  },
};

export default function PoliticaCookiesCA() {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-28 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-display text-4xl font-bold text-negro">
            Política de Cookies
          </h1>
          <div className="prose prose-lg font-body text-negro/80 space-y-6">
            <p>
              Aquest lloc web utilitza cookies pròpies i de tercers per
              millorar la teva experiència de navegació.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Què són les cookies?
            </h2>
            <p>
              Les cookies són petits arxius de text que s&apos;emmagatzemen al
              teu dispositiu en visitar un lloc web. Permeten que el lloc
              recordi les teves accions i preferències.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Cookies que fem servir
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Cookies tècniques:</strong> necessàries per al
                funcionament del lloc.
              </li>
              <li>
                <strong>Cookies analítiques:</strong> per entendre com els
                usuaris interactuen amb el lloc (si s&apos;activa Google
                Analytics).
              </li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-negro">
              Gestió de cookies
            </h2>
            <p>
              Pots configurar el teu navegador per rebutjar cookies o perquè
              t&apos;avisi quan un lloc web intenti col·locar una cookie.
            </p>
          </div>
        </div>
      </main>
      <FooterCA />
    </>
  );
}
