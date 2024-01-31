import { generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {}

const LoginButton = (props: Props) => {
  return (
    <div className='flex items-center justify-center px-4 py-2 bg-[#DADAFB] rounded w-2/4 my-2'>
        <p className={`${generalSans.className} text-sm font-normal text-white`}>Continue</p>
    </div>
  )
}

export default LoginButton