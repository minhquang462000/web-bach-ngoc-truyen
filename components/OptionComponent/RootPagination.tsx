"use client";
import { convertNumber } from "@/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
export interface IRootPaginationProps {
  page: any;
  limit: number;
  total: number;
  handleQuery?: (queryType: string, value: any) => void;
}

export default function RootPagination(props: IRootPaginationProps) {
  const { page, limit, total, handleQuery } = props;
  const router = useRouter();
  const pathName = usePathname();
  const handleChangePage = (page: number) => {
    if (handleQuery) {
      handleQuery("page", page);
    } else {
      router.push(`${pathName}?page=${page}`);
    }
  };
  const totalPage = Math.ceil(total / Number(limit));
  const nextPage = page + 1 > totalPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  const renderPagination = () => {
    if (totalPage <= 10) {
      return Array.from({ length: totalPage }, (_, index) => (
        <button
          key={index}
          onClick={() => handleChangePage(index + 1)}
          className={`flex items-center justify-center ${
            page === index + 1
              ? "bg-[#128c7e] text-white"
              : "bg-[#cbd5d1] text-[#094d45] "
          } w-8 h-8 rounded-md text-white font-medium   hover:text-white  hover:bg-[#128c7e] `}
        >
          {index + 1}
        </button>
      ));
    }
    let pages = [page];
    let results: string[] = [];
    const firstPages = [1, 2];
    const lastPages = [totalPage - 1, totalPage];
    let i = 1;
    const doneSides: string[] = [];

    while (pages.length < 7) {
      const left = page - i;
      if (left <= 0 || firstPages.includes(left)) {
        if (!doneSides.includes("left")) {
          const filter = pages.filter((item) => !firstPages.includes(item));
          pages = [...firstPages, ...filter];
          doneSides.push("left");
        }
      } else {
        pages = [left, ...pages];
      }

      const right = page + i;

      if (right > totalPage || lastPages.includes(right)) {
        if (!doneSides.includes("right")) {
          const filter = pages.filter((item) => !lastPages.includes(item));
          pages = [...filter, ...lastPages];
          doneSides.push("right");
        }
      } else {
        if (!pages.includes(right)) {
          pages = [...pages, right];
        }
      }
      i++;
    }

    results = pages.map((item) => item.toString());
    if (!doneSides.includes("left")) {
      results = [
        ...firstPages.map((item) => item.toString()),
        "...",
        ...pages.map((item) => item.toString()),
      ];
    }

    if (!doneSides.includes("right")) {
      results = [
        ...results.map((item) => item.toString()),
        "...",
        ...lastPages.map((item) => item.toString()),
      ];
    }
    return results.map((item, index) => {
      if (item == "...") {
        return (
          <li
            key={index}
            className={`flex px-2 w-8 h-8 bg-[#cbd5d1] text-[#094d45] rounded-md text-xs  md:text-sm  cursor-wait items-end justify-center   page-item text-primarySecond`}
          >
            {item}
          </li>
        );
      }
      return (
        <button
          key={index}
          onClick={() => handleChangePage(parseInt(item))}
          className={`flex items-center ${
            parseInt(item) == page
              ? " bg-[#128c7e] text-white"
              : "  text-[#094d45] bg-[#cbd5d1]"
          } hover:bg-[#128c7e] justify-center w-8 hover:text-white  h-8 rounded-md text-sm md:h-8 md:text-sm `}
        >
          {convertNumber(parseInt(item))}
        </button>
      );
    });
  };
  return (
    <div
      className={`w-max max-w-full m-auto my-6 p-[1px]  ${
        !totalPage && "hidden"
      }`}
      aria-label="Page navigation example"
    >
      <ul className="flex  text-white  gap-1 text- items-center justify-start -space-x-px h-8 text-xs md:h-8 md:text-sm ">
        <li
          onClick={() => handleChangePage(prevPage ?? 1)}
          className="w-8 h-8  rounded-md mr-1 flex hover:bg-[#128c7e] justify-center bg-[#cbd5d1]  cursor-pointer items-center"
        >
          <BiSolidLeftArrow size={17} />
        </li>
        {renderPagination()}
        <li
          onClick={() => handleChangePage(nextPage ?? totalPage)}
          className="w-8 h-8  rounded-md ml-1 flex hover:bg-[#128c7e] justify-center bg-[#cbd5d1]  cursor-pointer items-center"
        >
          <BiSolidRightArrow size={17} />
        </li>
      </ul>
    </div>
  );
}
