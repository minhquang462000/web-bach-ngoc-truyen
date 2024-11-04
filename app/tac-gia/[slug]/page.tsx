import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import CardStoryAuthorPage from "@/components/Card/CardAuthorStoryPage";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import { getListBooks, getListBooksNoTotal } from "@/api/books";
import { getOneAuthor } from "@/api/author";
import { IAuthor, IBook, IFilter, PropParams } from "@/interfaces";
import NoData from "@/components/NoData";


export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const id = slug.split("-").pop()?.split(".")[0];
  const author = await getOneAuthor(id as string);

  return {
    title: author?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: author?.description,
    openGraph: {
      title: author?.name,
      description: author?.description,
      type: "website",
    },
  };
}
export default async function page({ params }: PropParams) {
  const slug = (await params).slug;
  const id = slug.split("-").pop()?.split(".")[0];
  const author: IAuthor = await getOneAuthor(id as string);
  const res = await getListBooks({
    author: id,
    page: 1,
    limit: 12,
  } as IFilter);
  const bookSameAuthor = res?.data
  const total = res?.total
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-bold text-2xl w-max p-3">
           Tác Giả: {author?.name}
          </h2>
          <ButtonShowCategory />
        </div>
        <div className={`grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 bg-transparent gap-2 ${total === 0 && "hidden"}`}>
          {bookSameAuthor?.map((book: IBook, index: number) => (
            <CardStoryAuthorPage author="tac-gia" key={index} book={book} />
          ))}
        </div>
        {total > 0 ? <ButtonChangePage /> : <NoData />}
      </main>
    </MainLayout>
  );
}

