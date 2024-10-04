"use client"; // Add this line at the top to make it a Client Component
// Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import Button from './../Button';
import { useColor } from './../../contexts/ColorContext'; // Import the useColor hook

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  
  const colorMap = useColor(); // Use the color context

  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta'; 
  const logo = colorMap[pathname as keyof typeof colorMap]?.logo || colorMap['/domu'].logo;

  const colorClassMap: { [key: string]: string } = {
    zluta: 'bg-zluta',
    zelena: 'bg-zelena',
    modra: 'bg-modra',
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="shadow-md relative">
      <div className="sirka px-4">
        <div className="flex items-center justify-between h-32 gap-0">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src={logo}
                alt="Logo"
                className="h-[7rem] min-h-[7rem] max-h-[9rem] w-[7rem] min-w-[7rem] max-w-[9rem] sm:w-[9rem] sm:min-w-[9rem] sm:h-[9rem] sm:min-h-[9rem]"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
          {/* Menu Icon for small screens */}
          <div className="lg:hidden relative mr-5 z-50">
            {menuOpen ? (
              <MdClose 
                className="text-gray-800 text-4xl cursor-pointer focus:outline-none"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <MdOutlineMenu 
                className="text-gray-800 text-4xl cursor-pointer focus:outline-none"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
          {/* Main Menu - Visible only on larger screens */}
          <div className="hidden lg:flex ml-auto gap-16">
            {Object.keys(colorMap).map((key) => (
              <Link 
                key={key}
                href={key === '/domu' ? '/' : key} // Change '/domu' to '/'
                className={`nav-link text-xl ${pathname === key ? `active ${currentColor}` : hoveredLink === key ? currentColor : ''}`}
                onMouseEnter={() => setHoveredLink(key)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <p className={`font-bold text-${pathname === key ? currentColor : ''}`}>
                  {key === '/domu' ? 'Domů' : key === '/klub' ? 'O klubu' : key === '/rezervace' ? 'Rezervace' : 'Kontakt'}
                </p>
              </Link>
            ))}
            <div className='ml-16'>
              <Button to="https://www.jalshop.cz/" width="200px">E-SHOP</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible only on small screens */}
      <div ref={menuRef} className={`lg:hidden ${menuOpen ? 'menu-open' : 'menu-close'} fixed top-0 left-0 right-0 bg-white shadow-lg z-40`}>
        <div className="flex flex-col items-center justify-center pt-10 pb-14">
          {Object.keys(colorMap).map((key) => (
            <Link 
              key={key}
              href={key === '/domu' ? '/' : key} // Change '/domu' to '/'
              className={`nav-link text-xl ${pathname === key ? `active ${currentColor}` : hoveredLink === key ? currentColor : ''}`}
              onMouseEnter={() => setHoveredLink(key)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={handleLinkClick}
            >
              {key === '/domu' ? 'Domů' : key === '/klub' ? 'O klubu' : key === '/rezervace' ? 'Rezervace' : 'Kontakt'}
            </Link>
          ))}
          <div className='mt-6'>
            <Button to="https://www.jalshop.cz/" width="200px">E-SHOP</Button>
          </div>
        </div>
      </div>

      <div className={`h-4 ${colorClassMap[currentColor] || 'bg-zluta'}`}></div>
    </nav>
  );
};

export default Navbar;
