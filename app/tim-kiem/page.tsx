import { getListBooks } from "@/api/books";
import CardTypeStory from "@/components/Card/CardTypeStory";
import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";


export default async function page({ searchParams }: PropParams) {
  const resolvedSearchParams = await searchParams;
  const queryName = resolvedSearchParams?.q
    ? resolvedSearchParams.q.toString().replace(/-/g, " ")
    : "";
  const res = await getListBooks({
    search: queryName,
    page: 0,
    limit: 12,
  } as IFilter);
  const dataBooks = res?.data;
  const total = res?.total;  
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-medium text-lg w-max p-3">
            Tìm kiếm theo
            <span className="text-[#128c7e]  ml-2"> {`"${queryName}"`}</span>
          </h2>
          <p className="font-medium">{total} kết quả ...</p>
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-3 bg-transparent gap-2 lg:gap-4">
          {dataBooks?.map((book: IBook, index: number) => (
            <CardTypeStory key={index} book={book} />
          ))}
        </div>
        <ButtonChangePage />
      </main>
    </MainLayout>
  );
}
