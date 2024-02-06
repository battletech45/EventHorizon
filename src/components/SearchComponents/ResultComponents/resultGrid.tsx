import UpcomingCard from "@/components/HomeComponents/UpcomingComponents/upcomingCard";
import { cabinetGrostek, generalSans } from "@/fonts/fonts";
import browseImage from '../../../assets/browseImage.png'
import React from "react";

type Props = {
  search: string;
};

const ResultGrid = (props: Props) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className={`${cabinetGrostek.className} text-2xl text-[#1b1b25] font-medium`}>
        Search results for {''}
        <span className={`${generalSans.className} text-2xl text-[#1b1b25] font-bold`}>
          "{props.search}"
        </span>
      </h1>
      <div className="grid gap-x-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
        <UpcomingCard imageURL={browseImage} dateDay='20' dateMonth='OCT' title='Frank Aurbach' price='100.000 - 200.000' location='Online' search={null} category={null}/>
      </div>
    </div>
  );
};

export default ResultGrid;
