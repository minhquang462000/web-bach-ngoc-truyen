import { getListBooksNoTotal } from "@/api/books";
import { getOneCategory } from "@/api/category";
import CardTypeStory from "@/components/Card/CardTypeStory";
import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import { IBook, ICategory, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";



export async function generateMetadata({ params }: PropParams): Promise<Metadata> {
  const slug = (await params).slug;
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
export default async function page({ params }: PropParams) {
  const slug = (await params).slug;
  const id = slug.split("-").pop()?.split(".")[0];
  const category: ICategory = await getOneCategory(id as string);
  const bookSameCategory = await getListBooksNoTotal({
    category: id,
    page: 0,
    limit: 12,
  } as IFilter);
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
        <div className="grid grid-cols-2  lg:grid-cols-3 bg-transparent gap-2 lg:gap-4">
          {bookSameCategory?.map((book: IBook, index: number) => (
            <CardTypeStory key={index} book={book} />
          ))}
        </div>
        <ButtonChangePage />
      </main>
    </MainLayout>
  );
}
