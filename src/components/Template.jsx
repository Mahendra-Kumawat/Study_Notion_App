import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import frameImg from "../assets/frame.png";
import {FcGoogle} from 'react-icons/fc'


const Template = ({ formtype, title, des1, des2, image}) => {

  return (
    <div className="max-w-[1200px] mx-auto flex items-center flex-col-reverse py-12 md:items-start md:flex-row md:justify-between md:space-x-12 md:mt-12">
      <div className=" flex flex-col w-11/12 max-w-[450px]" >
        <div>
          <h1 className="text-3xl font-semibold text-white">{title}</h1>
        </div>
        <div className="my-4 text-[18px] leading-8 text-gray-400">
          <p>{des1}</p>
          <span className="italic text-green-600">{des2}</span>
        </div>
        <div>
          {formtype === "login" ? (
            <LoginForm />
          ) : (
            <SignUpForm />
          )}
        </div>
        <div className="flex items-center">
          <div className="h-[2px] bg-gray-500 w-1/2"></div>
          <p className="px-2 text-sm text-gray-600">OR</p>
          <div className="h-[2px] bg-gray-500 w-1/2"></div>
        </div>
        <div className="flex items-center justify-center gap-3 w-full mt-8 ring-1 px-4 py-2 rounded-lg text-white cursor-pointer">
            <FcGoogle fontSize={25}/>
          <button >Sign In With Google</button>
        </div>
      </div>

      <div className="relative max-w-[450px] w-11/12 mb-8">
        <img src={frameImg} alt="frame Image" />
        <img
          src={image}
          alt="Login Image"
          height={504}
          width={558}
          className="absolute -top-3 -left-3"
        />
      </div>
    </div>
  );
};

export default Template;
