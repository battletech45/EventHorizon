import Navbar from "@/components/NavbarComponents/navbar";
import React, { useState } from "react";
import "../src/app/globals.css";
import TicketBackHeader from "@/components/TicketOptionsComponents/TicketBackHeader";
import TicketInfo from "@/components/TicketOptionsComponents/ticketInfo";
import PacketSelections from "@/components/TicketOptionsComponents/packetSelections";
import PacketInfo from "@/components/TicketOptionsComponents/packetInfo";
import TicketBanner from "@/components/TicketOptionsComponents/ticketBanner";

type Props = {};

const Options = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center gap-12">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isSearch={false} />
      <div className="flex flex-col px-[120px] gap-12">
        <TicketBackHeader />
        <TicketInfo />
        <PacketInfo />
      </div>
      <TicketBanner />
    </div>
  );
};

export default Options;
