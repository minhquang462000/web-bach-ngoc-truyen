
import * as React from "react";
import homeBackground from "@/public/images/bg-home.jpg";
import FormLogin from "@/components/forms/FormLogin";
export interface IloginProps {}
import Image from "next/image";

export default function login(props: IloginProps) {
  
  return (
    <main className="w-full  text-black h-screen relative">
      <Image
        className="w-full  min-h-screen object-cover object-center fixed top-0 -z-10"
        width={1920}
        height={1080}
        src={homeBackground}
        alt=""
      />
      <FormLogin/>
    </main>
  );
}
