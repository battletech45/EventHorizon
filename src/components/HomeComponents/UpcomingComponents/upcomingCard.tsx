import { generalSans } from "@/fonts/fonts";
import Image, { StaticImageData } from "next/image";
import { MapPin } from "lucide-react";
import React from "react";

type Props = {
  imageURL: StaticImageData;
  dateMonth: string;
  dateDay: string;
  title: string;
  price: string;
  location: string;
};

const UpcomingCard = (props: Props) => {
  return (
    <div className="flex-col items-center h-min w-max border-[0.5px] border-[#828282] my-2">
      <Image src={props.imageURL} alt="eventPhoto" width={185} height={120} />
      <div className="w-full flex items-center justify-center p-4 gap-4">
        <div
          className={`${generalSans.className} text-[#1B1B25] text-xs font-normal flex-col items-center justify-center gap-4 text-center`}
        >
          <p>{props.dateMonth}</p>
          <p>{props.dateDay}</p>
        </div>
        <div className="flex-col items-start justify-center gap-4">
          <p
            className={`${generalSans.className} text-[#1B1B25] text-xs font-normal`}
          >
            {props.title}
          </p>
          <p
            className={`${generalSans.className} text-[#1B1B25] text-[0.625rem] font-normal`}
          >
            Rp. {props.price}
          </p>
          <p
            className={`${generalSans.className} text-[#1B1B25] text-[0.625rem] font-normal flex items-center gap-2`}
          >
            <MapPin color="black" size={15} />
            {props.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
