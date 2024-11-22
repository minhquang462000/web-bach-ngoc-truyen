"use client";
import { useState } from "react";
import { FaThList } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ListChapter from "../List/ListChapter";

export interface IButtonChangeChapterProps {
  nameBook: string
}

export default function ButtonChangeChapter({nameBook}: IButtonChangeChapterProps) {
  const [showListChapter, setShowListChapter] = useState(false);
  return (
    <div>
      <div className="flex text-sm  justify-center font-medium items-center gap-1">
        <button className="bg-[#128c7e] hover:bg-[#0e6c61] max-w-[150px] h-10 w-[45%] rounded-md flex items-center justify-center">
          <IoIosArrowBack size={20} /> Chương trước
        </button>
        <button
          onClick={() => setShowListChapter(!showListChapter)}
          className="bg-[#6b7280] w-10 flex justify-center items-center rounded-md h-10 "
        >
          <FaThList size={17} />
        </button>
        <button className="bg-[#128c7e] max-w-[150px] hover:bg-[#0e6c61] h-10 w-[45%] rounded-md  flex items-center justify-center">
          Chương tiếp
          <IoIosArrowForward size={20} />
        </button>
      </div>
      <div
        className={`bg-white p-3 rounded-md mt-4 overflow-hidden text-black ${
          !showListChapter ? "hidden" : "block"
        }`}
      >
        <ListChapter bookName="" page={1} />
      </div>
    </div>
  );
}
