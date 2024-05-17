"use client";
import { GoQuestion } from "react-icons/go";
import { SlCloudUpload } from "react-icons/sl";
import { VscThreeBars } from "react-icons/vsc";
import ListHomeCategory from "../List/ListHomeCategory";
import { useState } from "react";
export interface IHeaderSelectProps {}

export default function HeaderSelect(props: IHeaderSelectProps) {
  const [openListCategory, setOpenListCategory] = useState<boolean>(false);
  return (
    <section className="relative font-medium bg-[#343a40] w-screen text-xs lg:text-sm text-white">
      <div
        className={`fixed top-0 right-0 z-50 shadow-md   ${
          !openListCategory && "hidden"
        }`}
      >
        <ListHomeCategory setOpenListCategory={setOpenListCategory} />
        <div className="min-h-screen bg-[#2222225e]"></div>
      </div>
      <div className="lg:max-w-[1140px] md:max-w-[700px]  lg:flex justify-between m-auto">
        <ul className="flex justify-between   items-center">
          <li
            onClick={() => setOpenListCategory(true)}
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center lg:w-max  py-3 lg:px-4 gap-1`}
          >
            <VscThreeBars />
            Thể loại
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center lg:w-max  py-3 lg:px-4 gap-1`}
          >
            Hoàn thành
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center lg:w-max  py-3 lg:px-4 gap-1`}
          >
            Miễn phí
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center lg:w-max  py-3 lg:px-4 gap-1`}
          >
            Diễn đàn
          </li>
        </ul>
        <div className="hidden lg:block">
          <ul className="flex items-center ">
            <li
              className={`flex items-center cursor-pointer hover:bg-[#141414]  p-3 px-4 gap-1`}
            >
              <GoQuestion size={18} />
              Hướng dẫn
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
            >
              <SlCloudUpload size={18} />
              Đăng truyện
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
