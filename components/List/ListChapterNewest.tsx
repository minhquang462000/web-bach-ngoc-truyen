import * as React from "react";
import TitleChangePage from "../TitleChangePage";
import Link from "next/link";
import Image from "next/image";
import { IBook, IFilter } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { getListBooksNoTotal } from "@/api/books";
import CardListBookNew from "../Card/CardListBookNew";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function ListNewestChapter() {
  const bookChapterNewest: IBook[] = await getListBooksNoTotal({} as IFilter);
  return (
    <ul className=" w-full shadow-sm shadow-gray-400 border rounded-md group  gap-x-3 gap-y-2 bg-transparent">
      <TitleChangePage
        title="Chương mới cập nhật"
        url="/chuong-moi-nhat?page=1"
      />
      {bookChapterNewest?.map((book, index) => (
        <CardListBookNew key={index} book={book} chapter />
      ))}
    </ul>
  );
}
