import React from "react";
import topImage from "../../../assets/TopImage.png";
import ComponentHeader from "../componentHeader";
import TopSellingCard from "./topSellingCard";

type Props = {};

const TopSelling = (props: Props) => {
  return (
    <div className="flex flex-col h-min p-4 max-w-7xl w-full">
      <ComponentHeader title="Top Selling" />
      <div className="flex items-center justify-start gap-8 overflow-x-scroll">
        <TopSellingCard
          image={topImage}
          title="Hillsong: Wonder Tour"
          leftTicket="5"
        />
        <TopSellingCard
          image={topImage}
          title="Hillsong: Wonder Tour"
          leftTicket="5"
        />
        <TopSellingCard
          image={topImage}
          title="Hillsong: Wonder Tour"
          leftTicket="5"
        />
        <TopSellingCard
          image={topImage}
          title="Hillsong: Wonder Tour"
          leftTicket="5"
        />
      </div>
    </div>
  );
};

export default TopSelling;
