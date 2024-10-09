
"use client"; // Označuje komponentu jako Client Component

import React from 'react';
import { usePathname } from 'next/navigation';
import { useColor } from './../contexts/ColorContext'; // Import color context

const Trojuhlenik = () => {

  const pathname = usePathname(); // Získání cesty pomocí usePathname
  const colorMap = useColor(); // Získání color mapy z kontextu

  // Dynamicky získání aktuálního hex kódu barvy
  const currentHex = colorMap[pathname as keyof typeof colorMap]?.hex || '#EAA224'; // Defaultní žlutá jako hex

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]'>
      <path d="M0 100L100 0L100 100L0 100Z" fill={currentHex} />
    </svg>
  );
};

export default Trojuhlenik;


