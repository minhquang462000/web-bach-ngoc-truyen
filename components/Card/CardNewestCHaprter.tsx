import * as React from "react";

export interface ICardNewestChapterProps {}

export default function CardNewestChapter(props: ICardNewestChapterProps) {
  return (
    <div className="flex gap-3 w-full text-sm hover:bg-gray-200 px-3 py-2">
      <img
        className="w-8 cursor-pointer h-12 object-cover "
        src="https://ngocsach.com/storage/story_img/small_CFETBmQba1dZcHOov2wbgMcISmnHoZm1IvCkRYak.jpg"
        alt=""
      />
      <div className="flex flex-col w-full  overflow-hidden gap-1">
        <span className="flex cursor-pointer items-center w-full truncate gap-1">
          <p className="text-[#0000ff]">[Dịch]</p>
          <p className="hover:text-[#128c7e]">Quỷ Đạo Chi Chủ</p>
        </span>
        <p className="font-semibold text-[#999999] w-full truncate">
         Chương 460: Kim Thần Của Thiên Địa Thần Công
        </p>
      </div>
    </div>
  );
}
