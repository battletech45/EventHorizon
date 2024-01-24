import { generalSans } from '@/fonts/fonts';
import { ChevronDown } from 'lucide-react';
import React from 'react'

type Props = {
    title: String;
}

const FooterMenuSection: React.FC<Props> = (props: Props) => {
  return (
    <div className='flex items-center justify-between w-full px-6'>
        <h2 className={`${generalSans.className} text-white text-base font-normal my-4`}>
            {props.title}
        </h2>
        <ChevronDown color='white'/>
    </div>
  )
}

export default FooterMenuSection