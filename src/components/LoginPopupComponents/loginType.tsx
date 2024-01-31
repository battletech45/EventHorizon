import { cabinetGrostek } from '@/fonts/fonts'
import React from 'react'

type Props = {
    title: string
    isSelected: boolean
    setSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginType = (props: Props) => {
  return (
    <div className={`flex items-center justify-center w-full p-4 border-b-4 ${props.isSelected ? 'border-[#4F4CEE]' : 'border-[#BDBDBD]'}`} onClick={() => props.setSelected(props.title === 'Guest' ? props.isSelected : !props.isSelected)}>
        <h5 className={`${cabinetGrostek.className} text-base font-semibold ${props.isSelected ? 'text-[#4F4CEE]' : 'text-[#BDBDBD]'}`}>
          {props.title}
        </h5>
    </div>
  )
}

export default LoginType