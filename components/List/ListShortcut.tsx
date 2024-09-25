import Image from "next/image";
import * as React from "react";
import imgTacDaiThan from "@/public/images/icon-tac-dai-than.a0e77b3f.png";
import imgTopNgocPhieu from "@/public/images/icon-top-ngoc-phieu.e72cf4d4.png";
import imgThinhHanhTuan from "@/public/images/icon-thinh-hanh-tuan.59400260.png";
import imgDocQuyen from "@/public/images/icon-doc-quyen.de6f1b1e.png";
import imgTruyenHot from "@/public/images/icon-truyen-hot.59f98647.png";
import imgYeuThich from "@/public/images/icon-yeu-thich.d5e149c3.png";
import Link from "next/link";
export interface IListCategoryProps {}

export default function ListShortcut(props: IListCategoryProps) {
  return (
    <ul className="w-full md:grid-cols-6 lg:grid-cols-3  shadow-md lg:gap-y-4 shadow-gray-400 rounded-sm h-full lg:gap-x-2 border  gap-x-8 p-3 grid grid-cols-3">
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600  lg:p-1 p-4  rounded-xl">
        <Link href={"tac-dai-than"}>
          {" "}
          <Image src={imgTacDaiThan} alt={"imgLogo"} />
        </Link>
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600  lg:p-1 p-4  rounded-xl">
        <Link href={"top-ngoc-phieu"}>
          {" "}
          <Image src={imgTopNgocPhieu} alt={"imgLogo"} />
        </Link>
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600  lg:p-1 p-4  rounded-xl">
        <Link href={"thinh-hanh-tuan"}>
          {" "}
          <Image src={imgThinhHanhTuan} alt={"imgLogo"} />
        </Link>
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600  lg:p-1 p-4  rounded-xl">
        <Link href={"doc-quyen"}>
          {" "}
          <Image src={imgDocQuyen} alt={"imgLogo"} />
        </Link>
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600  lg:p-1 p-4  rounded-xl">
        <Link href={"truyen-hot"}>
          {" "}
          <Image src={imgTruyenHot} alt={"imgLogo"} />
        </Link>
      </li>
      <li className="cursor-pointer flex items-center justify-center text-transparent hover:shadow-lg hover:shadow-gray-600  lg:p-1 p-4  rounded-xl">
        <Link href={"yeu-thich"}>
          <Image src={imgYeuThich} alt={"imgLogo"} />
        </Link>
      </li>
    </ul>
  );
}
