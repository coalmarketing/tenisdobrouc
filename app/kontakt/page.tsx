import React from 'react';
import ImgHeader from './../components/ImgHeader';
import Sponzori from './../components/Sponzori';
import ObsahSection from './../components/kontakt/ObsahSection';
import main_img from './../../public/img/IMG_2878.webp';


function Kontakt() {
  return (
    <div className="Kontakt">
    <ImgHeader imgSrc={main_img} bgPosition='center' name='kontakt'/>
      <ObsahSection />
      <Sponzori />

    </div>
  );
}

export default Kontakt;
