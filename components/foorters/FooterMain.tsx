import * as React from 'react';
import imgAppStore from "@/public/images/app-store.b67ff810.jpg"
import imgGooglePlay from "@/public/images/ch-play.7a2de44b.jpg"
import Image from 'next/image';
export interface IFooterMainProps {
}

export default function FooterMain (props: IFooterMainProps) {
  return (
    <footer className='bg-white flex justify-center flex-col p-4  items-center gap-2 '>
      <div className='flex gap-3'>
        <Image src={imgAppStore} alt={"imgLogo"} width={100} height={50}/>
        <Image src={imgGooglePlay} alt={"imgLogo"} width={100} height={50}/>
      </div>
      <ul className='text-sm font-extrabold text-[#128c7e]'>
        <li>Điều khoản dịch vụ - Bản quyền </li>
        <li>Chính sách điều khoản - Dịch vụ</li>
      </ul>
    </footer>
  );
}
