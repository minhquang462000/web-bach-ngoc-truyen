import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardRankingStoryImg from "../Card/CardListRankingStoryImg";
import Link from "next/link";

export interface IListRankingStoryProps {
  title: string;
  urlString: string;
}

export default function ListRankingStory(props: IListRankingStoryProps) {
  const { title, urlString } = props;
  return (
    <div className="border-[1px] border-gray-300 bg-white rounded-lg">
      <nav className="flex p-3 py-4    items-center  justify-between col-span-2">
        {" "}
        <h3 className="font-bold text-center text-2xl">{title} </h3>
        <Link href={urlString || ""}>
          <button className="flex  hover:underline items-center gap-1 text-[#128c7e] text-sm">
            Tất cả <FaLongArrowAltRight size={20} />
          </button>
        </Link>
      </nav>
      <CardRankingStoryImg />
      <div className="px-3 py-2 text-xs flex justify-between items-center border-t-[1px] border-gray-400">
        <span className="flex items-center gap-3">
          <span className="bg-[#f1f5f9] w-7 flex justify-center items-center h-7 rounded-full">
            2
          </span>
          <Link href={"/truyen/ten-truyen"}>
            <h4 className="max-w-[250px] overflow-hidden truncate">
              {" "}
              Đại Sư Huyền Học Là Sơn Thần abc abc abc
            </h4>
          </Link>
        </span>
        <span className="font-medium text-lg">-</span>
      </div>
    </div>
  );
}
