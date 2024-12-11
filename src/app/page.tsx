import { CarouselPlugin } from "@/components/Carousal";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center absolute left-0 right-0 top-0 bottom-0 m-auto">
        <CarouselPlugin />

        <Link href={"/register"}>
          <Button
            className="mt-24 absolute bottom-16 bg-lime-400"
            variant="shadow"
          >
            Register to play
          </Button>
        </Link>
      </div>
    </>
  );
}
