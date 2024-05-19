import * as React from 'react';

export interface IListNominationStoryProps {
}

export default function ListNominationStory(props: IListNominationStoryProps) {
    return (
        <div className='w-full lg:text-sm'>
            <p className='border-b-[1px] py-1 text-sm border-gray-300 '>Đề cử gần nhất</p>
            <ul className='flex flex-col '>
                <li className='flex justify-between w-full  items-center py-2'>
                    <span className='flex flex-col w-[70%] gap-1 '>
                        <p className='text-[#128c7e] font-bold truncate overflow-hidden'>Luckyboy9999 abcabc abc acb</p>
                        <p className=''> 16-5-2024 15.33</p>
                    </span>
                    <span className='font-bold text-sm'>1 NP</span>
                </li>
                <li className='flex justify-between w-full  items-center py-2'>
                    <span className='flex flex-col w-[70%] gap-1 '>
                        <p className='text-[#128c7e] font-bold truncate overflow-hidden'>Luckyboy9999 abcabc abc acb</p>
                        <p className=''> 16-5-2024 15.33</p>
                    </span>
                    <span className='font-bold text-sm'>1 NP</span>
                </li>
                <li className='flex justify-between w-full  items-center py-2'>
                    <span className='flex flex-col w-[70%] gap-1 '>
                        <p className='text-[#128c7e] font-bold truncate overflow-hidden'>Luckyboy9999 abcabc abc acb</p>
                        <p className=''> 16-5-2024 15.33</p>
                    </span>
                    <span className='font-bold text-sm'>1 NP</span>
                </li>
                <li className='flex justify-between w-full  items-center py-2'>
                    <span className='flex flex-col w-[70%] gap-1 '>
                        <p className='text-[#128c7e] font-bold truncate overflow-hidden'>Luckyboy9999 abcabc abc acb</p>
                        <p className=''> 16-5-2024 15.33</p>
                    </span>
                    <span className='font-bold text-sm'>1 NP</span>
                </li>
               
            </ul>
        </div>
    );
}
