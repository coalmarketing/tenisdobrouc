"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import KontaktSection from '../../components/KontaktSection';



function ObsahSection(): JSX.Element {

  return (
    <div className="Home">
      <KontaktSection />
    </div>
  );
}

export default ObsahSection;
