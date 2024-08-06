import Image from 'next/image';

import { Button } from '../button';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';

export const Course = () => {
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
                      Cyber Security Defense Analyst
                    </span>
                    <div className="others flex flex-col">
                      <div className="flex items-center gap-2 mb-2 justify-between">
                        <span className="text-sm">2 Exams</span>
                        <span className="text-sm">12 Lessons</span>
                      </div>
                      <div className="flex item-center justify-between">
                        <span className="text-sm">
                          6 Virtual Labs Questions
                        </span>
                        <span className="text-sm">4 Resources</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">12</span>
                  <span className="text-sm">Total students</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold">Status</span>
                  <span className="text-sm py-[0.3125rem] px-2 rounded-2xl bg-[#11BA40] text-white live text-center">
                    Live
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Button className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]">
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
            <span className="text-xs font-semibold">
              Cyber Security Defense Analyst
            </span>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px]">2 Exams</span>
                <span className="text-[10px]">12 Lessons</span>
              </div>
              <div className="flex item-center justify-between">
                <span className="text-[10px]">6 Virtual Labs Questions</span>
                <span className="text-[10px]">4 Resources</span>
              </div>
            </div>
            <div className="stats flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold">12</span>
                <span className="text-xs">Total students</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold">Status</span>
                <span className="text-xs py-[0.3125rem] px-[0.9375rem] rounded-2xl bg-[#11BA40] text-white live text-center">
                  Live
                </span>
              </div>
            </div>
            <Button className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]">
              Manage/Edit Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
