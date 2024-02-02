"use client";
import Image from "next/image";
import React from "react";
import heroLights from "../../assets/heroLights.svg";
import heroPhotoFirst from "../../assets/heroPhotoFirst.svg";
import heroPhotoSecond from "../../assets/heroPhotoSecond.svg";
import fillerPhoto from "../../assets/fillerPhoto.png";
import fillerPhoto2 from "../../assets/fillerPhoto2.png";
import fillerPhoto3 from "../../assets/fillerPhoto3.png";
import fillerPhoto4 from "../../assets/fillerPhoto4.png";
import { cabinetGrostek } from "@/fonts/fonts";
import HeroSearchBar from "./heroSearchBar";

const Hero = () => {
  
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
        <Image
          src={heroPhotoFirst}
          alt="discoLight"
          width={110}
          height={144}
          className="md: w-[300px]"
        />
        <Image
          src={fillerPhoto2}
          alt="fillerPhoto"
          width={171}
          height={144}
          className=" hidden 2xl:block"
        />
        <Image
          src={fillerPhoto}
          alt="fillerPhoto"
          width={151}
          height={144}
          className="hidden xl:block"
        />
        <Image
          src={fillerPhoto3}
          alt="fillerPhoto"
          width={176}
          height={144}
          className="hidden lg:block"
        />
        <Image
          src={fillerPhoto4}
          alt="fillerPhoto"
          width={120}
          height={144}
          className="hidden md:block"
        />
        <Image
          src={heroPhotoSecond}
          alt="discoLight"
          width={110}
          height={144}
          className="hidden sm:block md: w-[300px]"
        />
      </div>
      <HeroSearchBar />
    </div>
  );
};

export default Hero;
