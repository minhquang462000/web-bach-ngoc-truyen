import * as React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardHomeShortcut from "../Card/CardMainHome";
import Link from "next/link";
export interface IListStoryShortcutProps {}

export default function ListStoryShortcut(props: IListStoryShortcutProps) {
  return (
    <div className=" w-full   grid grid-cols-2 gap-4 bg-transparent">
      <nav className="flex shadow p-2 items-center bg-white rounded-md justify-between col-span-2">
        {" "}
        <h3 className="font-semibold text-2xl">Top Ngọc Phiếu (tuần)</h3>
        <Link href={"/top-ngoc-phieu"}>
          <button className="flex  items-center hover:underline gap-1 text-[#128c7e] text-sm">
            Tất cả <FaLongArrowAltRight />
          </button>
        </Link>
      </nav>
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
  );
}
