import TitleChangePage from "../TitleChangePage";
import { IBook, IFilter } from "@/interfaces";
import { getListBooksNoTotal } from "@/api/books";
import CardListBookNew from "../Card/CardListBookNew";
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function ListNewestStory() {
  const bookNewest: IBook[] = await getListBooksNoTotal({} as IFilter);
  return (
    <ul className=" w-full shadow-sm shadow-gray-400 border rounded-md group  gap-x-3 gap-y-2 bg-transparent">
      <TitleChangePage title="Truyện mới nhất" url="/truyen-moi-nhat?page=1" />
      {bookNewest?.map((book, index) => (
        <CardListBookNew key={index} book={book} />
      ))}
    </ul>
  );
}
