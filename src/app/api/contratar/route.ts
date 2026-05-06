import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Lady Jarana Web <noreply@ladyjarana.com>',
        to: process.env.CONTACT_EMAIL || 'info@ladyjarana.com',
        subject: `Nueva solicitud de contratación: ${data.tipoEvento} — ${data.nombre}`,
        html: `
          <h2>Nueva solicitud de contratación</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nombre</td><td style="padding: 8px; border: 1px solid #ddd;">${data.nombre}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Teléfono</td><td style="padding: 8px; border: 1px solid #ddd;">${data.telefono}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tipo de evento</td><td style="padding: 8px; border: 1px solid #ddd;">${data.tipoEvento}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Fecha</td><td style="padding: 8px; border: 1px solid #ddd;">${data.fecha || 'No especificada'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Hora</td><td style="padding: 8px; border: 1px solid #ddd;">${data.hora || 'No especificada'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Localización</td><td style="padding: 8px; border: 1px solid #ddd;">${data.localizacion || 'No especificada'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Provincia</td><td style="padding: 8px; border: 1px solid #ddd;">${data.provincia || 'No especificada'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Aforo</td><td style="padding: 8px; border: 1px solid #ddd;">${data.aforo || 'No especificado'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Formato</td><td style="padding: 8px; border: 1px solid #ddd;">${data.formato || 'No especificado'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Equipo sonido</td><td style="padding: 8px; border: 1px solid #ddd;">${data.sonido || 'No especificado'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensaje</td><td style="padding: 8px; border: 1px solid #ddd;">${data.mensaje || 'Sin mensaje'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Cómo nos conoció</td><td style="padding: 8px; border: 1px solid #ddd;">${data.comoNosConociste || 'No especificado'}</td></tr>
          </table>
        `,
      });
    } else {
      // Log to console when Resend is not configured
      console.log('📧 Nueva solicitud de contratación:', JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Error al enviar el formulario' },
      { status: 500 }
    );
  }
}
