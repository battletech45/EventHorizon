import { cabinetGrostek, generalSans } from "@/fonts/fonts";
import React from "react";

type Props = {
  search: string;
};

const ResultGrid = (props: Props) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className={`${cabinetGrostek.className} text-2xl text-[#1b1b25] font-medium`}>
        Search results for{" "}
        <span className={`${generalSans.className} text-2xl text-[#1b1b25] font-bold`}>
          "${props.search}"
        </span>
      </h1>
      <div></div>
    </div>
  );
};

export default ResultGrid;
