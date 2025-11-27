import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        <HeroSlider />
      </main>
    </div>
  );
};

export default Home

