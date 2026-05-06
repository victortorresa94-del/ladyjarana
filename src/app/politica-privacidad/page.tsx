import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  robots: { index: false },
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Navbar />
      <main className="bg-crema pt-28 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-8 font-display text-4xl font-bold text-negro">
            Política de Privacidad
          </h1>
          <div className="prose prose-lg font-body text-negro/80 space-y-6">
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD)
              y la Ley Orgánica 3/2018 de Protección de Datos Personales, te
              informamos sobre el tratamiento de tus datos personales.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Responsable del tratamiento
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responsable: Lady Jarana / 94 Music</li>
              <li>Email: ladyjaranamusic@gmail.com</li>
              <li>Finalidad: gestión de solicitudes de contratación</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-negro">
              Datos que recopilamos
            </h2>
            <p>
              A través del formulario de contacto recopilamos: nombre, email,
              teléfono, y los datos del evento que nos proporcionas
              voluntariamente.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Finalidad
            </h2>
            <p>
              Los datos se utilizan exclusivamente para responder a tu solicitud de
              contratación y enviarte un presupuesto personalizado.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Conservación
            </h2>
            <p>
              Los datos se conservarán mientras exista un interés mutuo y durante
              los plazos legalmente establecidos.
            </p>
            <h2 className="font-display text-2xl font-bold text-negro">
              Derechos
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión,
              portabilidad, limitación y oposición escribiendo a
              ladyjaranamusic@gmail.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
