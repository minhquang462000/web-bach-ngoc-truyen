import * as React from "react";
import { IoIosClose } from "react-icons/io";

export interface ICardStoryReadProps {}

export default function CardAlreadyStory(props: ICardStoryReadProps) {
  return (
    <div className="flex hover:shadow-md relative  shadow-gray-400 rounded-md p-2 gap-4">
      <div className="w-[120px]  relative cursor-pointer  rounded-lg  overflow-hidden">
        <img
          className=" w-full h-full hover:scale-125 transition-all duration-500"
          src="https://ngocsach.com/storage/story_img/small_lRhOeT3AEPz29Y6cg7MZMTYTsCCZJPnpVaLgSaXO.webp"
          alt=""
        />
        <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8 ">
          FULL
        </span>
      </div>
      <div className="w-[65%] gap-2 text-start">
        <p className="line-clamp-1 cursor-pointer text-lg font-medium text-primary">
          <span className="text-sourceTranslated">[Dịch]</span> Bá Chủ Mạt Thế
        </p>
        <p className="cursor-pointer text-sm text-gray-500 hover:text-blue-500">
          Thiên Địa Nhất Huấn{" "}
        </p>
        <p className="text-xs text-green-500">824 Chương</p>
        <p className="my-1 line-clamp-1 font-light text-xs">
          Chương đang đọc: Chương 1: Giấc Mộng? Thực Tế?
        </p>
        <button className="bg-[#128c7e] w-max text-white px-4 text-sm py-2 font-medium rounded-lg">
          Đọc tiếp
        </button>
      </div>
      <button className="absolute top-2 right-2 z-20"><IoIosClose size={30}/></button>
    </div>
  );
}
