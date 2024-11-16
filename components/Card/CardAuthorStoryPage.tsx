"use client";
export interface ICardStoryAuthorPageProps {}
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { handleUpdateView } from "@/api/updateViews";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardAuthorPageStory({
  book,
  author,
}: {
  book: IBook;
  author?: boolean;
}) {
  const arrCategories = book.categories.map((category) => category.name);
  return (
    <div className="group  w-full flex text-xs md:text-sm flex-col gap-2 lg:items-center rounded-md hover:shadow-md  shadow-gray-400 p-2 md:p-4 pb-5">
      <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
        <div className="w-[180px] md:w-[180px] h-[240px] md:h-[250px]   m-auto border border-white relative cursor-pointer  rounded-lg  overflow-hidden">
          <Image
            onClick={() => handleUpdateView(book?._id)}
            width={200}
            height={300}
            className=" w-full h-full group-hover:scale-125 transition-all duration-500"
            src={`${DOMAIN}/api/books/${book?.images[0]}`}
            alt=""
          />
          {book?.status === 2 && (
            <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8  md:py-0">
              FULL
            </span>
          )}
        </div>
      </Link>
      <div className="w-full flex flex-col gap-1 text-center">
        <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
          <h3
            onClick={() => handleUpdateView(book?._id)}
            className="text-base w-full overflow-hidden truncate  text-[#1061c3] font-bold"
          >
            {book?.name}
          </h3>
        </Link>
        {!author && (
          <Link
            href={`/tac-gia/${convertToSlug(book?.authors[0]?.name)}-${
              book?.authors[0]?._id
            }.html`}
          >
            <p className="text-[#26a8cb]">{book?.authors[0]?.name}</p>
          </Link>
        )}
        <p className="text-[#18a263] w-full italic overflow-hidden font-light truncate">
          {arrCategories.join(", ")}
        </p>
      </div>
    </div>
  );
}
