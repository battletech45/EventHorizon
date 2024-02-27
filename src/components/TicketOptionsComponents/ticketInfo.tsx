import Image from "next/image";
import React from "react";
import photo from "../../assets/Event.png";
import EventDetails from "../EventDetailComponents/eventDetails";

type Props = {};

const TicketInfo = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      <Image src={photo} alt="ticketPhoto" width={507} height={240} />
      <EventDetails
        title="Drive In Senja: Back to the Future"
        location="Parkiran Utama Mall @ Alam Sutera"
        date="September 22, 2021"
        details="Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present."
      />
    </div>
  );
};

export default TicketInfo;
