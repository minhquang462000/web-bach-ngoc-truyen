"use client";
import { IBook, ICategory } from "@/interfaces";
import CardTypeStory from "./Card/CardTypeStory";
import NoData from "./NoData";
import RootPagination from "./OptionComponent/RootPagination";
import BoxSelectSearchPage from "./BoxSelectSearchPage";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export interface IAppProps {
  total: number;
  page: number;
  limit: number;
  dataBooks: IBook[];
  categories: ICategory[];
  status: any;
}

export default function PageSearchBook({
  total,
  page,
  limit,
  dataBooks,
  categories,
  status,
}: IAppProps) {
  const [isRelate, setIsRelate] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const [query, setQuery] = useState<{ [key: string]: any }>({
    page,
    limit,
    categories: [],
    status,
    sort: "",
  });
  const buildUrl = (filters: Record<string, any>) => {
    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          query.append(key, val);
        });
      } else if (value) {
        query.set(key, value);
      }
    });
    return `${pathName}?${query.toString()}`;
  };
  const handleQuery = (queryType: string, value: any) => {
    if (queryType === "page") {
      setIsRelate(false);
    }
    setQuery((prevQuery) => ({
      ...prevQuery,
      [queryType]: value,
    }));
    const finalUrl = buildUrl({ ...query, [queryType]: value });
    router.push(finalUrl);
  };
  return (
    <main className="lg:max-w-[1140px] w-full md:max-w-[705px] grid grid-cols-1 md:grid-cols-4 gap-1 m-auto">
      <section className="w-full px-3  md:col-span-3 py-4  ">
        <h4 className="text-center pb-4 mb-4 w-full border-gray-300 border-b items-end flex justify-between font-medium text-lg ">
          Kết quả tìm kiếm truyện
          <span className="text-sm font-normal">{total} truyện</span>
        </h4>
        <div className={`grid grid-cols-2    gap-2 ${total === 0 && "hidden"}`}>
          {dataBooks?.map((book: IBook, index: number) => (
            <CardTypeStory key={index} book={book} />
          ))}
        </div>
        {total === 0 && <NoData />}
        <RootPagination
          handleQuery={handleQuery}
          page={page}
          limit={limit}
          total={total}
        />
      </section>
      <BoxSelectSearchPage
        query={query}
        setQuery={setQuery}
        isRelate={isRelate}
        setIsRelate={setIsRelate}
        handleQuery={handleQuery}
        categories={categories}
      />
    </main>
  );
}
