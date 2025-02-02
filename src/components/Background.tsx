"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";
import "@/app/globals.css";

interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {
  return (
    <div className="relative w-full h-screen scrollbar-hide">
      {/* Vortex background */}
      <div className="fixed inset-0 z-0 ">
        <Vortex
          backgroundColor="black"
          rangeY={200}
          particleCount={300}
          baseHue={120}
          className="w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full scrollbar-hide overflow-y-auto">
        {children}
      </div>
    </div>
  );
}