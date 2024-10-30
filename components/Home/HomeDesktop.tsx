import * as React from "react";
import ListShortcut from "../List/ListShortcut";
import HomeSlide from "../Slides/HomeSide";
import imgGooglePlay from "@/public/images/ch-play.7a2de44b.jpg";
import imgAppStore from "@/public/images/app-store.b67ff810.jpg";
import ListNewestStory from "../List/ListNewestStory";
import ListNewestChapter from "../List/ListChapterNewest";
import ListStoryShortcut from "../List/ListStoryShortcyut";
import ListRankingStory from "../List/ListRankingStory";
import ListAuthorStory from "../List/ListAuthorStory";
import ListCompleteStory from "../List/ListCompleteStory";
import Image from "next/image";
import ListContributor from "../List/ListContributor";
export interface IHomeDesktopProps { }

export default function HomeDesktop(props: IHomeDesktopProps) {
  return (
    <main className="lg:max-w-[1140px] mx-auto  relative  py-5 flex flex-col gap-5 bg-transparent">
      <section className="grid lg:grid-cols-4 grid-cols-1 bg-transparent lg:gap-3  gap-y-3 ">
        <div className="hidden lg:block">
          <ListShortcut />
        </div>
        <div className="lg:col-span-2 px-10 lg:px-0 col-span-1 ">
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
          <nav className="grid gap-4 gap-y-3   px-6  py-2 border-[#128c7e] grid-cols-2">
            <Image src={imgGooglePlay} alt="" />
            <Image src={imgAppStore} alt="" />
            <span className="flex justify-center py-2  items-center text-[#128c7e] col-span-2">
              <p>Phản hồi</p>
              <p>-</p>
              <p>Góp ý</p>
            </span>
          </nav>
        </div>
      
      </section>
        <ListContributor />
      <div
          className="flex flex-col-reverse lg:grid grid-cols-4 px-10 lg:px-0 lg:gap-3  gap-5 ">
          <div className="flex flex-col gap-2 ">
            <ListNewestStory />
            <ListNewestChapter />
          </div>
          <div className="lg:hidden ">
            <ListShortcut />
          </div>
          <ListStoryShortcut />
        </div>
       
      <section className='grid gap-3 px-10 lg:px-0  lg:grid-cols-3'>
        <ListRankingStory title="Yêu Thích Tháng" urlString="/yeu-thich-thang" />
        <ListRankingStory title="Truyện Hot" urlString="/truyen-hot" />
        <ListRankingStory title="Thịnh Hành Tuần" urlString="/thinh-hanh-tuan" />
      </section>
      <ListAuthorStory />
      <ListCompleteStory />
    </main>
  );
}
