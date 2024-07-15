import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/nav/Navbar";
import ToasterProvider from "@/app/providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Cars Auction",
  description: "Developed by PH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        <main className="container mx-auto px-5 pt-10">{children}</main>
      </body>
    </html>
  );
}
