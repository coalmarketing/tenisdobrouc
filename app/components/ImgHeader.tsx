import React from 'react';
import { StaticImageData } from 'next/image'; // Import StaticImageData

// Define props types
interface ImgHeaderProps {
  imgSrc: StaticImageData; // Change type to StaticImageData
  bgPosition?: string;
  name: string;
}

const ImgHeader: React.FC<ImgHeaderProps> = ({ imgSrc, bgPosition = 'center', name }) => {
  // Define style variables
  const backgroundImage = `url(${imgSrc.src})`; // Use imgSrc.src to access the image URL
  const backgroundPosition = bgPosition;

  return (
    <div
      className="relative h-[55vh] w-full bg-cover bg-center"
      style={{
        backgroundImage,
        backgroundPosition,
      }}
    >
      <div className="h-full w-full flex items-end md:items-start">
        <div className='sirka mb-[5rem] md:mt-[5rem] text-center'>
          <p className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-benzin tracking-wider font-800 leading-[115%] text-white uppercase">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImgHeader;
