// Datos de contacto centralizados.
// Si cambia el número de WhatsApp o el email, se cambia aquí.

const NUMBER = '34627281459';
const DEFAULT_MSG =
  'Hola Jaraneros! Acabo de ver vuestra web y me gustaría tener más info.';

export const WHATSAPP_NUMBER = NUMBER;
export const PHONE_DISPLAY = '+34 627 281 459';
export const EMAIL = 'ladyjaranamusic@gmail.com';
export const INSTAGRAM_HANDLE = '@lady.jarana';
export const INSTAGRAM_URL = 'https://instagram.com/lady.jarana';

export function whatsappUrl(message: string = DEFAULT_MSG): string {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();
