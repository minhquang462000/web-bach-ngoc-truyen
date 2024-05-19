import * as React from 'react';
import { FaRegThumbsUp, FaStar } from 'react-icons/fa';

export interface IListEvaluateStoryProps {
}

export default function ListEvaluateStory(props: IListEvaluateStoryProps) {
    return (
        <ul className='flex flex-col max-h-[370px] overflow-y-auto gap-2 w-full '>
            <li className='flex gap-3 border-b p-4 min-h-[120px]  relative bg-[#fffffa]'>
                <div className='bg-[#919191] w-10 h-10 overflow-hidden rounded-full'>
                    <img className='w-full h-full object-cover' src="https://bachngocsach.net.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdefault-avatar.13054518.png&w=640&q=75" alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-sm'>nguyenminhquang46</p>
                    <div className='flex gap-2'>
                        <div className='flex'>
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                        </div>
                        <p className='text-[#64748b]'>7 tháng</p>
                    </div>
                    <p>Hay đó dgia oi co len nhe. Se ung ho ban dai daiiiiiiiiiiiiiii</p>
                </div>
                <span className='flex absolute right-3 bottom-2 gap-1 text-sm items-center'><FaRegThumbsUp /> 1</span>
            </li>
            <li className='flex gap-3 border-b p-4 min-h-[120px]  relative bg-[#fffffa]'>
                <div className='bg-[#919191] w-10 h-10 overflow-hidden rounded-full'>
                    <img className='w-full h-full object-cover' src="https://bachngocsach.net.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdefault-avatar.13054518.png&w=640&q=75" alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-sm'>nguyenminhquang46</p>
                    <div className='flex gap-2'>
                        <div className='flex'>
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                        </div>
                        <p className='text-[#64748b]'>7 tháng</p>
                    </div>
                    <p>Hay đó dgia oi co len nhe. Se ung ho ban dai daiiiiiiiiiiiiiii</p>
                </div>
                <span className='flex absolute right-3 bottom-2 gap-1 text-sm items-center'><FaRegThumbsUp /> 1</span>
            </li>
            <li className='flex gap-3 border-b p-4 min-h-[120px]  relative bg-[#fffffa]'>
                <div className='bg-[#919191] w-10 h-10 overflow-hidden rounded-full'>
                    <img className='w-full h-full object-cover' src="https://bachngocsach.net.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdefault-avatar.13054518.png&w=640&q=75" alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-bold text-sm'>nguyenminhquang46</p>
                    <div className='flex gap-2'>
                        <div className='flex'>
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                            <FaStar size={15} color='#facc15' />
                        </div>
                        <p className='text-[#64748b]'>7 tháng</p>
                    </div>
                    <p>Hay đó dgia oi co len nhe. Se ung ho ban dai daiiiiiiiiiiiiiii</p>
                </div>
                <span className='flex absolute right-3 bottom-2 gap-1 text-sm items-center'><FaRegThumbsUp /> 1</span>
            </li>
            <p className='text-sm p-2 '>Bạn đã xem hết đánh giá. Hãy thêm đánh giá của bạn nhé!</p>
        </ul>
    );
}
