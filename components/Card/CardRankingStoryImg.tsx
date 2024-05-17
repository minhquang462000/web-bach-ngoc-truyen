import * as React from "react";
import { BookCover } from "book-cover-3d";
export interface ICardRankingStoryImgProps {}

export default function CardRankingStoryImg(props: ICardRankingStoryImgProps) {
  return (
    <div className=" flex justify-between text-xs p-3 border-t-[1px] border-gray-400">
      <div className="flex gap-3">
        <span className="bg-[#f1f5f9] w-7 flex justify-center items-center h-7 rounded-full">
          1
        </span>
        <div className="flex flex-col gap-1">
          <b className="text-base w-full max-w-[200px] cursor-pointer overflow-hidden truncate">
            Quang Âm Chi Ngoại 
          </b>
          <p className="">Tác giả:Nhĩ Căn</p>
          <ul className="flex items-center flex-wrap gap-1 mt-2">
            <li className="p-1 px-2 border rounded-full border-[#22C55E]">
              Tiên Hiệp
            </li>
            <li className="p-1 px-2 border rounded-full border-[#22C55E]">
              Tu Chân
            </li>
          </ul>
        </div>
      </div>
      <BookCover
        rotate={55}
        rotateHover={55}
        thickness={10}
        width={95}
        height={95}
        pagesOffset={2}
      >
        <div className="relative cursor-pointer overflow-hidden">
          <img
            className="w-full h-full object-cover "
            src="https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fstory_img%2Fsmall_lRhOeT3AEPz29Y6cg7MZMTYTsCCZJPnpVaLgSaXO.webp&w=1920&q=75"
            alt=""
          />
          <span className="bg-[#22C55E] absolute top-1 tex-sm -left-4 font-medium -rotate-[40deg] text-center text-white  px-5 ">
            FULL
          </span>
        </div>
      </BookCover>
    </div>
  );
}
