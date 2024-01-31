import { cabinetGrostek, generalSans } from "@/fonts/fonts";
import React, { useState } from "react";
import Modal from "react-modal";
import LoginType from "./loginType";
import InputField from "./inputField";
import LoginButton from "./loginButton";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPopup = (props: Props) => {
  const [selected, setSelected] = useState<boolean>(false); 

  return (
    <Modal
      isOpen={props.isOpen}
      className={"flex items-center justify-center w-screen h-screen p-4 bg-[#00000061]"}
    >
      <div
        className="flex flex-col items-center w-[42rem] max-h-[41rem] bg-white"
        /* onClick={() => props.setIsOpen(!props.isOpen)} */
      >
        <div className="flex items-center justify-center p-4 w-full bg-[#4F4CEE]">
          <h1 className={`${cabinetGrostek.className} text-white text-4xl font-bold`}>
            Log in to continue
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <LoginType
            title="Log In"
            isSelected={selected}
            setSelected={setSelected}
          />
          <LoginType
            title="Guest"
            isSelected={!selected}
            setSelected={setSelected}
          />
        </div>
        <div className="flex items-center justify-center gap-4 p-6">
          <InputField title="First Name" placeHolder="Your Name"/>
          <InputField title="Last Name" placeHolder="Your Name"/>
        </div>
        <div className="flex flex-col items-center justify-center p-6 gap-4">
          <InputField title="Phone number" placeHolder="Your phone number"/>
          <InputField title="Email address" placeHolder="name@example.com"/>
          <p className={`${generalSans.className} text-sm text-[#4F4CEE] font-normal px-6`}>E-tickets will be sent to your email address, please make sure your email address is correct.</p>
        </div>
        <LoginButton />
      </div>
    </Modal>
  );
};

export default LoginPopup;
