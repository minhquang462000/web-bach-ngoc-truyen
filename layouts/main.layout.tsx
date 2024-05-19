import FooterMain from "@/components/foorters/FooterMain";
import HomeHeader from "@/components/headers/HomeHeader";
import { ILayout } from "@/interfaces";
import * as React from "react";
import homeBackground from "@/public/images/bg-home.jpg";
export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="m-auto w-screen relative bg-transparent">
      <HomeHeader />
      {children}
      <img
        className="w-screen overflow-hidden  min-h-screen object-cover object-left-top fixed top-0 -z-10"
        src={homeBackground.src}
        alt=""
      />
      <FooterMain />
    </section>
  );
}
