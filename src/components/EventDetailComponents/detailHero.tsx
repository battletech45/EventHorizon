import { generalSans } from '@/fonts/fonts'
import React from 'react'
import ShareContainer from './shareContainer'
import { Link } from 'lucide-react';

type Props = {}

const DetailHero = (props: Props) => {
  return (
    <div className='flex items-center justify-center gap-4'> 
     <div className='flex flex-col items-center justify-center gap-6'>
        <p className={`text-[#1B1B25] ${generalSans.className} text-lg font-normal`}>Share</p>
        <ShareContainer image={Link}/>
     </div>
    </div>
  )
}

export default DetailHero