import React from 'react';
import { MapPin, Calendar } from "lucide-react";
import { cabinetGrostek, generalSans } from '@/fonts/fonts';

type Props = {
    title: string
    location: string
    date: string
    details: string
}

const EventDetails = (props: Props) => {
  return (
    <div className='flex flex-col items-start max-w-xl gap-4'>
        <h2 className={`${cabinetGrostek.className} text-3xl font-bold text-[#1B1B25]`}>{props.title}</h2>
        <p className={`text-[#1B1B25] flex items-center justify-center gap-2 ${generalSans.className}`}>
            <MapPin color='black'/>
            {props.location}
        </p>
        <p className={`text-[#1B1B25] flex items-center justify-center gap-2 ${generalSans.className}`}>
            <Calendar color='black'/>
            {props.date}
        </p>
        <h5 className={`text-[#1B1B25] ${generalSans.className} text-lg font-normal`}>
            {props.details}
        </h5>
    </div>
  )
}

export default EventDetails