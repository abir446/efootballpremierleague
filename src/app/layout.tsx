import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../styles/global.css";
import Background from "@/components/Background";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "../components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Efootball Premier League",
  description: "Home of Official Efootball League, Kolkata, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen w-full`}
      >
        <Background>
          <NextUIProvider>
            <Navbar />
            {children}
          </NextUIProvider>
        </Background>
      </body>
    </html>
  );
}