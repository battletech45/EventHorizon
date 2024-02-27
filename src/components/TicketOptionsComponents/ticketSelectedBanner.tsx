import React from 'react'
import TicketBannerField from './ticketBannerField'
import { useTicket } from '@/stores/ticketStore'
import SortButton from './sortButton'

type Props = {}

const TicketSelectedBanner = (props: Props) => {

const { TicketCount } = useTicket();

  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center gap-12'>
            <TicketBannerField title={'QTY'} subTitle={TicketCount} />
            <TicketBannerField title={'Type'} subTitle={'Paket VIP'} />
            <TicketBannerField title={'Price Total (IDR)'} subTitle={TicketCount} />
        </div>
        <SortButton />
    </div>
  )
}

export default TicketSelectedBanner