"use client";
import { handleUpdateView } from "@/api/updateViews";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
export interface IAppProps {
  book: IBook;
  index: number;
}

export default function CardRankingBook({ book, index }: IAppProps) {
  return (
    <li className="px-3 py-2 text-xs flex justify-between items-center border-t-[1px] border-gray-400">
      <span className="flex items-center gap-3">
        <span className="bg-[#f1f5f9] w-7 flex justify-center items-center h-7 rounded-full">
          {index + 2}
        </span>
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <h4
            onClick={() => {
              handleUpdateView(book?._id)
            }}
            className="max-w-[250px] hover:text-[#128c7e]  overflow-hidden truncate"
          >
            {" "}
            {book?.name}
          </h4>
        </Link>
      </span>
      <span className="font-medium text-lg">-</span>
    </li>
  );
}
