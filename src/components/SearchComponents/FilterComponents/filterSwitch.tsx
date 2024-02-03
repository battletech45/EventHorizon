import { generalSans } from '@/fonts/fonts';
import React, { useState } from 'react';
import Switch from 'react-switch';

type Props = {}

const FilterSwitch = (props: Props) => {
    const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className='flex items-center justify-start border-y-2 border-[#ddddde] w-full p-2 gap-4'>
        <Switch onChange={() => setChecked(!checked)} checked={checked} checkedIcon={false} uncheckedIcon={false}/>
        <p className={`${generalSans.className} text-base font-medium text-[#5c5c5f]`}>{checked ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default FilterSwitch