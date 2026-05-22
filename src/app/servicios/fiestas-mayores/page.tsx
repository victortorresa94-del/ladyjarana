import type { Metadata } from 'next';
import ServicioStub from '@/components/sections/ServicioStub';

export const metadata: Metadata = {
  title: 'Banda para fiestas mayores en Cataluña — Lady Jarana',
  description:
    'Lady Jarana, banda en directo para fiestas mayores en Cataluña. Pop-rock, rumba y latineo para llenar la plaza.',
  alternates: { canonical: '/servicios/fiestas-mayores' },
};

export default function FiestasMayoresPage() {
  return (
    <ServicioStub
      titulo="Banda para fiestas mayores"
      intro="La banda que la plaza estaba esperando. Energía en directo para fiestas mayores en pueblos y ciudades de toda Cataluña."
    />
  );
}
