"use client"; // Mark this component as a client component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useColor } from './../contexts/ColorContext'; 
import clsx from 'clsx'; 

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  outline?: boolean;
}



const Button: React.FC<ButtonProps> = ({ children, to, width, onClick, outline = false }) => {
  const pathname = usePathname();
  const colorMap = useColor();

  // Dynamically get the current color from colorMap
  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta';

  const ColorButtonO = clsx({
    'border-zluta text-zluta hover:bg-zluta': currentColor === 'zluta',
    'border-modra text-modra hover:bg-modra': currentColor === 'modra',
    'border-zelena text-zelena hover:bg-zelena': currentColor === 'zelena',
  });

  const ColorButton = clsx({
    'bg-zluta hover:bg-zlutaHover': currentColor === 'zluta',
    'bg-modra hover:bg-modraHover': currentColor === 'modra',
    'bg-zelena hover:bg-zelenaHover': currentColor === 'zelena',
  });

  const className = clsx(
    'flex gap-4 w-full sm:w-fit items-center text-md md:text-xl font-400 justify-center py-3 px-6 transition-colors rounded-sm duration-300',
    {
      [`${ColorButton} text-white`]: !outline,
      [`${ColorButtonO} bg-transparent hover:text-white border-2`]: outline
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
