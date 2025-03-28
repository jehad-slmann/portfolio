import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Jehad Slman's Portfolio",
  description: "Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        style={{fontFamily: "Nunito"}}
        className="text-white overflow-hidden"
      >
        {children}
        <Navbar/>
      </body>
    </html>
  );
}
