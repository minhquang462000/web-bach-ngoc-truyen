import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bach Ngoc Sach",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`),
  description: "ĐỌc truyện mọi nơi",
  icons: {
    icon: ["/logos/logo_bns.ico?v=4"],
    apple: "/logos/logo_bns.ico?v=4",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
