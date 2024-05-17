import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardNewest from "../Card/CardStorNewest";
import CardNewestChapter from "../Card/CardNewestCHaprter";

export interface IListNewestChapterProps {}

export default function ListNewestChapter(props: IListNewestChapterProps) {
  return (
    <div className=" w-full shadow-sm shadow-gray-400 border rounded-md   gap-x-3 gap-y-2 bg-transparent">
      <nav className="flex p-3 border-b-[1px] border-gray-400 items-center bg-white  justify-between col-span-2">
        {" "}
        <h3 className="font-bold text-sm">Chương mới cập nhật</h3>
        <button className="flex  items-center gap-1 text-[#128c7e] text-sm">
          <FaLongArrowAltRight size={25} />
        </button>
      </nav>
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
      <CardNewestChapter />
    </div>
  );
}
