import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}
export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-opacity-50';
  const variantStyles = {
    primary: 'bg-sage-600 hover:bg-sage-700 text-white shadow-sm',
    outline: 'border-2 border-sage-600 text-sage-600 hover:bg-sage-50'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>;
}