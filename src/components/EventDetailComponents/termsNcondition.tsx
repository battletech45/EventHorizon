import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cabinetGrostek } from '@/fonts/fonts';

type Props = {}

const TermsNcondition = (props: Props) => {
  return (
    <div className='flex w-[61rem] ml-20 my-4 items-center justify-between p-4 rounded border-2 border-[#828282]'>
        <h4 className={`${cabinetGrostek.className} text-black text-lg font-normal`}>Terms & Condition</h4>
        <ChevronDown color='black'/>
    </div>
  )
}

export default TermsNcondition