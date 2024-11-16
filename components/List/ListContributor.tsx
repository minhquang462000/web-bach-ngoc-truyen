
import CardContributor from "../Card/CardContributor";
import { IBook, IFilter } from "@/interfaces";
export default async function ListContributor({bookData}: {bookData: IBook[]}) {
  return (
    <section className="grid grid-cols-3 md:grid-cols-9 md:gap-3 w-full md:p-4 md:pt-6 col-span-1 gap-2 gap-y-3 relative border rounded-md border-[#128c7e] p-2 py-4">
      <p className="absolute bg-[#ffffff] font-medium px-4 rounded md:text-xl md:font-bold -top-[13px] left-1/2 -translate-x-1/2 w-max h-max">
        ConTributor đề xuất
      </p>
      {bookData.slice(0, 9).map((book, index) => (
        <CardContributor key={index} book={book} />
      ))}
    </section>
  );
}
