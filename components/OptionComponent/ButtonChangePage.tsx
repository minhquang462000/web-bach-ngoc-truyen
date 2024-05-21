import * as React from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

export interface IButtonChangePageProps {}

export default function ButtonChangePage(props: IButtonChangePageProps) {
  return (
    <ul className="flex gap-2 my-5 mx-auto justify-center text-white font-medium items-center">
      <li className="w-8 h-8 rounded-md flex justify-center bg-[#cde5d1]  cursor-pointer items-center">
        <BiSolidLeftArrow size={17} />
      </li>
      <li className="w-8 h-8 rounded-md flex justify-center bg-[#128c7e] text-sm cursor-pointer items-center">
        1
      </li>
      <li className="w-8 h-8 rounded-md flex justify-center bg-[#cde5d1]  cursor-pointer items-center">
        <BiSolidRightArrow size={17} />
      </li>
    </ul>
  );
}
