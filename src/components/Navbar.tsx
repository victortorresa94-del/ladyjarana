'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

type Locale = 'es' | 'ca';

interface NavLink {
  label: string;
  href: string;
  /** Sub-items para dropdown ("Recursos") */
  children?: { label: string; href: string; desc?: string }[];
}

const linksByLocale: Record<Locale, NavLink[]> = {
  es: [
    { label: 'Banda', href: '/#banda' },
    { label: 'Repertorio', href: '/repertorio' },
    { label: 'Eventos', href: '/eventos' },
    { label: 'Precios', href: '/precios' },
    { label: 'FAQ', href: '/faq' },
    {
      label: 'Recursos',
      href: '/material',
      children: [
        { label: 'Material gráfico', href: '/material', desc: 'Logos, fotos, ilustraciones' },
        { label: 'Dossier PDF', href: '/dossier-lady-jarana.pdf', desc: 'Bio, fotos, formatos' },
        { label: 'Rider técnico', href: '/material#rider-tecnico', desc: 'PNG + input list Excel' },
        { label: 'Repertorio PDF', href: '/repertorio-lady-jarana.pdf', desc: 'Listado completo' },
      ],
    },
  ],
  ca: [
    { label: 'La banda', href: '/ca/#banda' },
    { label: 'Repertori', href: '/ca/repertori' },
    { label: 'Esdeveniments', href: '/ca/esdeveniments' },
    { label: 'Preus', href: '/ca/preus' },
    { label: 'FAQ', href: '/ca/faq' },
    {
      label: 'Recursos',
      href: '/ca/material',
      children: [
        { label: 'Material gràfic', href: '/ca/material', desc: 'Logos, fotos, il·lustracions' },
        { label: 'Dossier PDF', href: '/dossier-lady-jarana.pdf', desc: 'Bio, fotos, formats' },
        { label: 'Rider tècnic', href: '/ca/material#rider-tecnic', desc: 'PNG + input list Excel' },
        { label: 'Repertori PDF', href: '/repertorio-lady-jarana.pdf', desc: 'Llistat complet' },
      ],
    },
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
  '/faq': { es: '/faq', ca: '/ca/faq' },
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
      '/faq': '/faq',
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
            className="relative z-50 flex items-center"
            aria-label="Lady Jarana — inici"
          >
            {/* Logo cambia según contexto:
                - Sobre hero (transparente): palmera-melon con sombra oscura para contrastar
                - Scrolled o menú abierto (fondo crema): palmera.png con tinte natural,
                  sin shadow oscuro que la difumine. */}
            <Image
              src={scrolled || menuOpen ? '/logo/palmera.png' : '/logo/palmera-melon.png'}
              alt="Lady Jarana"
              width={120}
              height={120}
              priority
              className={`h-12 w-auto transition-all ${
                scrolled || menuOpen ? '' : 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]'
              }`}
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) =>
              link.children ? (
                <div key={link.href} className="group relative">
                  <button
                    type="button"
                    className={`flex items-center gap-1 font-body text-sm font-bold transition-colors hover:text-rojo ${
                      scrolled
                        ? 'text-negro'
                        : 'text-crema drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
                    }`}
                  >
                    {link.label}
                    <svg
                      className="h-3 w-3 transition-transform group-hover:rotate-180"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </button>
                  <div className="invisible absolute right-0 top-full z-50 mt-2 w-72 origin-top-right scale-95 rounded-2xl border-4 border-negro bg-blanco p-2 opacity-0 shadow-[6px_6px_0_var(--negro)] transition-all duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                    {link.children.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-crema"
                      >
                        <p className="font-display text-base font-bold italic text-negro">
                          {c.label}
                        </p>
                        {c.desc && (
                          <p className="font-body text-xs text-negro/60">{c.desc}</p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
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
              ),
            )}

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
            className="fixed inset-0 z-40 flex flex-col items-center overflow-y-auto bg-crema px-6 pb-10 pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex w-full max-w-md flex-col items-stretch gap-3">
              {links.map((link, i) => (
                <div key={link.href} className="w-full">
                  <motion.a
                    href={link.href}
                    className="block w-full rounded-2xl border-2 border-negro/15 bg-blanco px-5 py-3 text-center font-display text-2xl font-bold italic text-azul transition-colors hover:border-rojo hover:text-rojo"
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {link.label}
                  </motion.a>
                  {link.children && (
                    <motion.div
                      className="mt-1.5 grid grid-cols-2 gap-1.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.04 + 0.08 }}
                    >
                      {link.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          onClick={() => setMenuOpen(false)}
                          className="rounded-xl border-2 border-negro/10 bg-crema px-3 py-2 text-center font-body text-xs font-semibold text-negro/75 transition-colors hover:border-rojo hover:bg-blanco hover:text-rojo"
                        >
                          {c.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.div
                className="mt-4 flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.04 + 0.05 }}
              >
                <Button
                  href={WHATSAPP_URL}
                  variant="primary"
                  className="text-xl px-10 py-4"
                >
                  {ctaLabel[locale]}
                </Button>
                <Link
                  href={switchHref}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border-2 border-negro px-4 py-1.5 font-body text-xs font-bold text-negro"
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
