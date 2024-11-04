"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { convertToSlug } from "@/utils/converToSlug";
import { IBook } from "@/interfaces";

export interface ICardHomeShortcutProps {}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardTypeStory({book}: {book: IBook}) {
  return (
    <div className="flex relative bg-transparent flex-col md:flex-row text-xs p-2 lg:p-4 lg:text-sm group  transition-all text-black  duration-500 hover:shadow-md hover:shadow-gray-400  md:gap-2  lg:gap-4 md:p-3  rounded-md  overflow-hidden bg-white">
       <div className="md:w-1/4 w-full ">
        <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
          <div className="w-full   relative cursor-pointer   rounded-lg  overflow-hidden">
            <Image
              width={200}
              height={300}
              className="md:aspect-[2/3] object-cover m-auto  group-hover:scale-125 transition-all duration-500"
              src={`${DOMAIN}/api/books/${book.images[0]}`}
              alt=""
            />
            {book.status === 2 && (
              <span className="bg-[#22C55E] absolute top-1 text-[10px] -left-7 font-medium -rotate-[45deg] text-center text-white  px-8 ">
                FULL
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="flex md:w-2/3 lg:w-3/5 flex-col mt-2 md:mt-0 gap-2 md:gap-1">
      <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
          <h4 className="text-lg lg:text-base md:text-xl hover:text-[#128c7e] cursor-pointer font-semibold w-full truncate">
            {book.name}
          </h4>
        </Link>
        <Link
          href={`/tac-gia/${convertToSlug(book.authors[0].name)}-${
            book.authors[0]._id
          }.html`}
        >
          <p className="font-semibold cursor-pointer hover:text-[#007bff] w-full  text-[#6c757d]">
            {book.authors[0].name}
          </p>
        </Link>
        <p className="text-[#28a745]">2225 Chương</p>
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
          <p className="line-clamp-4   text-xs">{book.description}</p>
        </div>
      </div>
    </div>
  );
}
