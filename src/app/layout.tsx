import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rights from "./components/Rights";
import { Navbar } from "./components/Navigation";
import React from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blockchain and Business Conference",
  description: "Product, Community and Future of adoption",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>BuidlCon</title>
        <meta property="og:title" content="BuidlCon" key="title" />
        <meta
          name="description"
          content="Attend Buidlcon and become a Web3 powerhouse."
          key="description"
        />
        <meta
          name="og:description"
          content="Attend Buidlcon and become a Web3 powerhouse."
          key="og:description"
        />
      </Head>
      <body className={inter.className}>
        <React.Suspense fallback={<Loading />}>
          <ToastContainer />
          <Navbar />
          {children}
          <Rights />
        </React.Suspense>
      </body>
    </html>
  );
}
