"use client"; // Add this line to mark the file as a client component

import React, { createContext, useContext, ReactNode } from "react";
import { StaticImageData } from "next/image";
import logoZluta from "../public/img/logo/TK-DD_logotype_zluta.svg";
import logoZelena from "../public/img/logo/TK-DD_logotype_zelena.svg";
import logoModra from "../public/img/logo/TK-DD_logotype_modra.svg";

type ColorMapKey = "/domu" | "/klub" | "/rezervace" | "/kontakt";
type ColorMap = {
  [key in ColorMapKey]: { color: string; logo: StaticImageData; hex: string }; // Přidán hex kód
};

// Define a new type for colors

// Create a context for the color map
const ColorContext = createContext<ColorMap | undefined>(undefined);

// Create a provider component
export const ColorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const colorMap: ColorMap = {
    "/domu": { color: "zluta", logo: logoZluta, hex: "#EAA224" }, // Žlutá hex
    "/klub": { color: "modra", logo: logoModra, hex: "#0BA6DF" }, // Modrá hex
    "/rezervace": { color: "zelena", logo: logoZelena, hex: "#45AF6A" }, // Zelená hex
    "/kontakt": { color: "zelena", logo: logoZelena, hex: "#45AF6A" }, // Žlutá hex
  };

  return (
    <ColorContext.Provider value={colorMap}>{children}</ColorContext.Provider>
  );
};

// Custom hook to use the color context
export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
