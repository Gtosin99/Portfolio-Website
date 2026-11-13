import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, to, onClick, className = '' }: ButtonProps) {

  const baseStyles = "button inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-colors duration-200 rounded-md";
  
  
  const variants = {
    primary: "button-primary",
    outline: "button-outline"
  };
  
  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  
  if (href) {
    const external = href.startsWith('https://');
    return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={combinedStyles}>{children}</a>;
  }
  
  if (to) {
    return <Link to={to} className={combinedStyles}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={combinedStyles}>{children}</button>;
}
