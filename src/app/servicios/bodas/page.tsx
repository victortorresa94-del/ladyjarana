import type { Metadata } from 'next';
import ServicioStub from '@/components/sections/ServicioStub';

export const metadata: Metadata = {
  title: 'Banda en directo para bodas en Barcelona — Lady Jarana',
  description:
    'Lady Jarana, banda en directo para bodas en Barcelona y Cataluña. Pop-rock, rumba y latineo para ceremonia, cóctel y fiesta.',
  alternates: { canonical: '/servicios/bodas' },
};

export default function BodasPage() {
  return (
    <ServicioStub
      titulo="Banda en directo para bodas"
      intro="Ceremonia, cóctel y fiesta. Lady Jarana adapta su formato para acompañar cada momento de la boda con pop-rock, rumba y latineo en directo — 100% banda, 0% pista pregrabada."
      mensajeWhatsapp="¡Hola Lady Jarana! Quería contrataros para una boda."
    />
  );
}
