import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  robots: { index: false },
};

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-28 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-display text-4xl font-bold text-negro">
            Aviso Legal
          </h1>
          <div className="prose prose-lg font-body text-negro/80 space-y-6">
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
              la Sociedad de la Información y de Comercio Electrónico (LSSICE), se
              informa que este sitio web es propiedad de Lady Jarana / 94 Music.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Datos identificativos
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Denominación: Lady Jarana (proyecto de 94 Music)</li>
              <li>Domicilio: Barcelona, España</li>
              <li>Email: ladyjaranamusic@gmail.com</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-negro">
              Condiciones de uso
            </h2>
            <p>
              El acceso a esta web atribuye la condición de usuario e implica la
              aceptación plena de las presentes condiciones. El usuario se
              compromete a hacer un uso adecuado de los contenidos y servicios
              ofrecidos.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio web, incluyendo textos, imágenes,
              logotipos, diseño gráfico y código fuente, están protegidos por la
              legislación vigente en materia de propiedad intelectual.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
