import LoginPopup from '@/components/LoginPopupComponents/loginPopup';
import Navbar from '@/components/NavbarComponents/navbar'
import React, { useState } from 'react';
import "../src/app/globals.css";
import Filter from '@/components/SearchComponents/FilterComponents/filter';

type Props = {}

const Search = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col items-center'>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isSearch={true}/>
        <LoginPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className='flex items-start justify-start'>
          <Filter />
        </div>
    </div>
  )
}

export default Search