
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function ListStorySameAuthor({ books, author }: { books: IBook[], author: { _id: string, name: string } }) {
  return (
    <div className=" w-full shadow-sm group shadow-gray-400 border rounded-md   gap-x-3 gap-y-2 bg-transparent">
      <nav className="flex p-3 border-b-[1px] border-gray-400 items-center bg-white  justify-between col-span-2">
        {" "}
        <h3 className="font-bold text-sm">Truyện cùng tác giả</h3>
        <Link href={`/tac-gia/${convertToSlug(author.name)}-${author._id}.html`}>
          <button className="flex opacity-0 group-hover:opacity-100 items-center gap-1 text-[#128c7e] text-sm">
            <FaLongArrowAltRight size={25} />
          </button>
        </Link>
      </nav>
      {
        books?.map((book, index) => (
          <div key={index} className="flex gap-3 text-sm hover:bg-gray-200 px-3 py-2">
            <div className="relative h-12 w-10 overflow-hidden">
              <Image
                width={200}
                height={300}
                className="w-full cursor-pointer h-full object-cover "
                src={`${DOMAIN}/api/books/${book.images[0]}`}
                alt=""
              />
              {
                book.status === 2 && (
                  <span className="bg-[#22C55E] absolute top-1  -left-2 text-[5px] w-8  font-medium -rotate-[45deg] flex justify-center items-center h-2 text-white   ">
                    FULL
                  </span>
                )
              }
            </div>
            <div className="flex flex-col w-full overflow-hidden  gap-1">
              <span className="flex cursor-pointer items-center w-full  gap-1">
                <p className="text-[#0000ff]">[Dịch]</p>
                <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
                  {" "}
                  <p className="hover:text-[#128c7e] w-[200px] overflow-hidden truncate">
                    {book.name}
                  </p>
                </Link>
              </span>
              <p className=" text-[#999999] hover:text-[#007bff] w-full overflow-hidden truncate">
                Đọc: 46.200
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
