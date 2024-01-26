import React from 'react';
import card from '../../../assets/cardExample.png'
import UpcomingCard from './upcomingCard';
import ComponentHeader from '../componentHeader';

type Props = {}

const Upcoming = (props: Props) => {
  return (
    <div className='flex flex-col h-min px-4 max-w-7xl w-full'>
        <ComponentHeader title='Upcoming Events'/>
        <div className='flex items-center justify-start gap-8 overflow-x-scroll'>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
        </div>   
    </div>
  )
}

export default Upcoming