import { SeasonPage } from "@/components/SeasonPage";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <SeasonPage />
      {children}
    </div>
  );
};

export default layout;
