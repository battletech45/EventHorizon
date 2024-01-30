import { generalSans } from "@/fonts/fonts";
import React from "react";
import ShareContainer from "./shareContainer";
import { Link, Twitter, Facebook, Instagram } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import EventDetails from "./eventDetails";
import TicketContainer from "./ticketContainer";
import EventInfo from "./eventInfo";
import Decsription from "./decsription";
import TermsNcondition from "./termsNcondition";

type Props = {
  image: StaticImageData;
};

const DetailHero = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <p
            className={`text-[#1B1B25] ${generalSans.className} text-lg font-bold`}
          >
            Share
          </p>
          <ShareContainer image={Link} />
          <ShareContainer image={Twitter} />
          <ShareContainer image={Facebook} />
          <ShareContainer image={Instagram} />
        </div>
        <div className="flex items-center justify-center p-4 rounded bg-[#DADAFB]">
          <Image
            src={props.image}
            alt="event photo"
            className="w-[60rem] h-[20rem]"
          />
        </div>
      </div>
      <div className="flex items-start justify-between w-full pl-24 gap-4 mt-8">
        <EventDetails
          title="Drive In Senja: Back to The Future"
          location="Parkiran Utama Mall @ Alam Sutera"
          date="September 22, 2021 · 20.00 - 21.56 WIB"
          details="Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present."
        />
        <TicketContainer price="Rp. 212.000" />
      </div>
      <EventInfo />
      <Decsription desc="Drive-In Senja memberikan retro drive-in experience yang dikemas secara modern. Penggunaan transmisi radio kit, mengintegrasikan suara film ke dalam radio mobil, ditambah proyektor resolusi tinggi yang menyediakan pengalaman visual terbaik. Acara ini merupakan sarana yang aman untuk menghabiskan waktu bersama keluarga, pasangan, maupun komunitas" />
      <TermsNcondition />
    </div>
  );
};

export default DetailHero;
