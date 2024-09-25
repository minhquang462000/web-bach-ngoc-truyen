"use client";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosUndo } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import defaultAvt from "@/public/images/default-avatar.jpg";
import Image from "next/image";

export interface ICardCommentProps {}
const content = `Trong lúc chờ đợi ra chương các bạn có thể đọc thêm những bài viết trên link: https://bachngocsach.com.vn/forum/forums/95/do nick Taotao3839 đăng trên diễn đàn Bạch Ngọc Sách về những nội dung liên quan đến bộ truyện.Để làm phong phú hơn không gian, thế giới, nhiều lĩnh vực khác... xoay quanh bộ truyện "Bá Chủ Mạt Thế!" Cám ơn các bạn ^^.`;
export default function CardComment(props: ICardCommentProps) {
  const [showAllComment, setShowAllComment] = useState<boolean>(false);
  return (
    <div className="flex gap-3 w-full  text-sm ">
      <Image className="w-10 h-10 rounded-full" src={defaultAvt} alt="" />
      <div className=" flex flex-col ">
        <div className="bg-[#eeeeee2c] max-w-[300px] md:max-w-full p-3 rounded-lg">
          <span className="flex gap-1 items-center">
            <p className="font-bold"> nguyenminhquang46</p>
            <svg
              stroke="currentColor"
              color="#128c7e"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              className="text-jade-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z"></path>
            </svg>
          </span>
          <p
            className={`text-wrap my-2   text-sm whitespace-pre-wrap overflow-hidden truncate ${
              showAllComment ? "h-max" : "max-h-[60px] md:line-clamp-3"
            }`}
          >
            {content}
          </p>
          <button
            onClick={() => setShowAllComment(!showAllComment)}
            className={`font-bold pt-2 ${
              content.length > 200 ? "block" : "hidden"
            }`}
          >
            {showAllComment ? "Ẩn bớt" : "Xem thêm"}
          </button>
        </div>
        <ul className="flex  mt-1 items-center gap-1">
          <li className="flex  gap-1  items-center">
            <FaRegThumbsUp /> 1
          </li>
          <li>
            <LuDot />
          </li>
          <li className="flex    items-center">
            <IoIosUndo size={17} /> Trả lời
          </li>
          <li>
            <LuDot />
          </li>
          <li>7 tháng</li>
        </ul>
      </div>
    </div>
  );
}
