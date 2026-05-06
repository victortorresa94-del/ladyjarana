'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';

const schema = z.object({
  nombre: z.string().min(2, 'Introduce tu nombre'),
  email: z.email('Introduce un email válido'),
  telefono: z.string().min(6, 'Introduce tu teléfono'),
  tipoEvento: z.string().min(1, 'Selecciona un tipo de evento'),
  fecha: z.string().optional(),
  localizacion: z.string().optional(),
  provincia: z.string().optional(),
  aforo: z.string().optional(),
  formato: z.string().optional(),
  hora: z.string().optional(),
  sonido: z.string().optional(),
  mensaje: z.string().optional(),
  comoNosConociste: z.string().optional(),
  privacidad: z.literal(true, {
    error: 'Debes aceptar la política de privacidad',
  }),
});

type FormData = z.infer<typeof schema>;

function FormContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const defaultEvento = searchParams.get('evento') || '';
  const defaultFormato = searchParams.get('formato') || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipoEvento: defaultEvento === 'boda' ? 'Boda'
        : defaultEvento === 'fiesta-mayor' ? 'Fiesta mayor'
        : defaultEvento === 'empresa' ? 'Evento de empresa'
        : defaultEvento === 'cumpleaños' ? 'Cumpleaños'
        : '',
      formato: defaultFormato === 'dúo acústico' ? 'Dúo'
        : defaultFormato === 'trío' ? 'Trío'
        : defaultFormato === 'cuarteto' ? 'Cuarteto'
        : '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contratar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <span className="mb-4 block text-5xl">🎉</span>
        <h3 className="mb-2 font-display text-2xl font-bold text-negro">
          ¡Recibido!
        </h3>
        <p className="font-body text-negro/70">
          Te respondemos en menos de 24h. Mientras, aquí va un tema para abrir
          boca.
        </p>
      </div>
    );
  }

  const inputStyles =
    'w-full rounded-xl border border-negro/10 bg-crema/50 px-4 py-3 font-body text-negro placeholder:text-negro/40 focus:border-azul focus:outline-none focus:ring-2 focus:ring-azul/20 transition-colors';
  const labelStyles = 'block mb-1.5 font-body text-sm font-semibold text-negro';
  const errorStyles = 'mt-1 font-body text-xs text-coral';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelStyles}>
            Nombre y apellidos *
          </label>
          <input
            {...register('nombre')}
            className={inputStyles}
            placeholder="Tu nombre"
          />
          {errors.nombre && (
            <p className={errorStyles}>{errors.nombre.message}</p>
          )}
        </div>
        <div>
          <label className={labelStyles}>Email *</label>
          <input
            {...register('email')}
            type="email"
            className={inputStyles}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className={errorStyles}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelStyles}>
            Teléfono / WhatsApp *
          </label>
          <input
            {...register('telefono')}
            className={inputStyles}
            placeholder="+34 600 000 000"
          />
          {errors.telefono && (
            <p className={errorStyles}>{errors.telefono.message}</p>
          )}
        </div>
        <div>
          <label className={labelStyles}>
            Tipo de evento *
          </label>
          <select {...register('tipoEvento')} className={inputStyles}>
            <option value="">Seleccionar...</option>
            <option value="Boda">Boda</option>
            <option value="Fiesta mayor">Fiesta mayor</option>
            <option value="Evento de empresa">Evento de empresa</option>
            <option value="Cumpleaños">Cumpleaños</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.tipoEvento && (
            <p className={errorStyles}>{errors.tipoEvento.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelStyles}>
            Fecha del evento
          </label>
          <input
            {...register('fecha')}
            type="date"
            className={inputStyles}
          />
        </div>
        <div>
          <label className={labelStyles}>
            Hora de actuación
          </label>
          <input
            {...register('hora')}
            type="time"
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelStyles}>Localización</label>
          <input
            {...register('localizacion')}
            className={inputStyles}
            placeholder="Nombre del venue o dirección"
          />
        </div>
        <div>
          <label className={labelStyles}>Provincia</label>
          <select {...register('provincia')} className={inputStyles}>
            <option value="">Seleccionar...</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Girona">Girona</option>
            <option value="Lleida">Lleida</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Otra">Otra provincia</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={labelStyles}>
            Aforo aproximado
          </label>
          <input
            {...register('aforo')}
            className={inputStyles}
            placeholder="ej. 100"
          />
        </div>
        <div>
          <label className={labelStyles}>
            Formato deseado
          </label>
          <select {...register('formato')} className={inputStyles}>
            <option value="">Seleccionar...</option>
            <option value="Dúo">Dúo acústico</option>
            <option value="Trío">Trío</option>
            <option value="Cuarteto">Cuarteto</option>
            <option value="No estoy seguro">No estoy seguro</option>
          </select>
        </div>
        <div>
          <label className={labelStyles}>
            ¿Equipo de sonido?
          </label>
          <select {...register('sonido')} className={inputStyles}>
            <option value="">Seleccionar...</option>
            <option value="Sí">Sí, lo necesito</option>
            <option value="No">No, tengo equipo</option>
            <option value="No lo sé">No lo sé</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelStyles}>Mensaje</label>
        <textarea
          {...register('mensaje')}
          className={`${inputStyles} min-h-[100px] resize-y`}
          placeholder="Cuéntanos más sobre tu evento..."
        />
      </div>

      <div>
        <label className={labelStyles}>
          ¿Cómo nos has conocido?
        </label>
        <input
          {...register('comoNosConociste')}
          className={inputStyles}
          placeholder="Instagram, Google, un amigo..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          {...register('privacidad')}
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-negro/20 text-azul focus:ring-azul"
        />
        <label className="font-body text-xs text-negro/60">
          He leído y acepto la{' '}
          <a
            href="/politica-privacidad"
            className="text-azul underline"
            target="_blank"
          >
            política de privacidad
          </a>
          . *
        </label>
      </div>
      {errors.privacidad && (
        <p className={errorStyles}>{errors.privacidad.message}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center text-lg"
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? 'Calentando motores...'
          : 'Mandar mensaje a Lady Jarana →'}
      </Button>

      {status === 'error' && (
        <p className="text-center font-body text-sm text-coral">
          Algo se ha desafinado, prueba de nuevo.
        </p>
      )}
    </form>
  );
}

export default function ContratarForm() {
  return (
    <Suspense fallback={<div className="py-12 text-center font-body text-negro/50">Cargando formulario...</div>}>
      <FormContent />
    </Suspense>
  );
}
