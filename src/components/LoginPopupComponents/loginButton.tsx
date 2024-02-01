import { generalSans } from '@/fonts/fonts'
import React from 'react'

type Props = {}

const LoginButton = (props: Props) => {
  return (
    <button className='flex items-center justify-center px-4 py-2 bg-[#DADAFB] rounded w-2/4 my-4' type='submit'>
        <p className={`${generalSans.className} text-sm font-normal text-white`}>Continue</p>
    </button>
  )
}

export default LoginButton