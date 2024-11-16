import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import CardStoryAuthorPage from "@/components/Card/CardAuthorStoryPage";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";
import { getListBooks, getListBooksNoTotal } from "@/api/books";
import { getOneAuthor } from "@/api/author";
import { IAuthor, IBook, IFilter, PropParams } from "@/interfaces";
import NoData from "@/components/NoData";
import { Root } from "postcss";
import RootPagination from "@/components/OptionComponent/RootPagination";

export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = String((await params).slug);
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
export default async function page({ params, searchParams }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const limit = 12;
  const slug = String((await params).slug);
  const id = slug.split("-").pop()?.split(".")[0];
  const author: IAuthor = await getOneAuthor(id as string);
  const { data: bookSameAuthor, total } = (await getListBooks({
    author: id,
    page,
    limit,
  } as IFilter)) || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-bold text-2xl w-max p-3">
            Tác Giả: {author?.name}
          </h2>
          <ButtonShowCategory />
        </div>
        <div
          className={`grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 bg-transparent gap-2 ${
            total === 0 && "hidden"
          }`}
        >
          {bookSameAuthor?.map((book: IBook, index: number) => (
            <CardStoryAuthorPage author={true} key={index} book={book} />
          ))}
        </div>
        {total === 0 && <NoData />}
        <RootPagination page={page} limit={limit} total={total} />
      </main>
    </MainLayout>
  );
}
