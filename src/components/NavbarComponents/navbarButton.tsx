import { generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {
    title: string
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarButton = (props: Props) => {
  return (
    <div className={`flex py-2 px-3 items-center justify-center rounded border border-[#4F4CEE] ${props.title === 'Log In' ? 'text-[#4F4CEE] bg-white' : 'text-white bg-[#4F4CEE]'}`}
    onClick={() => props.setIsOpen(!props.isOpen)}>
        <p className={`${generalSans.className} text-sm font-normal`}>
            {props.title}
        </p>
    </div>
  )
}

export default NavbarButton