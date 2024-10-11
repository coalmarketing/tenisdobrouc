import React from "react";
import ImgHeader from "../../components/ImgHeader";
import Sponzori from "../../components/Sponzori";
import ObsahSection from "../../components/klub/ObsahSection";
import main_img from "./../../public/img/IMG_3306.webp";

function Home() {
  return (
    <div className="Home">
      <ImgHeader imgSrc={main_img} bgPosition="center" name="o klubu" />
      <ObsahSection />
      <Sponzori />
    </div>
  );
}

export default Home;
