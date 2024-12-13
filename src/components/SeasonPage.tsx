"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { PointsTable } from "./Table";
import { GoldenBoot } from "./GoldenBootTable";

export function SeasonPage() {
  const tabsClass: string =
    "w-full overflow-hidden relative h-full backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-green-800";

  const tabs = [
    {
      title: "Leaderboard",
      value: "leaderboard",
      content: (
        <div className={tabsClass}>
          <PointsTable />
        </div>
      ),
    },
    {
      title: "Fixtures",
      value: "fixtures",
      content: (
        <div className={tabsClass}>
          <p>Fixtures</p>
          <span>Coming Soon</span>
        </div>
      ),
    },
    {
      title: "Statistics",
      value: "statistics",
      content: (
        <div className="w-full overflow-y-scroll relative h-full backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-green-800">
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 8px;
            }
            div::-webkit-scrollbar-track {
              background: #1b5e20;
              border-radius: 4px;
            }
            div::-webkit-scrollbar-thumb {
              background: #4caf50;
              border-radius: 4px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #66bb6a;
            }
            div {
              scrollbar-width: thin;
              scrollbar-color: #4caf50 #1b5e20;
            }
          `}</style>
          <GoldenBoot />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[70vh] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-[80vh] md:w-full py-2   items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
