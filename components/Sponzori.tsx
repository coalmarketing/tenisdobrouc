import React from 'react';
import Image from 'next/image';

const Sponzori = () => {
  const sponsors = [
    { id: 1, name: 'Coalfamily', logo: '/img/coalfamily_logo_long_color-black.png' },
    { id: 2, name: 'Coalsoft', logo: '/img/coalsoft_logo_long_color-black.png' },
    { id: 3, name: 'Coalmarketing', logo: '/img/coalmarketing_logo_long_color-black.png' },
    { id: 4, name: 'Contipro', logo: '/img/contipro.webp' },
    { id: 5, name: 'Autoneum', logo: '/img/autoneum.webp' },
    { id: 6, name: 'Corona', logo: '/img/corona.webp' },
    { id: 7, name: 'Doktor kladivo', logo: '/img/kladivo.webp' },
    { id: 8, name: 'Semo', logo: '/img/semo.webp' },
    { id: 9, name: 'Mados', logo: '/img/mados.webp' },
    { id: 10, name: 'Dolní Dobrouč', logo: '/img/dolni-dobrouc.webp' }
  ];

  return (
    <div className='sirka'>
      <h1>Za podporu děkujeme</h1>
      <div className="flex flex-wrap justify-center gap-4 py-8">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="w-48 md:w-48 lg:w-48 p-2">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={192} // Šířka, můžeš upravit podle potřeby
              height={96} // Výška, můžeš upravit podle potřeby
              className="w-full h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponzori;
