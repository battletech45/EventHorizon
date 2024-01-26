import React from 'react'
import topImage from '../../../assets/TopImage.png'
import ComponentHeader from '../componentHeader'
import TopSellingCard from './topSellingCard'

type Props = {}

const TopSelling = (props: Props) => {
  return (
    <div className='flex-col w-screen h-min p-4'>
        <ComponentHeader title='Top Selling'/>
        <TopSellingCard image={topImage} title='Hillsong: Wonder Tour' leftTicket='5'/>
    </div>
  )
}

export default TopSelling