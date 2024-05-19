import * as React from 'react';
import { FaGift } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import ButtonChangePage from '../OptionComponent/ButtonChangePage';

export interface IListChapterProps {
}

export default function ListChapter(props: IListChapterProps) {
  return (
    <div className=' w-full bg-[#f8f9fa7e] flex flex-col pt-4 pb-2 gap-1  text-sm'>
      <div className='flex  font-medium  justify-between px-4 items-center'>
        <span className='flex items-center gap-2'>
          <input style={{ accentColor: '#128c7e', }} id="checkbox" type="checkbox" value=""
            className="w-4 h-4 " />
          <label htmlFor="checkbox">Mới nhất</label>
        </span>
        <button className='flex bg-[#ff9900] p-2 rounded-md text-white items-center gap-1'><FaGift />Mở Combo/full</button>
      </div>
      <div className='text-xs'>
        <ul className='flex font-medium py-1  text-center  bg-[#212529] text-white  items-center'>
          <li className='w-[60px] '>STT</li>
          <li className=' p-2  border-x-[1px] border-white  w-full text-start'>Tựa chương</li>
          <li className='w-[80px]  flex justify-center '><GoClockFill size={18} /></li>
        </ul>
        <ul className='flex flex-col max-h-[1000px] overflow-y-auto w-full '>
          <li className='flex border-t-[1px] py-3  cursor-pointer hover:bg-gray-100 w-full text-center items-center'>
            <span className='w-[60px] m-auto '>1</span>
            <p className='w-full px-2  overflow-hidden  text-start truncate '>Chương 1: Giấc Mộng? Thực Tế? abc sadh sadjh sajdh sadjk sadkjh  </p>
            <span className='w-[80px] '>1 năm</span>
          </li>
          <li className='flex border-t-[1px] py-3  cursor-pointer hover:bg-gray-100 w-full text-center items-center'>
            <span className='w-[60px] m-auto '>1</span>
            <p className='w-full px-2  overflow-hidden  text-start truncate '>Chương 1: Giấc Mộng? Thực Tế? abc sadh sadjh sajdh sadjk sadkjh  </p>
            <span className='w-[80px] '>1 năm</span>
          </li>
          <li className='flex border-t-[1px] py-3  cursor-pointer hover:bg-gray-100 w-full text-center items-center'>
            <span className='w-[60px] m-auto '>1</span>
            <p className='w-full px-2  overflow-hidden  text-start truncate '>Chương 1: Giấc Mộng? Thực Tế? abc sadh sadjh sajdh sadjk sadkjh  </p>
            <span className='w-[80px] '>1 năm</span>
          </li>
        </ul>
        <ButtonChangePage />
      </div>
    </div>
  );
}
