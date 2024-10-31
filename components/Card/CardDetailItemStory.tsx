import { FaRegPlusSquare, FaStar } from "react-icons/fa";
import ListNominationStory from "../List/ListNominationStory";
import OptionDetailItemStory from "../OptionComponent/OptionDetailImtemStory";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
export interface ICardDetailItemStoryProps { }
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardDetailItemStory({ book }: { book: IBook }) {
  const arrContributor = book.contributor.split(",");
  return (
    <div className="flex flex-col md:flex-row  w-full border p-2 lg:p-3 lg:gap-4 rounded-md  text-xs ">
      <h3 className="text-2xl md:hidden leading-8 text-[#0000ff]  font-bold">
        [Dịch]
        <span className="text-black ml-1">{book.name}</span>
      </h3>
      <div className="flex w-full md:w-3/4 lg:gap-5 gap-2 ">
        <div className=" relative cursor-pointer md:w-[200px] lg:w-1/4 h-max  rounded-lg  overflow-hidden">
          <Image
            width={200}
            height={300}
            className=" w-full aspect-[3/4]hover:scale-125 transition-all duration-500"
            src={`${DOMAIN}/api/books/${book.images[0]}`}
            alt=""
          />
          {
            book.status === 2 && <span className="bg-[#22C55E] absolute top-2 tex-xs -left-6 font-medium -rotate-[45deg] text-center text-white  px-8 ">
              FULL
            </span>
          }
        </div>
        <div className="w-2/3 md:w-2/3 lg:w-3/4 md:mt-2  flex text-sm lg:text-base flex-col gap-2 lg:gap-3">
          <h3 className="text-3xl hidden md:block leading-8 text-[#0000ff]  font-bold">
            [Dịch]
            <span className="text-black ml-1">{book.name}</span>
          </h3>
          <div className="flex flex-col lg:gap-2 gap-1">
            <p className="max-w-full overflow-hidden truncate">
              Tác giả:{" "}
              <Link
                href={`/tac-gia/${convertToSlug(book.authors[0].name)}-${book.authors[0]._id
                  }.html`}
              >
                <span className="text-[#00000099] ">
                  {book.authors[0].name}
                </span>
              </Link>
            </p>
            <p className="max-w-full overflow-hidden truncate">
              Contributor: {arrContributor.map((contributor, index) => (
                <Link key={index} href={""}>
                  <span className="text-[#00000099]">{contributor}</span>
                </Link>
              ))}
            </p>
            <p>
              Tình trạng:{" "}
              <span className={`  ${book.status === 0
                ? "text-[#ff2424]"
                : book.status === 1
                  ? "text-[#ffbd24]"
                  : book.status === 2
                    ? "text-[#098409]"
                    : ""}`}>
                {book.status === 0
                  ? "Sắp ra mắt"
                  : book.status === 1
                    ? "Đang tiến hành"
                    : book.status === 2
                      ? "Hoàn thành"
                      : ""}
              </span>
            </p>
          </div>
          <ul className="flex gap-1 md:gap-2 lg:gap-3 lg:text-xs text-[10px] flex-wrap">
            {book.categories.map((category, index) => (
              <Link key={index} href={`/the-loai/${convertToSlug(category.name)}-${category._id}.html`}>
                {" "}
                <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#4598f8] hover:text-[#098409] rounded-full">
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
          <ul className="flex gap-1 md:gap-2 lg:gap-3 text-[10px] lg:text-xs flex-wrap">
            {book.tags.map((tag, index) => (
              <Link key={index} href={`/tag/${convertToSlug(tag.name)}-${tag._id}.html`}>
                <li className="w-max cursor-pointer lg:py-1  px-4 border border-[#098409] hover:text-[#098409] rounded-full">
                  {tag.name}
                </li>
              </Link>
            ))}
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
