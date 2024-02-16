import { generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {}

const TicketBanner = (props: Props) => {
  return (
    <div className='flex items-center justify-center bg-[#7f7df3] w-full p-6'>
        <p className={`${generalSans.className} text-xl text-[#fff] font-medium`}>Choose your ticket and quantity</p>
    </div>
  )
}

export default TicketBanner