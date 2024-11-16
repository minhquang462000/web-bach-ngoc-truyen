import { getListBooksNoTotal, getOneBook } from "@/api/books";
import CardDetailItemStory from "@/components/Card/CardDetailItemStory";
import ListNewChapterDetail from "@/components/Card/ListNewChapterDetail";
import ListCommentDetailItem from "@/components/List/ListCommentDetailItem";
import ListNewestStory from "@/components/List/ListNewestStory";
import ListStorySameAuthor from "@/components/List/ListStorySameAuthor";
import OptionInfoDetail from "@/components/OptionComponent/OptionInfoDetail";
import { IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: PropParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = String((await params).slug);
  const id = slug.split("-").pop()?.split(".")[0];
  const book = await getOneBook(id as string);

  return {
    title: book?.name,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
    description: book?.description,
    openGraph: {
      title: book?.name,
      description: book?.description,
      type: "website",
      images: [
        `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book?.images[0]}`,
      ],
    },
  };
}
export default async function page({ params }: PropParams) {
  const slug = String((await params).slug);
  const id = slug.split("-").pop()?.split(".")[0];
  const bookData = await getOneBook(id as string);
  const bookSameAuthor = await getListBooksNoTotal({
    author: bookData?.authors[0]._id,
    page: 1,
    limit: 10,
  } as IFilter);
  return (
    <MainLayout>
      <main className="p-2 w-full overflow-hidden lg:max-w-[1140px] m-auto">
        <CardDetailItemStory book={bookData} />
        <div className="md:grid gap-2 md:p-2 lg:grid-cols-4 md:pt-2 md:grid-cols-3 w-full">
          <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-4 w-full">
            <ListNewChapterDetail />
            <OptionInfoDetail description={bookData.description} />
            <p className="text-center p-8 text-[#071723] py-4 my-6 border-double   border-4 border-[#128c7e]">
              Bản dịch được đăng duy nhất ở Bạch Ngọc Sách VIP-Reader!
            </p>
            <div className="bg-[#ffffffa4] p-2 rounded-md">
              <ListCommentDetailItem />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <ListStorySameAuthor
              books={bookSameAuthor}
              author={bookData?.authors[0]}
            />
            <ListNewestStory />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
