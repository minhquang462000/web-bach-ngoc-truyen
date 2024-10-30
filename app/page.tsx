import HeaderSelect from "@/components/headers/HeaderSelect";
import { MainLayout } from "@/layouts";

import HomeMobile from "@/components/Home/HomeMobile";
import HomeDesktop from "@/components/Home/HomeDesktop";

export default function Home() {
  return (
    <MainLayout>
      <HeaderSelect />
      {/* <HomeMobile /> */}
      <HomeDesktop />
    </MainLayout>
  );
}
