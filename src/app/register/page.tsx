"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const Page = () => {
  return (
    <div className="text-white">
    
      <div className="absolute h-36 md:h-72 top-56 md:top-28 left-0 right-0  my-auto ">
        <DotLottieReact
          src="/animations/404.lottie" // Ensure the file is in public/animations
          loop
          autoplay
          width={300}
          height={300}
        />

        <div className="flex flex-col justify-center items-center m-auto ">
          <h1 className="text-[5vh] text-center md:text-[10vh] text-orange-400">Season Currently Closed!</h1>
          <h3 className="text-[2vh] md:text-[3vh] max-w-[70%]  md:max-w-[50%] text-center">
            The eFootball Premier League season is taking a break. Registration
            will reopen in <span className="text-lime-400">February 2025</span>. Stay tuned and get ready to showcase
            your skills in the next thrilling season!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
