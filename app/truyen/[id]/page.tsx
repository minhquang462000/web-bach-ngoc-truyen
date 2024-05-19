import CardDetailItemStory from '@/components/Card/CardDetailItemStory';
import ListNewChapterDetail from '@/components/Card/ListNewChapterDetail';
import ListAuthorStory from '@/components/List/ListAuthorStory';
import ListCommentDetailItem from '@/components/List/ListCommentDetailItem';
import ListNewestStory from '@/components/List/ListNewestStory';
import ListStorySameAuthor from '@/components/List/ListStorySameAuthor';
import OptionInfoDetail from '@/components/OptionComponent/OptionInfoDetail';
import { MainLayout } from '@/layouts';
import * as React from 'react';

export interface IpageProps {
}

export default function page(props: IpageProps) {
    return (
        <MainLayout>
            <main className='p-2 w-screen overflow-hidden lg:max-w-[1140px] m-auto'>
                <CardDetailItemStory />
                <div className='md:grid gap-2 md:p-2 lg:grid-cols-4 md:pt-2 md:grid-cols-3 w-full'>
                    <div className='md:col-span-2 lg:col-span-3 flex flex-col gap-4 w-full'>
                        <ListNewChapterDetail />
                        <OptionInfoDetail />
                        <p className="text-center p-8 text-[#071723] py-4 my-6 border-double   border-4 border-[#128c7e]">
                            Bản dịch được đăng duy nhất ở Bạch Ngọc Sách VIP-Reader!
                        </p>
                        <div className='bg-[#ffffffa4] p-2 rounded-md'>
                            <ListCommentDetailItem />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <ListStorySameAuthor />
                        <ListNewestStory />
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}
