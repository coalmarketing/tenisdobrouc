"use client"; // Označuje komponentu jako Client Component

import React from 'react';
import { usePathname } from 'next/navigation';

const Trojuhlenik = () => {
  const pathname = usePathname(); // Získání aktuální cesty

  // Nahrazení `getColor` pevnou žlutou barvou
  const fillColor = "zluta"; // Pevná barva

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]'>
      <path d="M0 100L100 0L100 100L0 100Z" fill={fillColor} />
    </svg>
  );
};

export default Trojuhlenik;
