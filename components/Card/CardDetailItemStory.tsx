import { FaRegPlusSquare, FaStar } from "react-icons/fa";
import ListNominationStory from "../List/ListNominationStory";
import OptionDetailItemStory from "../OptionComponent/OptionDetailImtemStory";
import Image from "next/image";
import Link from "next/link";
export interface ICardDetailItemStoryProps {}

export default function CardDetailItemStory(props: ICardDetailItemStoryProps) {
  return (
    <div className="flex flex-col md:flex-row  w-full border p-2 lg:p-3 lg:gap-4 rounded-md  text-xs ">
      <h3 className="text-2xl md:hidden leading-8 text-[#0000ff]  font-bold">
        [Dịch]
        <span className="text-black ml-1">Quang Âm Chi Ngoại</span>
      </h3>
      <div className="flex w-full md:w-3/4 lg:gap-5 gap-2 ">
        <div className=" relative cursor-pointer md:w-[200px] lg:w-1/4 h-max  rounded-lg  overflow-hidden">
          <Image
            className=" w-full aspect-[3/4]hover:scale-125 transition-all duration-500"
            src={require("@/public/images/image_test/img_.jpg").default}
            alt=""
          />
          <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8 ">
            FULL
          </span>
        </div>
        <div className="w-2/3 md:w-2/3 lg:w-3/4 md:mt-2  flex text-sm lg:text-base flex-col gap-2 lg:gap-3">
          <h3 className="text-3xl hidden md:block leading-8 text-[#0000ff]  font-bold">
            [Dịch]
            <span className="text-black ml-1">Quang Âm Chi Ngoại</span>
          </h3>
          <div className="flex flex-col lg:gap-2 gap-1">
            <p className="max-w-full overflow-hidden truncate">
              Tác giả:{" "}
              <Link href={"/tac-gia/ten-tac-gia"}>
                <span className="text-[#00000099] ">
                  Nhĩ Căn abc abc bac bac bac bac acb
                </span>
              </Link>
            </p>
            <p className="max-w-full overflow-hidden truncate">
              Contributor: <span className="text-[#00000099]">Đình Phong</span>
            </p>
            <p>
              Tình trạng: <span className="text-[#098409]">Hoàn thành</span>
            </p>
          </div>
          <ul className="flex gap-1 md:gap-2 lg:gap-3 lg:text-xs text-[10px] flex-wrap">
            <Link href={"/the-loai/ten-theloai"}>
              {" "}
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#4598f8] hover:text-[#098409] rounded-full">
                Tiên Hiệp
              </li>
            </Link>
            <Link href={"/the-loai/ten-theloai"}>
              {" "}
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#4598f8] hover:text-[#098409] rounded-full">
                Trinh Thám{" "}
              </li>
            </Link>
            <Link href={"/the-loai/ten-theloai"}>
              {" "}
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#4598f8] hover:text-[#098409] rounded-full">
                Xuyên không
              </li>
            </Link>
            <Link href={"/the-loai/ten-theloai"}>
              {" "}
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#4598f8] hover:text-[#098409] rounded-full">
                {" "}
                Hậu Cung - Harem
              </li>
            </Link>
          </ul>
          <ul className="flex gap-1 md:gap-2 lg:gap-3 text-[10px] lg:text-xs flex-wrap">
            <Link href={"/the-loai/ten-theloai"}>
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#098409] hover:text-[#098409] rounded-full">
                Truyện Hay
              </li>
            </Link>
            <Link href={"/the-loai/ten-theloai"}>
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#098409] hover:text-[#098409] rounded-full">
                Đại Thần Dịch
              </li>
            </Link>
            <Link href={"/the-loai/ten-theloai"}>
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#098409] hover:text-[#098409] rounded-full">
                Độc quyền BNS
              </li>
            </Link>
            <Link href={"/the-loai/ten-theloai"}>
              {" "}
              <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#098409] hover:text-[#098409] rounded-full">
                Tác Đại Thần
              </li>
            </Link>
          </ul>
          <ul className="flex gap-2 text-xs lg:text-sm lg:max-w-[300px] lg:text-wrap lg:gap-4 flex-wrap">
            <li className="text-[#dc3545]">3.007.888 Chữ</li>
            <li className="text-[#098409]">1726 Chương</li>
            <li className="text-[#4598f8]">716.608 Đọc</li>
            <li className="text-[#fd7514]">216 Lưu</li>
            <li className="text-[#098409]">4364 Đề Cử Ngọc Phiếu</li>
          </ul>
          <div className="hidden  md:block">
            <OptionDetailItemStory />
          </div>
        </div>
      </div>
      <div className="md:hidden mt-2">
        <OptionDetailItemStory />
      </div>
      <div className="flex md:w-1/4  flex-col bg-transparent gap-2">
        <div className="flex items-center h-max justify-center ">
          <FaStar size={20} className="text-[#ffbc0b]" />
          <FaStar size={20} className="text-[#ffbc0b]" />
          <FaStar size={20} className="text-[#ffbc0b]" />
          <FaStar size={20} className="text-[#ffbc0b]" />
          <FaStar size={20} className="text-[#ffbc0b]" />
        </div>
        <div className="flex items-center group border h-[60px] relative md:text-  rounded-lg overflow-hidden">
          <p className="text-[#12a62f] relative p-4 flex justify-center w-1/2 text-2xl font-sans font-bold">
            5.0{" "}
            <span className="text-xs absolute top-2 right-2  text-gray-400 font-normal">
              /5
            </span>
          </p>
          <span className="w-1/2 bg-[#f4f4f4] p-4 h-ful flex flex-col justify-center items-center">
            Đánh giá:<span>66 lượt</span>
          </span>
          <div className="w-full h-full  opacity-0 group-hover:opacity-100 bg-[#4c4c4c27] text-[#128c7e] flex justify-center items-center absolute top-0">
            <FaRegPlusSquare size={18} />
          </div>
        </div>
        <ListNominationStory />
      </div>
    </div>
  );
}
