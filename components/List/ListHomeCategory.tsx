import * as React from "react";
import { IoIosClose } from "react-icons/io";

export interface IListHomeCategoryProps {
  setOpenListCategory: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ListHomeCategory(props: IListHomeCategoryProps) {
  const { setOpenListCategory } = props;
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:p-10 lg:border rounded-md lg:h-max text-lg text-[#585858] w-screen h-screen md:px-6 gap-8 overflow-y-auto px-4 py-2 bg-white relative">
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">1vs1</li>
      <li className="hover:text-[#26b9fe] cursor-pointer">Ẩm thực</li>
      <IoIosClose
        size={30}
        onClick={() => setOpenListCategory(false)}
        className="cursor-pointer text-gray-600 hover:text-black absolute top-2 right-2 z-50"
      />
    </ul>
  );
}
