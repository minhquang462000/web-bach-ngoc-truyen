"use client";
import { GoQuestion } from "react-icons/go";
import { SlCloudUpload } from "react-icons/sl";
import { VscThreeBars } from "react-icons/vsc";
import ListHomeCategory from "../List/ListHomeCategory";
import { useEffect, useRef, useState } from "react";

export default function HeaderSelect() {
  const [openListCategory, setOpenListCategory] = useState<boolean>(false);
  const wrapperRefCategory = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRefCategory.current &&
        !wrapperRefCategory.current.contains(event.target)
      ) {
        setOpenListCategory(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRefCategory, openListCategory]);
  return (
    <section className="relative font-medium bg-[#343a40] w-full text-xs md:text-sm text-white">
      <div
        className={`fixed overflow-hidden w-screen top-0 right-0 z-50 shadow-md transitionProperty-[max-height] duration-500  ${openListCategory ? "h-screen" : "h-0"
          } `}
      >
        <ListHomeCategory
          wrapperRefCategory={wrapperRefCategory}
          setOpenListCategory={setOpenListCategory}
        />
        <div
          className={` transitionProperty-[max-height] min-h-screen duration-300  bg-[#ffffffbf]`}
        ></div>
      </div>
      <div className="lg:max-w-[1140px] w-full   md:flex justify-between m-auto">
        <ul className="flex justify-between  items-center">
          <li
            onClick={() => setOpenListCategory(true)}
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center md:w-max  py-3 md:px-4   gap-1`}
          >
            <VscThreeBars />
            Thể loại
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center md:w-max  py-3 md:px-4  gap-1`}
          >
            Hoàn thành
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center md:w-max  py-3 md:px-4  gap-1`}
          >
            Miễn phí
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] w-1/4 justify-center md:w-max  py-3 md:px-4  gap-1`}
          >
            Diễn đàn
          </li>
        </ul>
        <div className="hidden md:block">
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
