import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="absolute w-full h-[10vh] bg-zinc-900 text-white flex justify-between items-center px-24 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
        <div className="flex justify-center items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Description of the image"
            width={60}
            height={45}
          />
          <h1 className="text-[4.5vh]">Premier League</h1>
        </div>
        <div className=" flex justify-center items-center gap-10 text-white">
          <div className="flex justify-center items-center gap-10">
          <Link href={"#"}>Season</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Contact Us</Link>
          </div>
          <Button className="cursor-pointer" variant="shadow">Join Us</Button>
        </div>

      </div>
    </>
  );
}
