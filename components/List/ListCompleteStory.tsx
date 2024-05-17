import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardCompleteStory from "../Card/CardCompleteStory";

export interface IListCompleteStoryProps {}

export default function ListCompleteStory(props: IListCompleteStoryProps) {
  return (
    <div className="w-full grid lg:grid-cols-3 bg-white gap-3 p-2 lg:p-5 rounded-md border border-gray-400">
      <nav className="flex  text-[#128c7e]  items-center  justify-between lg:col-span-3">
        {" "}
        <h3 className="font-semibold text-2xl">Mới Hoàn Thành</h3>
        <button className="flex  items-center hover:underline gap-1  text-sm">
          Tất cả <FaLongArrowAltRight />
        </button>
      </nav>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
      <CardCompleteStory/>
    </div>
  );
}
