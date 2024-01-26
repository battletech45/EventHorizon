import Image from "next/image";
import React from "react";
import heroLights from "../../assets/heroLights.svg";
import heroPhotoFirst from "../../assets/heroPhotoFirst.svg";
import heroPhotoSecond from "../../assets/heroPhotoSecond.svg";
import fillerPhoto from '../../assets/fillerPhoto.png';
import fillerPhoto2 from '../../assets/fillerPhoto2.png';
import fillerPhoto3 from '../../assets/fillerPhoto3.png';
import fillerPhoto4 from '../../assets/fillerPhoto4.png';
import { Calendar, Search } from 'lucide-react';
import { cabinetGrostek, generalSans } from "@/fonts/fonts";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-min p-3 w-full">
      <div className="flex items-center justify-between w-full mb-4">
        <Image src={heroLights} alt="discoLight" width={44} height={51} />
        <Image src={heroLights} alt="discoLight" width={44} height={51} />
      </div>
      <h1
        className={`text-[#4F4CEE] text-center ${cabinetGrostek.className} text-3xl font-extrabold`}
      >
        Exclusive events, priceless moments
      </h1>
      <div className="flex items-end justify-center md:justify-between w-full">
      <Image src={heroPhotoFirst} alt="discoLight" width={110} height={144} className="md: w-[300px]"/>
      <Image src={fillerPhoto2} alt="fillerPhoto" width={171} height={144} className=" hidden 2xl:block"/>
      <Image src={fillerPhoto} alt="fillerPhoto" width={151} height={144} className="hidden xl:block"/>
      <Image src={fillerPhoto3} alt="fillerPhoto" width={176} height={144} className="hidden lg:block"/>
      <Image src={fillerPhoto4} alt="fillerPhoto" width={120} height={144} className="hidden md:block"/>
      <Image src={heroPhotoSecond} alt="discoLight" width={110} height={144} className="hidden sm:block md: w-[300px]"/>
      </div>
      <div className=" border-[1px] md:border-2 border-black rounded-sm md:rounded-md items-center justify-between p-2 flex w-full max-w-5xl">
        <p className={`text-[#1B1B25] ${generalSans.className} text-[0.625rem] md:text-base font-normal`}>Search by events, name, etc.</p>
        <p className={`text-[#1B1B25] ${generalSans.className} text-[0.625rem] md:text-base font-normal flex border-l-[1px] border-gray-500 gap-2 items-center`}>
            <Calendar color="black" className="ml-2"/>
            Select Date
        </p>
        <div className="bg-[#4F4CEE] rounded-md p-2 flex items-center justify-center">
            <Search color="white"/>
            <h3 className={`hidden md:block ${generalSans.className} text-sm font-normal text-white`}>Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
