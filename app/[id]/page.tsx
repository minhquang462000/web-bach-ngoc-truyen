import ButtonChangePage from "@/components/OptionComponent/ButtonChangePage";
import ButtonShowCategory from "@/components/OptionComponent/ButtonShowCategory";
import CardTypeStory from "@/components/Card/CardTypeStory";
import { MainLayout } from "@/layouts";
import { headers } from "next/headers";
import TitlePage from "@/components/TitlePage";
export interface IpageProps {}

export default async function page({ params }: { params: any }) {
  return (
    <MainLayout>
      <main className="lg:max-w-[1140px] w-full md:max-w-[705px] flex flex-col gap-3 m-auto">
        <TitlePage />
        <div className="grid grid-cols-2  lg:grid-cols-3 bg-transparent gap-2 lg:gap-4">
          {/* <CardTypeStory />
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
          <CardTypeStory /> */}
        </div>
        <ButtonChangePage />
      </main>
    </MainLayout>
  );
}
