'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Button from '@/components/ui/Button';
import { EMAIL, WHATSAPP_URL } from '@/lib/contact';

const schema = z.object({
  nombre: z.string().min(2, 'Introduce tu nombre'),
  email: z.email('Introduce un email válido'),
  telefono: z.string().min(6, 'Introduce tu teléfono'),
  tipoEvento: z.string().min(1, 'Selecciona un tipo de evento'),
  fecha: z.string().optional(),
  mensaje: z.string().optional(),
  privacidad: z.literal(true, {
    error: 'Debes aceptar la política de privacidad',
  }),
});

type FormData = z.infer<typeof schema>;

function FormContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const defaultEvento = searchParams.get('evento') || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipoEvento:
        defaultEvento === 'boda'
          ? 'Boda'
          : defaultEvento === 'fiesta-mayor'
            ? 'Fiesta mayor'
            : defaultEvento === 'empresa'
              ? 'Evento de empresa'
              : defaultEvento === 'privado'
                ? 'Evento privado'
                : '',
    },
  });

  const onSubmit = (data: FormData) => {
    const lines = [
      `Nombre: ${data.nombre}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.telefono}`,
      `Tipo de evento: ${data.tipoEvento}`,
      data.fecha && `Fecha: ${data.fecha}`,
      data.mensaje && `\nMensaje:\n${data.mensaje}`,
    ]
      .filter(Boolean)
      .join('\n');

    const subject = `Contratación · ${data.tipoEvento} · ${data.nombre}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;

    window.location.href = mailto;
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <span className="mb-4 block text-5xl">🎉</span>
        <h3 className="mb-2 font-display text-2xl font-bold text-negro">
          ¡Listo! Revisa tu correo
        </h3>
        <p className="font-body text-negro/70">
          Se ha abierto tu cliente de email con el mensaje preparado. Sólo dale
          a enviar.
        </p>
        <p className="mt-4 font-body text-sm text-negro/60">
          ¿No se abrió? Escríbenos a{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="text-rojo underline font-bold"
          >
            {EMAIL}
          </a>{' '}
          o por{' '}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rojo underline font-bold"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  const inputStyles =
    'w-full rounded-xl border border-negro/10 bg-azul-claro/50 px-4 py-3 font-body text-negro placeholder:text-negro/40 focus:border-azul focus:outline-none focus:ring-2 focus:ring-azul/20 transition-colors';
  const labelStyles =
    'block mb-1.5 font-body text-sm font-semibold text-negro';
  const errorStyles = 'mt-1 font-body text-xs text-red-500';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelStyles}>Nombre *</label>
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
          <label className={labelStyles}>Tipo de evento *</label>
          <select {...register('tipoEvento')} className={inputStyles}>
            <option value="">Seleccionar...</option>
            <option value="Boda">Boda</option>
            <option value="Fiesta mayor">Fiesta mayor</option>
            <option value="Evento privado">Evento privado</option>
            <option value="Evento de empresa">Evento de empresa</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.tipoEvento && (
            <p className={errorStyles}>{errors.tipoEvento.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <div>
          <label className={labelStyles}>Teléfono / WhatsApp *</label>
          <input
            {...register('telefono')}
            className={inputStyles}
            placeholder="+34 600 000 000"
          />
          {errors.telefono && (
            <p className={errorStyles}>{errors.telefono.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelStyles}>Fecha del evento (si la sabes)</label>
        <input {...register('fecha')} type="date" className={inputStyles} />
      </div>

      <div>
        <label className={labelStyles}>Mensaje</label>
        <textarea
          {...register('mensaje')}
          className={`${inputStyles} min-h-[90px] resize-y`}
          placeholder="Localización, aforo aproximado, lo que quieras contarnos..."
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
      >
        Mandar mensaje a Lady Jarana →
      </Button>

      <p className="pt-2 text-center font-body text-xs text-negro/60">
        O escríbenos directamente por{' '}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rojo underline font-bold"
        >
          WhatsApp
        </a>{' '}
        — es lo más rápido.
      </p>
    </form>
  );
}

export default function ContratarForm() {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center font-body text-negro/50">
          Cargando formulario...
        </div>
      }
    >
      <FormContent />
    </Suspense>
  );
}
