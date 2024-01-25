import Footer from '@/components/FooterComponents/footer';
import Hero from '@/components/HomeComponents/HeroComponents/hero';
import Navbar from '@/components/NavbarComponents/navbar';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default HomePage