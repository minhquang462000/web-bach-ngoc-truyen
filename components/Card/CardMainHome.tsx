"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { handleUpdateView } from "@/api/updateViews";
export interface ICardProps {
  book: IBook;
  index: number;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardMainHome({ book, index }: ICardProps) {
  return (
    <div className="flex relative flex-col text-xs md:text-sm p-3 group md:flex-row transition-all text-black   duration-500 hover:shadow-lg hover:shadow-gray-600  md:gap-4    rounded-lg  overflow-hidden bg-white">
      <div className="md:w-1/4 w-full ">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <div className="w-full   relative cursor-pointer   rounded-lg  overflow-hidden">
            <Image
              onClick={() => handleUpdateView(book?._id)}
              width={200}
              height={300}
              className="md:aspect-[2/3] object-cover  group-hover:scale-125 transition-all duration-500"
              src={`${DOMAIN}/api/books/${book?.images[0]}`}
              alt=""
            />
            {book?.status === 2 && (
              <span className="bg-[#22C55E] absolute top-1 text-[10px] -left-7 font-medium -rotate-[45deg] text-center text-white  px-8 ">
                FULL
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="flex md:w-3/4 flex-col mt-2 md:mt-1 gap-2">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <h4
            onClick={() => handleUpdateView(book?._id)}
            className="text-lg lg:text-base md:text-xl hover:text-[#128c7e] cursor-pointer font-semibold w-full truncate"
          >
            {book?.name}
          </h4>
        </Link>
        <Link
          href={`/tac-gia/${convertToSlug(book?.authors[0]?.name)}-${
            book?.authors[0]._id
          }.html`}
        >
          <p className="font-semibold cursor-pointer hover:text-[#007bff] w-full  text-[#6c757d]">
            {book?.authors[0].name}
          </p>
        </Link>
        <div className="md:flex-row flex flex-col gap-1">
          <p className="text-[#28a745]">{book?.totalChap || 0} Chương</p>
          <p className="text-[#007bff]">304 Đề cử/tuần</p>
        </div>
        <div className="mt-2 flex gap-1">
          <div className="mr-1 h-8 w-8 ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="12"
              width="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </div>
          <p className="line-clamp-4 text-sm  md:text-xs">
            {book?.description}
          </p>
        </div>
      </div>
      <span className="absolute bg-[#950101] text-white text-xs h-8 w-[70px] text-center  -bottom-2 -right-6 font-medium  -rotate-45 font-">
        {" "}
        Top {index + 1}
      </span>
    </div>
  );
}
