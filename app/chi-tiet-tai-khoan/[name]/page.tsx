import { getAccount } from "@/api/account";
import FormAccountPage from "@/components/forms/FormAccountPage";
import { IUser, PropParams } from "@/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hồ sơ",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  description: "ĐỌc truyện mọi nơi",
  icons: {
    icon: ["/logos/logo_bns.ico?v=4"],
    apple: "/logos/logo_bns.ico?v=4",
  },
};
const DOMAIN = process.env.NEXT_PUBLIC_API_URL;
export default async function page({ params }: PropParams) {
  const name = (await params).name;
  const account = await getAccount(name as string);
  return (
    <main className="lg:max-w-[1140px] mx-auto  relative   flex flex-col gap-5 lg:gap-8 bg-transparent">
      <FormAccountPage account={account as IUser} />
    </main>
  );
}
