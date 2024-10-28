"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import userIcon from "../../public/images/default-avatar.jpg";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
export default function PopupAuthHeaderMobile() {
  const [openPopupAuth, setOpenPopupAuth] = useState(false);
  const wrapperRefAuth = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        wrapperRefAuth.current &&
        !wrapperRefAuth.current!.contains(event.target) &&
        openPopupAuth
      ) {
        setOpenPopupAuth(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPopupAuth, wrapperRefAuth]);
  return (
    <li ref={wrapperRefAuth} className="relative md:hidden mx-2">
      {" "}
      <Image
        onClick={() => setOpenPopupAuth(!openPopupAuth)}
        className="w-[35px] cursor-pointer rounded-full h-[35px]"
        src={userIcon}
        alt=""
      />
      <div
        className={`absolute z-10 top-12 -right-14 border rounded-md w-[150px] shadow-sm bg-white shadow-[#128c7e] h-[100px] text-[#128c7e]  items-center justify-center gap-2 flex flex-col border-[#128c7e] ${
          !openPopupAuth && "hidden"
        }`}
      >
        <Link
          href={"/dang-nhap"}
          className="flex border hover:bg-[#128c7e] hover:text-white border-[#128c7e] p-2 cursor-pointer rounded-md py-1 w-[100px] justify-center items-center gap-1"
        >
          <CiLogin /> Đăng nhập
        </Link>
        <Link
          href={"/dang-ky"}
          className="flex border hover:bg-[#128c7e] hover:text-white border-[#128c7e] p-2 cursor-pointer rounded-md py-1 w-[100px] justify-center items-center gap-1"
        >
          <FiUserPlus /> Đăng ký
        </Link>
      </div>
    </li>
  );
}
