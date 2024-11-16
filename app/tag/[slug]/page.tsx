import { getListBooks, getListBooksNoTotal } from "@/api/books";
import { getOneTag } from "@/api/tags";
import CardTypeStory from "@/components/Card/CardTypeStory";
import NoData from "@/components/NoData";
import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import RootPagination from "@/components/OptionComponent/RootPagination";
import { IBook, IFilter, ITag, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PropParams): Promise<Metadata> {
  const slug = String((await params).slug);
  const id = slug.split("-").pop()?.split(".")[0];
  const tag = await getOneTag(id as string);
  return {
    title: tag?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: tag?.description,
    openGraph: {
      title: tag?.name,
      description: tag?.description,
      type: "website",
    },
  };
}
export default async function page({ params, searchParams }: PropParams) {
  const slug = String((await params).slug);
  const page = Number((await searchParams)?.page) || 1;
  const limit = 12;
  const id = slug.split("-").pop()?.split(".")[0];
  const tag: ITag = await getOneTag(id as string);
  const { data: bookSameTag, total } = (await getListBooks({
    tag: id,
    page,
    limit,
  } as IFilter)) || { data: [], total: 0 };
  const title = tag?.name === "Truyện Hay" ? tag?.name : `Truyện ${tag?.name}`;
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-bold text-2xl w-max p-3">{title}</h2>
          <ButtonShowCategory />
        </div>
        <nav className="p-2 bg-white ">
          <b className="mr-1">Mô tả thể loại :</b>
          <span>{tag?.description}</span>
        </nav>
        <div
          className={`grid grid-cols-2  md:grid-cols-3  bg-transparent gap-2 ${
            total === 0 && "hidden"
          }`}
        >
          {bookSameTag?.map((book: IBook, index: number) => (
            <CardTypeStory key={index} book={book} />
          ))}
        </div>
        {total === 0 && <NoData />}
        <RootPagination page={page} limit={limit} total={total} />
      </main>
    </MainLayout>
  );
}
