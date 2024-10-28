import Link from "next/link";
import { IoIosClose } from "react-icons/io";

export interface IListHomeCategoryProps {
  setOpenListCategory: React.Dispatch<React.SetStateAction<boolean>>;
  wrapperRefCategory: any;
  openListCategory: boolean;
}

export default function ListHomeCategory(props: IListHomeCategoryProps) {
  const { setOpenListCategory, wrapperRefCategory, openListCategory } = props;

  // Tạo danh sách 100 mục
  const items = Array.from({ length: 100 }, (_, i) => (
    <li key={i} className="m-auto">
      <Link href={`/the-loai/ten-the-loai-${i + 1}`}>
        <p className="hover:bg-[#128c7e] w-max h-max rounded-md p-2 hover:text-white cursor-pointer">
          {`1vs1 ${i + 1}`}
        </p>
      </Link>
    </li>
  ));
  return (
    <ul
      ref={wrapperRefCategory}
      className={`grid grid-cols-4 w-full md:grid-cols-7 overflow-y-auto text-sm justify-between lg:px-10 lg:border rounded-md 
           text-[#585858] h-screen md:px-6 overflow-x-auto  px-4 py-2 md:py-4  bg-white relative `}
    >
      {items}
      <IoIosClose
        size={30}
        onClick={() => setOpenListCategory(false)}
        className="cursor-pointer text-gray-600 hover:text-black absolute top-0 right-0 z-50"
      />
    </ul>
  );
}
