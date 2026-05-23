'use client';

import { useEffect } from 'react';

// Layout exclusivo para /ca/*: ajusta <html lang> a "ca" desde cliente.
// (En App Router el atributo `lang` del <html> sólo se puede cambiar
// dinámicamente vía effect porque el root layout es server-only.)
export default function CALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = 'ca';
    return () => {
      document.documentElement.lang = prev;
    };
  }, []);

  return <>{children}</>;
}
