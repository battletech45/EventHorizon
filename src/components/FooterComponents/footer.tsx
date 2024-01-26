import { cabinetGrostek, generalSans } from '@/fonts/fonts'
import React from 'react'
import FooterMenu from './footerMenu'
import FooterSocials from './footerSocials'

const Footer = () => {
  return (
    <div className="bg-[#4F4CEE] flex-col items-start py-6">
        <p className={`${cabinetGrostek.className} text-2xl font-bold text-white mb-6 px-6`}>EventHorizon.com</p>
        <FooterMenu />
        <div className='w-full h-[1px] bg-white mt-4'/>
        <FooterSocials />
    </div>
  )
}

export default Footer