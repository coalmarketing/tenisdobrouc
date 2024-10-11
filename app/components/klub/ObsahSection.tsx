"use client";

import React from 'react';
import imgKlub from './../../../public/img/IMG_2950.webp';
import imgRezervace from './../../../public/img/IMG_3032.webp';
import Button from './../../components/Button';
import Section from '../../components/Section';
import { Call } from '@mui/icons-material';



function ObsahSection(): JSX.Element {

  return (
    <div className="Home">
      <Section 
        nadpis="Naše historie"
        obsah={(
          <>
            <p>
            Tenisový klub Dolní Dobrouč byl založen Ing. Petrem Kolářem před více než dvaceti lety. Pod jeho vedením zde vyrostlo několik výborných hráčů krajské i celostátní úrovně. Naším cílem je podporovat tenisové nadšení u všech věkových kategorií a vytvářet přátelské a inspirativní prostředí pro všechny hráče.
            </p>
          </>
        )}
        img={imgKlub} 
        alt="Popis"
        pozadi={false} 
        reverse={false}
        imgVector="m" 
        mrizka={true}
        vectorPosition={false}
      >
        <div className='mt-8 xl:mt-0 flex gap-4 flex-col sm:flex-row'>
          <Button to="https://www.jalshop.cz/">E-SHOP</Button>
        </div>
      </Section>

      <Section 
        nadpis="Letní tenisové kempy"
        obsah={(
          <>
            <p>
            Každé léto pořádáme tenisové kempy pro děti a mládež. Kempy jsou ideální příležitostí pro zlepšení tenisových dovedností a získání nových přátel. Termíny a informace o přihlášení naleznete níže. Přihlášky posílejte na e-mail: junek-tenis@email.cz.  </p>
          </>
        )} 
        img={imgRezervace} 
        alt="Popis"
        pozadi={true} 
        reverse={true}
        imgVector="t" 
        vectorPosition={false}
      >
        <div className='mt-8 xl:mt-0 flex gap-4 flex-col sm:flex-row'>
          <Button to="tel:+420724843341"> <Call /> +420 724 843 341</Button>
        </div>
      </Section>

    
    </div>
  );
}

export default ObsahSection;
