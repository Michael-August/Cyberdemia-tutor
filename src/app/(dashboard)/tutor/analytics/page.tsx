'use client';

import React, { useEffect, useState } from 'react';

import { Card } from '@/components/dashboard/Card';
import { useAnalytics } from '@/hooks/react-query/useAnalytics';

import { SimpleLineChart } from '../../../../components/charts';

const Home = () => {
  const { data: analytics } = useAnalytics();

  const [dashboardCards, setDashboardCards] = useState<
    {
      title: string;
      count: number;
      buttonText: string;
      link: string;
    }[]
  >([
    {
      title: 'Enrolled Students',
      count: 0,
      buttonText: 'view',
      link: 'analytics/students',
    },

    {
      title: 'Reviews',
      count: 0,
      buttonText: 'view',
      link: 'analytics/reviews',
    },
  ]);

  useEffect(() => {
    if (analytics) {
      setDashboardCards((prevState) => {
        return prevState.map((card) => {
          if (card.title === 'Enrolled Students') {
            return {
              ...card,
              count: analytics.data.enrolled,
            };
          }
          if (card.title === 'Reviews') {
            return {
              ...card,
              count: analytics.data.reviews,
            };
          }
          return card;
        });
      });
    }
  });

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
            link={card.link}
          />
        ))}
      </div>
      <SimpleLineChart />
    </div>
  );
};

export default Home;
