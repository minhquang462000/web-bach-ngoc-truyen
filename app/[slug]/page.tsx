import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import CardTypeStory from "@/components/Card/CardTypeStory";
import { MainLayout } from "@/layouts";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { getListBooks } from "@/api/books";
import NoData from "@/components/NoData";
import RootPagination from "@/components/OptionComponent/RootPagination";
export interface IpageProps {}

export default async function page({ params, searchParams }: PropParams) {
  const slug = (await params).slug;
  const page = Number((await searchParams)?.page) || 1;
  const limit = 12;
  let title = "";
  let dataBooks = [];
  let total = 0;
  switch (slug) {
    case "top-ngoc-phieu":
      title = "Top Ngọc Phiếu";
      break;
    case "yeu-thich":
      title = "Truyện Yêu Thích";
      break;
    case "thinh-hanh-tuan":
      title = "Thịnh Hành Tuần";
      break;
    case "truyen-hot":
      title = "Truyện Hot";
      break;
    case "truyen-moi-nhat":
      title = "Truyện Mới Nhất";
      break;
    case "yeu-thich-thang":
      title = "Yêu Thích Tháng";
      break;
    case "moi-hoan-thanh":
      title = "Truyện Mới Hoàn Thành";
      const { data, total: totalData } =
        (await getListBooks({ status: 2, page, limit } as IFilter)) || {};
      dataBooks = data;
      total = totalData;
      break;
    case "chuong-moi-nhat":
      title = "Chương Mới Nhất";
      break;
    case "tac-gia-viet":
      title = "Tác giả Việt";
      break;
    case "trang-chu":
  }
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-bold text-2xl w-max p-3">{title}</h2>
          <ButtonShowCategory />
        </div>
        <div
          className={`grid grid-cols-2  lg:grid-cols-3 bg-transparent gap-2 lg:gap-4 ${
            total === 0 && "hidden"
          }`}
        >
          {dataBooks?.map((item: IBook) => (
            <CardTypeStory key={item._id} book={item} />
          ))}
        </div>
        {total === 0 && <NoData />}
        <RootPagination page={page} limit={limit} total={total} />
      </main>
    </MainLayout>
  );
}
