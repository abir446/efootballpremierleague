'use client';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/ui/dropdown";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Initial setup
    gsap.set([logoRef.current, linksRef.current, buttonRef.current], {
      opacity: 0,
      y: -20,
    });

    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.to(navbarRef.current, {
      opacity: 1,
      duration: 0.5,
    })
      .to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        linksRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onComplete: () => {
            buttonRef.current.style.pointerEvents = "auto";
          },
        },
        "-=0.3"
      );
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className="fixed w-full top-0 h-[10vh] bg-zinc-900 text-white flex justify-between items-center px-4 md:px-14 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50"
      >
        {/* Logo Section */}
        <div ref={logoRef} className="flex justify-center items-center gap-3">
          <Link href={"/"} className="flex justify-center items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Premier League Logo"
              width={55}
              height={40}
            />
            <h1 className="hidden lg:block text-[3vh] md:text-[4.5vh]">
              Premier League
            </h1>
          </Link>
        </div>

        {/* Links and Menu Section */}
        <div
          ref={linksRef}
          className="flex justify-center items-center gap-3 md:gap-5 lg:gap-10 text-gray-50"
        >
          {/* Links for Desktop */}
          <div className="hidden md:flex justify-center items-center gap-2 lg:gap-10">
            <Link
              className="hover:text-teal-400 duration-300"
              href={"/season"}
            >
              Season
            </Link>
            <Link
              className="hover:text-teal-400 duration-300"
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className="hover:text-teal-400 duration-300"
              href={"/contact"}
            >
              Contact Us
            </Link>
          </div>

          {/* Dropdown Menu for Mobile */}
          <div className="md:hidden justify-center items-center gap-2 lg:gap-10">
            <Menu />
          </div>

          {/* Join Us Button */}
          <div ref={buttonRef}>
          <Link
  href="https://www.instagram.com/efootballpremierleague"
  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-cyan-400 rounded-xl shadow-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 transition-transform duration-300 active:scale-95"
>
  Join Us
</Link>

          </div>
        </div>
      </div>
    </>
  );
}
