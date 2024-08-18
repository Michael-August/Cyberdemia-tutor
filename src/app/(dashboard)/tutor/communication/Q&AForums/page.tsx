import { NavigationCrumbs } from "@/components/NavigationCrumbs";
import React from "react";
import QACard from "@/components/qaCard";

const Page = () => {
  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <NavigationCrumbs />
      <div className="px-5">
        <span className="font-bold text-xl">Q&A Forums</span>
        <QACard />
      </div>
    </div>
  );
};

export default Page;
