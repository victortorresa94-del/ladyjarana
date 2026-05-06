'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-amarillo text-negro hover:bg-amarillo/90 shadow-lg shadow-amarillo/25',
  secondary:
    'bg-coral text-blanco hover:bg-coral/90 shadow-lg shadow-coral/25',
  outline:
    'bg-transparent border-2 border-blanco text-blanco hover:bg-blanco/10',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body font-semibold text-base tracking-wide transition-colors duration-200 cursor-pointer';

  const content = (
    <motion.span
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={disabled ? {} : { scale: 1.03, rotate: -0.5 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className="appearance-none bg-transparent border-0 p-0">
      {content}
    </button>
  );
}
