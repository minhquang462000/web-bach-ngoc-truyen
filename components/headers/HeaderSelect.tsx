"use client";
import { GoQuestion } from "react-icons/go";
import { SlCloudUpload } from "react-icons/sl";
import { VscThreeBars } from "react-icons/vsc";
import ListHomeCategory from "../List/ListHomeCategory";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
        className={`fixed overflow-hidden w-screen top-0 right-0 z-50 shadow-md transitionProperty-[max-height] duration-500  ${
          openListCategory ? "h-screen" : "h-0"
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
        <ul className="grid grid-cols-4 text-center">
          <li
            onClick={() => setOpenListCategory(true)}
            className={`flex items-center cursor-pointer hover:bg-[#141414]  justify-center   py-3 md:px-4   gap-1`}
          >
            <VscThreeBars />
            Thể loại
          </li>
          <Link href={"/moi-hoan-thanh?page=1"}>
            <li
              className={` cursor-pointer hover:bg-[#141414]     py-3 md:px-4  gap-1`}
            >
              Hoàn thành
            </li>
          </Link>
          <Link href={"/tag/mien-phi-671f3be769334a591c7319aa.html"}>
            <li
              className={` cursor-pointer hover:bg-[#141414]    py-3 md:px-4  gap-1`}
            >
              Miễn phí
            </li>
          </Link>
          <li
            className={` cursor-pointer hover:bg-[#141414]   py-3 md:px-4  gap-1`}
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
