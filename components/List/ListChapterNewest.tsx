import * as React from "react";
import TitleChangePage from "../TitleChangePage";
import Link from "next/link";
import Image from "next/image";
import { IBook, IFilter } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { getListBooksNoTotal } from "@/api/books";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function ListNewestChapter() {
  const bookChapterNewest: IBook[] = await getListBooksNoTotal({
    page: 1,
    limit: 9,
  } as IFilter);
  return (
    <div className=" w-full shadow-sm shadow-gray-400 border rounded-md group  gap-x-3 gap-y-2 bg-transparent">
      <TitleChangePage title="Chương mới cập nhật" url="/truyen-moi-nhat" />
      {bookChapterNewest?.map((book, index) => (
        <div
          key={index}
          className="flex gap-3 w-full text-sm hover:bg-gray-200 px-3 py-2"
        >
          <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
            <div className="relative w-8 overflow-hidden">
              <Image
                width={200}
                height={300}
                className="w-full aspect-[3/4] hover:opacity-70 cursor-pointer h-full object-cover "
                src={`${DOMAIN}/api/books/${book.images[0]}`}
                alt=""
              />
              {book.status === 1 && (
                <span className="bg-[#22C55E] absolute top-1  -left-2 text-[5px] w-8  font-medium -rotate-[45deg] flex justify-center items-center h-2 text-white   ">
                  FULL
                </span>
              )}
            </div>
          </Link>
          <div className="flex flex-col w-full  overflow-hidden gap-1">
            <span className="flex cursor-pointer items-center w-full truncate gap-1">
              <p className="text-[#0000ff]">[Dịch]</p>
              <Link
                href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}
              >
                <p className="hover:text-[#128c7e]">{book.name}</p>
              </Link>
            </span>
            <Link href={"/truyen/ten-truyen/chuong-460"}>
              <p className="font-semibold text-[#999999] hover:text-[#007bff] overflow-hidden w-full truncate">
                Chương 460: Kim Thần Của Thiên Địa Thần Công
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
