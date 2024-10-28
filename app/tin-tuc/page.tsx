import CardNews from "@/components/Card/CardNews";
import { MainLayout } from "@/layouts";
import * as React from "react";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main className="w-full md:max-w-[705px] my-10 lg:max-w-[1140px] m-auto">
        <h2 className="text-center font-bold text-3xl">Tin mới</h2>
        <div>
          <CardNews />
        </div>
      </main>
    </MainLayout>
  );
}
