import * as React from "react";
import { CiSearch } from "react-icons/ci";

export interface ISearchHeaderProps {}

export default function SearchHeader(props: ISearchHeaderProps) {
  return (
    <div className="flex text-sm  lg:justify-between items-center lg:w-[450px] md:w-[240px] w-[165px] gap-1 bg-transparent border border-[#128c7e] rounded-full p-1 md:px-2 lg:p-2 ">
      <input
        className="bg-transparent outline-none placeholder:text-xs l w-[85%] md:w-[90%] "
        type="text"
        placeholder="Tìm truyện, tác giả..."
      />{" "}
      <CiSearch size={20} className="w-[25%] md:w-[10%]" />
    </div>
  );
}
