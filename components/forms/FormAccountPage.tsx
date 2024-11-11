"use client";
import defaultAvt from "@/public/images/default-avatar.jpg";
import bgProfile from "@/public/images/bg-profile.jpg";
import { IUser } from "@/interfaces";
import { IoHomeOutline, IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";
import FormDashboardAccount from "./FormDashboardAccount";
import { useState } from "react";
import Image from "next/image";
import { FaCamera, FaUser } from "react-icons/fa";
import tienthach from "@/public/images/tien-thach.73a28be0.png";
import ngocphieu from "@/public/images/np-icon.06a11732.png";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function HeaderPageAccount({ account }: { account: IUser }) {
  const [isShowDashboard, setIsShowDashboard] = useState(false);
  const [file, setFile] = useState(null);
  const [dataAccount, setDataAccount] = useState({
    fullName: account?.fullName,
    gender: account?.gender,
    birthDay: account?.birthDay,
    avatar: account.avatar || defaultAvt,
  });
  const formatDate = (date: any) => {
    return date ? date.toString().split("T")[0] : "";
  };
  const router = useRouter();
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0]; // Lấy file từ input
    if (selectedFile) {
      setFile(selectedFile); // Lưu file vào state
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setDataAccount({
            ...dataAccount,
            avatar: reader.result,
          });
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const handleUpdateAccount = async () => {
    try {
      if (dataAccount.avatar !== account.avatar && file) {
        const formData = new FormData();
        formData.append("images", file);
        const res = await axios.post(`${DOMAIN}/api/upload/images`, formData);
        await axios.patch(`${DOMAIN}/api/client/users/${account._id}`, {
          fullName: dataAccount.fullName,
          gender: dataAccount.gender,
          birthDay: dataAccount.birthDay,
          avatar: res.data[0],
        });
      } else {
        await axios.patch(`${DOMAIN}/api/client/users/${account._id}`, {
          fullName: dataAccount.fullName,
          gender: dataAccount.gender,
          birthDay: dataAccount.birthDay,
          avatar: dataAccount.avatar,
        });
      }
      toast.success("Cập nhật thành công");
      router.refresh();
    } catch (e: any) {
      toast.error(e.response.data.error);
    }
  };
  return (
    <section>
      <ToastContainer autoClose={1500} />
      <header className="flex px-4 py-3 shadow-md items-center justify-between">
        <button onClick={() => setIsShowDashboard(!isShowDashboard)}>
          {" "}
          <IoReorderThreeOutline size={30} />
        </button>
        <div className="flex items-center gap-2">
          <p className="text-xs">{account?.name}</p>
          <Link href={"/"}>
            <IoHomeOutline size={20} />
          </Link>
        </div>
      </header>
      <FormDashboardAccount
        isShowDashboard={isShowDashboard}
        setIsShowDashboard={setIsShowDashboard}
      />
      <div
        className="w-full h-[120px] mt-5 rounded-md   bg-cover bg-center"
        style={{ backgroundImage: `url(${bgProfile.src})` }}
      />
      <div className="w-max mx-auto relative">
        <Image
          src={
            dataAccount.avatar === account.avatar
              ? `${DOMAIN}/api/avatars/${account.avatar}`
              : dataAccount.avatar
          }
          width={200}
          className="rounded-full mt-3  object-cover object-top w-[150px] h-[150px] mr-4 border-white border-[5px] shadow-sm"
          height={200}
          alt="avatar"
        />
        <input
          className="absolute inset-0 opacity-0 cursor-pointer w-[150px] h-[150px] rounded-full"
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file"
          className="bg-[#a1a1a1] z-10 absolute inset-0 opacity-0 hover:opacity-100 flex items-center justify-center bg-opacity-60 cursor-pointer w-[150px] h-[150px] rounded-full"
        >
          <FaCamera size={30} color="#128c7e" />
        </label>
      </div>
      <div className="text-xs mt-4 px-1">
        <span className="flex gap-2 px-2 border-b pb-2 border-gray-400 items-center">
          {" "}
          <FaUser />
          Thông tin cá nhân
        </span>
        <ul className="px-2 mt-2 flex gap-2 flex-col">
          <li className="font-bold">Username: {account.name}</li>
          <li className="font-bold">Email: {account.email}</li>
          <li className="flex gap-2 my-1 items-center">
            <Image src={tienthach} width={45} height={45} alt="tienthach" />
            <span className="font-bold text-[11px]">
              <p>Số dư: 0.00 Tiên Thạch</p>
              <p>Số dư KM: 0.00 Tiên Thạch KM</p>
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <Image src={ngocphieu} width={40} height={40} alt="ngocphieu" />
            <b>Ngọc Phiếu: 0</b>
          </li>
          <li className="border col-span-1 text-white cursor-pointer w-max hover:bg-[#106359] hover:text-white bg-[#128c7e] rounded p-2">
            Thêm Tiên Thạch
          </li>
          <li className="flex gap-2 flex-col">
            <label htmlFor="fullName" className="font-bold">
              Họ và tên
            </label>
            <input
              className="border p-2 rounded focus:ring-1 outline-none focus:ring-[#128c7e]"
              type="text"
              id="fullName"
              onChange={(e) =>
                setDataAccount({ ...dataAccount, fullName: e.target.value })
              }
              value={dataAccount.fullName}
            />
          </li>
          <li className="flex gap-2 flex-col">
            <label htmlFor="gender" className="font-bold">
              Giới tính
            </label>
            <select
              className="border p-2 rounded focus:ring-1 outline-none focus:ring-[#128c7e]"
              name="gender"
              onChange={(e) =>
                setDataAccount({
                  ...dataAccount,
                  gender: parseInt(e.target.value),
                })
              }
              id=""
            >
              <option value="1">Nam</option>
              <option value="0">Nữ</option>
            </select>
          </li>
          <li className="flex gap-2 flex-col">
            <label htmlFor="birthDay" className="font-bold">
              Giới tính
            </label>
            <input
              className="border p-2 rounded focus:ring-1 outline-none focus:ring-[#128c7e]"
              type="date"
              id="fullName"
              onChange={(e) =>
                setDataAccount({ ...dataAccount, birthDay: e.target.value })
              }
              value={formatDate(dataAccount.birthDay)}
            />
          </li>
          <li className="flex gap-2 items-center">
            <button
              onClick={handleUpdateAccount}
              className="border col-span-1 text-white cursor-pointer w-max  hover:bg-[#106359] hover:text-white bg-[#128c7e] rounded p-2 py-[5px]"
            >
              Lưu lại
            </button>
            <button className="border col-span-1 cursor-pointer w-max hover:bg-[#128c7e] hover:text-white border-[#128c7e] rounded p-2 py-1">
              Đổi mật khẩu
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
