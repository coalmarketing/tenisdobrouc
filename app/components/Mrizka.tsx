"use client"; // Označuje komponentu jako Client Component

import React from 'react';
import { usePathname } from 'next/navigation';
import { useColor } from './../contexts/ColorContext'; // Import color context

const Mrizka = () => {
  const pathname = usePathname(); // Získání cesty pomocí usePathname
  const colorMap = useColor(); // Získání color mapy z kontextu

  // Dynamicky získání aktuálního hex kódu barvy
  const currentHex = colorMap[pathname as keyof typeof colorMap]?.hex || '#EAA224'; // Defaultní žlutá jako hex

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="274px" height="274px" viewBox="0 0 274 274">
      {/* Použití dynamické hex barvy pro tahy */}
      <g stroke={currentHex} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-17 17 h308" />
        <path d="M-17 51 h308" />
        <path d="M-17 85 h308" />
        <path d="M-17 119 h308" />
        <path d="M-17 153 h308" />
        <path d="M-17 187 h308" />
        <path d="M-17 221 h308" />
        <path d="M-17 255 h308" />
      </g>
      <g stroke={currentHex} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 -17 v308" />
        <path d="M51 -17 v308" />
        <path d="M85 -17 v308" />
        <path d="M119 -17 v308" />
        <path d="M153 -17 v308" />
        <path d="M187 -17 v308" />
        <path d="M221 -17 v308" />
        <path d="M255 -17 v308" />
      </g>
    </svg>
  );
};

export default Mrizka;
