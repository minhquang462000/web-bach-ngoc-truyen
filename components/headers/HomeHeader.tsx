import HomeHeaderDesktop from "./HomeHeaderDesktop";
import HomeHeaderMobile from "./HomeHeaderMobile";


export interface IHomeHeaderProps {}

export default function HomeHeader(props: IHomeHeaderProps) {
  return (
    <header
     className="max-w-screen sticky bg-white p-3 shadow-md z-50 top-0  mx-auto">
     <HomeHeaderMobile />
     <HomeHeaderDesktop />
    </header>
  );
}
