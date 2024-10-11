import React from 'react';
import Image from 'next/image';

const Sponzori = () => {
  const sponsors = [
    { id: 1, name: 'Contipro', logo: '/img/contipro.webp' },
    { id: 2, name: 'Autoneum', logo: '/img/autoneum.webp' },
    { id: 3, name: 'Corona', logo: '/img/corona.webp' },
    { id: 4, name: 'Doktor kladivo', logo: '/img/kladivo.webp' },
    { id: 5, name: 'Semo', logo: '/img/semo.webp' },
    { id: 6, name: 'Mados', logo: '/img/mados.webp' },
    { id: 7, name: 'Dolní Dobrouč', logo: '/img/dolni-dobrouc.webp' }
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
