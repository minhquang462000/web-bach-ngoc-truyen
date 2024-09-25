import * as React from "react";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
export interface ICardSavedStoryProps {}
import Link from "next/link";

export default function CardSavedStory(props: ICardSavedStoryProps) {
  return (
    <div className="flex hover:shadow-md relative  shadow-gray-400 rounded-md p-2 gap-4">
      <div className="w-[120px]  relative cursor-pointer  rounded-lg  overflow-hidden">
        <Link href={"/truyen/ten-truyen"}>
          <Image
            className=" w-full h-full object-cover  group-hover:scale-125 transition-all duration-500"
            src={require("@/public/images/image_test/img_.jpg").default}
            alt=""
          />
        </Link>
        <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8 ">
          FULL
        </span>
      </div>
      <div className="w-[65%]  flex flex-col gap-1 text-start">
        <Link href={"/truyen/ten-truyen"}>
          <p className="line-clamp-1 cursor-pointer text-lg font-medium text-primary">
            <span className="text-[#0000ff]  ">[Dịch]</span> Bá Chủ Mạt Thế
          </p>
        </Link>
        <Link href={"/tac-gia/ten-tac-gia"}>
          {" "}
          <p className="cursor-pointer text-sm text-gray-500 hover:text-blue-500">
            Thiên Địa Nhất Huấn{" "}
          </p>
        </Link>
        <p className="text-xs text-green-500">824 Chương</p>
        <button className="bg-[#128c7e] w-max text-white px-4 text-sm py-2 font-medium rounded-lg">
          Đọc truyện
        </button>
      </div>
      <button className="absolute top-2 right-2 z-20">
        <IoIosClose size={30} />
      </button>
    </div>
  );
}
