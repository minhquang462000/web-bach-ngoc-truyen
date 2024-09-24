'use client';
import * as React from "react";
import homeBackground from "@/public/images/bg-home.jpg";
import Image from "next/image";
import logoMain from "@/public/images/logo.49128792.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

export interface IFormRegisterProps {
}

export default function FormRegister (props: IFormRegisterProps) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  return (
    <div className="m-auto w-full md:max-w-[570px] flex gap-5 p-5 px-10  shadow-gray-300 relative top-[4rem] lg:top-[9rem] items-center flex-col bg-opacity-60 bg-[#ffffff] rounded-2xl shadow-md lg:shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <Image src={logoMain} alt={"imgLogo"} width={160} />
          <p className="text-2xl text-[#128c7e]  font-medium">Đăng ký</p>
        </div>
        <div className="w-full relative p-2 px-3 h-max border-2  border-[#128c7e]  rounded-md">
          <input
            className="bg-transparent w-full outline-none "
            type="text"
            placeholder="Vui lòng nhập họ và tên"
          />
        </div>
        <div className="w-full relative p-2 px-3 h-max border-2  border-[#128c7e]  rounded-md">
          <input
            className="bg-transparent w-full outline-none "
            type="text"
            placeholder="Vui lòng nhập tên đăng nhập"
          />
        </div>
        <div className="w-full relative p-2 px-3 h-max border-2  border-[#128c7e]  rounded-md">
          <input
            className="bg-transparent w-full outline-none "
            type="text"
            placeholder="Vui lòng nhập  email"
          />
        </div>
        <div className="w-full relative p-2 px-3 flex justify-between items-center  h-max border-2  border-[#128c7e] border-1  rounded-md">
          <input
            className="bg-transparent w-full  outline-none  "
            type={showPassword ? "text" : "password"}
            placeholder="Vui lòng nhập  mật khẩu"
          />
          <button
            className="text-[#128c7e]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEye size={25} />
            ) : (
              <FaRegEyeSlash size={25} />
            )}
          </button>
        </div>
        <div className="w-full relative p-2 px-3 flex justify-between items-center  h-max border-2  border-[#128c7e] border-1  rounded-md">
          <input
            className="bg-transparent w-full  outline-none  "
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Vui lòng nhập lại mật khẩu"
          />
          <button
            className="text-[#128c7e]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <FaRegEye size={25} />
            ) : (
              <FaRegEyeSlash size={25} />
            )}
          </button>
        </div>
        <button className="mx-auto px-8 border-[#128c7e] text-[#128c7e] hover:bg-[#128c7e] hover:text-white border w-max  p-2  rounded-md">
          Đăng ký
        </button>
        <Link href={"/dang-nhap"}>
          <button className="font-bold text-[#128c7e]">Đăng nhập</button>
        </Link>
      </div>
  );
}
