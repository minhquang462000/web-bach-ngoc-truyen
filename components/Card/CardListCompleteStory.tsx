'use client'
import { BookCover } from "book-cover-3d";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ICardCompleteStoryProps { }

export default function CardListCompleteStory(props: ICardCompleteStoryProps) {
  return (
    <div
      className="flex relative gap-4 
     transition-all p-2 px-4 border-t border-dotted border-gray-500 text-black text-sm duration-500 
     hover:shadow-lg hover:shadow-gray-600   rounded-md  overflow-hidden bg-white"
    >
     <Link href={"/truyen/ten-truyen"}> <BookCover
        rotate={-40}
        rotateHover={0}
        thickness={1}
        width={80}
        height={120}
        radius={5}
        shadowColor="none"
      >
        <div className="relative   hover:overflow-hidden     cursor-pointer ">
          <div className="relative hover:shadow-md  hover:shadow-gray-600  overflow-hidden">
          <Image
            className="w-full h-full object-cover "
            src={require("@/public/images/image_test/img_.jpg").default}
            alt=""
          />
            <span className="bg-[#22C55E] absolute top-1 text-xs -left-4 font-medium -rotate-[40deg] text-center text-white  px-5 ">
              FULL
            </span>
          </div>
          <div className="absolute  flex items-center top-0 -z-10  p-1 w-[16px]   -left-4  h-full   justify-center bg-gradient-to-b from-[#eee] to-[#aaa] text-center text-xs ">
            <span className="absolute rotate-[90deg]   translate-y-[-10px] h-[16x] pl-[16px] text-xs leading-8  font-medium text-black">
              bachngocsach
            </span>
          </div>
        </div>
      </BookCover></Link>
      <div className="flex flex-col text-xs gap-1 ">
        <h4 className="text-lg cursor-pointer overflow-hidden font-semibold w-full truncate">
        <Link href={"/truyen/ten-truyen"}>  Quang Âm Chi Ngoại</Link>
        </h4>
        <p className="font-semibold text-[#6c757d]">Nhĩ Căn</p>
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
          <p className="line-clamp-4 text-xs">
            Kỷ gia có mỹ nhân, Tứ cô nương kinh diễm thiên hạ. Tính tình kiêu
            ngạo nhưng lại là hồng nhan bạc mệnh. Vắt óc trăn trở cưới gả ba lần
            lại thân vùi hậu trạch, dẫn đến dung nhan bị huỷ, mất hết danh tiếng
            bị gia tộc đuổi khỏi kinh. Trên đường lánh nạn bị phu xe tham lam
            giết người chiếm đoạt tài sản. Hồn lìa khỏi xác, nhìn dung mạo đã
            từng mỹ lệ dần dần thối rữa. Cuối cùng nàng cũng hiểu ra, dung nhan
            chỉ là phù du như hoa trong gương, trăng trong nước. Lần nữa tỉnh
            lại, nàng lại quay trở về lúc mười tuổi, hết thảy vẫn chưa phát
            sinh. Đời này, nàng chỉ mong sống an bình, hồi đáp ân tình của nam
            nhân đã nhặt xác cho nàng. Nhưng ngờ đâu, nàng lại phát hiện mình có
            một thân phận khác.
          </p>
        </div>
      </div>
    </div>
  );
}
