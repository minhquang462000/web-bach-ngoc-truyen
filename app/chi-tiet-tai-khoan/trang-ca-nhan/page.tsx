import { Metadata } from 'next';
import * as React from 'react';

export interface IpageProps {
}
export const metadata: Metadata = {
    title: "Hồ sơ",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: "ĐỌc truyện mọi nơi",
    icons: {
        icon: ["/logos/logo_bns.ico?v=4"],
        apple: "/logos/logo_bns.ico?v=4",
    },
};
export default function page(props: IpageProps) {
    return (
        <main>

        </main>
    );
}
