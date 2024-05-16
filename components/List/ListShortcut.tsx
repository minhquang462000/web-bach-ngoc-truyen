import Image from "next/image";
import * as React from "react";
import imgTacDaiThan from "@/public/images/icon-tac-dai-than.a0e77b3f.png";
import imgTopNgocPhieu from "@/public/images/icon-top-ngoc-phieu.e72cf4d4.png";
import imgThinhHanhTuan from "@/public/images/icon-thinh-hanh-tuan.59400260.png";
import imgDocQuyen from "@/public/images/icon-doc-quyen.de6f1b1e.png";
import imgTruyenHot from "@/public/images/icon-truyen-hot.59f98647.png";
import imgYeuThich from "@/public/images/icon-yeu-thich.d5e149c3.png";
export interface IListCategoryProps {}

export default function ListShortcut(props: IListCategoryProps) {
  return (
    <ul className="w-full  shadow-md gap-y-4 shadow-gray-400 rounded-sm h-full border p-2 grid grid-cols-3">
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600 p-2 lg:p-1  rounded-xl">
        <Image src={imgTacDaiThan} alt={"imgLogo"} />
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600 p-2 lg:p-1  rounded-xl">
        <Image src={imgTopNgocPhieu} alt={"imgLogo"} />
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600 p-2 lg:p-1  rounded-xl">
        <Image src={imgThinhHanhTuan} alt={"imgLogo"} />
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600 p-2 lg:p-1  rounded-xl">
        <Image src={imgDocQuyen} alt={"imgLogo"} />
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600 p-2 lg:p-1  rounded-xl">
        <Image src={imgTruyenHot} alt={"imgLogo"} />
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600 p-2 lg:p-1  rounded-xl">
        <Image src={imgYeuThich} alt={"imgLogo"} />
      </li>
    </ul>
  );
}
