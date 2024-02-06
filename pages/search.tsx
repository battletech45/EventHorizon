import LoginPopup from '@/components/LoginPopupComponents/loginPopup';
import Navbar from '@/components/NavbarComponents/navbar'
import React, { useState } from 'react';
import "../src/app/globals.css";
import Filter from '@/components/SearchComponents/FilterComponents/filter';
import Footer from '@/components/FooterComponents/footer';
import ResultGrid from '@/components/SearchComponents/ResultComponents/resultGrid';

type Props = {}

const Search = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col items-center gap-12'>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isSearch={true}/>
        <LoginPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className='flex items-start justify-between w-full'>
          <Filter />
          <ResultGrid search='Drive In'/>
        </div>
        <Footer />
    </div>
  )
}

export default Search