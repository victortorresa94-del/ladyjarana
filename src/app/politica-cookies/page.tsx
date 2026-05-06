import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  robots: { index: false },
};

export default function PoliticaCookies() {
  return (
    <>
      <Navbar />
      <main className="bg-azul-claro pt-28 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-display text-4xl font-bold text-negro">
            Política de Cookies
          </h1>
          <div className="prose prose-lg font-body text-negro/80 space-y-6">
            <p>
              Este sitio web utiliza cookies propias y de terceros para mejorar tu
              experiencia de navegación.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo al visitar un sitio web. Permiten que el sitio recuerde
              tus acciones y preferencias.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Cookies que utilizamos
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Cookies técnicas:</strong> necesarias para el
                funcionamiento del sitio.
              </li>
              <li>
                <strong>Cookies analíticas:</strong> para entender cómo los
                usuarios interactúan con el sitio (si se activa Google Analytics).
              </li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-negro">
              Gestión de cookies
            </h2>
            <p>
              Puedes configurar tu navegador para rechazar cookies o para que te
              avise cuando un sitio web intente colocar una cookie.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
