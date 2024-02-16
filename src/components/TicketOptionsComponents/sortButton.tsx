import React from 'react';
import { ArrowDownUp } from 'lucide-react';
import { generalSans } from '@/fonts/fonts';

type Props = {}

const SortButton = (props: Props) => {
  return (
    <div className='flex items-center justify-center p-2 rounded border-2 border-[#4f4cee] gap-2'>
        <ArrowDownUp color='#4f4cee' size={20}/>
        <p className={`${generalSans.className} text-sm font-medium text-[#4f4cee]`}>Sort By</p>
    </div>
  )
}

export default SortButton