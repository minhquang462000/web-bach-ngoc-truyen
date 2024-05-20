import * as React from 'react';

export interface ICardStoryAuthorPageProps {
}

export default function CardAuthorPageStory (props: ICardStoryAuthorPageProps) {
  return (
    <div className='group  w-full flex text-xs md:text-sm flex-col gap-2 lg:items-center rounded-md hover:shadow-md  shadow-gray-400 p-2 md:p-4 pb-5'>
      <div className="w-[180px] md:w-[180px] h-[240px] md:h-[250px]   m-auto border border-white relative cursor-pointer  rounded-lg  overflow-hidden">
        <img
          className=" w-full h-full group-hover:scale-125 transition-all duration-500"
          src="https://bachngocsach.net.vn/_next/image?url=https%3A%2F%2Fngocsach.com%2Fstorage%2Fstory_img%2Fsmall_ypK0gjucbLELKoFXpPGjyExvaKHYgo1GsMpUNDCm.webp&w=1080&q=75"
          alt=""
        />
        <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8  md:py-0">
          FULL
        </span>
      </div>
      <div className='w-full flex flex-col gap-1 text-center'>
        <h3 className='text-base w-full overflow-hidden truncate  text-[#1061c3] font-bold'>Hương Sắc Khuynh Thành</h3>
        <p className='text-[#26a8cb]'>Thường Thư Hân</p>
        <p className='text-[#18a263] w-full italic overflow-hidden font-light truncate'>Ngôn tình ,Đô Thị ,Trinh thám, Thời Sự</p>
      </div>
    </div>
  );
}
