"use client"; // Indicates the component as a Client Component

import React from 'react';
import { usePathname } from 'next/navigation';
import Trojuhelnik from './Trojuhelnik';
import Mrizka from './Mrizka';
import type { StaticImageData } from 'next/image'; // Import StaticImageData type
import { useColor } from './../contexts/ColorContext';
import Image from 'next/image'; // Import Image

interface SectionProps {
  nadpis: string;
  obsah: React.ReactNode;
  img: string | StaticImageData; // Allow both string and StaticImageData
  alt: string;
  pozadi: boolean;
  reverse: boolean;
  imgVector: 'm' | 't';
  vectorPosition: boolean;
  mrizka?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  nadpis,
  obsah,
  img,
  alt,
  pozadi,
  reverse,
  imgVector,
  vectorPosition,
  mrizka,
  children
}) => {
  
  const pathname = usePathname(); // Get the current path
  const colorMap = useColor(); // Get the color map from context
  
  // Dynamically get the current color from colorMap
  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta';

  return (
    <div className={`py-24 my-8 ${pozadi ? `bg-${currentColor} bg-opacity-10` : ''}`}>
      <div className={`sirka flex flex-col xl:flex-row gap-8 xl:gap-[7rem] ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'}`}>
        <div className={`flex-1 text-justify flex flex-col gap-0 xl:gap-0`}>
          <h1 className={`${reverse ? 'text-left xl:text-right' : 'text-left'}`}>{nadpis}</h1>
          <div className={`flex-1 flex flex-col gap-4 ${reverse ? 'text-left xl:text-right' : 'text-left'}`}>
            {obsah}
          </div>
          <div className={`mt-auto flex gap-5 ${reverse ? 'justify-start xl:justify-end' : 'justify-start'}`}>
            {children}
          </div>
        </div>
        <div className="flex-1 relative">
          {imgVector === "m" && mrizka && (
            <div className={`absolute hidden xl:block z-10 ${vectorPosition ? 'top-[-2.5rem] right-[-2.5rem]' : 'bottom-[-2.5rem] right-[-2.5rem]'}`}>
              <Mrizka />
            </div>
          )}
          {imgVector === "t" && (
            <div>
              <div className={`absolute z-20 ${vectorPosition ? 'top-[-0.5rem] left-[-0.5rem] rotate-180' : 'bottom-[-0.5rem] left-[-0.5rem] rotate-90'}`}>
                <Trojuhelnik />
              </div>
              <div className={`absolute z-20 ${vectorPosition ? 'bottom-[-0.5rem] right-[-0.5rem]' : 'top-[-0.5rem] right-[-0.5rem] -rotate-90'}`}>
                <Trojuhelnik />
              </div>
            </div>
          )}
          <Image
            src={typeof img === 'string' ? img : img.src} // Handle both string and StaticImageData
            alt={alt}
            className={`relative ${imgVector === "m" ? 'z-20' : ''} ${imgVector === "t" ? 'z-10' : ''}`}
            layout="responsive" // Optional: Use "responsive" layout for responsive images
            width={500} // Set a width (adjust as necessary)
            height={300} // Set a height (adjust as necessary)
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
