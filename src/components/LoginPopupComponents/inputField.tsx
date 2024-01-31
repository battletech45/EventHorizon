import { generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {
    title: string
    placeHolder: string
}

const InputField = (props: Props) => {
  return (
    <div className='flex flex-col items-start w-full'>
        <h4 className={` text-[#1B1B25] text-sm font-medium ml-1`}>{props.title}</h4>
        <input type="text" placeholder={props.placeHolder} className=' border-2 border-black rounded-md w-full p-2'/>
    </div>
  )
}

export default InputField