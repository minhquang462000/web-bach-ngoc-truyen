import { getListBooks, getListBooksNoTotal } from "@/api/books";
import { getOneCategory } from "@/api/category";
import CardTypeStory from "@/components/Card/CardTypeStory";
import NoData from "@/components/NoData";
import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import RootPagination from "@/components/OptionComponent/RootPagination";
import { IBook, ICategory, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: PropParams): Promise<Metadata> {
  const slug = String((await params).slug);
  const id = slug.split("-").pop()?.split(".")[0];
  const category = await getOneCategory(id as string);

  return {
    title: category?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: category?.description,
    openGraph: {
      title: category?.name,
      description: category?.description,
      type: "website",
    },
  };
}
export default async function page({ params, searchParams }: PropParams) {
  const page = Number((await searchParams)?.page) || 1;
  const slug = String((await params).slug);
  const id = slug.split("-").pop()?.split(".")[0];
  const limit = 12;
  const category: ICategory = await getOneCategory(id as string);
  const { data: bookSameCategory, total } = (await getListBooks({
    categories: [id as string],
    page,
    limit,
  } as IFilter)) || { data: [], total: 0 };
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-bold text-2xl w-max p-3">
            Truyện {category?.name}
          </h2>
          <ButtonShowCategory />
        </div>
        <nav className="p-2 bg-white ">
          <b className="mr-1">Mô tả thể loại :</b>
          <span>{category?.description}</span>
        </nav>
        <div
          className={`grid grid-cols-2  md:grid-cols-3  bg-transparent gap-2 ${
            total === 0 && "hidden"
          }`}
        >
          {bookSameCategory?.map((book: IBook, index: number) => (
            <CardTypeStory key={index} book={book} />
          ))}
        </div>
        {total === 0 && <NoData />}
        <RootPagination page={page} limit={limit} total={total} />
      </main>
    </MainLayout>
  );
}
