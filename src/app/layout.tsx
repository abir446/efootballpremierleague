import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/global.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eFootball Premier League",
  description: "Home of Official eFootball League, Kolkata, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative min-h-screen w-full`}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
