import { cabinetGrostek, generalSans } from '@/fonts/fonts';
import { ChevronRight } from 'lucide-react';
import React from 'react'

type Props = {
    title: string
}

const ComponentHeader = (props: Props) => {
  return (
    <div className='w-full flex items-center justify-between'>
            <h3 className={`${cabinetGrostek.className} text-lg md:text-3xl font-bold text-[#1B1B25]`}>{props.title}</h3>
            <h5 className={`${generalSans.className} text-[#4F4CEE] text-xs md:text-base font-normal flex items-center gap-1`}>
                View All 
                <ChevronRight color='#4F4CEE' size={15}/>
            </h5>
        </div>
  )
}

export default ComponentHeader