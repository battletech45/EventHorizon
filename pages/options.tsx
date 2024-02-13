import Navbar from "@/components/NavbarComponents/navbar";
import React, { useState } from "react";
import "../src/app/globals.css";
import TicketBackHeader from "@/components/TicketOptionsComponents/TicketBackHeader";
import TicketInfo from "@/components/TicketOptionsComponents/ticketInfo";

type Props = {};

const Options = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} isSearch={false} />
      <div className="flex flex-col px-[120px] gap-12">
        <TicketBackHeader />
        <TicketInfo />
      </div>
    </div>
  );
};

export default Options;
