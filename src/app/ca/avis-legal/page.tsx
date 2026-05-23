import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCA from '@/components/FooterCA';

export const metadata: Metadata = {
  title: 'Avís Legal',
  robots: { index: false },
  alternates: {
    canonical: '/ca/avis-legal',
    languages: {
      es: 'https://ladyjarana.com/aviso-legal',
      ca: 'https://ladyjarana.com/ca/avis-legal',
    },
  },
};

export default function AvisLegal() {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-28 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-display text-4xl font-bold text-negro">
            Avís Legal
          </h1>
          <div className="prose prose-lg font-body text-negro/80 space-y-6">
            <p>
              En compliment de la Llei 34/2002, d&apos;11 de juliol, de
              Serveis de la Societat de la Informació i de Comerç Electrònic
              (LSSICE), s&apos;informa que aquest lloc web és propietat de
              Lady Jarana / 94 Music.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Dades identificatives
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Denominació: Lady Jarana (projecte de 94 Music)</li>
              <li>Domicili: Barcelona, Espanya</li>
              <li>Email: ladyjaranamusic@gmail.com</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-negro">
              Condicions d&apos;ús
            </h2>
            <p>
              L&apos;accés a aquesta web atribueix la condició d&apos;usuari i
              implica l&apos;acceptació plena d&apos;aquestes condicions.
              L&apos;usuari es compromet a fer un ús adequat dels continguts i
              serveis oferts.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Propietat intel·lectual
            </h2>
            <p>
              Tots els continguts d&apos;aquest lloc web, incloent textos,
              imatges, logotips, disseny gràfic i codi font, estan protegits
              per la legislació vigent en matèria de propietat intel·lectual.
            </p>
          </div>
        </div>
      </main>
      <FooterCA />
    </>
  );
}
