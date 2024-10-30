import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
export interface ICardContributorProps {
  book: IBook;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardContributor({ book }: ICardContributorProps) {
  return (
    <div className=" hover:shadow rounded">
      <div className=" overflow-hidden rounded-md md:w">
      <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
          <Image
            width={200}
            height={300}
            className="md:aspect-[2/3] object-cover  group-hover:scale-125 transition-all duration-500"
            src={`${DOMAIN}/api/books/${book.images[0]}`}
            alt=""
          />
        </Link>
      </div>
      <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
        <h4 className="text-xs mt-2  hover:text-[#128c7e] cursor-pointer font-semibold w-full truncate">
          {book.name}
        </h4>
      </Link>
    </div>
  );
}
