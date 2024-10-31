import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/interfaces";
import { convertToSlug } from "@/utils/converToSlug";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default function CardListAuthorStoryHome({ book }: { book: IBook }) {
  return (
    <div className="flex hover:shadow-lg hover:shadow-gray-600 group  p-2 px-4 text-sm gap-3   rounded-md   bg-white ">
      <div className="w-1/5 md:w-1/4 h-max  cursor-pointer rounded-md overflow-hidden">
        <Image
          width={200}
          height={300}
          className="w-full aspect-[5/7] object-cover group-hover:scale-125 transition-all duration-500"
          src={`${DOMAIN}/api/books/${book.images[0]}`}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 w-4/5">
        <Link href={`/truyen/${convertToSlug(book.name)}-${book._id}.html`}>
          {" "}
          <p className=" text-base font-medium max-w-[300px] md:w-[250px] overflow-hidden truncate hover:text-[#128c7e]">{book.name}</p>
        </Link>
        <Link
          href={`/tac-gia/${convertToSlug(book.authors[0].name)}-${book.authors[0]._id
            }.html`}
        >
          {" "}
          <p className="hover:text-[#007bff] font-medium">{book.authors[0].name}</p>
        </Link>
        <ul className="flex items-center text-xs h-[25px] max-w-[150px] overflow-hidden  gap-1 flex-wrap ">
          {book.categories.map((category, index) => (
            <li key={index} className="p-[2px] cursor-pointer px-1 border rounded-full border-[#22C55E]">
              <Link
                href={`/the-loai/${convertToSlug(category.name)}-${category._id
                  }.html`}
              >
                {category.name}
              </Link>
            </li>
          ))}

        </ul>
        <Link href={"/truyen/ten-truyen/chapter"}>
          {" "}
          <p className="max-w-[250px] font-medium overflow-hidden hover:text-[#007bff] truncate">
            Chương 668:Dở khóc sở cười như con đười ươi
          </p>
        </Link>
      </div>
    </div>
  );
}
