import { renderOG, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Repertorio Lady Jarana — 37 canciones para bodas y festes majors';
export const size = ogSize;
export const contentType = ogContentType;
export const runtime = 'nodejs';

export default function OG() {
  return renderOG({
    eyebrow: '· Repertorio',
    title: '37 canciones',
    subtitle:
      'Pop-rock ES + CA, rumba catalana, latineo y verbeneras. Playlist oficial en Spotify, repertorio en PDF y versiones personalizadas para primer baile.',
    accent: 'sol',
  });
}
