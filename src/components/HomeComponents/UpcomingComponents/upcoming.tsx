import React from 'react';
import card from '../../../assets/cardExample.png'
import UpcomingCard from './upcomingCard';
import ComponentHeader from '../componentHeader';

type Props = {}

const Upcoming = (props: Props) => {
  return (
    <div className='flex-col h-min px-4'>
        <ComponentHeader title='Upcoming Events'/>
        <UpcomingCard imageURL={card} title='Panic! at the Disco' dateDay='01' dateMonth='NOV' price='450.000 - 975.000' location='The Icon, BSD'/>
    </div>
  )
}

export default Upcoming