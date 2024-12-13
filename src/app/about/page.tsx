import EmojiFeedback from "@/components/Feedback";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full h-screen overflow-hidden">
      <div className="flex flex-col gap-10  mt-10">
        <Testimonials />
        <EmojiFeedback />
      </div>
    </div>
  );
};

export default page;