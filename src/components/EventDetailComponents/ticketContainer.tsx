import { generalSans } from '@/fonts/fonts'
import Link from 'next/link'
import React from 'react'

type Props = {
    price: string
}

const TicketContainer = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center py-4 px-12 rounded-lg border-[1px] border-[#4F4F4F] border-b-4 border-r-4 border-b-[#0022BA] border-r-[#0022BA]'>
        <h4 className={`${generalSans.className} text-[#4F4F4F] text-base font-normal`}>Tickets starting at</h4>
        <h2 className={`text-[#1B1B25] ${generalSans.className} text-xl font-normal`}> {props.price} </h2>
        <Link href={"/options"}>
        <div className='flex items-center justify-center rounded bg-[#4F4CEE] px-6 py-2 mt-4' >
            <p className={`text-white ${generalSans.className} text-sm font-normal`}>Buy Tickets</p>
        </div>
        </Link>
    </div>
  )
}

export default TicketContainer