import FooterMain from "@/components/foorters/FooterMain";
import { ILayout } from "@/interfaces";
import homeBackground from "@/public/images/bg-home.jpg";
import HomeHeader from "@/components/headers/HomeHeader";
import ButtonBackToTopPage from "@/components/ButtonBackToTopPage";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
export async function MainLayout({ children }: Readonly<ILayout>) {

  return (
    <section className="m-auto w-full relative bg-transparent">
      <ToastContainer autoClose={1500} />
      <HomeHeader />
      {children}
      <Image
        className="w-full overflow-hidden  min-h-screen object-cover object-left-top fixed top-0 -z-10"
        src={homeBackground}
        alt=""
        width={1920}
        height={1080}
      />
      <ButtonBackToTopPage />
      <FooterMain />
    </section>
  );
}
