'use client'
import * as React from "react";
import homeBackground from "@/public/images/bg-home.jpg";
import Image from "next/image";
import logoMain from "@/public/images/logo.49128792.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export interface IFormLoginProps {
}

export default function FormLogin (props: IFormLoginProps) {
    const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmAccount, setShowConfirmAccount] = React.useState(false);
  const wrapperRefConfirmAccount = React.useRef<any>(null);
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRefConfirmAccount.current &&
        !wrapperRefConfirmAccount.current.contains(event.target)
      ) {
        setShowConfirmAccount(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRefConfirmAccount, showConfirmAccount]);
  return (
    <div className='relative'>
       <div className="m-auto w-full md:max-w-[570px] flex gap-7 p-5 px-10 shadow-gray-300 relative top-[6rem] lg:top-[9rem] items-center flex-col  bg-[#ffffff] bg-opacity-50 rounded-2xl h-max shadow-md lg:shadow-lg">
        <div className="flex flex-col gap-2 items-center mb-5">
        <Link href={"/"}>  <Image src={logoMain} alt={"imgLogo"} width={160} /></Link>
          <p className="text-2xl text-[#128c7e]  font-medium">Đăng nhập</p>
        </div>
        <div className="w-full relative p-2 px-3 h-max  border-[#128c7e] border-2 rounded-md">
          <input
            className="bg-transparent w-full outline-none "
            type="text"
            placeholder="Vui lòng nhập tên đăng nhập hoặc email"
          />
        </div>
        <div className="w-full relative p-2 px-3 flex justify-between items-center  h-max  border-[#128c7e] border-2  rounded-md">
          <input
            className="bg-transparent w-full  outline-none  "
            type={showPassword ? "text" : "password"}
            placeholder="Vui lòng nhập mật khẩu"
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
        <button className="mx-auto px-6 border-[#128c7e] text-[#128c7e] hover:bg-[#128c7e] hover:text-white border w-max  p-2 rounded-md">
          Đăng nhập
        </button>
        <p>
          <span
            onClick={() => setShowConfirmAccount(true)}
            className="hover:opacity-80 cursor-pointer"
          >
            {" "}
            Quên mật khẩu?
          </span>
          <Link href={"/dang-ky"}>
            {" "}
            <span className="text-[#128c7e] cursor-pointer font-bold ml-2">
              Đăng ký
            </span>
          </Link>
        </p>
      </div>
      <div
        className={`bg-[#5050509a] text-black text-center absolute top-0 w-full h-screen p-2 ${
          !showConfirmAccount && "hidden"
        }`}
      >
        <div
          ref={wrapperRefConfirmAccount}
          className="bg-white w-full md:w-[425px] h-[250px] relative md:top-[15rem] top-[10rem]   px-6 py-3 m-auto rounded-md"
        >
          <span className="flex justify-between items-center">
            <b>Khôi phục mật khẩu</b>
            <IoClose
              onClick={() => setShowConfirmAccount(false)}
              className="cursor-pointer"
              size={20}
              color="gray"
            />
          </span>
          <div className="flex flex-col justify-start items-start gap-3 p-2 mt-8 mb-10">
            <label htmlFor="email">Email</label>
            <input
              placeholder="examole@gmail.com"
              className="w-full outline-none border p-2  focus:ring-[#128c7e] focus:ring-2 rounded-md"
              type="text"
            />
          </div>
          <button className="bg-[#128c7e] text-white right-4 hover:bg-opacity-60  absolute w-max rounded-md text-end p-2 text-xs px-5 ">
            Xác nhận email
          </button>
        </div>
      </div>
    </div>
  );
}
