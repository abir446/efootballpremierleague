"use client";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
interface Props {
  children: React.ReactNode;
}
export default function Background({ children }: Props) {
  return <div className="w-full h-screen overflow-hidden">
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 ">
       {children}
      </div>
    </BackgroundGradientAnimation>
  </div>;
}
