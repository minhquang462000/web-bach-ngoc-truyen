import TitleChangePage from "../TitleChangePage";
import Image from "next/image";
import Link from "next/link";
import { IBook, IFilter } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
import { getListBooksNoTotal } from "@/api/books";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function ListNewestStory() {
  const bookNewest: IBook[] = await getListBooksNoTotal({
    page: 1,
    limit: 9,
  } as IFilter);
  return (
    <ul className=" w-full shadow-sm shadow-gray-400 border rounded-md group  gap-x-3 gap-y-2 bg-transparent">
      <TitleChangePage title="Truyện mới nhất" url="/truyen-moi-nhat" />
      {bookNewest?.map((book, index) => (
        <li
          key={index}
          className="flex gap-3 text-sm hover:bg-gray-200 px-3 py-2"
        >
          <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
            <div className="relative w-8 overflow-hidden">
              <Image
                width={200}
                height={300}
                className="w-full aspect-[3/4] hover:opacity-70 cursor-pointer h-full object-cover "
                src={`${DOMAIN}/api/books/${book.images[0]}`}
                alt=""
              />
              {book.status === 1 && (
                <span className="bg-[#22C55E] absolute top-1  -left-2 text-[5px] w-8  font-medium -rotate-[45deg] flex justify-center items-center h-2 text-white   ">
                  FULL
                </span>
              )}
            </div>
          </Link>
          <div className="flex flex-col w-full overflow-hidden  gap-1">
            <span className="flex cursor-pointer items-center w-full  gap-1">
              <p className="text-[#0000ff]">[Dịch]</p>
              <Link
                href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}
              >
                {" "}
                <p className="hover:text-[#128c7e] w-full truncate">
                  {book.name}
                </p>
              </Link>
            </span>
            <Link
              href={`/tac-gia/${convertToSlug(book.authors[0].name)}-${
                book.authors[0]._id
              }.html`}
            >
              <p className="font-medium text-[#999999] hover:text-[#007bff] w-full overflow-hidden truncate">
                {book.authors[0].name}
              </p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
