"use client";
import ListNewChapterDetail from "../Card/ListNewChapterDetail";
import OptionInfoDetail from "../OptionComponent/OptionInfoDetail";
import ListCommentDetailItem from "../List/ListCommentDetailItem";
import { useRef } from "react";

export interface IAppProps {
  des: string;
  commentPage: number;
  chapterPage: number;
}

export default function FormOptionDetailBook({ des, commentPage, chapterPage }: IAppProps) {
  const commentRef = useRef<HTMLDivElement>(null);
  const scrollToComment = () => {
    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: "smooth", block: "start"  });
    }
  };
  return (
    <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-4 w-full">
      <ListNewChapterDetail />
      <OptionInfoDetail
        scrollToComment={scrollToComment}
        page={chapterPage}
        description={des}
      />
      <p
        className="text-center p-8 text-[#071723] py-4 my-6 border-double   border-4 border-[#128c7e]"
      >
        Bản dịch được đăng duy nhất ở Bạch Ngọc Sách VIP-Reader!
      </p>
      <div ref={commentRef} className="bg-[#ffffffa4]  p-2 w-full rounded-md">
        <ListCommentDetailItem  page={commentPage} />
      </div>
    </div>
  );
}
