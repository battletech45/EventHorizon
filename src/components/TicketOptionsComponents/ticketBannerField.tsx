import { generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {
    title: String,
    subTitle: number | String
}

const TicketBannerField = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <p className={`${generalSans.className} text-xl text-[#fff] font-medium`}>
            {props.title}
        </p>
        <p className={`${generalSans.className} text-lg text-[#fff] font-medium`}>
            {props.subTitle}
        </p>
    </div>
  )
}

export default TicketBannerField