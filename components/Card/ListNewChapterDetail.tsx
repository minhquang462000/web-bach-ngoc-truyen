"use client";
import * as React from "react";
export interface IListNewChapterProps {
  bookName: string;
}
import Link from "next/link";
import { convertToSlug } from "@/utils/converToSlug";

export default function ListNewChapterDetail({
  bookName,
}: IListNewChapterProps) {
  return (
    <div className="w-full bg-[#f8f9faa4] text-xs">
      <p className="w-full font-bold p-3 bg-[#f8f9fa]">Những chương mới</p>
      <ul className="flex border-t flex-col">
        {Array.from({ length: 4 }).map((item, index) => (
          <Link key={index} href={`/truyen/${convertToSlug(bookName)}/chapter.html`}>
            <li className="flex p-3 border-t hover:bg-[#e8e8e8] cursor-pointer justify-between">
              <p className="flex gap-1 ">
                {" "}
                Chương 2227: Thần linh kể chuyện xưa (2)
              </p>
              <span>1 ngày</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
