import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark-outline';
  className?: string;
}

const variantClasses = {
  primary: 'border-maroon bg-maroon text-white hover:bg-maroon/90',
  secondary: 'border-maroon bg-transparent text-maroon hover:bg-maroon hover:text-white',
  'dark-outline': 'border-lightgrey bg-transparent text-white hover:bg-white hover:text-maroon',
} as const;

export function ButtonLink({ to, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center rounded-md border px-5 py-3 text-center text-sm font-bold transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
