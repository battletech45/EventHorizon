import { cabinetGrostek } from '@/fonts/fonts'
import React from 'react'
import EventInfoCard from './eventInfoCard'
import { Clock4, Users, ShieldAlert } from 'lucide-react';

type Props = {}

const EventInfo = (props: Props) => {
  return (
    <div className='flex flex-col w-full pl-24 gap-4 mt-8'>
        <h3 className={`${cabinetGrostek.className} text-[#1B1B25] text-2xl font-bold`}>
            Event Information
        </h3>
        <div className='flex items-start w-full justify-between'>
            <EventInfoCard image={Clock4} title='Duration' data='20.00 - 21.56 WIB' date='1 hour 56 minutes'/>
            <EventInfoCard image={Users} title='Audience' data='This movie is suitable for audience aged 12  and above' date=''/>
            <EventInfoCard image={ShieldAlert} title='Attention' data='Face mask and social distancing are mandatory outside the car.' date=''/>
        </div>
    </div>
  )
}

export default EventInfo