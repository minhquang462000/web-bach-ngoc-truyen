"use client";
import Image from "next/image";
import mainLogo from "../../public/images/logo.49128792.png";
import bookMark from "../../public/images/bookmark.6b699b4c.png";
import userIcon from "../../public/images/default-avatar.jpg";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import imgGooglePlay from "../../public/images/ch-play.7a2de44b.jpg";
import imgAppStore from "../../public/images/app-store.b67ff810.jpg";
import MyBookmark from "../List/MyBookmark";
import SearchHeader from "./SearchHeader";
export interface IHomeHeaderProps {}

export default function HomeHeaderMobile(props: IHomeHeaderProps) {
  const [openPopupAuth, setOpenPopupAuth] = useState(false);
  const [openPopupMyStory, setOpenPopupMyStory] = useState(false);
  const [openPopupFunction, setOpenPopupFunction] = useState(false);
  const wrapperRefAuth = useRef<any>(null);
  const wrapperRefFunction = useRef<any>(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        wrapperRefAuth.current &&
        !wrapperRefAuth.current!.contains(event.target) &&
        openPopupAuth
      ) {
        setOpenPopupAuth(false);
      }
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
  }, [openPopupAuth, wrapperRefAuth, openPopupFunction, wrapperRefFunction]);

  return (
    <section className="flex lg:hidden relative justify-between text-xs items-center">
      <Link className="cursor-pointer" href="/">
        {" "}
        <Image src={mainLogo} alt="logo" width={160} />
      </Link>
      <ul className="flex gap-5  items-center ">
        <li className="cursor-pointer">
          {" "}
          <img
            onClick={() => setOpenPopupMyStory(true)}
            className="w-[35px] h-[30px]"
            src={bookMark.src}
            alt=""
          />
        </li>
        <li ref={wrapperRefAuth} className="relative">
          {" "}
          <img
            onClick={() => setOpenPopupAuth(!openPopupAuth)}
            className="w-[35px] cursor-pointer rounded-full h-[35px]"
            src={userIcon.src}
            alt=""
          />
          <div
            className={`absolute top-12 -right-14 border rounded-md w-[150px] shadow-sm bg-white shadow-[#128c7e] h-[100px] text-[#128c7e] ] items-center justify-center gap-2 flex flex-col border-[#128c7e] ${
              !openPopupAuth && "hidden"
            }`}
          >
            <Link
              href={"/login"}
              className="flex border hover:bg-[#128c7e] hover:text-white border-[#128c7e] p-2 cursor-pointer rounded-md py-1 w-[100px] justify-center items-center gap-1"
            >
              <CiLogin /> Đăng nhập
            </Link>
            <Link
              href={"/register"}
              className="flex border hover:bg-[#128c7e] hover:text-white border-[#128c7e] p-2 cursor-pointer rounded-md py-1 w-[100px] justify-center items-center gap-1"
            >
              <FiUserPlus /> Đăng ký
            </Link>
          </div>
        </li>
        <li ref={wrapperRefFunction} className="relative ">
          {" "}
          <AiOutlineMenuUnfold
            onClick={() => setOpenPopupFunction(!openPopupFunction)}
            className="cursor-pointer"
            color="gray"
            size={35}
          />
          <ul
            className={`absolute -right-1 z-10 p-2 top-12 flex flex-col gap-3 rounded-md w-[300px] bg-white border border-[#128c7e] text-[#128c7e] ] ${
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
              <img src={imgGooglePlay.src} alt="" />
              <img src={imgAppStore.src} alt="" />
              <span className="flex justify-center items-center col-span-2">
                <p>Phản hồi</p>
                <p>-</p>
                <p>Góp ý</p>
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <MyBookmark
        openPopupMyStory={openPopupMyStory}
        setOpenPopupMyStory={setOpenPopupMyStory}
      />
    </section>
  );
}
