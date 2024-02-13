import { cabinetGrostek, generalSans } from '@/fonts/fonts';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'
import PacketButton from './packetButton';

type Props = {
    title: string
    data: string
    price: string
}

const PacketSelections = (props: Props) => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center p-4 gap-2'>
        <h2 className={`${cabinetGrostek.className} text-2xl text-[#1b1b25] font-bold text-center`}>Paket ${props.title}</h2>
        <p className={`${generalSans.className} text-sm text-[#1b1b25] font-normal text-center`}>{props.data}</p>
        <p className={`${generalSans.className} text-2xl text-[#1b1b25] font-medium text-center`}>Rp. {props.price}</p>
        <div className='flex items-center justify-center gap-12'>
            <PacketButton image={Minus} function={() => setCount(count - 1)}/>
            <p className='text-black'>{count}</p>
            <PacketButton image={Plus} function={() => setCount(count + 1)}/>
        </div>
    </div>
  )
}

export default PacketSelections