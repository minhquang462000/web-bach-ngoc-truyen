"use client";
import Image from "next/image";
import logoMain from "@/public/images/logo.49128792.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { isValidElement, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useGetEmailForLogin } from "@/stores/getEmailLocal";
import { isValidEmail } from "@/utils";

export interface IFormRegisterProps {}

export default function FormRegister(props: IFormRegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setEmail } = useGetEmailForLogin();
  const router = useRouter();
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    name: "",
    confirmPw: "",
    fullName: "",
  });
  const handleRegister = async () => {
    if (
      dataRegister.email == "" ||
      dataRegister.password == "" ||
      dataRegister.name == "" ||
      dataRegister.confirmPw == "" ||
      dataRegister.fullName == ""
    ) {
      toast.warning("Vui lòng điền đầy đủ thông tin");
    } else if (dataRegister.password != dataRegister.confirmPw) {
      toast.error("Mật khẩu nhập lại không đồng nhất");
    } else if (!isValidEmail(dataRegister.email)) {
      toast.error("Email của bạn không đúng định dạng");
    } else {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
          dataRegister
        );
        toast.success("Đăng ký thành công");
        setEmail(dataRegister.email);
        router.push("/dang-nhap");
      } catch (err: any) {
        toast.error(err.response.data.error);
      }
    }
  };
  return (
    <section className="m-auto w-full md:max-w-[570px] flex gap-5 p-5 px-10  shadow-gray-300 relative top-[4rem] lg:top-[9rem] items-center flex-col bg-opacity-60 bg-[#ffffff] rounded-2xl shadow-md lg:shadow-lg">
      <ToastContainer autoClose={1500} />
      <div className="flex flex-col items-center gap-2">
        <Link href={"/"}>
          {" "}
          <Image src={logoMain} alt={"imgLogo"} width={160} />
        </Link>
        <p className="text-2xl text-[#128c7e]  font-medium">Đăng ký</p>
      </div>
      <div className="w-full relative p-2 px-3 h-max border-2  border-[#128c7e]  rounded-md">
        <input
          className="bg-transparent w-full outline-none "
          type="text"
          onChange={(e) =>
            setDataRegister({ ...dataRegister, fullName: e.target.value })
          }
          placeholder="Vui lòng nhập họ và tên"
        />
      </div>
      <div className="w-full relative p-2 px-3 h-max border-2  border-[#128c7e]  rounded-md">
        <input
          className="bg-transparent w-full outline-none "
          type="text"
          onChange={(e) =>
            setDataRegister({ ...dataRegister, name: e.target.value })
          }
          placeholder="Vui lòng nhập tên đăng nhập"
        />
      </div>
      <div className="w-full relative p-2 px-3 h-max border-2  border-[#128c7e]  rounded-md">
        <input
          className="bg-transparent w-full outline-none "
          type="text"
          onChange={(e) =>
            setDataRegister({ ...dataRegister, email: e.target.value })
          }
          placeholder="Vui lòng nhập  email"
        />
      </div>
      <div className="w-full relative p-2 px-3 flex justify-between items-center  h-max border-2  border-[#128c7e] border-1  rounded-md">
        <input
          className="bg-transparent w-full  outline-none  "
          type={showPassword ? "text" : "password"}
          onChange={(e) =>
            setDataRegister({ ...dataRegister, password: e.target.value })
          }
          placeholder="Vui lòng nhập  mật khẩu"
        />
        <button
          className="text-[#128c7e]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}
        </button>
      </div>
      <div className="w-full relative p-2 px-3 flex justify-between items-center  h-max border-2  border-[#128c7e] border-1  rounded-md">
        <input
          className="bg-transparent w-full  outline-none  "
          type={showConfirmPassword ? "text" : "password"}
          onChange={(e) =>
            setDataRegister({ ...dataRegister, confirmPw: e.target.value })
          }
          placeholder="Vui lòng nhập lại mật khẩu"
        />
        <button
          className="text-[#128c7e]"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? (
            <FaRegEye size={25} />
          ) : (
            <FaRegEyeSlash size={25} />
          )}
        </button>
      </div>
      <button
        onClick={handleRegister}
        className="mx-auto px-8 border-[#128c7e] text-[#128c7e] hover:bg-[#128c7e] hover:text-white border w-max  p-2  rounded-md"
      >
        Đăng ký
      </button>
      <Link href={"/dang-nhap"}>
        <button className="font-bold text-[#128c7e]">Đăng nhập</button>
      </Link>
    </section>
  );
}
