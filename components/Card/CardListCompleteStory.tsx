import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { BookCover } from "book-cover-3d";
import Image from "next/image";
import Link from "next/link";

export interface ICardCompleteStoryProps { }
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardListCompleteStory({ book }: { book: IBook }) {
  return (
    <div
      className="flex relative gap-2 
     transition-all p-2 px-4 border-t border-dotted border-gray-500 text-black text-sm duration-500 
     hover:shadow-lg hover:shadow-gray-600   rounded-md  overflow-hidden bg-white"
    >
      <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
        <BookCover
          rotate={-30}
          rotateHover={0}
          thickness={1}
          width={80}
          height={120}
          radius={5}
          shadowColor="none"
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="relative   hover:overflow-hidden    cursor-pointer "
          >
            <div className="relative hover:shadow-md h-[120px]  hover:shadow-gray-600  overflow-hidden">
              <Image
                className="w-full h-full object-cover "
                width={80}
                height={130}
                src={`${DOMAIN}/api/books/${book.images[0]}`}
                alt=""
              />
              {book.status === 1 && (
                <span className="bg-[#22C55E] absolute top-1 text-xs -left-4 font-medium -rotate-[50deg] text-center text-white  px-5 ">
                  FULL
                </span>
              )}
            </div>
            <div style={{ transform: "perspective(500px) rotateY(-50deg)" }} className="absolute  flex items-center top-0 -z-10  p-1 w-[16px]   -left-4  h-full   justify-center bg-gradient-to-b from-[#eee] to-[#aaa] text-center text-xs ">
              <span className="absolute rotate-[90deg]   translate-y-[-10px] h-[16x] pl-[16px] text-xs leading-8  font-medium text-black">
                bachngocsach
              </span>
            </div>
          </div>
        </BookCover>
      </Link>
      <div className="flex flex-col text-xs gap-1 ">
        <p className="text-lg cursor-pointer overflow-hidden font-semibold w-[300px] md:w-[250px] truncate">
          <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
            {book.name}
          </Link>
        </p>
        <Link
          href={`/tac-gia/${convertToSlug(book.authors[0].name)}-${book.authors[0]._id
            }.html`}
        >
          {" "}
          <p className="font-semibold text-[#6c757d]">{book.authors[0].name}</p>
        </Link>
        <div className=" flex  gap-2">
          <p className="text-[#28a745]">2225 Chương</p>
          <p className="text-[#007bff]">3046 Đọc</p>
        </div>
        <div className="mt-2 flex gap-1">
          <div className="mr-1 h-8 w-8 ">
            <svg
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
          <p className="line-clamp-4 text-xs">{book.description}</p>
        </div>
      </div>
    </div>
  );
}
