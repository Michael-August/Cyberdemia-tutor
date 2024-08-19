import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { CourseCreationStep } from '../../NewCourse';
import { StepTitle } from '../StepTitle';
import Assignment from './Assignment';
import Exam from './Exam';
import Lecture from './Lecture';

export const Curriculum = ({ updateStep }: { updateStep: any }) => {
  const moveToNextStep = (nextStep: CourseCreationStep) => {
    updateStep(nextStep);
  };

  const [addCurriculum, setAddCurriculum] = useState(false);

  const [addLecture, setAddLecture] = useState(false);
  const [addAssignments, setAddAssignments] = useState(false);
  const [addExam, setAddExam] = useState(false);

  const handleSectionAdd = (section: 'lecture' | 'assignment' | 'exam') => {
    if (section === 'lecture') {
      setAddAssignments(false);
      setAddExam(false);
      setAddLecture(true);
      return;
    }
    if (section === 'assignment') {
      setAddLecture(false);
      setAddExam(false);
      setAddAssignments(true);
      return;
    }
    if (section === 'exam') {
      setAddExam(true);
      setAddLecture(false);
      setAddAssignments(true);
      return;
    }
  };

  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Course Curriculum"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <form className="mt-8 flex flex-col gap-5 lg:w-[75%]">
        <div className="sections flex flex-col gap-3">
          <div className="section p-5 bg-[#F3F3F3] flex flex-col gap-4 border border-solid border-[#00000080]">
            <div className="title">
              <span className="text-sm font-semibold">Section 1:</span>
            </div>
            <div className="content">
              {!addCurriculum && (
                <div className="new-item-btn">
                  <span
                    onClick={() => setAddCurriculum(true)}
                    className="flex gap-3 justify-center p-2 rounded-md text-xs cursor-pointer items-center border border-cp-secondary text-cp-secondary w-full !bg-transparent"
                  >
                    <Image
                      src="/icons/plus.svg"
                      width={24}
                      height={24}
                      alt="plus"
                    />
                    Create new item
                  </span>
                </div>
              )}
              {addCurriculum && !addLecture && !addAssignments && !addExam && (
                <div className="flex items-center gap-7">
                  <span
                    onClick={() => handleSectionAdd('lecture')}
                    className="flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black !bg-white"
                  >
                    <Image
                      src="/icons/black_plus.svg"
                      width={24}
                      height={24}
                      alt="plus"
                    />
                    New Lecture
                  </span>
                  <span
                    onClick={() => handleSectionAdd('assignment')}
                    className="flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black !bg-white"
                  >
                    <Image
                      src="/icons/black_plus.svg"
                      width={24}
                      height={24}
                      alt="plus"
                    />
                    Assignment Questions
                  </span>
                  <span
                    onClick={() => handleSectionAdd('exam')}
                    className="flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black !bg-white"
                  >
                    <Image
                      src="/icons/black_plus.svg"
                      width={24}
                      height={24}
                      alt="plus"
                    />
                    Exam Questions
                  </span>
                </div>
              )}
              {addLecture && (
                <div>
                  <Lecture setAddCurriculum={setAddCurriculum} />
                </div>
              )}
              {addAssignments && (
                <div>
                  <Assignment />
                </div>
              )}
              {addExam && (
                <div>
                  <Exam />
                </div>
              )}
            </div>
          </div>
        </div>

        <span className="add-section flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black w-[20%] !bg-transparent">
          <Image
            src="/icons/black_plus.svg"
            width={24}
            height={24}
            alt="plus"
          />
          Add Section
        </span>

        <Button
          onClick={() => moveToNextStep('resources')}
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </form>
    </>
  );
};
