import HomeSlide from "@/components/Slides/HomeSide";
import HeaderSelect from "@/components/headers/HeaderSelect";
import { MainLayout } from "@/layouts";
import imgGooglePlay from "@/public/images/ch-play.7a2de44b.jpg";
import imgAppStore from "@/public/images/app-store.b67ff810.jpg";
import homeBackground from "@/public/images/bg-home.jpg";
import ListShortcut from "@/components/List/ListShortcut";
import ListStoryShortcut from "@/components/List/ListStoryShortcyut";
import ListRankingStory from "@/components/List/ListNewestStory";
import ListNewestStory from "@/components/List/ListNewestStory";
import ListNewestChapter from "@/components/List/ListChapterNewest";

export default function Home() {
  return (
    <MainLayout>
      <HeaderSelect />
      <main className="w-screen relative ">
        <img
          className="w-full  h-full object-cover object-center absolute top-0 -z-10"
          src={homeBackground.src}
          alt=""
        />
        <div className="max-w-[1140px] lg:py-5  overflow-hidden  mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block">
            <ListShortcut />
          </div>
          <div className="lg:col-span-2 h-full ">
            <HomeSlide />
          </div>
          <div className="h-full hidden lg:block bg-white text-sm border ">
            <p className="text-center font-medium p-4 pb-2 border-b text-[#128c7e] ">
              Thông tin- Tiện Ích
            </p>
            <ul className="flex list-disc flex-col gap-2 ml-6 p-4">
              <li>Thông tin mớI</li>
              <li>Gìtcode</li>
              <li>Đăng ký Dịch</li>
              <li>Đăng ký Sáng tác</li>
              <li>Review Truyện</li>
            </ul>
            <nav className="grid gap-4 gap-y-3  px-6  py-2 border-[#128c7e] grid-cols-2">
              <img src={imgGooglePlay.src} alt="" />
              <img src={imgAppStore.src} alt="" />
              <span className="flex justify-center py-2  items-center text-[#128c7e] col-span-2">
                <p>Phản hồi</p>
                <p>-</p>
                <p>Góp ý</p>
              </span>
            </nav>
          </div>
        </div>
        <div className="max-w-[1140px] mx-auto grid lg:grid-cols-4">
          <div className=""></div>
          <div className="lg:col-span-3">
            <ListStoryShortcut />
          </div>
        </div>
        <div className="lg:hidden p-3 mt-5">
          <ListShortcut />
        </div>
        <div className="p-3 w-full">
          <ListNewestStory />
          <ListNewestChapter />
        </div>
      </main>
    </MainLayout>
  );
}
