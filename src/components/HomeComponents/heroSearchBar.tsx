'use client';
import { generalSans } from "@/fonts/fonts";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";


interface MyInputState {
    searchValue: string;
    dateValue: string;
  }

const HeroSearchBar = () => {
  const [inputValue, setInputValue] = useState<MyInputState["searchValue"]>("");
  const [dateValue, setDateValue] = useState<MyInputState["dateValue"]>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

  return (
    <div className=" border-[1px] md:border-2 border-black rounded-sm md:rounded-md items-center justify-between p-2 flex w-full max-w-5xl hover:border-b-4 hover:border-r-4 hover:border-[#0022BA]">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by events, name, location, and more"
        className="flex text-black w-1/3"
      />
      <input
        type="date"
        value={dateValue}
        onChange={handleDateChange}
        className="flex text-black w-1/3"
      />
      <Link href={"/search"}>
        <div className="bg-[#4F4CEE] rounded-md p-2 flex items-center justify-center cursor-pointer">
          <Search color="white" />
          <h3
            className={`hidden md:block ${generalSans.className} text-sm font-normal text-white`}
          >
            Search
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default HeroSearchBar;
