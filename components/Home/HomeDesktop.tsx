import * as React from "react";
import ListShortcut from "../List/ListShortcut";
import HomeSlide from "../Slides/HomeSide";
import imgGooglePlay from "@/public/images/ch-play.7a2de44b.jpg";
import imgAppStore from "@/public/images/app-store.b67ff810.jpg";
import ListNewestStory from "../List/ListNewestStory";
import ListNewestChapter from "../List/ListChapterNewest";
import ListStoryShortcut from "../List/ListStoryShortcyut";
import homeBackground from "@/public/images/bg-home.jpg";
import ListRankingStory from "../List/ListRankingStory";
import ListAuthorStory from "../List/ListAuthorStory";
import ListCompleteStory from "../List/ListCompleteStory";
export interface IHomeDesktopProps { }

export default function HomeDesktop(props: IHomeDesktopProps) {
  return (
    <main className="hidden bg-transparent   min-h-screen  relative mt-2  mx-auto lg:block">
      <div className="lg:max-w-[1140px] mx-auto flex flex-col gap-3 bg-transparent">
        <div className="grid grid-cols-4 bg-transparent  gap-3">
          <ListShortcut />
          <div className="col-span-2">
            <HomeSlide />
          </div>
          <section className="h-full hidden lg:block bg-white text-sm border ">
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
            <nav className="grid gap-4 gap-y-3   px-6  py-2 border-[#128c7e] grid-cols-2">
              <img src={imgGooglePlay.src} alt="" />
              <img src={imgAppStore.src} alt="" />
              <span className="flex justify-center py-2  items-center text-[#128c7e] col-span-2">
                <p>Phản hồi</p>
                <p>-</p>
                <p>Góp ý</p>
              </span>
            </nav>
          </section>
          <section className="flex flex-col gap-2">
            <ListNewestStory />
            <ListNewestChapter />
          </section>
          <section className=" col-span-3">
            <ListStoryShortcut />
          </section>
        </div>
        <div className="grid gap-x-3  grid-cols-3">
          <ListRankingStory title="Yêu Thích Tháng" urlString="/yeu-thich-thang" />
          <ListRankingStory title="Truyện Hot" urlString="/truyen-hot" />
          <ListRankingStory title="Thịnh Hành Tuần" urlString="/thinh-hanh-tuan" />
        </div>
        <ListAuthorStory />
        <ListCompleteStory />
      </div>
    </main>
  );
}
