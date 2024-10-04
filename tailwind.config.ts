import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        benzin: ['Benzin', 'sans-serif'],
        proxima: ['Proxima', 'sans-serif'],
      },
      colors: {
        modra: '#0BA6DF',
        zelena: '#45AF6A', 
        zluta: '#EAA224',

        modraHover: '#0C93C5',
        zelenaHover: '#37A35C', 
        zlutaHover: '#E2950D',
      },
    },

    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
export default config;

