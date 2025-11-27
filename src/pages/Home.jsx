import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import BannerSection from '../components/BannerSection';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main>
        <HeroSlider />
        <BannerSection />
        <ProductSection />
      </main>
        <Footer />
      
    </div>
  );
};

export default Home

