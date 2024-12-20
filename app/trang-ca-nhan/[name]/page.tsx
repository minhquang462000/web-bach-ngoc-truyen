import { MainLayout } from "@/layouts";
import * as React from "react";
import defaultAvt from "@/public/images/default-avatar.jpg";
import Image from "next/image";
export interface IpageProps {}
import bgProfile from "@/public/images/bg-profile.jpg";
import { PropParams } from "@/interfaces";
import { getAccount } from "@/api/account";
import { formatDate } from "@/utils/fomatDate";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function page({ params }: PropParams) {
  const name = (await params).name;
  const account = await getAccount(name as string);
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] mx-auto  relative  py-5 flex flex-col gap-5 lg:gap-8 bg-transparent">
        <div
          className="w-full absolute h-[180px] rounded-md top-5 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgProfile.src})` }}
        />
        <section className="z-10 mt-[100px]">
          <div className="flex items-center md:items-start md:ml-5 md:mb-5 flex-col  ">
            <div className="md:flex items-end md:mb-5">
              <Image
                src={
                  account.avatar
                    ? `${DOMAIN}/api/avatars/${account.avatar}`
                    : defaultAvt
                }
                width={200}
                className="rounded-full object-cover object-top w-[140px] h-[140px] mr-4 border-white border-[5px] shadow-sm"
                height={200}
                alt="avatar"
              />
              <p className="text-xl text-center my-2">{account.name}</p>
            </div>
            <Link href={`/chi-tiet-tai-khoan/${account.name}`}>
              <button className="border hover:bg-[#128c7e] hover:text-white px-3 w-max py-2 font-medium text-sm rounded text-[#128c7e] border-[#128c7e]">
                Chỉnh sửa thông tin
              </button>
            </Link>
          </div>
          <h4 className="font-bold ml-5 text-xl">Thông tin cơ bản</h4>
          <div className="px-5 md:grid grid-cols-4 md:items-start gap-5">
            <ul className="bg-[#f3f4f6] md:col-span-3   flex flex-col gap-2 p-3 my-5 rounded-md">
              <li className="flex gap-1 font-normal text-sm">
                <b>Username: </b>
                {account?.name}
              </li>
              <li className="flex gap-1 font-normal text-sm">
                <b>Vai trò: </b>
                user
              </li>
              <li className="flex gap-1 font-normal text-sm">
                <b>Giới tính: </b>
                {account?.gender === 1 ? "Nam" : "Nữ"}
              </li>
              <li className="flex gap-1 font-normal text-sm">
                <b>Tham gia vào: </b>
                {formatDate(account?.createdAt)}
              </li>
            </ul>
            <button className="text-white hover:bg-[#0c645a] bg-[#128c7e] px-3 mt-3 py-2 font-medium text-sm rounded flex w-max h-max items-center gap-2">
              <FaStar size={18} /> Top contributor
            </button>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
