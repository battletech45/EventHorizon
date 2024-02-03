import { generalSans } from '@/fonts/fonts'
import { ChevronUp } from 'lucide-react'
import React from 'react'
import FilterMenuItem from './filterMenuItem'
import { title } from 'process'

type Props = {
    title: string
    options: string[]
}

const FilterMenu = (props: Props) => {
  return (
    <div className='flex flex-col w-full gap-2 border-b-2 pb-2'>
        <div className='flex items-center justify-between mb-4'>
            <h3 className={`${generalSans.className} text-base font-medium text-[#1b1b25]`}>{props.title}</h3>
            <ChevronUp color='#1b1b25'/>
        </div>
        <input type='range' defaultValue={0} className={`${props.title === 'Price' ? 'flex' : 'hidden'}`}/>
        <div className={`flex flex-col gap-2 ${props.title === 'Price' ? 'hidden' : 'block'}`}>
        {props.options.map((item, index) => (
            <FilterMenuItem title={item} key={index} />
        ))}
        </div>
                
    </div>
  )
}

export default FilterMenu