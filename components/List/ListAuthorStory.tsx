import { FaLongArrowAltRight } from "react-icons/fa";
import CardAuthorStory from "../Card/CartListAuthorStoryHome";
import { IBook, IFilter } from "@/interfaces";
import { getListBooksNoTotal } from "@/api/books";
import Link from "next/link";

export default async function ListAuthorStory() {
  const listBookByAuthor: IBook[] = await getListBooksNoTotal({
    page: 1,
    limit: 9,
  } as IFilter);
  return (
    <div className=" w-full md:grid-cols-2 grid lg:grid-cols-3 gap-2 bg-transparent">
      <div className="flex shadow p-2 md:col-span-2  items-center bg-white rounded-md justify-between lg:col-span-3">
        {" "}
        <h3 className="font-semibold text-2xl">Tác giả Việt</h3>
        <Link href="/tac-gia-viet?page=1">
          {" "}
          <button className="flex  items-center hover:underline gap-1 text-[#128c7e] text-sm">
            Xem thêm <FaLongArrowAltRight />
          </button>
        </Link>

      </div>
      {listBookByAuthor?.map((book, index) => (
        <CardAuthorStory key={index} book={book} />
      ))}
    </div>
  );
}
