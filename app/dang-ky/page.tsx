
'use client'
import * as React from 'react';
import homeBackground from "@/public/images/bg-home.jpg";
import Image from 'next/image';
import logoMain from '@/public/images/logo.49128792.png'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
export interface IloginProps {
}

export default function register(props: IloginProps) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showComfirmPassword, setShowComfirmPassword] = React.useState(false);
    return (
        <main className='w-screen  text-black h-screen relative'>
            <img
                className="w-screen  min-h-screen object-cover object-center fixed top-0 -z-10"
                src={homeBackground.src}
                alt=""
            />
            <div className='m-auto w-full md:max-w-[570px] flex gap-7 p-5 px-10 shadow-gray-300 relative top-[4rem] lg:top-[9rem] items-center flex-col  bg-[#f0f0f079] rounded-2xl h-max shadow-md lg:shadow-lg'>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={logoMain} alt={"imgLogo"} width={160} />
                    <p className='text-2xl text-[#128c7e]  font-medium'>Đăng ký</p>
                </div>
                <div className='w-full relative p-2 px-3 h-max  ring-[#128c7e] ring-1 focus:ring-2 rounded-md'>
                    <input className='bg-transparent outline-none ' type="text" placeholder='Vui lòng nhập họ và tên' />
                </div>
                <div className='w-full relative p-2 px-3 h-max  ring-[#128c7e] ring-1 focus:ring-2 rounded-md'>
                    <input className='bg-transparent outline-none ' type="text" placeholder='Vui lòng nhập tên đăng nhập' />
                </div>
                <div className='w-full relative p-2 px-3 h-max  ring-[#128c7e] ring-1 focus:ring-2 rounded-md'>
                    <input className='bg-transparent outline-none ' type="text" placeholder='Vui lòng nhập  email' />
                </div>
                <div className='w-full relative p-2 px-3 flex justify-between items-center  h-max  ring-[#128c7e] ring-1 focus:ring-2 rounded-md'>
                    <input className='bg-transparent  outline-none  ' type={showPassword ? "text" : "password"} placeholder='Vui lòng nhập  mật khẩu' />
                    <button className='text-[#128c7e]' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}</button>
                </div>
                <div className='w-full relative p-2 px-3 flex justify-between items-center  h-max  ring-[#128c7e] ring-1 focus:ring-2 rounded-md'>
                    <input className='bg-transparent  outline-none  ' type={showComfirmPassword ? "text" : "password"} placeholder='Vui lòng nhập lại mật khẩu' />
                    <button className='text-[#128c7e]' onClick={() => setShowComfirmPassword(!showComfirmPassword)}>{showComfirmPassword ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}</button>
                </div>
                <button className='mx-auto px-8 border-[#128c7e] text-[#128c7e] hover:bg-[#128c7e] hover:text-white border w-max  p-2  rounded-md'>Đăng ký</button>
                <Link href={"/dang-nhap"}><button className='font-bold text-[#128c7e]'>Đăng nhập</button></Link>

            </div>
        </main>
    );
}
