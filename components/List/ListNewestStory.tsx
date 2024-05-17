import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardNewest from "../Card/CardStorNewest";

export interface IListNewestStoryProps {}

export default function ListNewestStory(props: IListNewestStoryProps) {
  return (
    <div className=" w-full shadow-sm shadow-gray-400 border rounded-md   gap-x-3 gap-y-2 bg-transparent">
      <nav className="flex p-3 border-b-[1px] border-gray-400 items-center bg-white  justify-between col-span-2">
        {" "}
        <h3 className="font-bold text-sm">Truyện mới nhất</h3>
        <button className="flex  items-center gap-1 text-[#128c7e] text-sm">
          <FaLongArrowAltRight size={25} />
        </button>
      </nav>
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
      <CardNewest />
    </div>
  );
}
