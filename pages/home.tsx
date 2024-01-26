import Footer from '@/components/FooterComponents/footer';
import HotOffers from '@/components/HomeComponents/HotOffersComponents/hotOffers';
import Upcoming from '@/components/HomeComponents/UpcomingComponents/upcoming';
import Hero from '@/components/HomeComponents/hero';
import HotOffersImage from '@/assets/hotOffersImage.png';
import Navbar from '@/components/NavbarComponents/navbar';
import React from 'react';
import TopSelling from '@/components/HomeComponents/TopSellingComponents/topSelling';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Upcoming />
      <HotOffers image={HotOffersImage}/>
      <TopSelling />
      <Footer />
    </div>
  )
}

export default HomePage