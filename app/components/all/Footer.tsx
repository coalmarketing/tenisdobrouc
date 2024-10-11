"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/logo/TK-DD_logo_mono-light_long.png';
import { Mail, Call, LocationOn } from '@mui/icons-material';
import { useColor } from '../../contexts/ColorContext';
import { usePathname } from 'next/navigation'; // změna importu
import clsx from 'clsx';

const Footer = () => {
  const pathname = usePathname(); // použití usePathname
  const colorMap = useColor(); // assuming `useColor` returns a color map object
  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta';

  // Získání aktuálního data
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD formát

  return (
    <div className="mt-auto">
      <footer className={clsx(`bg-${currentColor}`, 'text-white py-4')}>
        <div className="sirka mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
            <Image src={logo} alt="logo" className="h-24 w-auto lg:h-48 mb-4 lg:mb-0" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:mt-0 text-center lg:text-left">
              <div>
                <Link href="/domu">
                  <p>Domů</p>
                </Link>
                <Link href="/klub">
                  <p>O klubu</p>
                </Link>
                {/* Dynamicky vytvořený odkaz s aktuálním datem */}
                <Link href={`https://rezervace.tenisdobrouc.cz/#/?date=${today}`}>
                  <p>Rezervace</p>
                </Link>
                <Link href="/kontakt">
                  <p>Kontakt</p>
                </Link>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-start items-center gap-3">
                  <Mail className="text-white text-3xl" />
                  <p>junek-tenis@email.cz</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <Call className="text-white text-3xl" />
                  <p>+420 724 843 341</p>
                </div>
              </div>
              <div className="flex justify-start text-left items-top gap-3">
                <LocationOn className="text-white text-5xl" />
                <p>
                  U kurtu 23<br />Dolní Dobrouč<br />Ústí nad Orlicí
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center">Designed with &#10084; by coalmarketing.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
