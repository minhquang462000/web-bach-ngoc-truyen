
import * as React from "react";
import homeBackground from "@/public/images/bg-home.jpg";
import FormRegister from "@/components/forms/FormRegister";
import Image from "next/image";
export interface IloginProps { }

export default function register(props: IloginProps) {

  return (
    <main className="w-full  text-black h-screen relative">
      <Image
        className="w-full  min-h-screen object-cover object-center fixed top-0 -z-10"
        src={homeBackground}
        width={1920}
        height={1080}
        alt=""
      />
      <FormRegister />
    </main>
  );
}
