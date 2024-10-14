import React from 'react';
import Image from 'next/image';

const Sponzori = () => {
  const sponsors = [
    { id: 1, name: 'Coalfamily', logo: '/img/coalfamily_logo_long_color-black.png', url: 'https://coalfamily.cz/' },
    { id: 2, name: 'Coalsoft', logo: '/img/coalsoft_logo_long_color-black.png', url: 'https://coalsoft.cz/cs/' },
    { id: 3, name: 'Coalmarketing', logo: '/img/coalmarketing_logo_long_color-black.png', url: 'https://coalmarketing.cz/' },
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
          <div key={sponsor.id} className="w-48 md:w-48 lg:w-48 p-2 transform transition-transform duration-300 hover:scale-110">
            {sponsor.url ? (
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={192}
                  height={96}
                  className="w-full h-24 object-contain"
                />
              </a>
            ) : (
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={192}
                height={96}
                className="w-full h-24 object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponzori;
