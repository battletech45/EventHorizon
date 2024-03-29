import { cabinetGrostek } from "@/fonts/fonts";
import { Menu } from "lucide-react";
import React from "react";
import NavbarButton from "./navbarButton";
import HeroSearchBar from "../HomeComponents/heroSearchBar";

type Props = {
  isOpen: boolean;
  isSearch: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-start justify-between p-6 w-full">
      <p
        className={`${cabinetGrostek.className} text-[#4F4CEE] text-2xl font-bold`}
      >
        EventHorizon.com
      </p>
      <Menu color="black" className="lg:hidden" />
      <div
        className={`items-center justify-center gap-12 ${
          props.isSearch ? "hidden" : "hidden lg:flex"
        }`}
      >
        <h5
          className={`${cabinetGrostek.className} text-lg font-normal text-[#1B1B25]`}
        >
          Concerts
        </h5>
        <h5
          className={`${cabinetGrostek.className} text-lg font-normal text-[#1B1B25]`}
        >
          Art
        </h5>
        <h5
          className={`${cabinetGrostek.className} text-lg font-normal text-[#1B1B25]`}
        >
          Conference
        </h5>
        <h5
          className={`${cabinetGrostek.className} text-lg font-normal text-[#1B1B25]`}
        >
          Movies
        </h5>
        <h5
          className={`${cabinetGrostek.className} text-lg font-normal text-[#1B1B25]`}
        >
          International
        </h5>
      </div>
      <div className={`${props.isSearch ? "hidden lg:flex" : "hidden"}`}>
        <HeroSearchBar />
      </div>

      <div className="hidden lg:flex items-center justify-center gap-4">
        <NavbarButton
          title="Log In"
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
        />
        <NavbarButton
          title="Sign Up"
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;
