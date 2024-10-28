"use client";
import { useEffect, useRef, useState } from "react";
import imgGooglePlay from "../../public/images/ch-play.7a2de44b.jpg";
import imgAppStore from "../../public/images/app-store.b67ff810.jpg";
import Image from "next/image";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import SearchHeader from "../headers/SearchHeader";

export default function PopupFuncHeaderMobile() {
  const [openPopupFunction, setOpenPopupFunction] = useState(false);
  const wrapperRefFunction = useRef<any>(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRefFunction.current &&
        !wrapperRefFunction.current!.contains(event.target) &&
        openPopupFunction
      ) {
        setOpenPopupFunction(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPopupFunction, wrapperRefFunction]);

  return (
    <li ref={wrapperRefFunction} className="relative md:hidden">
      {" "}
      <AiOutlineMenuUnfold
        onClick={() => setOpenPopupFunction(!openPopupFunction)}
        className="cursor-pointer"
        color="gray"
        size={35}
      />
      <ul
        className={`absolute -right-2 z-10 p-2 top-12 flex flex-col gap-3 rounded-md w-[300px] bg-white border border-[#128c7e] text-[#128c7e] ] ${
          !openPopupFunction && "hidden"
        }`}
      >
        <li className="flex items-center justify-between  gap-1">
          <SearchHeader />
          <p>Hướng dẫn</p>
        </li>
        <li className="grid gap-2 border-t-[1px] pt-3 border-[#128c7e] grid-cols-2">
          <button>Thể loại</button>
          <button>Hoàn thành</button>
          <button>Miễn phí</button>
          <button>Diễn đàn</button>
        </li>
        <li className="grid gap-2 border-t-[1px] pt-3 border-[#128c7e] grid-cols-2">
          <button>Thông tin mới</button>
          <button>Gìtcode</button>
          <button>Đăng ký dịch</button>
          <button>Đăng ký sáng tác</button>
        </li>
        <li className="grid gap-2 border-t-[1px] px-4 pt-3 border-[#128c7e] grid-cols-2">
          <Image src={imgGooglePlay} alt="" />
          <Image src={imgAppStore} alt="" />
          <span className="flex justify-center items-center col-span-2">
            <p>Phản hồi</p>
            <p>-</p>
            <p>Góp ý</p>
          </span>
        </li>
      </ul>
    </li>
  );
}
