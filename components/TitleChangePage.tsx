import Link from 'next/link';
import * as React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

export interface ITitleChangePageProps {
    title: string;
    url: string
}

export default function TitleChangePage(props: ITitleChangePageProps) {
    const { title, url } = props;
    return (
        <li className="flex p-3 border-b-[1px] border-gray-400 items-center bg-white  justify-between col-span-2">
            {" "}
            <h3 className="font-bold text-sm">{title}</h3>
            <Link href={url}>
                <button className="flex opacity-0 group-hover:opacity-100 items-center gap-1 text-[#128c7e] text-sm">
                    <FaLongArrowAltRight size={25} />
                </button>
            </Link>
        </li>
    );
}
