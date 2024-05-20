import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import CardTypeStory from "@/components/Card/CardTypeStory";
import { MainLayout } from "@/layouts";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <div className="w-full flex flex-col md:flex-row py-4 justify-between ">
          <h2 className="text-center font-bold text-2xl w-max p-3">
          Truyện hoàn thành
          </h2>
          <ButtonShowCategory />
        </div>
        <div className="grid grid-cols-2  lg:grid-cols-3 bg-transparent gap-2 lg:gap-4">
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
          <CardTypeStory />
        </div>
        <ButtonChangePage />
      </main>
    </MainLayout>
  );
}
