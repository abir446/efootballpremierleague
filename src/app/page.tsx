"use client";
import Background from "@/components/Background";
import { CarouselPlugin } from "@/components/Carousal";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initial setup - hide elements
    gsap.set([headingRef.current, textRef.current, buttonsRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(carouselRef.current, {
      opacity: 0,
      scale: 0.9,
    });

    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.to(carouselRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
    })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      );
  }, []);

  return (
    <>
      <Background>
        <div className="flex flex-col relative w-full justify-center items-center left-0 right-0 top-0 bottom-0 m-auto overflow-auto scrollbar-hide h-screen">
          <div className="flex relative flex-col w-full">
            <div
              ref={carouselRef}
              className="px-2 md:px-16 mb-10 mt-[5vh] md:mt-[40vh] w-full"
            >
              <CarouselPlugin />
            </div>
            <div className="text-white   w-full text-center">
              <h1
                ref={headingRef}
                className="text-[6vh] md:text-[8vh] lg:text-[12vh] leading-[1.2] custom-text mb-10"
              >
                <span className="text-[7vh] md:text-[10vh] lg:text-[15vh] text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-500 to-lime-600 drop-shadow-[0_0_10px_rgba(163,230,53,0.7)]">
                  Your League,
                </span>{" "}
                Your Legacy!
              </h1>
              <p
                ref={textRef}
                className="tracking-tighter text-[1.5vh] md:text-[2.5vh] lg:text-[3vh] px-2 md:px-4 mx-auto max-w-[85%] md:max-w-[70%]"
              >
                Kickstart your journey in the eFootball Premier League a world
                of epic matches, legendary players, and unforgettable moments on
                the ultimate digital field!
              </p>
              <div
                ref={buttonsRef}
                className="mt-6 md:mt-8 lg:mt-10 md:mb-10 flex gap-3 flex-row justify-center items-center"
              >
                <Link href={"/register"}>
                  <Button
                    className="bg-cyan-400 text-white font-semibold text-sm md:text-base"
                    variant="shadow"
                  >
                    Register to play
                  </Button>
                </Link>
                <h1 className="text-[3vh] md:text-[3.5vh] lg:text-[4vh] font-mono">
                  |
                </h1>
                <Link href={"/season"}>
                  <button className="bg-transparent text-[2vh] md:text-[2.5vh] lg:text-[3vh] text-lime-400">
                    Season
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </>
  );
}
