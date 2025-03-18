'use client';
import React from 'react';

import { Card } from '@/components/dashboard/Card';
import { useGetCourses } from '@/hooks/react-query/course-creation/useCourses';

const Home = () => {
  // const dashboardCards: {
  //   title: string;
  //   count: number;
  //   buttonText?: string;
  //   link?: string;
  // }[] = [
  //   {
  //     title: 'Courses',
  //     count: 2,
  //     buttonText: 'view',
  //     link: '/tutor/courses',
  //   },
  //   {
  //     title: 'Enrolled Students',
  //     count: 163,
  //     // buttonText: 'view',
  //   },
  //   {
  //     title: 'Reviews',
  //     count: 10,
  //     // buttonText: 'view',
  //   },
  // ];

  const { data: courses } = useGetCourses();

  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <div className="">
        <span className="font-bold text-xl">Overview</span>
      </div>

      <div className="cards flex flex-wrap gap-5">
        <Card
          title={'Course'}
          count={courses?.data?.courses.length}
          btnText={'View'}
          link={'/tutor/courses'}
        />
      </div>
    </div>
  );
};

export default Home;
