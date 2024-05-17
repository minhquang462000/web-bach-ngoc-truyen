import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardRankingStoryImg from "../Card/CardRankingStoryImg";
import CardRankingStory from "../Card/CardRankingStory";

export interface IListRankingStoryProps {
  title: string;
}

export default function ListRankingStory(props: IListRankingStoryProps) {
  const { title } = props;
  return (
    <div className="border-[1px] border-gray-300 bg-white rounded-lg">
      <nav className="flex p-3 py-4    items-center  justify-between col-span-2">
        {" "}
        <h3 className="font-bold text-center text-2xl">{title} </h3>
        <button className="flex  items-center gap-1 text-[#128c7e] text-sm">
          Tất cả <FaLongArrowAltRight size={20} />
        </button>
      </nav>
      <CardRankingStoryImg />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
      <CardRankingStory />
    </div>
  );
}
