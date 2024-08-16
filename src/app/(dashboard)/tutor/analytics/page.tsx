import React from "react";

import { Card } from "@/components/dashboard/Card";

import { SimpleLineChart } from "../../../../components/charts";

const Home = () => {
  const dashboardCards: {
    title: string;
    count: number;
    buttonText: string;
    link: string;
  }[] = [
    {
      title: "Enrolled Students",
      count: 162,
      buttonText: "view",
      link: "analytics/students",
    },

    {
      title: "Reviews",
      count: 10,
      buttonText: "view",
      link: "analytics/reviews",
    },
  ];

  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <div className="">
        <span className="font-bold text-xl">Analytics</span>
      </div>

      <div className="cards flex flex-wrap gap-5">
        {dashboardCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            count={card.count}
            btnText={card.buttonText}
            link = {card.link}
          />
        ))}
      </div>
      <SimpleLineChart />
    </div>
  );
};

export default Home;
