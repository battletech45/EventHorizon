import { cabinetGrostek, generalSans } from '@/fonts/fonts'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image: StaticImageData
    title: string
    leftTicket: string
}

const TopSellingCard = (props: Props) => {
  return (
    <div className='relative'>
        <Image src={props.image} alt='topSellingPhoto' width={217} height={237} className='md:w-[350px]'/>
        <div className='items-start absolute left-2 bottom-2'>
            <h4 className={` ${cabinetGrostek.className} text-base md:text-2xl font-bold text-white`}>{props.title}</h4>
            <p className={`${generalSans.className} text-xs md:text-base font-normal text-[#EB5757]`}>{props.leftTicket} tickets left!</p>
        </div>
    </div>
  )
}

export default TopSellingCard