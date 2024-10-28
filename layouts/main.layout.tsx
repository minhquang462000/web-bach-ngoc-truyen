import FooterMain from "@/components/foorters/FooterMain";
import { ILayout } from "@/interfaces";
import * as React from "react";
import homeBackground from "@/public/images/bg-home.jpg";
import HomeHeader from "@/components/headers/HomeHeader";
export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="m-auto w-full relative bg-transparent">
      <HomeHeader />
      {children}
      <img
        className="w-full overflow-hidden  min-h-screen object-cover object-left-top fixed top-0 -z-10"
        src={homeBackground.src}
        alt=""
      />
      <FooterMain />
    </section>
  );
}
