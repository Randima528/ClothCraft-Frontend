import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      <main className="pt-[124px]">
        {/* Hero */}
        <section
          className="relative h-72 md:h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-playfair-bold uppercase">
              About
            </h1>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair-bold text-[#222] mb-6">Our Story</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                ClothCraft began with the dream of creating everyday fashion that truly connects 
                with Sri Lankans. What started as a small initiative to offer simple, comfortable 
                outfits slowly grew into a brand inspired by the rhythm of island living. We focus on 
                pieces that blend style and practicality, giving customers clothing that suits work, travel, 
                and daily life. Our journey is shaped by a commitment to quality and the belief that fashion 
                should feel effortless for everyone.
              </p>
              <p className="text-gray-500 leading-relaxed">
                As we grew, so did our understanding of what modern Sri Lankan shoppers expect.
                 We began refining our collections, choosing fabrics that match our tropical climate and designs
                  that reflect current trends. ClothCraft continues to evolve with our customers, offering thoughtful
                   selections that balance beauty, comfort, and durability. For us, fashion is not just about clothing - 
                   it is about making people feel confident in what they wear.
              </p>
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-md border-2 border-gray-200 p-2">
                <img
                  src="/images/about-01.jpg"
                  alt="Our Story"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex">
              <div className="w-full max-w-md border-2 border-gray-200 p-2">
                <img
                  src="/images/about-02.jpg"
                  alt="Our Mission"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair-bold text-[#222] mb-6">Our Mission</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our mission at ClothCraft is to make modern, reliable, and stylish clothing accessible 
                to everyone across Sri Lanka. We aim to create collections that feel familiar yet refreshing,
                 ensuring that every piece aligns with the lifestyle and comfort needs of our community. 
                 By maintaining high standards and working with trusted manufacturers, we strive to deliver
                  clothing that customers can depend on for both quality and value.
              </p>

              <blockquote className="border-l-4 border-gray-200 pl-6 italic text-gray-600">
                We also believe in growing with creativity and purpose. Every design, 
                every fabric choice, and every collection we launch is guided by the idea of inspiring
                 self-expression. Our goal is to build a platform where customers can explore fashion 
                 comfortably and confidently. At ClothCraft, we remain committed to continuous improvement, 
                 innovation, and creating a trusted space for everyday fashion.
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
