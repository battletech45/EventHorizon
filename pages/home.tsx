'use client';
import React, { useState } from 'react';
import Footer from '@/components/FooterComponents/footer';
import HotOffers from '@/components/HomeComponents/HotOffersComponents/hotOffers';
import Upcoming from '@/components/HomeComponents/UpcomingComponents/upcoming';
import Hero from '@/components/HomeComponents/hero';
import HotOffersImage from '@/assets/hotOffersImage.png';
import Navbar from '@/components/NavbarComponents/navbar';
import TopSelling from '@/components/HomeComponents/TopSellingComponents/topSelling';
import BrowseArt from '@/components/HomeComponents/BrowseArtComponents/browseArt';
import BrowseConcert from '@/components/HomeComponents/BrowseConcertComponents/browseConcert';
import LoginPopup from '@/components/LoginPopupComponents/loginPopup';

const HomePage: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div className='flex flex-col items-center'>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isSearch={false}/>
      <Hero />
      <Upcoming />
      <LoginPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
      <HotOffers image={HotOffersImage}/>
      <TopSelling />
      <BrowseArt />
      <BrowseConcert />
      <Footer />
    </div>
  )
}

export default HomePage