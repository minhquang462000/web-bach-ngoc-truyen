import * as React from "react";

export interface ICardAuthorStoryProps { }

export default function CardListAuthorStoryHome(props: ICardAuthorStoryProps) {
  return (
    <div className="flex hover:shadow-lg hover:shadow-gray-600 group  p-2 text-sm gap-3   rounded-md   bg-white ">
      <div className="w-[75px] h-[110px] cursor-pointer rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-500"
          src="https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fstory_img%2Fsmall_CnESv0QKhGQeWitSWQ2Ps6dFwJv8zZU3ewN70BVG.webp&w=1080&q=75"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <b className=" text-base hover:text-[#128c7e]">Vương Gia Marxism</b>
        <p className="hover:text-[#007bff] font-medium">Liêm Phong việt Sử</p>
        <ul className="flex items-center text-xs h-[25px] max-w-[150px] overflow-hidden  gap-1 flex-wrap ">
          <li className="p-[2px] cursor-pointer px-1 border rounded-full border-[#22C55E]">
            Lịch Sử
          </li>
          <li className="p-[2px] cursor-pointer px-1 border rounded-full border-[#22C55E]">
            Lịch Sử
          </li>
        </ul>
        <p className="max-w-[250px] font-medium overflow-hidden hover:text-[#007bff] truncate">
          Chương 668:Dở khóc sở cười như con đười ươi
        </p>
      </div>
    </div>
  );
}
