import * as React from "react";
import { BookCover } from "book-cover-3d";
import Image from "next/image";
export interface ICardRankingStoryImgProps {}
import Link from "next/link";
import { IBook, ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
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
            <p className="text-sm font-bold w-[200px] overflow-hidden truncate">
              {book.name}
            </p>
          </Link>
          <p>Tác giả:{book.authors[0].name}</p>
          <ul className="flex items-center max-h-[50px] overflow-hidden  flex-wrap gap-1 mt-2">
            {book.categories.map((category, index) => (
              <li key={index} className="p-[2px] cursor-pointer px-1 border rounded-full border-[#22C55E]">
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
          <div className="relative cursor-pointer overflow-hidden">
            <Image
              width={200}
              height={300}
              className="md:aspect-[2/3] object-cover  group-hover:scale-125 transition-all duration-500"
              src={`${DOMAIN}/api/books/${book.images[0]}`}
              alt=""
            />
            <span className="bg-[#22C55E] absolute top-1 tex-sm -left-4 font-medium -rotate-[40deg] text-center text-white  px-5 ">
              FULL
            </span>
          </div>
        </BookCover>
      </Link>
    </li>
  );
}
