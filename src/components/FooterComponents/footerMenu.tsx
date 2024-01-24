import React from 'react'
import FooterMenuSection from './footerMenuSection'

const FooterMenu = () => {
  return (
    <div className='flex-col items-center w-full'>
        <FooterMenuSection title={'About'} />
        <FooterMenuSection title={'Partner with Us'} />
        <FooterMenuSection title={'Support'} />
        <FooterMenuSection title={'Get the App'} />
        
    </div>
  )
}

export default FooterMenu;