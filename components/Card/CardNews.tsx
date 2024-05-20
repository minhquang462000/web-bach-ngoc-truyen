"use client";

import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface ICardNewsProps {}

export default function CardNews(props: ICardNewsProps) {
  const [showAllNews, setShowAllNews] = useState(false);
  return (
    <div className=" rounded-md text-lg  p-4 shadow   bg-white ">
      <div
        onClick={() => setShowAllNews(!showAllNews)}
        className="flex font-medium justify-between h-[30px] cursor-pointer  items-center text-[#128c7e] "
      >
        <p className="cursor-pointer hover:underline">
          Mã khuyễn mãi T5-2024(mừng đại lễ)
        </p>
        {!showAllNews ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>
      <div
        className={`text-sm overflow-hidden transitionProperty-[max-height] duration-500 text-[#0f172a]   ${
          showAllNews ? "max-h-[300px] " : "max-h-0"
        }`}
      >
        <p>
          Chào tháng mới và mừng đại lễ, VIP-BNS gửi tặng đến quý bạn đọc{" "}
          <b>Mã KM T5-2024</b>.
        </p>
        <p>*Thông tin Mã KM:</p>
        <p className="pl-[40px]">
          - Giá trị khuyến mãi: Giảm giá{" "}
          <strong>
            <em>45%</em>
          </strong>{" "}
          cho <strong>150</strong> chương VIP (bất kỳ của mọi bộ truyện).
        </p>
        <p className="pl-[40px]">
          - Số lượng Mã: <strong>300</strong>
        </p>
        <p className="pl-[40px]">
          - Hạn sử dụng: <strong>31-05-2024</strong>
        </p>
        <p className="pl-[40px]">
          <i>
            *Lưu ý: Mỗi Mã KM chỉ sử dụng cho một tài khoản, và mỗi tài khoản
            chỉ có thể sử dụng mỗi loại mã1 lần. Mã sử dụng khi mở khóa từng
            chương, <strong>không</strong> áp dụng khi{" "}
            <strong className="text-[#e67e23] mr-1">Mở Combo/Full</strong>
            vì đã có giảm riêng mặc định 20% với Combo/Full.
          </i>
        </p>
        <p>
          Các bạn nhấp vào link này:{" "}
          <strong className="text-[#128c7e] cursor-pointer">
            Danh sách các loại giftcode (bachngocsach.net.vn)
          </strong>
          &nbsp;, rồi nhấp vào nút{" "}
          <span>
            <strong className="text-[#128c7e]">Xem danh sách</strong>
          </span>{" "}
          để hiển thị danh sách Mã KM nhé, hệ thống sẽ cập nhật rõ trạng thái Mã
          KM còn hạn và chưa ai sử dụng, các bạn chỉ cần bấm copy mã chưa có ai
          dùng là được, theo dõi rất tiện và không mất thời gian check từng mã.
        </p>
        <p>- Nếu user chưa từng Thêm Tiên Thạch, sẽ không thể nhập Mã KM.</p>
        <p>
          - User đã nhập Mã KM thành công, nhưng nếu chưa sử dụng để mở khóa
          chương, thì user khác có thể nhập lại Mã đó và sử dụng. User sử dụng
          để mở khóa chương trước sẽ được tính.
        </p>
        <p>
          VIP-BNS sẽ luôn cải thiện hệ thống và dịch vụ để phục vụ mọi người tốt
          hơn, chân thành cảm ơn mọi người!
        </p>
        <p>
          Mời các bạn follow Fanpage{" "}
          <span>
            <strong className="text-[#128c7e] cursor-pointer">
              Bạch Ngọc Sách Vip-Reader
            </strong>
          </span>
        </p>
        <p>
          Link page:{" "}
          <Link href={""}> https://www.facebook.com/vip.bachngocsach</Link>
        </p>
      </div>
    </div>
  );
}
