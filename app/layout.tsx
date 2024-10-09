import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/all/Navbar';
import Footer from './components/all/Footer';
import Kurt from './components/all/Kurt';
import { ColorProvider } from './contexts/ColorContext';

export const metadata: Metadata = {
  title: "TK Dolní Dobrouč",
  description: "Tenisový klub Dolní Dobrouč",
  icons: {
    icon: "/favicon.ico",
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Define the type for children prop
}) {
  return (
    <html lang="cs">
      <body className="antialiased">
      <ColorProvider>
      <div className='relative overflow-hidden'>
      <Navbar />
        {children}
        <Kurt />
        </div>
      <Footer />
      </ColorProvider>
      </body>
    </html>
  );
}
