import React from 'react'
import ComponentHeader from '../componentHeader'
import Image, { StaticImageData } from 'next/image'

type Props = {
    image: StaticImageData
}

const HotOffers = (props: Props) => {
  return (
    <div className='flex flex-col h-min p-4 max-w-7xl w-full'>
        <ComponentHeader title='Hot Offers'/>
        <div className='flex items-center justify-start gap-8 overflow-x-scroll'>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>
        <Image src={props.image} alt='Hot Offers Image' width={253} height={150} className='md:w-[36rem] md:h-[21rem]'/>  
        </div>
        
    </div>
  )
}

export default HotOffers