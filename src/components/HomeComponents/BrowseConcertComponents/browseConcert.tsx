import React from 'react'
import ComponentHeader from '../componentHeader'
import concertImage from '../../../assets/concertImage.png'
import UpcomingCard from '../UpcomingComponents/upcomingCard'

type Props = {}

const BrowseConcert = (props: Props) => {
  return (
    <div className='flex flex-col h-min p-4 max-w-7xl w-full'>
        <ComponentHeader title='Browse Concerts'/>
        <UpcomingCard imageURL={concertImage} title='Bruno Major' dateDay='01' dateMonth='OCT' price='350.000 - 500.00' location='Jakarta Convention'/>
    </div>
  )
}

export default BrowseConcert