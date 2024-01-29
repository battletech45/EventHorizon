import React from 'react'
import FooterMenuSection from './footerMenuSection'

const FooterMenu = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start w-full'>
        <FooterMenuSection title={'About'} menuContent={['About EventHorizon.com', 'How it works', 'Careers', 'Press', 'Blog', 'Forum']}/>
        <FooterMenuSection title={'Partner with Us'} menuContent={['Partnership programs', 'Affiliate program', 'Connectivity partners', 'Promotions and events', 'Integrations', 'Community', 'Loyalty program']}/>
        <FooterMenuSection title={'Support'} menuContent={['Help Center', 'Contact us', 'Privacy policy', 'Terms of service', 'Trust and safety', 'Accessiblity']}/>
        <FooterMenuSection title={'Get the App'} menuContent={['EventHorizon.com for Android', 'EventHorizon.com for IOS', 'Mobile site']}/>
        
    </div>
  )
}

export default FooterMenu;