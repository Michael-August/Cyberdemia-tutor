'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import RecomendedCourse from '@/components/home/RecomendedCourse';
import { NavigationCrumbs } from '@/components/NavigationCrumbs';
function RecomendedCourses() {
  const router = useRouter();

  return (
    <div className="flex gap-10 flex-col">
      <NavigationCrumbs />
      <span className="text-14px font-extrabold">
        Cyber Security Technical Training
      </span>
      <div className="grid grid-cols-3 ">
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={false}
        />
        <RecomendedCourse
          availableCourses="7 Courses Available"
          image={'/images/card1.svg'}
          title="Cyber Security Technical Training"
          body="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum. Vestibulum convallis velit feugiat aliquam pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum."
          handleClick={() => router.push('home/dhjfhjdfh')}
          isCourseAvailable={false}
        />
      </div>
    </div>
  );
}

export default RecomendedCourses;
