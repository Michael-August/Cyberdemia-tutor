'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import CustomCourse from '@/components/home/CustomCourse';
import RecomendedCourse from '@/components/home/RecomendedCourse';
import ResumeLearning from '@/components/home/ResumeLearning';
const Home = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8  h-[100%] px-4 md:px-0">
      <div className="flex flex-col gap-2 ">
        <span className="text-[16px] font-extrabold text-[#AC1D7E]">
          In Progress
        </span>
        <div className="">
          <div className="w-[103px] h-[8px] bg-[#AC1D7E]"></div>
          <hr
            style={{
              height: '1px',
              backgroundColor: '#AC1D7E',
              border: 'none',
            }}
          />
        </div>
      </div>

      <ResumeLearning />

      <hr
        style={{ height: '1px', backgroundColor: '#AC1D7E', border: 'none' }}
      />
      <span className="text-[16px] font-extrabold">
        Request for custom course
      </span>
      <CustomCourse />
      <span className="text-[16px] font-extrabold">
        Top Recommended Courses
      </span>
      <div className="flex  gap-6">
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={true}
        />
        <RecomendedCourse
          availableCourses="3 Courses Available"
          image={'/images/card2.svg'}
          title="Cyber Security Awareness "
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/shfdhf')}
          isCourseAvailable={true}
        />
      </div>
    </div>
  );
};

export default Home;
