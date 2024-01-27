import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { generalSans } from '@/fonts/fonts';


type Props = {}

const FooterSocials = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row my-4 px-6 w-full justify-between items-center'>
        <div className='flex items-center gap-4'>
            <Twitter color='white'/>
            <Facebook color='white'/>
            <Instagram color='white'/>
        </div>
        <p className={`${generalSans.className} text-xs md:text-base font-normal text-white mt-6`}>© 2020 EventHorizon incorporated</p>
    </div>
  )
}

export default FooterSocials