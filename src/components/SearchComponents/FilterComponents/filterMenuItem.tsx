import { generalSans } from '@/fonts/fonts';
import React,{ useState } from 'react'

type Props = {
    title: string
}

const FilterMenuItem = (props: Props) => {
    const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className='flex gap-4 items-center'>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p className={`${generalSans.className} text-base font-medium ${checked ? 'text-[#4f4cee]' : 'text-[#1b1b25]'}`}>{props.title}</p>
    </div>
  )
}

export default FilterMenuItem