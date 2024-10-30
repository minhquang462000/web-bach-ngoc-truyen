import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export interface ICardContributorProps {
}

export default function CardContributor(props: ICardContributorProps) {
    return (
        <div className=' hover:shadow rounded'>
            <div className=' overflow-hidden rounded-md md:w'>
                <Link href={'/truyen/ten-truyen'}>
                    <Image
                        className=" w-full h-full object-cover   hover:scale-125 transition-all duration-500"
                        src={require("@/public/images/image_test/img_.jpg").default}
                        alt=""
                    />
                </Link>
            </div>
            <Link href={'/truyen/ten-truyen'}>
                <h4 className="text-xs mt-2  hover:text-[#128c7e] cursor-pointer font-semibold w-full truncate">
                    Quang Âm Chi Ngoại
                </h4>
                </Link>
        </div>
    );
}
