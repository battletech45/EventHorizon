import Image from "next/image";
import React from "react";
import heroLights from "../../../assets/heroLights.svg";
import heroPhotoFirst from "../../../assets/heroPhotoFirst.svg";
import heroPhotoSecond from "../../../assets/heroPhotoSecond.svg";
import { Calendar, Search } from 'lucide-react';
import { cabinetGrostek, generalSans } from "@/fonts/fonts";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex-col items-center h-min w-screen p-4">
      <div className="flex items-center justify-between mb-4">
        <Image src={heroLights} alt="discoLight" width={44} height={51} />
        <Image src={heroLights} alt="discoLight" width={44} height={51} />
      </div>
      <h1
        className={`text-[#4F4CEE] text-center ${cabinetGrostek.className} text-3xl font-extrabold`}
      >
        Exclusive events, priceless moments
      </h1>
      <div className="flex items-center justify-center">
      <Image src={heroPhotoFirst} alt="discoLight" width={148} height={112} />
      <Image src={heroPhotoSecond} alt="discoLight" width={147} height={112} />
      </div>
      <div className=" border-[1px] border-black w-full rounded-sm items-center justify-between p-2 flex">
        <p className="text-[#1B1B25] ${generalSans.className} text-[0.625rem] font-normal">Search by events, name, etc.</p>
        <p className={`text-[#1B1B25] ${generalSans.className} text-[0.625rem] font-normal flex border-l-[1px] border-gray-500 gap-2 items-center`}>
            <Calendar color="black" className="ml-2"/>
            Select Date
        </p>
        <div className="bg-[#4F4CEE] rounded-md p-1">
            <Search color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
