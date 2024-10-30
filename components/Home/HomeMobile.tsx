import HomeSlide from "@/components/Slides/HomeSide";
import homeBackground from "@/public/images/bg-home.jpg";
import ListShortcut from "@/components/List/ListShortcut";
import ListStoryShortcut from "@/components/List/ListStoryShortcyut";
import ListNewestStory from "@/components/List/ListNewestStory";
import ListNewestChapter from "@/components/List/ListChapterNewest";
import ListRankingStory from "../List/ListRankingStory";
import ListAuthorStory from "../List/ListAuthorStory";
import ListCompleteStory from "../List/ListCompleteStory";
import SectionRankBooks from "../List/SectionRankBooks";

export interface IHomeMobileProps { }

export default function HomeMobile(props: IHomeMobileProps) {
  return (
    <main className="w-full lg:hidden ">
      <div className=" flex flex-col gap-4 mt-4 ">
        <div className="md:w-2/3 w-full m-auto ">
          <HomeSlide />
        </div>
        <ListStoryShortcut />
        <ListShortcut />
        <ListNewestStory />
        <ListNewestChapter />
        <SectionRankBooks />
        <ListAuthorStory />
        <ListCompleteStory />
      </div>
    </main>
  );
}
