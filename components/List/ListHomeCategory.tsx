import * as React from "react";
import { IoIosClose } from "react-icons/io";

export interface IListHomeCategoryProps {
  setOpenListCategory: React.Dispatch<React.SetStateAction<boolean>>;
  wrapperRefCategory: any;
}
import Link from "next/link";
export default function ListHomeCategory(props: IListHomeCategoryProps) {
  const { setOpenListCategory, wrapperRefCategory } = props;
  return (
    <ul
      ref={wrapperRefCategory}
      className="grid grid-cols-2 text-sm md:grid-cols-4 lg:grid-cols-6 lg:p-10 lg:border rounded-md lg:h-max   text-[#585858] w-screen h-screen md:px-6 gap-8 lg:gap-y-2 overflow-y-auto px-4 py-2 bg-white relative"
    >
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          {" "}
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            1vs1
          </p>
        </Link>
      </li>
      <li>
        <Link href={"/the-loai/ten-the-loai"}>
          <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2  hover:text-white cursor-pointer">
            Ẩm thực{" "}
          </p>
        </Link>
      </li>
     
      <IoIosClose
        size={30}
        onClick={() => setOpenListCategory(false)}
        className="cursor-pointer text-gray-600 hover:text-black absolute top-2 right-2 z-50"
      />
    </ul>
  );
}
