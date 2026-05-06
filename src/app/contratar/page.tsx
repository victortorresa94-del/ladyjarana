import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContratarForm from './ContratarForm';

export const metadata: Metadata = {
  title: 'Contratar Lady Jarana — Banda en directo para tu evento | Barcelona',
  description:
    'Contrata Lady Jarana para tu boda, fiesta mayor o evento privado. Respuesta en 24h. Cuarteto, trío y dúo. Disponibilidad temporada 2026.',
  alternates: { canonical: '/contratar' },
};

const faqs = [
  {
    q: '¿Cuánto cuesta contratar la banda?',
    a: 'El precio depende del formato, la duración y la localización. Escríbenos y te enviamos presupuesto sin compromiso en menos de 24h.',
  },
  {
    q: '¿Traéis equipo de sonido?',
    a: 'Podemos llevar nuestro propio equipo o adaptarnos al vuestro. Indícalo en el formulario y lo hablamos.',
  },
  {
    q: '¿Os desplazáis fuera de Barcelona?',
    a: 'Sí, tocamos en toda Cataluña y resto de España. Solo necesitamos conocer la localización para ajustar logística.',
  },
  {
    q: '¿Se puede personalizar el repertorio?',
    a: 'Por supuesto. Si tenéis un tema especial para la ceremonia, el primer baile o un momento clave, lo preparamos.',
  },
];

export default function ContratarPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-crema min-h-screen">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left column - Info */}
            <div className="lg:col-span-2">
              <h1 className="mb-6 font-display text-4xl font-bold text-negro lg:text-5xl">
                Contrata a Lady Jarana
              </h1>
              <p className="mb-8 font-body text-negro/70 leading-relaxed">
                Cuéntanos qué celebras, dónde y cuándo. Te respondemos en menos
                de 24h con disponibilidad y propuesta personalizada.
              </p>

              <div className="mb-10 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-rojo text-xl">⚡</span>
                  <div>
                    <p className="font-body font-semibold text-negro">
                      Respuesta en 24h
                    </p>
                    <p className="font-body text-sm text-negro/60">
                      Te enviamos disponibilidad y presupuesto rápido.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-rojo text-xl">🎸</span>
                  <div>
                    <p className="font-body font-semibold text-negro">
                      Formatos flexibles
                    </p>
                    <p className="font-body text-sm text-negro/60">
                      Dúo, trío o cuarteto. Nos adaptamos a tu evento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-rojo text-xl">📍</span>
                  <div>
                    <p className="font-body font-semibold text-negro">
                      Barcelona y desplazamientos
                    </p>
                    <p className="font-body text-sm text-negro/60">
                      Tocamos en toda Cataluña y resto de España.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-negro">
                  Preguntas frecuentes
                </h3>
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

            {/* Right column - Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-blanco border-4 border-negro shadow-[8px_8px_0_var(--negro)] p-8 lg:p-10">
                <ContratarForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
