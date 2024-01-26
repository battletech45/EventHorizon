import React from 'react'
import ComponentHeader from '../componentHeader'
import Image, { StaticImageData } from 'next/image'

type Props = {
    image: StaticImageData
}

const HotOffers = (props: Props) => {
  return (
    <div className='flex-col h-min p-4'>
        <ComponentHeader title='Hot Offers'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150}/>
    </div>
  )
}

export default HotOffers