"use client";
import Link from "next/link";
import mainLogo from "../../public/images/logo.49128792.png";
import Image from "next/image";
import SearchHeader from "./SearchHeader";
import bookMark from "../../public/images/bookmark.6b699b4c.png";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import MyBookmark from "../List/MyBookmark";
import { useCallback, useEffect, useRef, useState } from "react";
import PopupAuthHeaderMobile from "../PopUp/PopupAuthHeaderMobile";
import PopupFuncHeaderMobile from "../PopUp/PopupFuncHeaderMobile";
import { getAccountCookie } from "@/api/login";
import axios from "axios";
import { FaRegBell } from "react-icons/fa";
import defaultAvt from "@/public/images/default-avatar.jpg";
export interface IHomeHeaderProps {}

export default function HomeHeader(props: IHomeHeaderProps) {
  const [openPopupMyStory, setOpenPopupMyStory] = useState(false);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const wrapperRefMyStory = useRef<any>(null);
  const togglePopup = useCallback(() => {
    if (!openPopupMyStory) {
      setIsShowPopup(true);
      setTimeout(() => {
        setOpenPopupMyStory(true);
      }, 100);
    } else {
      setOpenPopupMyStory(false);
      setTimeout(() => {
        setIsShowPopup(false);
      }, 500);
    }
  }, [openPopupMyStory]);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRefMyStory.current &&
        !wrapperRefMyStory.current.contains(event.target) &&
        openPopupMyStory
      ) {
        togglePopup();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRefMyStory, openPopupMyStory, togglePopup]);
  const account = getAccountCookie();
  const [dataAccount, setDataAccount] = useState<any>(null);
  if (account) {
    useEffect(() => {
      const getAccount = async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${account}`
          );
          setDataAccount(res.data);
        } catch (e) {}
      };
      getAccount();
    }, [account]);
  }
  console.log(dataAccount);

  return (
    <header className="max-w-full sticky bg-white p-3 shadow-md z-50 top-0  mx-auto">
      <section className="lg:max-w-[1140px]  md:max-w-[705px] h-full w-full  text-xs   m-auto">
        <div className="flex items-center  justify-between">
          <Link className="cursor-pointer" href="/">
            {" "}
            <Image src={mainLogo} alt="logo" width={160} />
          </Link>
          <div className="md:block hidden">
            <SearchHeader />
          </div>
          <ul className="flex gap-1 font-medium items-center ">
            <div
              className={`w-full left-0 min-h-screen  absolute z-10 bg-[#e4e4e4c5]  ${
                !openPopupMyStory ? "hidden  " : "block"
              } top-0`}
            />
            <li className={`${dataAccount?.email ? "block" : "hidden"} mr-2`}>
              <FaRegBell color="#128c7e" size={25} />
            </li>
            <li
              ref={wrapperRefMyStory}
              className={`${dataAccount?.email && "md:px-4"}`}
            >
              {" "}
              <Image
                onClick={togglePopup}
                className="md:w-[35px]  cursor-pointer object-fill h-[30px] w-[40px]  "
                src={bookMark}
                alt=""
              />
              <MyBookmark
                openPopupMyStory={openPopupMyStory}
                togglePopup={togglePopup}
                isShowPopup={isShowPopup}
              />
            </li>
            <PopupAuthHeaderMobile dataAccount={dataAccount} />
            <PopupFuncHeaderMobile />

            <li
              className={`hidden  ${dataAccount?.email ? "block" : "md:block"}`}
            >
              {" "}
              <Link
                href={"/dang-nhap"}
                className="flex text-[#128c7e]  cursor-pointer p-[10px] px-4    justify-center items-center gap-2"
              >
                <CiLogin /> Đăng nhập
              </Link>
            </li>
            <li
              className={`hidden  ${
                dataAccount?.email ? "hidden" : "md:block"
              }`}
            >
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
    </header>
  );
}
