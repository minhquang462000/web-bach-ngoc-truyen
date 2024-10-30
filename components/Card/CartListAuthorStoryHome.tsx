import Image from "next/image";
import * as React from "react";
import Link from "next/link";

export interface ICardAuthorStoryProps { }

export default function CardListAuthorStoryHome(props: ICardAuthorStoryProps) {
  return (
    <div className="flex hover:shadow-lg hover:shadow-gray-600 group  p-2 px-4 text-sm gap-3   rounded-md   bg-white ">
      <div className="w-1/4 cursor-pointer rounded-md overflow-hidden">
        <Image
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          src={require("@/public/images/image_test/img_.jpg").default}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 w-3/5">
        <Link href={"/truyen/ten-truyen"}>
          {" "}
          <b className=" text-base hover:text-[#128c7e]">Vương Gia Marxism</b>
        </Link>
        <Link href={"/tac-gia/ten-tac-gia"}>
          {" "}
          <p className="hover:text-[#007bff] font-medium">Liêm Phong việt Sử</p>
        </Link>
        <ul className="flex items-center text-xs h-[25px] max-w-[150px] overflow-hidden  gap-1 flex-wrap ">
          <li className="p-[2px] cursor-pointer px-1 border rounded-full border-[#22C55E]">
            <Link href={"/the-loai/lich-su"}> Lịch Sử</Link>
          </li>
          <li className="p-[2px] cursor-pointer px-1 border rounded-full border-[#22C55E]">
            <Link href={"/the-loai/lich-su"}> Lịch Sử</Link>
          </li>
        </ul>
        <Link href={"/truyen/ten-truyen/chapter"}>
          {" "}
          <p className="max-w-[250px] font-medium overflow-hidden hover:text-[#007bff] truncate">
            Chương 668:Dở khóc sở cười như con đười ươi
          </p>
        </Link>
      </div>
    </div>
  );
}
