import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardRankingStoryImg from "../Card/CardListRankingStoryImg";
import Link from "next/link";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import CardRankingBook from "../Card/CardRankingBook";

export interface IListRankingStoryProps {
  title: string;
  urlString: string;
  books: IBook[];
}

export default function ListRankingStory(props: IListRankingStoryProps) {
  const { title, urlString, books } = props;
  const newList = books.slice(1);
  return (
    <ul className="border-[1px] border-gray-300 bg-white rounded-lg">
      <li className="flex p-3 py-4    items-center  justify-between col-span-2">
        {" "}
        <h3 className="font-bold text-center text-xl">{title} </h3>
        <Link href={urlString || ""}>
          <button className="flex  hover:underline items-center gap-1 text-[#128c7e] text-sm">
            Xem thêm <FaLongArrowAltRight size={20} />
          </button>
        </Link>
      </li>
      <CardRankingStoryImg book={books[0]} />
      {newList.map((book, index) => (
        <CardRankingBook key={index} book={book} index={index} />
      ))}
    </ul>
  );
}
