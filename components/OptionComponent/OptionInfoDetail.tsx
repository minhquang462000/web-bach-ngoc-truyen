"use client";

import { useState } from "react";
import ListEvaluateStory from "../List/ListEvaluateStory";
import ListChapter from "../List/ListChapter";

export interface IOptionInfoDetailProps {}
export default function OptionInfoDetail(props: IOptionInfoDetailProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const renderByTab = () => {
    switch (tabIndex) {
      case 0:
        return (
          <p className="whitespace-pre-wrap ">
            Thiên địa là quán trọ cho vạn vật chúng sinh, còn thời gian vốn là
            khách qua đường từ xưa đến nay. Sinh và tử sai biệt, sự khác biệt
            cũng tựa như giữa mộng và tỉnh, luôn biến hóa rối ren, không thể xét
            dò. Như vậy thì, nếu đã vượt qua sinh tử, đã vượt ra thiên địa, tại
            bên ngoài thời gian, chúng ta sẽ gặp phải điều gì nữa, và bản thân
            chúng ta đã là đẳng cấp gì, định nghĩa ra sao? Đây là quyển sách kế
            tiếp của Nhĩ Căn, sau những quyển: 《 Tiên Nghịch 》 《 Cầu Ma 》 《
            Ngã Dục Phong Thiên 》 《 Nhất Niệm Vĩnh Hằng 》 《 Tam Thốn Nhân
            Gian 》, là quyển tiểu thuyết dài thứ 6 《 Quang Âm Chi Ngoại
            》(Dịch tên truyện: Bên Ngoài Thời Gian).
          </p>
        );
      case 1:
        return <ListEvaluateStory />;
      case 2:
        return <ListChapter />;
      default:
        return null;
    }
  };
  return (
    <div className="border w-full text-xs py-1 bg-[#f8f9facd]  rounded-lg">
      <ul className="flex border-b text-center ">
        <li
          onClick={() => setTabIndex(0)}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 0 && "text-[#128c7e] font-medium"
          } border-r`}
        >
          Giới thiệu
        </li>
        <li
          onClick={() => setTabIndex(1)}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 1 && "text-[#128c7e] font-medium"
          } border-r`}
        >
          Đánh giá
        </li>
        <li
          onClick={() => setTabIndex(2)}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e]  md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 2 && "text-[#128c7e] font-medium"
          } border-r`}
        >
          D.S Chương
        </li>
        <li
          onClick={() => setTabIndex(3)}
          className={`w-1/4 md:w-max p-2 md:p-3 hover:text-[#128c7e] md:px-4 border-gray-600 cursor-pointer ${
            tabIndex === 3 && "text-[#128c7e] font-medium"
          } `}
        >
          Bình luận
        </li>
      </ul>
      {renderByTab()}
    </div>
  );
}
