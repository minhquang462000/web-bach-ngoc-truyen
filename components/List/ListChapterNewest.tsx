import * as React from "react";
import TitleChangePage from "../TitleChangePage";
export interface IListNewestChapterProps { }

export default function ListNewestChapter(props: IListNewestChapterProps) {
  return (
    <div className=" w-full shadow-sm shadow-gray-400 border rounded-md group  gap-x-3 gap-y-2 bg-transparent">
      <TitleChangePage  title="Chương mới cập nhật" url="/truyen-moi-nhat"/>
      <div className="flex gap-3 w-full text-sm hover:bg-gray-200 px-3 py-2">
        <div className="relative w-10 h-12 overflow-hidden">
          <img
            className="w-full cursor-pointer h-full object-cover "
            src="https://ngocsach.com/storage/story_img/small_CFETBmQba1dZcHOov2wbgMcISmnHoZm1IvCkRYak.jpg"
            alt=""
          />
          <span className="bg-[#22C55E] absolute top-1  -left-2 text-[5px] w-8  font-medium -rotate-[45deg] flex justify-center items-center h-2 text-white   ">
            FULL
          </span>
        </div>
        <div className="flex flex-col w-full  overflow-hidden gap-1">
          <span className="flex cursor-pointer items-center w-full truncate gap-1">
            <p className="text-[#0000ff]">[Dịch]</p>
            <p className="hover:text-[#128c7e]">Quỷ Đạo Chi Chủ</p>
          </span>
          <p className="font-semibold text-[#999999] hover:text-[#007bff] overflow-hidden w-full truncate">
            Chương 460: Kim Thần Của Thiên Địa Thần Công
          </p>
        </div>
      </div>
    </div>
  );
}
