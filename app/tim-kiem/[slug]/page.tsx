import { getListBooks } from "@/api/books";
import { getListCategory } from "@/api/category";
import BoxSelectSearchPage from "@/components/BoxSelectSearchPage";
import CardTypeStory from "@/components/Card/CardTypeStory";
import NoData from "@/components/NoData";
import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import RootPagination from "@/components/OptionComponent/RootPagination";
import PageSearchBook from "@/components/PageSearchBook";
import { IBook, IFilter, PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { ToastContainer } from "react-toastify";

export default async function page({ params, searchParams }: PropParams) {
  const slug = (await params).slug;
  const page = Number((await searchParams)?.page) || 1;
  const status = (await searchParams)?.status;
  const categoriesFilter = (await searchParams)?.categories;
  const limit = 12;
  const { data: dataBooks, total } = (await getListBooks({
    search: slug,
    page,
    limit,
    categories: categoriesFilter,
    status,
  } as IFilter)) || { data: [], total: 0 };
  const categories = await getListCategory({} as IFilter);
  return (
    <MainLayout>
      <PageSearchBook
        categories={categories}
        total={total}
        page={page}
        limit={limit}
        status={status}
        dataBooks={dataBooks}
      />
    </MainLayout>
  );
}
