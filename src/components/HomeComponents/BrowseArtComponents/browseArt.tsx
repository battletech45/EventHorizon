import React from 'react'
import ComponentHeader from '../componentHeader'
import browseImage from '../../../assets/browseImage.png'
import UpcomingCard from '../UpcomingComponents/upcomingCard'

type Props = {}

const BrowseArt = (props: Props) => {
  return (
    <div className='flex flex-col h-min p-4 max-w-7xl w-full'>
        <ComponentHeader title='Browse Arts'/>
        <div className='flex items-center justify-start gap-8 overflow-x-scroll'>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null} />
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        </div>
        
    </div>
  )
}

export default BrowseArt