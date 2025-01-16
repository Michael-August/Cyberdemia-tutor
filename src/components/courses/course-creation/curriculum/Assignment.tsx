'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateCourseAssignment } from '@/hooks/react-query/course-creation/useCourseCurriculum';

const Assignment = ({
  setAddCurriculum,
  sectionId,
}: {
  setAddCurriculum: any;
  sectionId: string;
}) => {
  const { mutateAsync: createAssignment } = useCreateCourseAssignment();

  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDetail, setAssignmentDetail] = useState('');

  const [assignmentTitleDisplay, setAssignmentTitleDisplay] = useState(true);
  const [assignmentDetailsDisplay, setAssignmentDetailsDisplay] =
    useState(false);
  const [assignmentAddedDisplay, setAssignmentAddedDisplay] = useState(false);

  const addAssignmentTitle = (e: any) => {
    e.preventDefault();
    if (!assignmentTitle) return;
    setAssignmentTitleDisplay(false);
    setAssignmentDetailsDisplay(true);
  };

  const close = (e: any) => {
    e.preventDefault();
    setAddCurriculum(false);
    setAssignmentTitleDisplay(false);
  };

  const handleAssignmentCreation = async (e: any) => {
    if (!assignmentDetail) toast.warn('Please type out assignment description');
    e.preventDefault();
    const assignmentData: any = {
      sectionId,
      assignmentTitle,
      assignmentQuestion: assignmentDetail,
    };
    await createAssignment(assignmentData);
    setAssignmentDetailsDisplay(false);
    setAssignmentAddedDisplay(true);
  };

  return (
    <div>
      {assignmentTitleDisplay && (
        <div className="p-5 !bg-white border border-black flex flex-col">
          <div className="flex items-center justify-between gap-4 mb-5">
            <Label
              className="text-xs text-[#000000CC] font-semibold"
              htmlFor="title"
            >
              New Assignment
            </Label>
            <Input
              className="w-[80%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
              placeholder="Enter Assignment Title"
              autoComplete="off"
              type="text"
              id="title"
              value={assignmentTitle}
              onChange={(e) => setAssignmentTitle(e.target.value)}
            />
          </div>
          <div className="btns flex items-center z-50 justify-end gap-3">
            <Button
              onClick={(e) => close(e)}
              className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
            >
              Close
            </Button>
            <Button
              onClick={addAssignmentTitle}
              className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
            >
              Add Assignment
            </Button>
          </div>
        </div>
      )}
      {assignmentDetailsDisplay && (
        <div className="p-5 !bg-white border border-black flex flex-col">
          <div className="flex items-center justify-between gap-4 mb-5">
            <Label
              className="text-xs text-[#000000CC] font-semibold"
              htmlFor="question"
            >
              {assignmentTitle}
            </Label>
            <Input
              className="w-[85%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
              placeholder="Enter Assignment Question"
              autoComplete="off"
              type="text"
              id="question"
              value={assignmentDetail}
              onChange={(e) => setAssignmentDetail(e.target.value)}
            />
          </div>
          <div className="btns flex items-center z-50 justify-end gap-3">
            <Button
              onClick={() => {
                setAssignmentDetailsDisplay(false);
                setAssignmentTitleDisplay(true);
              }}
              className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
            >
              Close
            </Button>
            <Button
              onClick={handleAssignmentCreation}
              className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
            >
              Done
            </Button>
          </div>
        </div>
      )}
      {assignmentAddedDisplay && (
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 mb-5">
            {/* <Label
                        className="text-xs text-[#000000CC] font-semibold"
                        htmlFor="videoTitle"
                    >
                        Article Title
                    </Label> */}
            <div className="flex items-center justify-between border border-black px-4 py-2">
              <div className="flex items-center gap-4">
                <Image
                  src={'/icons/book.svg'}
                  alt="Document icon"
                  width={24}
                  height={24}
                />
                <span className="text-xs text-[#000000CC]">
                  {assignmentTitle}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={'/icons/pencil.svg'}
                  alt="Edit icon"
                  width={24}
                  height={24}
                />
                <Image
                  src={'/icons/delete.svg'}
                  alt="Delete icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          <span className="flex gap-3 justify-start text-xs cursor-pointer items-center text-cp-secondary mt-3">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            Add Assignment
          </span>
        </div>
      )}
    </div>
  );
};

export default Assignment;
