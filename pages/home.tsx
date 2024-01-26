import Footer from '@/components/FooterComponents/footer';
import HotOffers from '@/components/HomeComponents/HotOffersComponents/hotOffers';
import Upcoming from '@/components/HomeComponents/UpcomingComponents/upcoming';
import Hero from '@/components/HomeComponents/hero';
import HotOffersImage from '@/assets/hotOffersImage.png';
import Navbar from '@/components/NavbarComponents/navbar';
import React from 'react';
import TopSelling from '@/components/HomeComponents/TopSellingComponents/topSelling';
import BrowseArt from '@/components/HomeComponents/BrowseArtComponents/browseArt';
import BrowseConcert from '@/components/HomeComponents/BrowseConcertComponents/browseConcert';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Upcoming />
      <HotOffers image={HotOffersImage}/>
      <TopSelling />
      <BrowseArt />
      <BrowseConcert />
      <Footer />
    </div>
  )
}

export default HomePage