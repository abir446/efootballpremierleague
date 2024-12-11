import { CarouselPlugin } from "@/components/Carousal";
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center absolute left-0 right-0 top-0 bottom-0 m-auto">
        <div className="flex p-14">
          <div className="text-white max-w-[50%]">
            <h1 className=" text-[13vh] leading-[1.2] custom-text mb-3">
              <span className="text-lime-400">Your League,</span> Your Legacy!
            </h1>
            <p className="text-[3vh] px-4 max-w-[85%]">
              Kickstart your journey in the eFootball Premier League a world of
              epic matches, legendary players, and unforgettable moments on the
              ultimate digital field!
            </p>
            <div className="mt-10 ml-3 flex gap-3 flex-row justify-center items-center absolute">
              <Link href={"/register"}>
                <Button className="" variant="shadow">
                  Register to play
                </Button>
              </Link>
              <h1 className="text-[4vh] font-mono">|</h1>
              <Link href={"/season"}>
                <button className="bg-transparent text-[3vh] text-lime-400">
                  Season
                </button>
              </Link>
            </div>
          </div>
          <CarouselPlugin />
        </div>
      </div>
    </>
  );
}
