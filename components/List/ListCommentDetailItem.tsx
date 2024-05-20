import * as React from 'react';
import CardComment from '../Card/CardComment';
import ButtonChangePage from '../OptionComponent/ButtonChangePage';
import defaultAvt from '@/public/images/default-avatar.jpg'
export interface IListCommentDetailItemProps {
}

export default function ListCommentDetailItem(props: IListCommentDetailItemProps) {
  return (
    <div className='flex flex-col   gap-5'>
      <h2 className='text-2xl font-medium '>Bình luận (96)</h2>
      <div className='flex gap-3  items-center text-sm '>
        <img className='w-10 h-10 rounded-full' src={defaultAvt.src} alt="" />
        <div className='flex  w-full border-b gap-2 items-end justify-between'>
          <textarea
            name='comment'
            placeholder='Bình luận của bạn ...'
            className='outline-none  h-[40px]    px-3   w-full bg-transparent' />
          <svg
            className='cursor-pointer'
            color='#128c7e'
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z">
            </path>
          </svg>
        </div>
      </div>
      <CardComment />
      <ButtonChangePage />
    </div>
  );
}
