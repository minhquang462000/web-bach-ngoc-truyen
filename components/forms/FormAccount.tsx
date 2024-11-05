import { IUser } from "@/interfaces";
import Image from "next/image";
import * as React from "react";
import defaultAvt from "@/public/images/default-avatar.jpg";
import tienthach from "@/public/images/tien-thach.73a28be0.png";
import ngocphieu from "@/public/images/np-icon.06a11732.png";
import Link from "next/link";
export interface IAccountProps {
  account: IUser;
}
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function FormAccount({ account }: IAccountProps) {
  return (
    <div className="p-5 w-[400px] md:w-[600px] font-medium">
      <div className="flex w-full ">
        <Image
          src={
            account.avatar
              ? `${DOMAIN}/api/avatars/${account.avatar}`
              : defaultAvt
          }
          width={50}
          className="rounded-full w-[100px] object-cover object-top h-[100px] mr-4"
          height={50}
          alt="avatar"
        />
        <ul className="text-black w-2/3 text-xs">
          <li className="text-xl">{account.name}</li>
          <li>user</li>
          <li className="flex gap-2 my-1 items-center">
            <Image src={tienthach} width={40} height={40} alt="tienthach" />
            <div>Tiên Thạch:0.00 Tiên Thạch KM:0.00</div>
          </li>
          <li className="flex gap-2 items-center">
            <Image src={ngocphieu} width={40} height={40} alt="ngocphieu" />
            <p>Ngọc Phiếu: 0</p>
          </li>
        </ul>
      </div>
      <ul className="grid grid-cols-2 mt-4  text-sm gap-3 w-full text-center">
        <Link href={`/trang-ca-nhan/${account.name}`}>
          {" "}
          <li className="border col-span-1 w-full hover:bg-[#128c7e] hover:text-white border-[#128c7e] rounded-xl p-2 py-1">
            Trang cá nhân
          </li>
        </Link>
        <li className="border col-span-1 cursor-pointer w-full hover:bg-[#128c7e] hover:text-white border-[#128c7e] rounded-xl p-2 py-1">
          Thêm cơ thạch
        </li>
        <Link href={`/chi-tiet-tai-khoan//${account.name}`}>
          {" "}
          <li className="border col-span-1 cursor-pointer w-full hover:bg-[#128c7e] hover:text-white border-[#128c7e] rounded-xl p-2 py-1">
            Chi tiết tài khoản
          </li>
        </Link>
        <li className="border col-span-1 cursor-pointer w-full hover:bg-[#128c7e] hover:text-white border-[#128c7e] rounded-xl p-2 py-1">
          Nhập giftcode
        </li>
        <li className="border col-span-1 cursor-pointer text-black w-full hover:bg-[#128c7e] hover:text-white border-[#128c7e] rounded-xl p-2 py-1">
          Đăng xuất
        </li>
      </ul>
    </div>
  );
}
