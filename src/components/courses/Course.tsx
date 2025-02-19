'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '../button';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';

export const Course = ({ course }) => {
  const router = useRouter();

  const startCourseEdit = (e: any) => {
    e.preventDefault();
    // localStorage.setItem('newCourseId', course.id);
    router.push(`/tutor/courses/manage-course?courseId=${course.id}`);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Table>
          <TableBody>
            <TableRow className="!border-b !border-[#00000080]">
              <TableCell>
                <div className="course flex items-center gap-3">
                  <Image
                    src="/images/courseimage.svg"
                    width={143}
                    height={92}
                    alt="course image"
                  />
                  <div className="details flex flex-col gap-3">
                    <span className="text-lg font-semibold">
                      {course.title}
                    </span>
                    <div className="others flex flex-col">
                      <div className="flex items-center gap-2 mb-2 justify-between">
                        <span className="text-sm">
                          {course?.totalExams} Exams
                        </span>
                        <span className="text-sm">
                          {course?.totalLessons} Lessons
                        </span>
                      </div>
                      <div className="flex item-center justify-between">
                        <span className="text-sm">
                          {course?.totalLabs} Virtual Labs Questions
                        </span>
                        <span className="text-sm">
                          {course?.totalResources} Resources
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">
                    {course?.numberOfStudents}
                  </span>
                  <span className="text-sm">Total students</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">Status</span>
                  {course.status === 'live' && (
                    <span className="text-sm py-[0.3125rem] px-2 rounded-2xl bg-[#11BA40] text-white live text-center">
                      Live
                    </span>
                  )}
                  {course.status === 'pending' && (
                    <span className="text-sm py-[0.3125rem] px-2 rounded-2xl bg-[#dacf2d] text-white live text-center">
                      Pending
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Button
                  onClick={(e) => startCourseEdit(e)}
                  className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]"
                >
                  Manage/Edit Course
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="block lg:hidden w-screen">
        <div className="course flex items-start gap-3">
          <Image
            src="/images/courseimage.svg"
            width={94}
            height={61}
            alt="course image"
          />
          <div className="details flex flex-col gap-3">
            <span className="text-xs font-semibold">{course.title}</span>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px]">{course?.totalExams} Exams</span>
                <span className="text-[10px]">
                  {course?.totalLessons} Lessons
                </span>
              </div>
              <div className="flex item-center justify-between">
                <span className="text-[10px]">
                  {course?.totalLabs} Virtual Labs Questions
                </span>
                <span className="text-[10px]">
                  {course?.totalResources} Resources
                </span>
              </div>
            </div>
            <div className="stats flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold">
                  {course?.numberOfStudents}
                </span>
                <span className="text-xs">Total students</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold">Status</span>
                {course.status === 'live' && (
                  <span className="text-xs py-[0.3125rem] px-[0.9375rem] rounded-2xl bg-[#11BA40] text-white text-center">
                    Live
                  </span>
                )}
                {course.status === 'pending' && (
                  <span className="text-xs py-[0.3125rem] px-[0.9375rem] rounded-2xl bg-[#dacf2d] text-white text-center">
                    Pending
                  </span>
                )}
              </div>
            </div>
            <Button
              onClick={(e) => startCourseEdit(e)}
              className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]"
            >
              Manage/Edit Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
