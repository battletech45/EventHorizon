import { cabinetGrostek, generalSans } from "@/fonts/fonts";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Modal from "react-modal";
import LoginType from "./loginType";
import InputField from "./inputField";
import LoginButton from "./loginButton";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
interface FormData {
  username: string
  lastname: string
  phonenumber: number
  email: string
}

const LoginPopup: React.FC<Props> = (props: Props) => {
  
  const [selected, setSelected] = useState<boolean>(false); 
  const [formData, setFormData] = useState<FormData>({
    username: '',
    lastname: '',
    phonenumber: 0,
    email: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data: ' + formData['email']);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      className={"flex items-center justify-center w-screen h-screen p-4 bg-[#00000061]"}
    >
      <form onSubmit={handleSubmit}>
      <div
        className="flex flex-col items-center w-[42rem] max-h-[41rem] bg-white rounded overflow-hidden"
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
        <div className="flex items-center justify-center gap-4 p-6 w-full">
          <InputField title="First Name" placeHolder="Your Name" name="username" value={formData.username} change={handleInputChange}/>
          <InputField title="Last Name" placeHolder="Your Name" name="lastname" value={formData.lastname} change={handleInputChange}/>
        </div>
        <div className="flex flex-col items-center justify-center px-6 gap-4">
          <InputField title="Phone number" placeHolder="Your phone number" name="phonenumber" value={formData.phonenumber} change={handleInputChange}/>
          <InputField title="Email address" placeHolder="name@example.com" name="email" value={formData.email} change={handleInputChange}/>
          <p className={`${generalSans.className} text-sm text-[#4F4CEE] font-normal px-6 py-2`}>E-tickets will be sent to your email address, please make sure your email address is correct.</p>
        </div>
        <LoginButton />
      </div>
      </form>
    </Modal>
  );
};

export default LoginPopup;
