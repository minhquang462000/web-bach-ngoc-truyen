import * as React from "react";

export interface ICardHomeShortcutProps {}

export default function CardHomeShortcut(props: ICardHomeShortcutProps) {
  return (
    <div className="flex relative flex-col lg:flex-row transition-all text-black text-sm duration-500 hover:shadow-lg hover:shadow-gray-600  lg:gap-4  p-2 lg:p-4  rounded-md  overflow-hidden bg-white">
      <div className="w-full h-full cursor-pointer lg:w-[90px] lg:h-[130px] rounded-lg  overflow-hidden">
        <img
          className=" w-full h-full hover:scale-125 transition-all duration-500"
          src="https://ngocsach.com/storage/story_img/small_lRhOeT3AEPz29Y6cg7MZMTYTsCCZJPnpVaLgSaXO.webp"
          alt=""
        />
      </div>
      <div className="flex lg:w-[290px] flex-col gap-1">
        <h4 className="text-xl cursor-pointer font-semibold w-full truncate">
          Quang Âm Chi Ngoại
        </h4>
        <p className="font-semibold text-[#6c757d]">Nhĩ Căn</p>
        <div className="lg:flex gap-2">
          <p className="text-[#28a745]">2225 Chương</p>
          <p className="text-[#007bff]">304 Đề cử/tuần</p>
        </div>
        <div className="flex">
          <blockquote
            className="before:font-[georgia] line-clamp-5 leading-5 before:content-[open-quote] text-wrap before:pr-1 before:leading-[5px] before:align-[-0.4em] before:mr-1  before:text-[3em] 
          text-xs  text-black "
          >
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
          </blockquote>
        </div>
      </div>
      <span className="absolute bg-[#950101] text-white text-xs h-8 w-[70px] text-center  -bottom-2 -right-6 font-medium  -rotate-45 font-">
        {" "}
        Top 1
      </span>
    </div>
  );
}
