'use client'

import { useState } from "react";
import ListEvaluateStory from "../List/ListEvaluateStory";
import ListChapter from "../List/ListChapter";

export interface IOptionInfoDetailProps {
}
export default function OptionInfoDetail(props: IOptionInfoDetailProps) {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const renderByTab = () => {
        switch (tabIndex) {
            case 0:
                return <p className="whitespace-pre-wrap text-sm  p-4 max-h-[290px] overflow-y-auto">
                    Sinh ra ở tận thế bộc phát trăm năm sau hắc ám kỷ nguyên Tần Vũ tại một lần đi săn bên trong tử vong, trùng sinh đến tận thế bộc phát ngày đầu tiên.
                    Một trận huyết vũ hàng lâm, người đã chết một lần nữa đứng lên, khát vọng tươi đẹp huyết nhục, sinh mệnh giống loài phát sinh biến dị, hung mãnh Biến Dị Thú tàn phá bừa bãi, càng có đến từ dị không gian cường đại dị tộc nhìn chằm chằm.
                    Văn minh hủy diệt, đạo đức băng tang, nhân loại phải chăng có thể tiếp tục sinh tồn mạt thế tàn khốc?
                    Là thành là lãnh khốc ác ma vẫn là nhân từ chúa cứu thế?
                    Tiến hóa cực hạn là thiên đường hay là địa ngục?</p>
            case 1:
                return <ListEvaluateStory />;
            case 2:
                return <ListChapter />;
            default:
                return null;
        }
    };
    return (
        <div className='border w-full text-xs py-1 bg-[#f8f9facd]  rounded-lg'>
            <ul className='flex border-b text-center '>
                <li onClick={() => setTabIndex(0)} className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${tabIndex === 0 && "text-[#128c7e] font-medium"} border-r`}>Giới thiệu</li>
                <li onClick={() => setTabIndex(1)} className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${tabIndex === 1 && "text-[#128c7e] font-medium"} border-r`}>Đánh giá</li>
                <li onClick={() => setTabIndex(2)} className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${tabIndex === 2 && "text-[#128c7e] font-medium"} border-r`}>D.S Chương</li>
                <li onClick={() => setTabIndex(3)} className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e] md:px-4 border-gray-600 cursor-pointer ${tabIndex === 3 && "text-[#128c7e] font-medium"} `}>Bình luận</li>
            </ul>
            {renderByTab()}
        </div>
    );
}
