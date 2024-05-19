import * as React from 'react';

export interface IListNewChapterProps {
}

export default function ListNewChapterDetail(props: IListNewChapterProps) {
    return (
        <div className='w-full bg-[#f8f9faa4] text-xs'>
            <p className='w-full font-bold p-3 bg-[#f8f9fa]'>Những chương mới</p>
            <ul className='flex border-t flex-col'>
                <li className='flex p-3 border-t hover:bg-[#e8e8e8] cursor-pointer justify-between'><p>Chương 2227: Thần linh kể chuyện xưa (2)</p><p>1 ngày</p></li>
                <li className='flex p-3 border-t hover:bg-[#e8e8e8] cursor-pointer  justify-between'><p>Chương 2226: Thần linh kể chuyện xưa (1)</p><p>1 ngày</p></li>
                <li className='flex p-3 border-t hover:bg-[#e8e8e8] cursor-pointer  justify-between'><p>Chương 2226: Thần linh kể chuyện xưa (1)</p><p>1 ngày</p></li>
                <li className='flex p-3 border-t hover:bg-[#e8e8e8] cursor-pointer  justify-between'><p>Chương 2226: Thần linh kể chuyện xưa (1)</p><p>1 ngày</p></li>
                <li className='flex p-3 border-t hover:bg-[#e8e8e8] cursor-pointer  justify-between'><p>Chương 2226: Thần linh kể chuyện xưa (1)</p><p>1 ngày</p></li>
            </ul>
        </div>
    );
}
