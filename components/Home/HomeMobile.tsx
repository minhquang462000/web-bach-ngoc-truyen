import HomeSlide from "@/components/Slides/HomeSide";
import homeBackground from "@/public/images/bg-home.jpg";
import ListShortcut from "@/components/List/ListShortcut";
import ListStoryShortcut from "@/components/List/ListStoryShortcyut";
import ListNewestStory from "@/components/List/ListNewestStory";
import ListNewestChapter from "@/components/List/ListChapterNewest";
import ListRankingStory from "../List/ListRankingStory";
import ListAuthorStory from "../List/ListAuthorStory";
import ListCompleteStory from "../List/ListCompleteStory";

export interface IHomeMobileProps {}

export default function HomeMobile(props: IHomeMobileProps) {
  return (
    <main className="w-screen lg:hidden mt-2  bg-transparent   flex flex-col gap-3 relative ">
      <img
        className="w-full  h-full object-cover object-center fixed top-0 -z-10"
        src={homeBackground.src}
        alt=""
      />
      <div className="w-screen md:max-w-[700px] bg-transparent mx-auto">
        <HomeSlide />
        <ListStoryShortcut />
        <ListShortcut />
        <ListNewestStory />
        <ListNewestChapter />
        <ListRankingStory title="Yêu Thích Tháng" />
        <ListRankingStory title="Truyện Hot " />
        <ListRankingStory title="Thịnh Hành Tuần" />
        <ListAuthorStory />
        <ListCompleteStory />
      </div>
    </main>
  );
}
