import { cabinetGrostek } from '@/fonts/fonts';
import { Menu } from 'lucide-react';
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center justify-between p-6'>
        <p className={`${cabinetGrostek.className} text-[#4F4CEE] text-2xl font-bold`}>EventHorizon.com</p>
        <Menu color='black'/>
    </div>
  )
}

export default Navbar