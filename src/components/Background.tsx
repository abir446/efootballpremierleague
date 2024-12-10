'use client'
import React from "react";
import { Vortex } from "../components/ui/vortex";

export default function Background({children}) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="w-full h-full"
      >
        {children}
      </Vortex>
    </div>
  );
}
