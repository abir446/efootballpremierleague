"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function SeasonPage() {
  const tabs = [
    {
      title: "Leaderboard",
      value: "leaderboard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Leaderboard</p>
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Fixtures",
      value: "fixtures",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Fixtures</p>
          {/* <DummyContent /> */}
        </div>
      ),
    },
    {
      title: "Statistics",
      value: "statistics",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Statistics</p>
          {/* <DummyContent /> */}
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-[80vh] md:w-full py-2   items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
