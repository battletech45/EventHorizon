import React from 'react'
import ComponentHeader from '../componentHeader'
import browseImage from '../../../assets/browseImage.png'
import UpcomingCard from '../UpcomingComponents/upcomingCard'

type Props = {}

const BrowseArt = (props: Props) => {
  return (
    <div className='flex-col w-screen h-min p-4'>
        <ComponentHeader title='Browse Arts'/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online'/>
    </div>
  )
}

export default BrowseArt