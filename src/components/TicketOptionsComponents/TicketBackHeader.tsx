import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cabinetGrostek } from '@/fonts/fonts';

type Props = {}

const TicketBackHeader = (props: Props) => {
  return (
    <div className='flex items-center justify-center md:justify-start gap-12'>
        <div className='flex items-center justify-center'>
            <ArrowLeft color={'#4f4cee'} size={40} className='border-2 rounded border-[#4f4cee] p-1'/>
        </div>
        <h1 className={`${cabinetGrostek.className} text-3xl font-bold text-black`}>Ticket Options</h1>
    </div>
  )
}

export default TicketBackHeader