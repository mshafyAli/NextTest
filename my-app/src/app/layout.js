import { Inter } from "next/font/google";
import "./globals.css";
import Head from "@/Components/Head";
import TawkToComponent from "@/Components/TawkToComponent";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UK Top Ranked Academic Helpers - Academians UK",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TMWZ98XS"/>
      <body
        className={inter.className}
      >
        <Head/>
        
        {children}
        {/* <TawkToComponent/> */}
      </body>
    </html>
  );
}




