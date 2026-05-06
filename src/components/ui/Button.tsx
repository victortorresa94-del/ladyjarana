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
    'bg-rojo text-blanco hover:bg-rojo-oscuro shadow-[4px_4px_0_var(--negro)] hover:shadow-[2px_2px_0_var(--negro)] hover:translate-x-[2px] hover:translate-y-[2px]',
  secondary:
    'bg-sol text-negro hover:bg-naranja shadow-[4px_4px_0_var(--negro)] hover:shadow-[2px_2px_0_var(--negro)] hover:translate-x-[2px] hover:translate-y-[2px]',
  outline:
    'bg-transparent border-2 border-negro text-negro hover:bg-negro hover:text-crema',
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
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-body font-bold text-base tracking-wide transition-all duration-150 cursor-pointer';

  const content = (
    <motion.span
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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
