import * as React from "react";
import { BookCover } from "book-cover-3d";
import Image from "next/image";
export interface ICardRankingStoryImgProps {}
import Link from "next/link";

export default function CardListRankingStoryImg(
  props: ICardRankingStoryImgProps
) {
  return (
    <div className=" flex justify-between text-xs p-3 border-t-[1px] border-gray-400">
      <div className="flex gap-3">
        <span className="bg-[#f1f5f9] w-7 flex justify-center items-center h-7 rounded-full">
          1
        </span>
        <div className="flex flex-col gap-1">
          <Link href={"/truyen/ten-truyen"}>
            {" "}
            <b className="text-base w-full max-w-[200px] overflow-hidden truncate">
              Quang Âm Chi Ngoại
            </b>
          </Link>
          <p>Tác giả:Nhĩ Căn</p>
          <ul className="flex items-center flex-wrap gap-1 mt-2">
            <li className="p-1 px-2 border rounded-full border-[#22C55E]">
              <Link href={"/the-loai/ten-theloai"}> Tiên Hiệp</Link>
            </li>
            <li className="p-1 px-2 border rounded-full border-[#22C55E]">
              <Link href={"/the-loai/ten-theloai"}> Tu Chân</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link href={"/truyen/ten-truyen"}>
        <BookCover
          rotate={55}
          rotateHover={55}
          thickness={10}
          width={95}
          height={95}
          pagesOffset={2}
        >
          <div className="relative cursor-pointer overflow-hidden">
            <Image
              className="w-full h-full object-cover "
              src={require("@/public/images/image_test/img_.jpg").default}
              alt=""
            />
            <span className="bg-[#22C55E] absolute top-1 tex-sm -left-4 font-medium -rotate-[40deg] text-center text-white  px-5 ">
              FULL
            </span>
          </div>
        </BookCover>
      </Link>
    </div>
  );
}
