import React from 'react';

import { CoursesHome } from '@/components/courses/CoursesHome';

const page = () => {
  return (
    <div className="flex w-full flex-col gap-8 px-4 md:px-0">
      <div className="">
        <span className="font-bold text-xl">My Courses</span>
      </div>

      <CoursesHome />
    </div>
  );
};

export default page;
