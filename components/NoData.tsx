import * as React from 'react';

export interface INoDataProps {
}

export default function NoData(props: INoDataProps) {
    return (
        <div className='flex-col m-5 w-max mx-auto rounded-md text-[#128c7e] flex items-center justify-center'>
            <div className="flex flex-row pb-4 pt-2 gap-2">
                <div className="w-2 h-2 rounded-full bg-[#128c7e] animate-bounce [animation-delay:.7s]"></div>
                <div className="w-2 h-2 rounded-full bg-[#128c7e] animate-bounce [animation-delay:.3s]"></div>
                <div className="w-2 h-2 rounded-full bg-[#128c7e] animate-bounce [animation-delay:.7s]"></div>
            </div>
            <p className='text-lg font-medium'>Không có truyện rồi ...</p>
        </div>
    );
}
