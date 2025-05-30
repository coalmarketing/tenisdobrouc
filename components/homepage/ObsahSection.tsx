"use client";

import React from "react";
import imgKlub from "../../public/img/IMG_2898.webp";
import imgRezervace from "../../public/img/IMG_3580.webp";
import imgHistorie from "../../public/img/IMG_2950.webp";
import Button from "../Button";
import KontaktSection from "../KontaktSection";
import Section from "../Section";
import { Call } from "@mui/icons-material";

function ObsahSection(): JSX.Element {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD formát

  return (
    <div className="Home">
      <Section
        nadpis="Turnaje a události"
        obsah={
          <p>
            Tenisový klub Dolní Dobrouč pořádá během roku několik turnajů pro
            všechny věkové kategorie. Nejvýznamnějšími akcemi jsou letní a
            zimní klubové turnaje, které každoročně přilákají hráče z celého
            regionu. Kromě turnajů klub organizuje také společenské akce, jako
            jsou tenisové pikniky, vánoční večírky a tréninkové kempy.
            Aktuální informace o nadcházejících událostech naleznete na naší
            webové stránce nebo sledujte naše sociální sítě.
          </p>
        }
        img={imgKlub}
        alt="Tenisový klub Dolní Dobrouč"
        pozadi={false}
        reverse={false}
        imgVector="m"
        mrizka={true}
        vectorPosition={false}
      >
        <div className="mt-8 xl:mt-0 flex gap-4 flex-col sm:flex-row">
          <Button to="https://www.jalshop.cz/">E-SHOP</Button>
          <Button to="/klub" outline={true}>
            VÍCE O KLUBU
          </Button>
        </div>
      </Section>

      <Section
        nadpis="Jak se stát členem?"
        obsah={
          <p>
            Přemýšlíte o členství v tenisovém klubu Dolní Dobrouč? Stačí
            vyplnit přihlášku dostupnou na našich webových stránkách a
            zaplatit členský poplatek. Nabízíme různé typy členství, včetně
            rodinných, juniorských a seniorských tarifů. Naši členové mají
            přístup k rezervaci kurtů, slevy na turnaje a možnost účastnit se
            klubových akcí. Pro nové členy klub pořádá speciální uvítací dny,
            kdy se můžete seznámit s ostatními členy a trenéry.
          </p>
        }
        img={imgRezervace}
        alt="Rezervace kurtů"
        pozadi={true}
        reverse={true}
        imgVector="t"
        vectorPosition={false}
      >
        <div className="mt-8 xl:mt-0 flex gap-4 flex-col sm:flex-row">
          <Button to={`https://rezervace.tenisdobrouc.cz/#/?date=${today}`}>REZERVOVAT</Button>
          <Button to="tel:+420724843341" outline={true}>
            <Call /> +420 724 843 341
          </Button>
        </div>
      </Section>

      <Section
        nadpis="Historie"
        obsah={
          <p>
            Tenisový klub Dolní Dobrouč byl založen již v roce 1990 a od té
            doby se stal významným místem pro tenisové nadšence v našem
            regionu. Klub začínal s jediným antukovým kurtem, ale díky úsilí
            členů našeho klubu a sponzorů se postupně rozrostl na současných
            pět kurtů. Klub pravidelně pořádá turnaje, tréninky pro děti i
            dospělé a přispívá k rozvoji tenisu v Dolní Dobrouči. V roce 2010
            klub oslavil své 20. výročí velkolepým turnajem a setkáním
            bývalých i současných členů.
          </p>
        }
        img={imgHistorie}
        alt="Historie tenisového klubu"
        pozadi={false}
        reverse={false}
        imgVector="m"
        mrizka={true}
        vectorPosition={false}
      >
        <div className="mt-8 xl:mt-0 flex gap-4 flex-col sm:flex-row">
          <Button to="https://www.jalshop.cz/">E-SHOP</Button>
          <Button to="/klub" outline={true}>
            VÍCE O KLUBU
          </Button>
        </div>
      </Section>

      <KontaktSection />
    </div>
  );
}

export default ObsahSection;
