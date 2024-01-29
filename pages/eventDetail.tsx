import Footer from '@/components/FooterComponents/footer';
import Navbar from '@/components/NavbarComponents/navbar';
import React from 'react';
import "../src/app/globals.css";
import DetailHero from '@/components/EventDetailComponents/detailHero';
import eventPhoto from '../src/assets/eventPhoto.png';

const EventDetail: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>
        <Navbar />
        <DetailHero image={eventPhoto}/>
        <Footer />
    </div>
  )
}

export default EventDetail