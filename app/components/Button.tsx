import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useColor } from './../contexts/ColorContext'; 
import clsx from 'clsx'; 

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  width?: string;
  onClick?: () => void;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, to, width, onClick, outline = false }) => {
  const pathname = usePathname(); // Get the current path
  const colorMap = useColor(); // Get the color map from context
  
  // Dynamically get the current color from colorMap
  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta';

  const className = clsx(
    'flex gap-4 w-full sm:w-fit items-center text-md md:text-xl font-400 justify-center py-3 px-6 transition-colors rounded-sm duration-300 border-2',
    {
      [`bg-${currentColor} hover:bg-${currentColor}Hover border-${currentColor} text-white`]: !outline,
      [`border-${currentColor} text-${currentColor} bg-transparent hover:bg-${currentColor} hover:text-white`]: outline
    }
  );

  const style: React.CSSProperties = {
    width: width
  };

  const isExternal = to && to.startsWith('http');

  if (to) {
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={onClick}>
          {children}
        </a>
      );
    } else {
      return (
        <Link href={to} className={className} style={style} onClick={onClick}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
