import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="fixed w-full top-0 h-[10vh] bg-zinc-900 text-white flex justify-between items-center pl-14 pr-20 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
        <div className="">
          <Link href={"/"} className="flex justify-center items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Description of the image"
              width={55}
              height={40}
            />
            <h1 className="text-[4.5vh]">Premier League</h1>
          </Link>
        </div>
        <div className=" flex justify-center items-center gap-10 text-lime-400">
          <div className="flex justify-center items-center gap-10">
            <Link href={"/season"}>Season</Link>
            <Link href={"/about"}>About Us</Link>
          </div>
          <Link
            href={
              "https://www.instagram.com/efootballpremierleague/profilecard/"
            }
          >
            <Button className="cursor-pointer" variant="shadow">
              Join Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
