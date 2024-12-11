import { CarouselPlugin } from "@/components/Carousal";
import { Button } from "@nextui-org/react";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center absolute left-0 right-0 top-0 bottom-0 m-auto">
        <div className="flex p-10">
          <div className="text-white max-w-[50%]">
            <h1 className=" text-[13vh] leading-[1] custom-text mb-3">
              <span className="text-lime-400">Your League,</span> Your Legacy!
            </h1>
            <p className="text-[3vh] px-4 max-w-[80%]">
              Kickstart your journey in the eFootball Premier League – a world
              of epic matches, legendary players, and unforgettable moments on
              the ultimate digital field!
            </p>
            <div className="mt-10 ml-3 flex gap-3 flex-row justify-center items-center absolute">
              <Button className="" variant="shadow">
                Register to play
              </Button>
              <h1 className="text-[4vh] font-mono">|</h1>
              <button className="bg-transparent text-[3vh] text-lime-400" >Season</button>
            </div>
          </div>
          <CarouselPlugin />
        </div>
      </div>
    </>
  );
}
