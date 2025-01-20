import EmojiFeedback from "@/components/Feedback";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full h-screen overflow-auto scrollbar-hide">
      <div className="flex my-52 mb-6 justify-center flex-col gap-10 md:mt-10">
        <Testimonials />
        <EmojiFeedback />
      </div>
    </div>
  );
};

export default page;