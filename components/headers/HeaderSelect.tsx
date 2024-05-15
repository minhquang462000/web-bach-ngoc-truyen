import * as React from "react";
import { GoQuestion } from "react-icons/go";
import { SlCloudUpload } from "react-icons/sl";
import { VscThreeBars } from "react-icons/vsc";

export interface IHeaderSelectProps {}

export default function HeaderSelect(props: IHeaderSelectProps) {
  return (
    <section className=" font-medium bg-[#343a40] text-xs lg:text-sm text-white">
      <div className="max-w-[1140px]  lg:flex justify-between mx-auto">
        <ul className="flex justify-between   items-center">
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
          >
            <VscThreeBars />
            Thể loại
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
          >
            Hoàn thành
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
          >
            Miễn phí
          </li>
          <li
            className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
          >
            Diễn đàn
          </li>
        </ul>
        <div className="hidden lg:block">
          <ul className="flex items-center ">
            <li
              className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
            >
              <GoQuestion size={18} />
              Hướng dẫn
            </li>
            <li
              className={`flex items-center cursor-pointer hover:bg-[#141414] p-3 px-4 gap-1`}
            >
              <SlCloudUpload size={18} />
              Đăng truyện
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
