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
        <Image src={props.image} alt='topSellingPhoto'/>
        <div className='flex-col items-start gap-4 absolute left-2 bottom-2'>
            <h4 className={` ${cabinetGrostek.className} text-base font-bold text-white`}>{props.title}</h4>
            <p className={`${generalSans.className} text-xs font-normal text-[#EB5757]`}>{props.leftTicket} tickets left!</p>
        </div>
    </div>
  )
}

export default TopSellingCard