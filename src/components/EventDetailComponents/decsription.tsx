import { cabinetGrostek, generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {
    desc: string
}

const Decsription = (props: Props) => {
  return (
    <div className='flex flex-col pl-16 gap-4 mt-8'>
        <h3 className={`text-black ${cabinetGrostek.className} text-xl font-bold`}>
            Description
        </h3>
        <p className={`text-[#1B1B25] ${generalSans.className} text-base font-normal w-[60rem]`}>
            {props.desc}
        </p>
    </div>
  )
}

export default Decsription