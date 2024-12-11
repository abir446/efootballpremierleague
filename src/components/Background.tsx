"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";
interface Props {
  children: React.ReactNode;
}
export default function Background({ children }: Props) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={300}
        baseHue={120}
        className="w-full h-full"
      >
        {children}
      </Vortex>
    </div>
  );
}