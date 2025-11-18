import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated';
  children: React.ReactNode;
}

export default function Card({
  variant = 'default',
  className = '',
  children,
  ...props
}: CardProps) {
  const baseClasses = 'rounded-soft transition-all duration-300';

  const variantClasses = {
    default: 'bg-white border border-bb-secondary/10 shadow-soft',
    glass: 'backdrop-glass',
    elevated: 'bg-white shadow-soft hover:shadow-lg hover:-translate-y-1'
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
