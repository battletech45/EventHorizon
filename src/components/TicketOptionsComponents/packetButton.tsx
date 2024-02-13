import { LucideIcon } from 'lucide-react'
import React from 'react'

type Props = {
    image: LucideIcon
    function: () => void
}

const PacketButton = (props: Props) => {
    const Icon = props.image;
  return (
    <div className='flex items-center justify-center p-2 border-2 rounded border-[#4f4cee]' onClick={props.function}>
        <Icon color='#4f4cee' size={20}/>
    </div>
  )
}

export default PacketButton