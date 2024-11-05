"use client";

export interface IFormDashboard {
  isShowDashboard: boolean;
  setIsShowDashboard: Function;
}

import Image from "next/image";
import logo from "@/public/logos/logo_bns.ico";
import { IoIosClose } from "react-icons/io";
import { FaBell, FaGift, FaUser } from "react-icons/fa";
import { MdFolderShared, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
export default function FormDashboardAccount({
  isShowDashboard,
  setIsShowDashboard,
}: IFormDashboard) {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <div
      className={`${
        isShowDashboard ? "" : "translate-x-[-100%]"
      } w-[200px] text-white p-2 h-screen z-10 fixed transition-all duration-300 top-0 left-0 bg-[#343A40]`}
    >
      <div className="flex items-center border-b p-1 pb-3 gap-2 relative">
        <Image src={logo} width={35} height={35} alt="Logo" />
        <p className="text-sm">Chi tiết tài khoản</p>
        <button
          onClick={() => setIsShowDashboard(false)}
          className="absolute right-0 "
        >
          {" "}
          <IoIosClose size={25} />
        </button>
      </div>
      <ul className="text-xs  py-4">
        <li className="flex rounded p-2 hover:bg-[#4C5055] cursor-pointer items-center gap-2">
          <FaUser />
          Thông tin cá nhân
        </li>
        <li className=" rounded  p-2 hover:bg-[#4C5055] cursor-pointer  gap-2">
          <button
            onClick={() => setIsShowDropdown(!isShowDropdown)}
            className="flex items-center w-full  justify-between"
          >
            <span className="flex items-center gap-2">
              <MdFolderShared />
              Lịch sử giao dịch
            </span>
            <MdKeyboardArrowDown className={`${isShowDropdown ? "rotate-180" : ""}`} size={16} />
          </button>
          <ul  className={`text-start w-full transition-all transitionProperty-[max-height] duration-500 overflow-hidden ${isShowDropdown ? "max-h-[300px] mt-2" : "max-h-0"}`}>
            <li className="p-2 hover:bg-[#5F6266] rounded px-4">
              Lịch sử thêm tiên thạch
            </li>
            <li className="p-2 hover:bg-[#5F6266] rounded px-4">
              Lịch sử mở chương
            </li>
            <li className="p-2 hover:bg-[#5F6266] rounded px-4">
              Lịch sử ủng hộ
            </li>
            <li className="p-2 hover:bg-[#5F6266] rounded px-4">
              Lịch sử đề cử
            </li>
          </ul>
        </li>
        <li className="flex rounded p-2 hover:bg-[#4C5055] cursor-pointer items-center gap-2">
          <FaBell />
          Thông báo
        </li>
        <li className="flex rounded p-2 hover:bg-[#4C5055] cursor-pointer items-center gap-2">
          <FaGift />
          Nhập Giftcode
        </li>
      </ul>
    </div>
  );
}
