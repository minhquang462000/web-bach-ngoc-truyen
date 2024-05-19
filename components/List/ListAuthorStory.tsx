import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardAuthorStory from "../Card/CartListAuthorStoryHome";

export interface IListAuthorStoryProps {}

export default function ListAuthorStory(props: IListAuthorStoryProps) {
  return (
    <div className=" w-full md: grid-cols-2  grid lg:grid-cols-3 gap-3 bg-transparent">
      <nav className="flex shadow p-2 md:col-span-2  items-center bg-white rounded-md justify-between lg:col-span-3">
        {" "}
        <h3 className="font-semibold text-2xl">Tác giả Việt</h3>
        <button className="flex  items-center hover:underline gap-1 text-[#128c7e] text-sm">
          Tất cả <FaLongArrowAltRight />
        </button>
      </nav>
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
      <CardAuthorStory />
    </div>
  );
}
