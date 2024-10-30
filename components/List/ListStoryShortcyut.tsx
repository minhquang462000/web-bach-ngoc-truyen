import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardHomeShortcut from "../Card/CardMainHome";
import Link from "next/link";
export interface IListStoryShortcutProps { }

export default function ListStoryShortcut(props: IListStoryShortcutProps) {
  return (
    <div className=" w-full lg:col-span-3    gap-y-4 border rounded-lg  bg-transparent">
      <nav className="flex  p-2 items-center bg-white  justify-between col-span-2">
        {" "}
        <h3 className="font-semibold text-2xl">Top Ngọc Phiếu (tuần)</h3>
        <Link href={"/top-ngoc-phieu"}>
          <button className="flex  items-center hover:underline gap-1 text-[#128c7e] text-sm">
            Xem thêm <FaLongArrowAltRight />
          </button>
        </Link>
      </nav>
      <div className="px-2 grid grid-cols-2 gap-2 mt-4">
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
        <CardHomeShortcut />
      </div>
    </div>
  );
}
