import { getListBooks } from "@/api/books";
import { getListCategory } from "@/api/category";
import BoxSelectSearchPage from "@/components/BoxSelectSearchPage";
import CardTypeStory from "@/components/Card/CardTypeStory";
import NoData from "@/components/NoData";
import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { ToastContainer } from "react-toastify";


export default async function page({ params, searchParams }: PropParams) {
  const slug = (await params).slug;
  // const query = (await searchParams).q;
  const res = await getListBooks({
    search: slug,
    page: 0,
    limit: 12,
  } as IFilter);
  const dataBooks = res?.data;
  const total = res?.total;
  const categories = await getListCategory({} as IFilter);
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] grid grid-cols-1 md:grid-cols-4 gap-1 m-auto">
        <section className="w-full px-3  md:col-span-3 py-4  ">
          <h4 className="text-center pb-4 mb-4 w-full border-gray-300 border-b items-end flex justify-between font-medium text-lg ">
            Kết quả tìm kiếm truyện
            <span className="text-sm font-normal">{total} truyện</span>
          </h4>
          <div className={`grid grid-cols-2    gap-2 ${total === 0 && "hidden"}`}>
            {dataBooks?.map((book: IBook, index: number) => (
              <CardTypeStory key={index} book={book} />
            ))}
          </div>
          {total > 0 ? <ButtonChangePage /> : <NoData />}
        </section>
        <BoxSelectSearchPage categories={categories} />
      </main>
    </MainLayout>
  );
}
