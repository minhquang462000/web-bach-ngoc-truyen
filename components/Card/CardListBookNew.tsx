"use client";
import Image from "next/image";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import Link from "next/link";
import { handleUpdateView } from "@/api/updateViews";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export interface IAppProps {
  book: IBook;
  chapter?: boolean;
  detail?: boolean;
}

export default function CardListBookNew({ book, chapter, detail }: IAppProps) {
  return (
    <li className="flex gap-3 text-sm hover:bg-gray-200 px-3 py-2">
      <Link
        href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html
      
    `}
      >
        <div className="relative w-8 overflow-hidden">
          <Image
            onClick={() => {
              handleUpdateView(book?._id);
            }}
            width={200}
            height={300}
            className="w-full aspect-[3/4] hover:opacity-70 cursor-pointer h-full object-cover "
            src={`${DOMAIN}/api/books/${book?.images[0]}`}
            alt=""
          />
          {book?.status === 2 && (
            <span className="bg-[#22C55E] absolute top-1  -left-2 text-[5px] w-8  font-medium -rotate-[45deg] flex justify-center items-center h-2 text-white   ">
              FULL
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-col w-full overflow-hidden  gap-1">
        <span
          onClick={() => {
            handleUpdateView(book?._id);
          }}
          className="flex cursor-pointer items-center w-full  gap-1"
        >
          <p className="text-[#0000ff]">[Dịch]</p>
          <Link href={`/truyen/${convertToSlug(book?.name)}-${book?._id}.html`}>
            {" "}
            <p className="hover:text-[#128c7e] w-full truncate">{book?.name}</p>
          </Link>
        </span>
        {chapter ? (
          <Link href={"/truyen/ten-truyen/chuong-460"}>
            <p className="font-semibold text-[#999999] hover:text-[#007bff] overflow-hidden w-full truncate">
              Chương 460: Kim Thần Của Thiên Địa Thần Công
            </p>
          </Link>
        ) : (
          !detail && (
            <Link
              href={`/tac-gia/${convertToSlug(book?.authors[0]?.name)}-${
                book?.authors[0]?._id
              }.html`}
            >
              <p className="font-medium text-[#999999] hover:text-[#007bff] w-full overflow-hidden truncate">
                {book?.authors[0]?.name}
              </p>
            </Link>
          )
        )}
        {detail && (
          <p className=" text-[#999999] hover:text-[#007bff] w-full overflow-hidden truncate">
            Đọc: 46.200
          </p>
        )}
      </div>
    </li>
  );
}
