'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  useCreateCourseSection,
  useGetCourseSections,
} from '@/hooks/react-query/course-creation/useCourseCurriculum';

import { useStep } from '../../../../../context/CourseCreationContext';
import { StepTitle } from '../StepTitle';
import Assignment from './Assignment';
import Exam from './Exam';
import Lecture from './Lecture';

export const Curriculum = () => {
  const courseId = localStorage.getItem('newCourseId') as string;
  const searchParams = useSearchParams();
  const courseToEdit = searchParams.get('courseId');

  const { data: sections } = useGetCourseSections(
    courseId ? courseId : (courseToEdit as string),
  );
  const { mutateAsync: createSection } = useCreateCourseSection();

  // const [addCurriculum, setAddCurriculum] = useState(false);
  const [addSection, setAddSection] = useState(false);

  const [sectionState, setSectionState] = useState<{
    [key: string]: {
      addCurriculum: boolean;
      addLecture: boolean;
      addAssignments: boolean;
      addExam: boolean;
    };
  }>({});

  const [sectionTitle, setSectionTitle] = useState('');

  const handleStateChange = (
    sectionId: string,
    key: string,
    value: boolean,
  ) => {
    setSectionState((prevState) => ({
      ...prevState,
      [sectionId]: {
        addCurriculum: key === 'addCurriculum' ? value : false,
        addLecture: key === 'addLecture' ? value : false,
        addAssignments: key === 'addAssignments' ? value : false,
        addExam: key === 'addExam' ? value : false,
      },
    }));
  };

  const handleSectionAdd = (sectionId: string, type: string) => {
    // Reset all other options and enable only the selected one for this section
    setSectionState((prevState) => ({
      ...prevState,
      [sectionId]: {
        addCurriculum: true,
        addLecture: type === 'lecture',
        addAssignments: type === 'assignment',
        addExam: type === 'exam',
      },
    }));
  };

  const { dispatch } = useStep();
  const submitSection = async (e: any) => {
    if (!sectionTitle) return;
    try {
      e.preventDefault();
      const courseSectionResponse = await createSection({
        courseId,
        sectionTitle,
      });
      setAddSection(false);
      console.log('Form submitted', courseSectionResponse);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const nextStep = () => {
    dispatch({ type: 'COMPLETE_STEP', payload: 1 });
    dispatch({ type: 'NEXT_STEP' });
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
          {sections?.data?.map((section: any) => {
            const state = sectionState[section.id] || {
              addCurriculum: false,
              addLecture: false,
              addAssignments: false,
              addExam: false,
            };

            return (
              <div
                key={section?.id}
                className="section p-5 bg-[#F3F3F3] flex flex-col gap-4 border border-solid border-[#00000080]"
              >
                <div className="title">
                  <span className="text-sm font-semibold">
                    {section?.sectionTitle}
                  </span>
                </div>
                <div className="content">
                  {!state.addCurriculum && (
                    <div className="new-item-btn">
                      <span
                        onClick={() =>
                          handleStateChange(section.id, 'addCurriculum', true)
                        }
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
                  {state.addCurriculum &&
                    !state.addLecture &&
                    !state.addAssignments &&
                    !state.addExam && (
                      <div className="flex items-center gap-7">
                        <span
                          onClick={() =>
                            handleSectionAdd(section.id, 'lecture')
                          }
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
                          onClick={() =>
                            handleSectionAdd(section.id, 'assignment')
                          }
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
                          onClick={() => handleSectionAdd(section.id, 'exam')}
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
                  {state.addLecture && (
                    <div>
                      <Lecture
                        sectionId={section.id}
                        setAddCurriculum={() =>
                          handleStateChange(section.id, 'addCurriculum', true)
                        }
                      />
                    </div>
                  )}
                  {state.addAssignments && (
                    <div>
                      <Assignment
                        sectionId={section.id}
                        setAddCurriculum={() =>
                          handleStateChange(section.id, 'addCurriculum', true)
                        }
                      />
                    </div>
                  )}
                  {state.addExam && (
                    <div>
                      <Exam
                        sectionId={section.id}
                        setAddCurriculum={() =>
                          handleStateChange(section.id, 'addCurriculum', true)
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {addSection && (
            <div className="p-5 !bg-white border border-black flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-5">
                <Label
                  className="text-xs text-[#000000CC] font-semibold"
                  htmlFor="title"
                >
                  New Section
                </Label>
                <Input
                  className="w-[80%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                  placeholder="Enter Section Title"
                  autoComplete="off"
                  type="text"
                  id="title"
                  value={sectionTitle}
                  onChange={(e) => setSectionTitle(e.target.value)}
                />
              </div>
              <div className="btns flex items-center z-50 justify-end gap-3">
                <Button
                  onClick={() => setAddSection(false)}
                  className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
                >
                  Close
                </Button>
                <Button
                  onClick={submitSection}
                  className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
                >
                  Create section
                </Button>
              </div>
            </div>
          )}
        </div>

        <span
          className="add-section flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black w-[20%] !bg-transparent"
          onClick={() => setAddSection(true)}
        >
          <Image
            src="/icons/black_plus.svg"
            width={24}
            height={24}
            alt="plus"
          />
          Add Section
        </span>

        <Button
          onClick={nextStep}
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </form>
    </>
  );
};
