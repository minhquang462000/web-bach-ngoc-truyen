"use client";
import { use, useState } from "react";
import ListEvaluateStory from "../List/ListEvaluateStory";
import ListChapter from "../List/ListChapter";
import { usePathname } from "next/navigation";
import Link from "next/link";

export interface IOptionInfoDetailProps {
  description: string;
  page: number;
  scrollToComment: () => void;
}
export default function OptionInfoDetail({
  description,
  page,
  scrollToComment,
}: IOptionInfoDetailProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const pathName = usePathname();
  const renderByTab = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="p-4 w-full overflow-y-auto h-[290px]">
            <p className=" whitespace-pre-line text-sm ">
              {description.split(". ").join(".\n\n")}
            </p>
          </div>
        );
      case 1:
        return <ListEvaluateStory />;
      case 2:
        return <ListChapter page={page} />;
      default:
        return null;
    }
  };
  return (
    <div className="border w-full text-xs  overflow-hidden bg-[#f8f9facd]  rounded-lg">
      <ul className="flex border-b text-center ">
        <li
          onClick={() => setTabIndex(0)}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 0 && "text-[#128c7e] font-medium"
          } border-r`}
        >
          Giới thiệu
        </li>
        <li
          onClick={() => setTabIndex(1)}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 1 && "text-[#128c7e] font-medium"
          } border-r`}
        >
          Đánh giá
        </li>
        <Link href={`${pathName}/?chapPage=1`}>
          <li
            onClick={() => setTabIndex(2)}
            className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${
              tabIndex === 2 && "text-[#128c7e] font-medium"
            } border-r`}
          >
            D.S Chương
          </li>
        </Link>
        <li
          onClick={() => (setTabIndex(3), scrollToComment())}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e] md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 3 && "text-[#128c7e] font-medium"
          } `}
        >
          Bình luận
        </li>
      </ul>
      {renderByTab()}
    </div>
  );
}
