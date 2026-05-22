'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from './ui/Button';
import { WHATSAPP_URL } from '@/lib/contact';

const links = [
  { label: 'Banda', href: '#banda' },
  { label: 'Música', href: '#musica' },
  { label: 'Formatos', href: '#formatos' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galería', href: '#galeria' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
          <Link href="/" className="flex items-center" aria-label="Lady Jarana — inicio">
            <Image
              src="/logo/palmera-melon.png"
              alt="Lady Jarana"
              width={120}
              height={120}
              priority
              className="h-12 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-bold transition-colors hover:text-rojo ${
                  scrolled ? 'text-negro' : 'text-crema drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href={WHATSAPP_URL} variant="primary">
              Contratar
            </Button>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.span
              className={`block h-0.5 w-6 ${scrolled || menuOpen ? 'bg-negro' : 'bg-crema'}`}
              animate={
                menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
              }
            />
            <motion.span
              className={`block h-0.5 w-6 ${scrolled || menuOpen ? 'bg-negro' : 'bg-crema'}`}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className={`block h-0.5 w-6 ${scrolled || menuOpen ? 'bg-negro' : 'bg-crema'}`}
              animate={
                menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
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
                  Contratar
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
