import { ReactNode } from 'react';
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

  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium transition-colors duration-200 rounded-md";
  
  
  const variants = {
    primary: "bg-emerald-500 text-slate-900 hover:bg-emerald-400",
    outline: "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-slate-900"
  };
  
  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>{children}</a>;
  }
  
  if (to) {
    return <Link to={to} className={combinedStyles}>{children}</Link>;
  }
  
  return <button onClick={onClick} className={combinedStyles}>{children}</button>;
}