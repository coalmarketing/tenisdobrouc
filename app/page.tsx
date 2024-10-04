import React from 'react';
import Header from './components/homepage/Header';
import Reservation from './components/homepage/Reservation';
import ObsahSection from './components/homepage/ObsahSection';
import Articles from './components/homepage/Articles';
import Sponzori from './components/Sponzori';


// Komponenta Home
const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <Reservation />
      <Articles count={3} />
      <ObsahSection />
      <Sponzori />

    </div>
  );
};

export default HomePage;
