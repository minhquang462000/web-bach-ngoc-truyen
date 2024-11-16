
import { MainLayout } from '@/layouts';
import Image from 'next/image';
import { FaBook, FaFileWord, FaHandHoldingHeart, FaStar } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { IoIosSettings } from 'react-icons/io';
import { PiNotePencilFill } from 'react-icons/pi';
import bnsImg from '@/public/images/np-icon.06a11732.png'
import ButtonChangeChapter from '@/components/OptionComponent/ButtonChangeChapter';
import ListCommentDetailItem from '@/components/List/ListCommentDetailItem';

export interface IpageProps {
}

export default function page(props: IpageProps) {

    return (
        <MainLayout>
            <main className=' bg-[#252c33]  text-white py-10 pb-20  w-full'>
                <div className='flex-col flex gap-4 p-2 lg:max-w-[1140px] m-auto'>
                    <div className='flex gap-1 border font-medium border-gray-500 p-2 rounded-md text-xs'>
                        <p className='hover:text-[#1268c7] cursor-pointer'>Vương Gia Marxism</p>
                        <p>/ Chương 01:Tắm nắng ngày hè</p>
                    </div>
                    <h3 className='flex items-center text-xl gap-1'><IoIosSettings /> Cài đặt giao diện</h3>
                    <ButtonChangeChapter />
                    <div className='text-xl md:w-4/5 m-auto w-full  flex flex-col gap-2'>
                        <h4 className=' font-medium'> Chương 01: Tắm nắng ngày hè</h4>
                        <ul className='flex flex-wrap gap-1'>
                            <li className='flex w-full items-center gap-1'><FaBook /> Bá Chủ Mạt Thế</li>
                            <li className='flex items-center gap-1'><PiNotePencilFill />Thiên Địa Nhất Huấn</li>
                            <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-1'><FaFileWord />1617 chữ</span>
                                <span className='flex items-center gap-1'><GoClockFill />19/5/2024</span>
                            </li>
                        </ul>
                        <p className='text-lg text-wrap w-full'>Nội dung Chapter</p>
                        <p className="text-center p-8  py-4 my-6 border-double   border-4 border-[#128c7e]">
                            Bản dịch được đăng duy nhất ở Bạch Ngọc Sách VIP-Reader!
                        </p>
                        <ul className='flex justify-center text-sm m-auto md:w-[400px] w-full items-center font-medium text-[#128c7e] '>
                            <li className='flex flex-col h-max py-3 justify-center w-[140px] gap-2 hover:shadow-md  cursor-pointer duration-500 transition-all hover:-translate-y-1 hover:shadow-[#327068] rounded-md items-center'><FaHandHoldingHeart size={18} />Ủng hộ</li>
                            <li className='flex flex-col h-max py-3 justify-center w-[140px] gap-2 hover:shadow-md   cursor-pointer duration-500 transition-all hover:-translate-y-1 hover:shadow-[#327068] rounded-md items-center'><FaStar size={18} />Đánh giá</li>
                            <li className='flex flex-col h-max py-3 justify-center w-[140px] gap-2 hover:shadow-md  cursor-pointer duration-500 transition-all hover:-translate-y-1 hover:shadow-[#327068] rounded-md items-center'><Image src={bnsImg} alt={"imgLogo"} width={35} />Đề cử</li>
                        </ul>
                    </div>
                    <span className='flex justify-between text-xs text-[#128c7e]'>
                        <p>Hoàng Hi Bình,19-5-2024,21:19:10</p>
                        <p>Lượt xem:4620</p>
                    </span>
                    <ButtonChangeChapter />
                    <span className='text-xs text-wrap w-full font-medium'>
                        Cảm ơn: <span className='text-[#126c7e]'> Nhiều thứ,</span>
                    </span>
                    <div className='text-white md:w-2/3 m-auto'>
                        <ListCommentDetailItem page={1}/>
                    </div>
                </div>

            </main>
        </MainLayout>
    );
}
