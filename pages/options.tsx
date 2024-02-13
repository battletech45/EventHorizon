import Navbar from "@/components/NavbarComponents/navbar";
import React, { useState } from "react";
import "../src/app/globals.css";
import TicketBackHeader from "@/components/TicketOptionsComponents/TicketBackHeader";
import TicketInfo from "@/components/TicketOptionsComponents/ticketInfo";
import PacketSelections from "@/components/TicketOptionsComponents/packetSelections";

type Props = {};

const Options = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isSearch={false} />
      <div className="flex flex-col px-[120px] gap-12">
        <TicketBackHeader />
        <TicketInfo />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot 
dan pelayanan VIP Sesi foto"
          price="371.000"
        />
      </div>
    </div>
  );
};

export default Options;
