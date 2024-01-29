import { cabinetGrostek, generalSans } from '@/fonts/fonts'
import { LucideIcon } from 'lucide-react'
import React from 'react'

type Props = {
    image: LucideIcon
    title: string
    data: string
    date: string
}

const EventInfoCard = (props: Props) => {

    const Data = props.image;

  return (
    <div className='flex items-start justify-center gap-8'>
        <Data color='#4F4CEE' width={37} height={37}/>
        <div className='flex flex-col'>
            <h3 className={`text-[#1B1B25] ${cabinetGrostek.className} text-xl font-bold`}>
                {props.title}
            </h3>
            <p className={`text-[#5C5C5F] ${generalSans.className} text-base font-normal w-60`}>
                {props.data}
            </p>
            <p className={`text-[#5C5C5F] ${generalSans.className} ${props.title === 'Duration' ? 'block' : 'hidden'} text-base font-normal w-60`}>
                {props.date}
            </p>
        </div>
    </div>
  )
}

export default EventInfoCard