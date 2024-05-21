"use client";

import { useState } from "react";
import ListEvaluateStory from "../List/ListEvaluateStory";
import ListChapter from "../List/ListChapter";
import { join } from "path";

export interface IOptionInfoDetailProps {}
const des = `Chuế Tế (Ở Rể) của tác giả Phẫn Nộ Đích Hương Tiêu là tập truyện xoay quanh nhân vật chính Ninh Nghị, từ thân phận của một gã khổng lồ tài chính hiện đại trở về thời cổ đại, nhập vào thân xác của một người con rể tầm thường nhất trong nhà một thương gia và liên quan đến một loạt câu chuyện về gia đình, đất nước và thế giới. Nhân vật chính hưởng thụ nhân sinh, mọi việc đến đi tùy duyên, do đã trải qua một kiếp người nên có tâm cảnh thanh tĩnh, khí chất nội liễm, có cái nhìn khoáng đạt nhân sinh, đối với tri kỷ biết dùng chân tình đối đãi, đối với kẻ xác định là thù địch (ngu và tỏ ra nguy hiểm) thì ra tay không hề lưu tình. Cái hay của truyện cách nằm ở cách sắp xếp tình huống, cốt truyện và diễn biến nội tâm của nhân vật, Ninh Nghị là nhân vật trung tâm, vừa là Giang Ninh đệ nhất tài tử vừa là Huyết thủ nhân đồ ra tay quyết tuyệt nhưng không khiến người đọc cảm thấy mâu thuẫn hay quá thổi phồng. Kết hợp với sự hài hòa và pha phần hài hước về một bậc trí giả nhìn thấu lòng nhân gian. Thêm một sự đối lập mà hài hòa nữa là tình yêu của nhân vật chính. Ninh Nghị tuy là một gã lãng tử đa tình phong lưu nhưng cũng là một người chân tình chung thủy. Ở Tô gia luôn là một người chồng "biết điều" đứng sau lưng Tô Đàn Nhi hậu thuẫn cho nàng, không câu nệ thái độ người ngoài đối xử với người ở rể. Nhìn chung cả tập truyện chính là thức tỉnh thế lực, say nằm gối mỹ nhân, vạn năm hưng thịnh, thành bại xoay vần! Đáng để đọc!`;
export default function OptionInfoDetail(props: IOptionInfoDetailProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const renderByTab = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="p-4 w-full overflow-y-auto h-[290px]">
            <p className=" whitespace-pre-line text-sm ">
              {des.split(". ").join(".\n\n")}
            </p>
          </div>
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
    <div className="border w-full text-xs  overflow-hidden bg-[#f8f9facd]  rounded-lg">
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
