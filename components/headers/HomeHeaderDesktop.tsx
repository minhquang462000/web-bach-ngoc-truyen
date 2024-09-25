"use client";
import Link from "next/link";
import mainLogo from "../../public/images/logo.49128792.png";
import Image from "next/image";
import SearchHeader from "./SearchHeader";
import bookMark from "../../public/images/bookmark.6b699b4c.png";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import MyBookmark from "../List/MyBookmark";
import { useEffect, useRef, useState } from "react";
export interface IHomeHeaderDesktopProps {}

export default function HomeHeaderDesktop(props: IHomeHeaderDesktopProps) {
  const [openPopupMyStory, setOpenPopupMyStory] = useState(false);
  const wrapperRefMyStory = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRefMyStory.current &&
        !wrapperRefMyStory.current.contains(event.target)
      ) {
        setOpenPopupMyStory(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRefMyStory, openPopupMyStory]);
  return (
    <section className="lg:max-w-[1140px] md:max-w-[705px] h-full w-screen overflow-hidden hidden text-xs  md:block m-auto">
      <div className="flex items-center  justify-between">
        <Link className="cursor-pointer" href="/">
          {" "}
          <Image src={mainLogo} alt="logo" width={160} />
        </Link>
        <SearchHeader />
        <ul className="flex gap-1 font-medium items-center ">
          <div
            className={`w-screen left-0 min-h-screen  absolute z-10 bg-[#e4e4e4c5]  ${
              !openPopupMyStory ? "hidden  " : "block"
            } top-0`}
          ></div>
          <li ref={wrapperRefMyStory} className="">
            {" "}
            <Image
              onClick={() => setOpenPopupMyStory(true)}
              className="w-[35px] cursor-pointer h-[30px]"
              src={bookMark}
              alt=""
            />
            <MyBookmark
              openPopupMyStory={openPopupMyStory}
              setOpenPopupMyStory={setOpenPopupMyStory}
            />
          </li>
          <li>
            {" "}
            <Link
              href={"/dang-nhap"}
              className="flex text-[#128c7e]  cursor-pointer p-[10px] px-4    justify-center items-center gap-2"
            >
              <CiLogin /> Đăng nhập
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/dang-ky"}
              className="flex bg-[#128c7e]  cursor-pointer text-white rounded-full p-[10px] px-4 justify-center items-center gap-2"
            >
              <FiUserPlus /> Đăng ký
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
