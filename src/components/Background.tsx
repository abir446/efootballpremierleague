"use client";
import React from "react";
import { Vortex } from "../components/ui/vortex";

interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {
  return (
    <div className="relative w-full h-screen">
      {/* Vortex background */}
      <div className="fixed inset-0 z-0">
        <Vortex
          backgroundColor="black"
          rangeY={900}
          particleCount={200}
          baseHue={120}
          className="w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}