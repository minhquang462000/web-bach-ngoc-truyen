import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardCompleteStory from "../Card/CardListCompleteStory";
import Link from "next/link";
import { IBook, IFilter } from "@/interfaces";
import { getListBooksNoTotal } from "@/api/books";
export interface IListCompleteStoryProps {}

export default async function ListCompleteStory(
  props: IListCompleteStoryProps
) {
  const listBookNew: IBook[] = await getListBooksNoTotal({
    page: 1,
    limit: 9,
    status: 2,
  } as IFilter);
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 bg-white gap-3 p-2 lg:p-5 rounded-md border border-gray-400">
      <nav className="flex  text-[#128c7e]  items-center lg:col-span-3  justify-between md:col-span-2">
        {" "}
        <h3 className="font-semibold text-2xl">Mới Hoàn Thành</h3>
        <Link href={"/moi-hoan-thanh?page=1"}>
          <button className="flex  items-center hover:underline gap-1  text-sm">
            Xem thêm <FaLongArrowAltRight />
          </button>
        </Link>
      </nav>
      {listBookNew?.map((book, index) => (
        <CardCompleteStory key={index} book={book} />
      ))}
    </div>
  );
}
