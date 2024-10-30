import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardCompleteStory from "../Card/CardListCompleteStory";
import Link from "next/link";
export interface IListCompleteStoryProps {}

export default function ListCompleteStory(props: IListCompleteStoryProps) {
  return (
    <div className="w-full px-10 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 bg-white gap-3 p-2 lg:p-5 rounded-md border border-gray-400">
      <nav className="flex  text-[#128c7e]  items-center lg:col-span-3  justify-between md:col-span-2">
        {" "}
        <h3 className="font-semibold text-2xl">Mới Hoàn Thành</h3>
       <Link href={"/moi-hoan-thanh"}>
       <button className="flex  items-center hover:underline gap-1  text-sm">
          Xem thêm <FaLongArrowAltRight />
        </button></Link>
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
