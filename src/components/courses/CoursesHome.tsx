'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoArrowForward, IoChevronForward } from 'react-icons/io5';

import { useGetCourses } from '@/hooks/react-query/course-creation/useCourses';

import { Button } from '../button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Course } from './Course';
export const CoursesHome = () => {
  const router = useRouter();
  const { data: courses } = useGetCourses();

  const goToCourseCreation = () => {
    localStorage.removeItem("newCourseId")
    router.push('/tutor/courses/manage-course');
  };

  return (
    <div>
      {courses?.data.courses.length === 0 && (
        <div className="no-course">
          <div className="btn-card  w-full md:w-[19.75rem] border border-cp-secondary p-4 flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/pluscircle.svg"
              alt="plus in acircle"
              width={80}
              height={80}
            />
            <span className="text-xl font-bold">Create a course</span>
            <p className="mt-3 text-base ">
              Create your course and manage the contents, request virtual labs,
              create exams question and more.
            </p>
            <Button
              onClick={goToCourseCreation}
              className="flex gap-1 items-center !bg-cp-secondary text-white rounded-none p-2"
            >
              Get Started
              <IoArrowForward />
            </Button>
          </div>
        </div>
      )}

      {courses?.data.courses.length > 0 && (
        <div className="with-courses">
          <div className="courselist-func">
            <div className="top flex items-center justify-between flex-wrap mb-5 w-full">
              <div className="search-filter flex gap-2">
                <div className="search relative border h-[3.25rem] px-2 flex items-center justify-between">
                  <input
                    className="outline-none border-none focus:outline-none"
                    type="text"
                    placeholder="Search courses"
                  />
                  <Image
                    src="/icons/search.svg"
                    className="absolute right-0"
                    width={25}
                    height={25}
                    alt="search"
                  />
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="z-40 border h-[3.25rem] p-2 flex gap-2 items-center">
                      <SelectValue placeholder="Newest" />
                      <IoChevronForward />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="older">Older</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={goToCourseCreation}
                className="flex gap-1 items-center z-50 !bg-cp-secondary text-white rounded-none p-2"
              >
                Create New Course
                <IoArrowForward />
              </Button>
            </div>

            <div className="courses">
              {courses?.data.courses.map((course: any) => (
                <Course key={course.title} course={course} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
