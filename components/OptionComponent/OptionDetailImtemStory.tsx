import bnsImg from "@/public/images/np-icon.06a11732.png";
import Image from "next/image";
import * as React from "react";
import {
  FaBook,
  FaBookReader,
  FaHandHoldingHeart,
  FaListUl,
  FaStar,
} from "react-icons/fa";

export interface IOptionDetailItemStoryProps {}

export default function OptionDetailItemStory(
  props: IOptionDetailItemStoryProps
) {
  return (
    <div className="flex flex-col md:items-start  gap-2">
      <ul className="flex gap-1 items-center justify-center  font-medium text-white">
        <li className="w-[140px] md:w-max  justify-center flex items-center gap-1 bg-[#128c7e] rounded-full cursor-pointer px-3 p-[5px]">
          <FaBookReader />
          Đọc từ đầu
        </li>
        <li className="w-[140px] md:w-max  justify-center flex items-center gap-1 bg-[#128c7e] rounded-full cursor-pointer px-3 p-[5px]">
          <FaBook />
          Lưu truyện
        </li>
        <li className="w-[140px] md:w-max  justify-center flex items-center gap-1 bg-[#128c7e] rounded-full cursor-pointer px-3 p-[5px]">
          <FaListUl />
          D.S chương
        </li>
      </ul>
      <ul className="flex justify-center md:w-[350px] lg:w-[400px] items-center font-medium text-[#128c7e] ">
        <li className="flex flex-col h-max py-3 justify-center w-[140px] gap-2 hover:shadow-md  cursor-pointer duration-200 transition-all hover:-translate-y-1 hover:shadow-[#327068] rounded-md items-center">
          <FaHandHoldingHeart size={18} />
          Ủng hộ
        </li>
        <li className="flex flex-col h-max py-3 justify-center w-[140px] gap-2 hover:shadow-md   cursor-pointer duration-200 transition-all hover:-translate-y-1 hover:shadow-[#327068] rounded-md items-center">
          <FaStar size={18} />
          Đánh giá
        </li>
        <li className="flex flex-col h-max py-3 justify-center w-[140px] gap-2 hover:shadow-md  cursor-pointer duration-200 transition-all hover:-translate-y-1 hover:shadow-[#327068] rounded-md items-center">
          <Image src={bnsImg} alt={"imgLogo"} width={35} />
          Đề cử
        </li>
      </ul>
    </div>
  );
}
