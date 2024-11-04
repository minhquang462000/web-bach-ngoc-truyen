'use client';

import { ICategory } from "@/interfaces";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import type { SelectProps } from 'antd';
import { Select, Space } from 'antd';
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
export interface IAppProps {
    categories: ICategory[]
}
export default function BoxSelectSearchPage({ categories }: IAppProps) {
    const [isRelate, setIsRelate] = useState(false);
    // const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
    // const handleChange = (value: string[]) => {
    //     setSelectedCategories(categories.filter(cat => value.includes(cat._id)));
    // };
    const router = useRouter();
    const pathName = usePathname();
    const [query, setQuery] = useState<{ [key: string]: any }>({
        page: "",
        limit: "",
        categories: [],
        status: "",
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
        if (isRelate) {
            setQuery((prevQuery) => ({
                ...prevQuery,
                [queryType]: value,
            }));
            const finalUrl = buildUrl({ ...query, [queryType]: value });
            router.push(finalUrl);
        }else{
          toast.warning("Hãy chọn tìm kiếm liên quan");
        }
    };
    return (
        <section className="w-full font-semibold text-sm px-3  py-4  ">
            <button onClick={() => setIsRelate(!isRelate)} className="w-full gap-3 md:gap-1 lg:gap-3  pb-4 mb-4 items-center  flex border-b border-gray-300 py-2">
                <span className={`w-4 h-4 border rounded border-[#128c7e] ${isRelate ? "bg-[#128c7e]" : ""}`}>
                    {isRelate && <IoMdCheckmark color="white" />}
                </span>
                Tìm kiếm liên quan
            </button>
            <div className="w-full mb-5 flex flex-col gap-2">
                <label htmlFor="">Thể loại</label>
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    value={query.categories}
                    placeholder="Thể loại truyện"
                    onChange={(value: string[]) => setQuery({ ...query, categories: value })}
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
                    style={{ width: '100%' }}
                    value={query.status}
                    defaultValue={0}
                    onChange={(value: number) => setQuery({ ...query, status: value })}

                    options={
                        [
                            {
                                label: 'Tất cả',
                                value: 0,
                            },
                            {
                                label: 'Còn Tiếp',
                                value: 1,
                            },
                            {
                                label: 'Hoàn Thành',
                                value: 2,
                            },
                        ]
                    }
                />
            </div>
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="">Sắp Xếp Theo Tiêu Chí</label>
                <Select
                    allowClear
                    style={{ width: '100%' }}
                    value={query.sort}
                    defaultValue={0}
                    onChange={(value: number) => setQuery({ ...query, sort: value })}

                    options={
                        [
                            {
                                label: 'Mặc định',
                                value: 0,
                            },
                            {
                                label: 'Mới nhất lên trước',
                                value: 1,
                            },
                            {
                                label: 'Đánh giá cao lên trước',
                                value: 2,
                            },
                        ]
                    }
                />
            </div>
            <button onClick={handleQuery.bind(null, "page", 1)} className="w-full text-center p-2 mt-4 hover:bg-[#0e6c61] rounded-lg text-white  bg-[#128c7e]">Tìm kiếm</button>
        </section>
    );
}
