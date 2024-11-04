'use client';
import { ICategory } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";

export interface IListHomeCategoryProps {
  setOpenListCategory: React.Dispatch<React.SetStateAction<boolean>>;
  wrapperRefCategory: any;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function ListHomeCategory(props: IListHomeCategoryProps) {
  const { setOpenListCategory, wrapperRefCategory } = props;
  const [listAllCategory, setListCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    const fetDataCategories = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/api/client/categories`);
        setListCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetDataCategories()
  }, []);
  return (
    <ul
      ref={wrapperRefCategory}
      className={`grid grid-cols-4 w-full md:grid-cols-5 lg:grid-cols-9 overflow-y-auto text-sm justify-between lg:px-10 lg:py-[40px] lg:border rounded-md 
           text-[#585858]  gap-y-8 md:px-6 overflow-x-auto  px-4 py-2 md:py-4  bg-white relative `}
    >
      {listAllCategory?.map((category, i) => (
        <li key={i} className="m-auto">
          <Link href={`/the-loai/${convertToSlug(category.name)}-${category._id}.html`}>
            <p className="hover:bg-[#128c7e] w-[100px] lg:max-w-[200px] lg:w-max text-center overflow-hidden lg:overflow-auto truncate   rounded-md p-2 hover:text-white cursor-pointer">
              {category.name}
            </p>
          </Link>
        </li>
      ))}
      <IoIosClose
        size={30}
        onClick={() => setOpenListCategory(false)}
        className="cursor-pointer text-gray-600 hover:text-black absolute top-0 right-0 z-50"
      />
    </ul>
  );
}
