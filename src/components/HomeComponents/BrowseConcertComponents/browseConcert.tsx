import React from 'react'
import ComponentHeader from '../componentHeader'
import concertImage from '../../../assets/concertImage.png'
import UpcomingCard from '../UpcomingComponents/upcomingCard'

type Props = {}

const BrowseConcert = (props: Props) => {
  return (
    <div className='flex-col w-screen h-min p-4'>
        <ComponentHeader title='Browse Concerts'/>
        <UpcomingCard imageURL={concertImage} title='Bruno Major' dateDay='01' dateMonth='OCT' price='350.000 - 500.00' location='Jakarta Convention'/>
    </div>
  )
}

export default BrowseConcert