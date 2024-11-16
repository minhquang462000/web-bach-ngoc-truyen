"use client";
import { IBook, ICategory } from "@/interfaces";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Select } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
export interface IAppProps {
  categories: ICategory[];
  query: { [key: string]: any };
  setQuery: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  isRelate: boolean;
  setIsRelate: React.Dispatch<React.SetStateAction<boolean>>;
  handleQuery: (queryType: string, value: any) => void;
}
export default function BoxSelectSearchPage({
  categories,
  query,
  setQuery,
  isRelate,
  setIsRelate,
  handleQuery,
}: IAppProps) {
  return (
    <section className="w-full font-semibold text-sm px-3  py-4  ">
      <button
        onClick={() => setIsRelate(!isRelate)}
        className="w-full gap-3 md:gap-1 lg:gap-3  pb-4 mb-4 items-center  flex border-b border-gray-300 py-2"
      >
        <span
          className={`w-4 h-4 border rounded border-[#128c7e] ${
            isRelate ? "bg-[#128c7e]" : ""
          }`}
        >
          {isRelate && <IoMdCheckmark color="white" />}
        </span>
        Tìm kiếm liên quan
      </button>
      <div className="w-full mb-5 flex flex-col gap-2">
        <label htmlFor="">Thể loại</label>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          value={query.categories}
          placeholder="Thể loại truyện"
          onChange={(value: string[]) =>
            setQuery({ ...query, categories: value })
          }
          options={categories.map((category) => ({
            label: category.name,
            value: category._id,
          }))}
        />
      </div>
      <div className="w-full  mb-5 flex flex-col gap-2">
        <label htmlFor="">Trạng Thái</label>
        <Select
          allowClear
          style={{ width: "100%" }}
          value={query.status}
          defaultValue={0}
          onChange={(value: number) => setQuery({ ...query, status: value })}
          options={[
            {
              label: "Tất cả",
              value: 0,
            },
            {
              label: "Còn Tiếp",
              value: 1,
            },
            {
              label: "Hoàn Thành",
              value: 2,
            },
          ]}
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="">Sắp Xếp Theo Tiêu Chí</label>
        <Select
          allowClear
          style={{ width: "100%" }}
          value={query.sort}
          defaultValue={0}
          onChange={(value: number) => setQuery({ ...query, sort: value })}
          options={[
            {
              label: "Mặc định",
              value: 0,
            },
            {
              label: "Mới nhất lên trước",
              value: 1,
            },
            {
              label: "Đánh giá cao lên trước",
              value: 2,
            },
          ]}
        />
      </div>
      <button
        onClick={handleQuery.bind(null, "page", 1)}
        className="w-full text-center p-2 mt-4 hover:bg-[#0e6c61] rounded-lg text-white  bg-[#128c7e]"
      >
        Tìm kiếm
      </button>
    </section>
  );
}
