"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
export interface ICardHomeShortcutProps {}

export default function CardMainHome(props: ICardHomeShortcutProps) {
  return (
    <div className="flex relative flex-col text-xs md:text-sm p-2 group md:flex-row transition-all text-black  duration-500 hover:shadow-lg hover:shadow-gray-600  md:gap-4  md:p-3  rounded-md  overflow-hidden bg-white">
      <Link href={"/truyen/ten-truyen"}>
        <div className="w-full h-full relative cursor-pointer md:w-[90px] md:h-[130px] rounded-lg  overflow-hidden">
          <Image
            className=" w-full h-full object-cover  group-hover:scale-125 transition-all duration-500"
            src={require("@/public/images/image_test/img_.jpg").default}
            alt=""
          />
          <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8 ">
            FULL
          </span>
        </div>
      </Link>
      <div className="flex md:w-[290px] flex-col mt-2 gap-2">
        <Link href={"/truyen/ten-truyen"}>
          <h4 className="text-xl lg:text-base md:text-2xl hover:text-[#128c7e] cursor-pointer font-semibold w-full truncate">
            Quang Âm Chi Ngoại
          </h4>
        </Link>
        <Link href={"/tac-gia/ten-tac-gia"}>
          <p className="font-semibold cursor-pointer hover:text-[#007bff] w-full  text-[#6c757d]">
            Nhĩ Căn
          </p>
        </Link>
        <div className="md:flex-row flex flex-col gap-1">
          <p className="text-[#28a745]">2225 Chương</p>
          <p className="text-[#007bff]">304 Đề cử/tuần</p>
        </div>
        <div className="mt-2 flex gap-1">
          <div className="mr-1 h-8 w-8 ">
            <svg
              stroke="currentColor"
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
          <p className="line-clamp-4  ">
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
      <span className="absolute bg-[#950101] text-white text-xs h-8 w-[70px] text-center  -bottom-2 -right-6 font-medium  -rotate-45 font-">
        {" "}
        Top 1
      </span>
    </div>
  );
}
