"use client";
import { BookCover } from "book-cover-3d";
import Image from "next/image";
export interface ICardRankingStoryImgProps {}
import Link from "next/link";
import { IBook, ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { handleUpdateView } from "@/api/updateViews";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardListRankingStoryImg({ book }: { book: IBook }) {
  return (
    <li className=" flex justify-between text-xs p-3 border-t-[1px] border-gray-400">
      <div className="flex gap-3">
        <span className="bg-[#f1f5f9] w-7 flex justify-center items-center h-7 rounded-full">
          1
        </span>
        <div className="flex flex-col gap-1">
          <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
            {" "}
            <p
              onClick={() => handleUpdateView(book._id)}
              className="text-sm font-bold w-[200px] hover:text-[#128c7e]  overflow-hidden truncate"
            >
              {book.name}
            </p>
          </Link>
          <Link
            className="flex items-center gap-1"
            href={`/tac-gia/${convertToSlug(book.authors[0].name)}-${
              book.authors[0]._id
            }.html`}
          >
            {" "}
            Tác giả:
            <p className="hover:text-[#128c7e]">{book.authors[0].name}</p>
          </Link>
          <ul className="flex items-center max-h-[50px] overflow-hidden  flex-wrap gap-1 mt-2">
            {book.categories.map((category, index) => (
              <li
                key={index}
                className="p-[2px]  cursor-pointer px-1 hover:text-[#128c7e]  border rounded-full border-[#22C55E]"
              >
                <Link
                  href={`/the-loai/${convertToSlug(category.name)}-${
                    category._id
                  }.html`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
        <BookCover
          rotate={55}
          rotateHover={55}
          thickness={10}
          width={95}
          height={95}
          pagesOffset={2}
        >
          <div
            onClick={() => handleUpdateView(book._id)}
            className="relative cursor-pointer overflow-hidden"
          >
            <Image
              width={200}
              height={300}
              className="md:aspect-[2/3] object-cover  group-hover:scale-125 transition-all duration-500"
              src={`${DOMAIN}/api/books/${book.images[0]}`}
              alt=""
            />
            {book.status === 2 && (
              <span className="bg-[#22C55E] absolute top-1 tex-sm -left-4 font-medium -rotate-[40deg] text-center text-white  px-5 ">
                FULL
              </span>
            )}
          </div>
        </BookCover>
      </Link>
    </li>
  );
}
