import * as React from "react";
import { FiMinus } from "react-icons/fi";

export interface ICardRankingStoryProps {}

export default function CardRankingStory(props: ICardRankingStoryProps) {
  return (
    <div className="px-3 py-2 text-xs flex justify-between items-center border-t-[1px] border-gray-400">
      <span className="flex items-center gap-3">
        <span className="bg-[#f1f5f9] w-7 flex justify-center items-center h-7 rounded-full">
          2
        </span>
        <h4 className="max-w-[250px] overflow-hidden truncate">
          {" "}
          Đại Sư Huyền Học Là Sơn Thần abc abc abc
        </h4>
      </span>
      <span className="font-medium text-lg">-</span>
    </div>
  );
}
