import Footer from '@/components/FooterComponents/footer';
import Navbar from '@/components/NavbarComponents/navbar';
import React, { useState } from 'react';
import "../src/app/globals.css";
import DetailHero from '@/components/EventDetailComponents/detailHero';
import eventPhoto from '../src/assets/eventPhoto.png';

const EventDetail: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className='flex flex-col items-center'>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <DetailHero image={eventPhoto}/>
        <Footer />
    </div>
  )
}

export default EventDetail