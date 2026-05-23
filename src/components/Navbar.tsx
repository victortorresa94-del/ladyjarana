'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

type Locale = 'es' | 'ca';

const linksByLocale: Record<Locale, { label: string; href: string }[]> = {
  es: [
    { label: 'Banda', href: '/#banda' },
    { label: 'Repertorio', href: '/repertorio' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Galería', href: '/#galeria' },
    { label: 'Precios', href: '/precios' },
  ],
  ca: [
    { label: 'La banda', href: '/ca/#banda' },
    { label: 'Repertori', href: '/ca/repertori' },
    { label: 'Esdeveniments', href: '/ca/esdeveniments' },
    { label: 'Galeria', href: '/ca/#galeria' },
    { label: 'Preus', href: '/ca/preus' },
  ],
};

const ctaLabel: Record<Locale, string> = {
  es: 'Contratar',
  ca: 'Contractar',
};

// Mapeo de rutas equivalentes para el selector de idioma
const routeMap: Record<string, { es: string; ca: string }> = {
  '/': { es: '/', ca: '/ca' },
  '/precios': { es: '/precios', ca: '/ca/preus' },
  '/contratar': { es: '/contratar', ca: '/ca/contractar' },
  '/repertorio': { es: '/repertorio', ca: '/ca/repertori' },
  '/eventos': { es: '/eventos', ca: '/ca/esdeveniments' },
  '/galeria': { es: '/galeria', ca: '/ca/galeria' },
};

function detectLocale(pathname: string): Locale {
  return pathname === '/ca' || pathname.startsWith('/ca/') ? 'ca' : 'es';
}

function languageSwitchHref(pathname: string, currentLocale: Locale): string {
  const targetLocale: Locale = currentLocale === 'es' ? 'ca' : 'es';
  // Normaliza pathname para buscar en routeMap
  const cleanPath =
    currentLocale === 'ca'
      ? pathname === '/ca'
        ? '/'
        : pathname.replace(/^\/ca/, '') || '/'
      : pathname;

  // Reverso para CA → ES: necesitamos buscar por el slug catalán
  if (currentLocale === 'ca') {
    const map: Record<string, string> = {
      '/preus': '/precios',
      '/contractar': '/contratar',
      '/repertori': '/repertorio',
      '/esdeveniments': '/eventos',
      '/galeria': '/galeria',
      '/': '/',
    };
    return map[cleanPath] ?? '/';
  }

  // ES → CA
  const entry = routeMap[cleanPath];
  return entry ? entry.ca : '/ca';
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || '/';
  const locale = detectLocale(pathname);
  const links = linksByLocale[locale];
  const switchHref = languageSwitchHref(pathname, locale);
  const switchLabel = locale === 'es' ? 'CA' : 'ES';
  const switchAria =
    locale === 'es' ? 'Veure en català' : 'Ver en castellano';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const homeHref = locale === 'es' ? '/' : '/ca';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-crema/95 backdrop-blur-xl shadow-md border-b-2 border-negro/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href={homeHref}
            className="flex items-center"
            aria-label="Lady Jarana — inici"
          >
            <Image
              src="/logo/palmera-melon.png"
              alt="Lady Jarana"
              width={120}
              height={120}
              priority
              className="h-12 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-bold transition-colors hover:text-rojo ${
                  scrolled
                    ? 'text-negro'
                    : 'text-crema drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <Link
              href={switchHref}
              aria-label={switchAria}
              className={`rounded-full border-2 px-3 py-1 font-body text-xs font-bold transition-colors ${
                scrolled
                  ? 'border-negro/30 text-negro hover:border-rojo hover:text-rojo'
                  : 'border-crema/40 text-crema hover:bg-crema/15 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
              }`}
            >
              {switchLabel}
            </Link>

            <Button href={WHATSAPP_URL} variant="primary">
              {ctaLabel[locale]}
            </Button>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? locale === 'ca'
                  ? 'Tancar menú'
                  : 'Cerrar menú'
                : locale === 'ca'
                ? 'Obrir menú'
                : 'Abrir menú'
            }
          >
            <motion.span
              className={`block h-0.5 w-6 ${scrolled || menuOpen ? 'bg-negro' : 'bg-crema'}`}
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={`block h-0.5 w-6 ${scrolled || menuOpen ? 'bg-negro' : 'bg-crema'}`}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className={`block h-0.5 w-6 ${scrolled || menuOpen ? 'bg-negro' : 'bg-crema'}`}
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-crema"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display text-4xl font-bold text-azul hover:text-rojo transition-colors italic"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.08 }}
              >
                <Button
                  href={WHATSAPP_URL}
                  variant="primary"
                  className="text-xl px-10 py-4"
                >
                  {ctaLabel[locale]}
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (links.length + 1) * 0.08 }}
                className="mt-2"
              >
                <Link
                  href={switchHref}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border-2 border-negro px-5 py-2 font-body text-sm font-bold text-negro"
                >
                  {locale === 'es' ? '🌐 Veure en català' : '🌐 Ver en castellano'}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
