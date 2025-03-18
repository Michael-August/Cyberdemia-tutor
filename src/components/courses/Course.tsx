'use client';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoMegaphoneOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

import {
  useGetCourseStudents,
  useIssueCert,
} from '@/hooks/react-query/course-creation/useCourses';

import { Button } from '../button';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';

export const Course = ({ course }: any) => {
  const router = useRouter();

  const startCourseEdit = (e: any) => {
    e.preventDefault();
    // localStorage.setItem('newCourseId', course.id);
    router.push(`/tutor/courses/manage-course?courseId=${course.id}`);
  };

  const [openStudentsModal, setOpenStudentsModal] = useState(false);

  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const [courseIdToFetchStudents, setCourseIdToFetchStudents] = useState('');

  const { data: courseStudents } = useGetCourseStudents(
    courseIdToFetchStudents,
  );
  const { mutateAsync: issueCert, isLoading } = useIssueCert(
    courseIdToFetchStudents,
  );

  const handleStudentSelection = (studentId: string) => {
    setSelectedStudents(
      (prev) =>
        prev.includes(studentId)
          ? prev.filter((id) => id !== studentId) // Remove if already selected
          : [...prev, studentId], // Add if not selected
    );
  };

  const handleCertIssue = () => {
    try {
      selectedStudents?.forEach((studentId) => {
        issueCert({ studentId });
      });
      setOpenStudentsModal(false);
      setCourseIdToFetchStudents('');
    } catch (error) {
      toast.error('Certificate issue failed');
    }
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
                <div className="flex items-center justify-center flex-wrap gap-3 mb-4">
                  <Button
                    onClick={(e) => startCourseEdit(e)}
                    className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]"
                  >
                    Manage/Edit Course
                  </Button>
                  <Button
                    onClick={() => {
                      setCourseIdToFetchStudents(course.id);
                      setOpenStudentsModal(true);
                    }}
                    className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]"
                  >
                    Issue Certificate
                  </Button>
                </div>
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
            <div className="flex flex-wrap gap-3 mb-4">
              <Button
                onClick={(e) => startCourseEdit(e)}
                className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]"
              >
                Manage/Edit Course
              </Button>
              <Button
                onClick={() => {
                  setCourseIdToFetchStudents(course.id);
                  setOpenStudentsModal(true);
                }}
                className="border !border-cp-secondary !bg-transparent !text-cp-secondary p-[10px]"
              >
                Issue Certificate
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openStudentsModal}
        onClose={() => setOpenStudentsModal(false)}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <IconButton color="primary">
              <IoMegaphoneOutline size={60} color="black" />
            </IconButton>
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Select the student you want to issue certificate
            </Typography>
          </Box>

          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
            My Students
          </Typography>

          <FormGroup>
            {courseStudents?.data?.map((obj: any) => (
              <FormControlLabel
                key={obj?.student?.id}
                control={
                  <Checkbox
                    checked={selectedStudents.includes(obj?.student?.id)}
                    onChange={() => handleStudentSelection(obj?.student?.id)}
                    sx={{
                      color: '#AC1D7E',
                      '&.Mui-checked': { color: '#AC1D7E' },
                    }}
                  />
                }
                label={obj?.student?.fullName}
              />
            ))}
          </FormGroup>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              onClick={() => {
                setCourseIdToFetchStudents('');
                setOpenStudentsModal(false);
              }}
            >
              Cancel
            </Button>

            <Button onClick={handleCertIssue}>
              {isLoading ? 'submitting...' : 'Submit'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
