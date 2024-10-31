"use client";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export interface ISearchHeaderProps {}

export default function SearchHeader() {
  const [keyWord, setKeyWord] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    if (keyWord.length > 2) {
      router.push(`/tim-kiem?q=${convertToSlug(keyWord)}`);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex text-sm  lg:justify-between items-center lg:w-[450px] md:w-[240px] w-[165px] gap-1 bg-transparent border border-[#128c7e] rounded-full p-1 md:px-2 lg:p-2 ">
      <input
        className="bg-transparent outline-none placeholder:text-xs px-2 l w-[85%] md:w-[90%] "
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder="Tìm truyện, tác giả..."
      />{" "}
      <CiSearch
        size={20}
        onClick={handleSearch}
        className="w-[25%] md:w-[10%]"
      />
    </div>
  );
}
