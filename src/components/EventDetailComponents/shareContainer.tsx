import { LucideIcon } from 'lucide-react'
import React from 'react'

type Props = {
    image: LucideIcon
}

const ShareContainer = (props: Props) => {

    const Data = props.image;
  return (
    <div className='flex items-center justify-center w-min h-min border-2 border-[#4F4CEE] rounded-lg p-2'>
        <Data color='#4F4CEE'/>
    </div>
  )
}

export default ShareContainer