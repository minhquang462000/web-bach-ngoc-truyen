
import HomeHeader from "@/components/headers/HomeHeader";
import { ILayout } from "@/interfaces";
import * as React from "react";

export  function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="m-auto">
        <HomeHeader/>
      {children}
    </section>
  );
}