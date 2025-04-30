"use client";

import React from "react";
import Image from "next/image";
import main_img from "../../public/img/IMG_3140.webp";

const Header: React.FC = () => {
  // Funkce pro scrollování na sekci s rezervací
  const scrollToReservation = () => {
    const reservationElement = document.getElementById("reservation");
    if (reservationElement) {
      reservationElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[86.5vh] w-full bg-cover bg-center bg-no-repeat">
      <Image
        src={main_img}
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative h-full w-full z-10 flex items-start md:items-end">
        <div className="sirka mt-[10rem] md:mb-[10rem]">
          <p className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] font-benzin tracking-wider font-800 w-20 leading-[110%] text-white">
            TK DOLNÍ DOBROUČ2
          </p>
          <p className="text-2xl text-white">Objevte s námi radost z tenisu!</p>
          <div
            className="flex md:hidden bg-white w-fit px-8 py-2 rounded-full mt-6 cursor-pointer"
            onClick={scrollToReservation}
          >
            <p className="text-zluta">Rezervovat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
