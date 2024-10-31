"use client";
import * as React from "react";
import ListHomeCategory from "../List/ListHomeCategory";
import Link from "next/link";

export interface IButtonShowCategoryProps { }

export default function ButtonShowCategory(props: IButtonShowCategoryProps) {
  const [showListCategory, setShowListCategory] = React.useState(false);
  const wrapperRefCategory = React.useRef<any>(null);
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRefCategory.current &&
        !wrapperRefCategory.current.contains(event.target)
      ) {
        setShowListCategory(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRefCategory, showListCategory]);
  return (
    <div className="">
      <ul className="flex  text-xs rounded-md overflow-hidden h-max  text-white font-medium w-max m-auto md:mx-0   bg-[#128c7e]">
        <li
          onClick={() => setShowListCategory(true)}
          className="p-3  cursor-pointer px-5 hover:bg-[#0e6d62]"
        >
          Thể loại
        </li>
        <Link href={"/truyen-hoan-thanh"}>
          <li className="p-3 cursor-pointer  px-5 hover:bg-[#0e6d62]">
            Hoàn thành
          </li>
        </Link>
        <li className="p-3 cursor-pointer  px-5 hover:bg-[#0e6d62]">
          Miễn phí
        </li>
        <li className="p-3 cursor-pointer  px-5 hover:bg-[#0e6d62]">
          Diễn đàn
        </li>
      </ul>
      <div
        className={`fixed overflow-hidden w-screen top-0 right-0 z-50 shadow-md transitionProperty-[max-height] duration-500  ${showListCategory ? "h-screen" : "h-0"
          } `}
      >
        <ListHomeCategory
          wrapperRefCategory={wrapperRefCategory}
          setOpenListCategory={setShowListCategory}
        />
        <div
          className={`min-h-screen bg-[#ffffffc3] ${showListCategory ? "block" : "hidden"
            }`}
        ></div>
      </div>
    </div>
  );
}
