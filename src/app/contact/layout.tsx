import Background from "@/components/Background";
import { WavyBackground } from "@/components/ui/wavy-background";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const layout = ({ children }: Props) => {
  return <WavyBackground className="w-full mx-auto pb-40 overflow-hidden">{children}</WavyBackground>;
};

export default layout;
