import { generalSans } from '@/fonts/fonts'
import React from 'react'
import FilterSwitch from './filterSwitch'
import FilterMenu from './filterMenu'

type Props = {}

const Filter = (props: Props) => {
  return (
    <div className='flex flex-col items-start justify-center p-4 border-[3px] w-[204px] gap-6'>
        <h4 className={`${generalSans.className} text-xl text-left text-[#1b1b25] font-medium`}>Filters</h4>
        <FilterSwitch />
        <FilterMenu title='Location' options={['International', 'Jakarta Selatan', 'Jakarta Timur', 'Tangerang Selatan', 'Jabodetabek']}/>
        <FilterMenu title='Categories' options={['Concert', 'Arts', 'Conference', 'Movies']}/>
        <FilterMenu title='Price' options={[]}/>
    </div>
  )
}

export default Filter