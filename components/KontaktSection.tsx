import React from 'react';
import { Mail, Call, AccessTime, LocationOn } from '@mui/icons-material';
import Formular from './Formular';
import { usePathname } from 'next/navigation'; 
import { useColor } from './../contexts/ColorContext'; // Import the useColor hook

const KontaktSection: React.FC = () => {
  const pathname = usePathname();
  const colorMap = useColor();

  const currentColor = colorMap[pathname as keyof typeof colorMap]?.color || 'zluta';

  return (
    <div className={`sirka my-24 grid grid-cols-1 xl:gap-[7rem] xl:grid-cols-2 gap-0 text-${currentColor}`}>
      <div className="flex flex-col gap-4 w-full">
        <h1>Kontaktujte nás!</h1>
        <Formular />
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className='flex flex-col gap-5'>
            <div className="flex items-center gap-3">
              <Mail className={`text-3xl text-${currentColor}`} />
              <p className='text-black'>junek-tenis@email.cz</p>
            </div>
            <div className="flex items-center gap-3">
              <Call className={`text-3xl text-${currentColor}`} />
              <p className='text-black'>+420 724 843 341</p>
            </div>
            <div className="flex items-top gap-3">
              <AccessTime className={`text-3xl text-${currentColor}`} />
              <p className='text-black'>Otevírací doba:<br />Po-Ne: 7:30 - 21:30</p>
            </div>
          </div>
          <div className='flex items-top gap-3'>
            <LocationOn className={`text-5xl text-${currentColor}`} />
            <p className='text-black'>U kurtu 23<br />Dolní Dobrouč<br />Ústí nad Orlicí</p>
          </div>
        </div>

        <div className='mt-8'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.9923319232394!2d16.496901076901413!3d49.99275322021292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470df080d3f487db%3A0x6ba02deea74e238c!2sTenisov%C3%A9%20kurty!5e0!3m2!1scs!2scz!4v1720009654439!5m2!1scs!2scz"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default KontaktSection;
