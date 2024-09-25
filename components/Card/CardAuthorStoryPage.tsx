import * as React from "react";

export interface ICardStoryAuthorPageProps {}
import Image from "next/image";
import Link from "next/link";

export default function CardAuthorPageStory(props: ICardStoryAuthorPageProps) {
  return (
    <div className="group  w-full flex text-xs md:text-sm flex-col gap-2 lg:items-center rounded-md hover:shadow-md  shadow-gray-400 p-2 md:p-4 pb-5">
      <Link href={"/truyen/ten-truyen"}>
        <div className="w-[180px] md:w-[180px] h-[240px] md:h-[250px]   m-auto border border-white relative cursor-pointer  rounded-lg  overflow-hidden">
          <Image
            className=" w-full h-full group-hover:scale-125 transition-all duration-500"
            src={require("@/public/images/image_test/img_.jpg").default}
            alt=""
          />
          <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8  md:py-0">
            FULL
          </span>
        </div>
      </Link>
      <div className="w-full flex flex-col gap-1 text-center">
        <Link href={"/truyen/ten-truyen"}>
          <h3 className="text-base w-full overflow-hidden truncate  text-[#1061c3] font-bold">
            Hương Sắc Khuynh Thành
          </h3>
        </Link>
        <p className="text-[#26a8cb]">Thường Thư Hân</p>
        <p className="text-[#18a263] w-full italic overflow-hidden font-light truncate">
          Ngôn tình ,Đô Thị ,Trinh thám, Thời Sự
        </p>
      </div>
    </div>
  );
}
