import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import YouMayLike from "./ServerComponents/YouMayLike/YouMayLike";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Koinx</title>
      </head>
      <body className={inter.className}>
        <div className='flex flex-col bg-[#EFF2F5] h-screen w-screen gap-[1.32rem] overflow-y-auto'>
          <Navbar />
          <BreadCrumb />
          {children}
          <YouMayLike />
        </div>
      </body>
    </html>
  );
}
