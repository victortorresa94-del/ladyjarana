import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

interface OGProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Color de acento del título principal (1 palabra/línea destacada) */
  accent?: 'sol' | 'rojo' | 'naranja' | 'azul';
}

const COLORS = {
  crema: '#FBF1DC',
  negro: '#1F1A18',
  rojo: '#D63B36',
  naranja: '#F47A1F',
  sol: '#F5B73C',
  azul: '#2B6FA3',
};

/**
 * Genera la OG image 1200×630 con el branding Lady Jarana.
 * Compatible con la API de next/og (ImageResponse) — sólo styles inline,
 * sin Tailwind. Usa fonts del sistema (sans-serif) para mantener el bundle
 * de la edge function pequeño.
 */
export function renderOG({
  eyebrow = '· Lady Jarana · Barcelona',
  title,
  subtitle,
  accent = 'sol',
}: OGProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(135deg, #1F1A18 0%, #2B1A18 45%, #4A1F1C 100%)',
          color: COLORS.crema,
          padding: '64px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Banda diagonal decorativa */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background:
              `radial-gradient(circle, ${COLORS.sol} 0%, transparent 70%)`,
            opacity: 0.2,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            left: -160,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background:
              `radial-gradient(circle, ${COLORS.rojo} 0%, transparent 70%)`,
            opacity: 0.15,
            display: 'flex',
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: COLORS.sol,
            marginBottom: 32,
          }}
        >
          {eyebrow}
        </div>

        {/* Título */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: subtitle ? 28 : 0,
          }}
        >
          <span style={{ color: COLORS[accent] }}>{title}</span>
        </div>

        {/* Subtítulo */}
        {subtitle && (
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.3,
              color: COLORS.crema,
              opacity: 0.85,
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Footer URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: COLORS.crema,
            opacity: 0.7,
          }}
        >
          <span>LADYJARANA.COM</span>
          <span style={{ color: COLORS.sol }}>
            Rumba &amp; Rock Band
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}
