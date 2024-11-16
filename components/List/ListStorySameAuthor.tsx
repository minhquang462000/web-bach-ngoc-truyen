
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import CardListBookNew from "../Card/CardListBookNew";
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
        <CardListBookNew detail key={index} book={book} />
        ))
      }
    </div>
  );
}
