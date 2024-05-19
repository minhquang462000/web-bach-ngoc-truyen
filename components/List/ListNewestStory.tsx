import * as React from "react";
import TitleChangePage from "../TitleChangePage";
export interface IListNewestStoryProps { }

export default function ListNewestStory(props: IListNewestStoryProps) {
  return (
    <div className=" w-full shadow-sm shadow-gray-400 border rounded-md group  gap-x-3 gap-y-2 bg-transparent">
      <TitleChangePage title="Truyện mới nhất" url="/truyen-moi-nhat" />
      <div className="flex gap-3 text-sm hover:bg-gray-200 px-3 py-2">
        <div className="relative h-12 w-10 overflow-hidden">
          <img
            className="w-full cursor-pointer h-full object-cover "
            src="https://ngocsach.com/storage/story_img/small_CFETBmQba1dZcHOov2wbgMcISmnHoZm1IvCkRYak.jpg"
            alt=""
          />
          <span className="bg-[#22C55E] absolute top-1  -left-2 text-[5px] w-8  font-medium -rotate-[45deg] flex justify-center items-center h-2 text-white   ">
            FULL
          </span>
        </div>
        <div className="flex flex-col w-full overflow-hidden  gap-1">
          <span className="flex cursor-pointer items-center w-full  gap-1">
            <p className="text-[#0000ff]">[Dịch]</p>
            <p className="hover:text-[#128c7e] w-full truncate">
              Quỷ Đạo Chi Chủ Thiên Địa Chí Tôn Thiên Thòi{" "}
            </p>
          </span>
          <p className="font-semibold text-[#999999] hover:text-[#007bff] w-full overflow-hidden truncate">
            Bất Phong Tâm Du Điều
          </p>
        </div>
      </div>
    </div>
  );
}
