import { generalSans } from '@/fonts/fonts';
import { ChevronDown } from 'lucide-react';
import appStore from '../../assets/appStore.png';
import googlePlay from '../../assets/googlePlay.png';
import React from 'react'
import Image from 'next/image';

type Props = {
    title: string;
    menuContent: string[];
}

const FooterMenuSection: React.FC<Props> = (props: Props) => {
  return (
    <div className='flex lg:flex-col items-center lg:items-start justify-between w-full px-6'>
        <h2 className={`${generalSans.className} text-white text-base font-normal my-4`}>
            {props.title}
        </h2>
        <ChevronDown color='white' className='lg:hidden'/>
        <div className='hidden lg:flex flex-col'>
          {
            props.menuContent.map((item, index) => (
              <p className={`text-white ${generalSans.className} text-base font-normal my-2`} key={index}>
                {item}
              </p>
            ))
          }
          <Image src={appStore} alt='appStorePhoto' className={`hidden my-2 ${props.title === 'Get the App' ? 'lg:block' : 'lg:hidden'}`}/>
          <Image src={googlePlay} alt='appStorePhoto' className={`hidden my-2 ${props.title === 'Get the App' ? 'lg:block' : 'lg:hidden'}`}/>
        </div>
    </div>
  )
}

export default FooterMenuSection