import { cabinetGrostek, generalSans } from '@/fonts/fonts';
import { Delete, Minus, Plus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import PacketButton from './packetButton';
import { useTicket } from '@/stores/ticketStore';

type Props = {
    title: string;
    data: string;
    price: string;
    isSelected: boolean;
    onSelect: () => void;
};

const PacketSelections = (props: Props) => {
    const [count, setCount] = useState(0);
    const { AddTicket, DeleteTicket, ToggleTicketSelected,  TicketCount } = useTicket();

    const updateCount = (data: number) => {
        if (props.isSelected) {
            if (count >= 0 && data >= 0) {
                ToggleTicketSelected(true);
                setCount(data);
                if(data < count) {
                    DeleteTicket();
                    console.log('Triggered Delete');
                }
                else {
                    AddTicket();
                    console.log('Triggered Add');
                }
            }
        }
    };

    useEffect(() => {
        if(TicketCount == 0) {
            ToggleTicketSelected(false);
        }
    }, [TicketCount]);

    return (
        <div className={`flex flex-col items-center justify-center p-4 gap-2 border-[3px] border-[${props.isSelected ? '#4F4CEE' : '#828282'}] rounded max-w-72`} onClick={props.onSelect}>
            <h2 className={`${cabinetGrostek.className} text-2xl text-[#1b1b25] font-bold text-center`}>{props.title}</h2>
            <p className={`${generalSans.className} text-sm text-[#1b1b25] font-normal text-center`}>{props.data}</p>
            <p className={`${generalSans.className} text-2xl text-[#1b1b25] font-medium text-center`}>Rp. {props.price}</p>
            <div className='flex items-center justify-between w-full'>
                <PacketButton image={Minus} function={() => updateCount(count - 1)}/>
                <p className='text-black'>{count}</p>
                <PacketButton image={Plus} function={() => updateCount(count + 1)}/>
            </div>
        </div>
    );
};

export default PacketSelections;
