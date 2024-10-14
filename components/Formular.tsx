"use client"; // Tato direktiva zajistí, že komponenta je Client Component

import React from 'react';
import { usePathname } from 'next/navigation';

const Formular = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/kontakt' ? (
        <div className='border-2 px-[10px] pt-3 bg-white rounded-xl'>
          <iframe
            src="https://cms.tenisdobrouc.cz/kontaktni-formular"
            style={{ width: '100%', height: '900px', border: 'none' }}
            title="Contact Form"
            className='mt-2'
          />
        </div>
      ) : (
        <div className='mx-auto w-full'>
          <iframe
            src="https://cms.tenisdobrouc.cz/kontaktni-formular"
            style={{ width: '100%', height: '900px', border: 'none' }}
            title="Contact Form"
          />
        </div>
      )}
    </>
  );
};

export default Formular;
