"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonShowCategory from "./OptionComponent/ButtonShowCategory";

export interface ITitlePageProps { }

export default function TitlePage(props: ITitlePageProps) {
  const pathName = usePathname();
  const [title, setTitle] = useState("");
  useEffect(() => {
    switch (pathName) {
      case "/top-ngoc-phieu":
        setTitle("Top Ngọc Phiếu");
        break;
      case "/yeu-thich":
        setTitle("Truyện Yêu Thích");
        break;
      case "/thinh-hanh-tuan":
        setTitle("Thịnh Hành Tuần");
        break;
      case "/truyen-hot":
        setTitle("Truyện Hot");
        break;
      case "/truyen-moi-nhat":
        setTitle("Truyện Mới Nhất");
        break;
      case "/moi-hoan-thanh":
        setTitle("Truyện Mới Hoàn Thành");
        break;
      case "/mien-phi":
        setTitle("Truyện Miễn Phí");
        break;
      case "/chuong-moi-nhat":
        setTitle("Chương Mới Nhất");
        break;
      case "/tac-gia-viet":
        setTitle("Tác giả Việt");
        break;
      case "/trang-chu":
    }
  }, [pathName]);
  return (
    <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
      <h2 className="text-center font-bold text-2xl w-max p-3">{title}</h2>
      <ButtonShowCategory />
    </div>
  );
}
