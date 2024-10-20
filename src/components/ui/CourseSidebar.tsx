import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

import { useStep } from '../../../context/CourseCreationContext';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const CourseSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const Router = useRouter();

  const { state, dispatch } = useStep();
  const { currentStep, steps } = state;

  const handleStepClick = (stepId: number) => {
    // if (stepId <= currentStep) {
    //   dispatch({ type: 'SET_STEP', payload: stepId });
    // }
    dispatch({ type: 'SET_STEP', payload: stepId });
  };

  const goToCourses = () => Router.push('/tutor/courses');
  return (
    <div
      className={`bg-[#F8F8F8] w-[220px] py-3 text-black shadow-md z-[1000] h-full fixed top-10 left-0 bottom-0 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div
        className="bg-white w-full mb-10 h-max p-3 py-4 flex justify-start items-center gap-2 text-black text-sm cursor-pointer hover:bg-cp-primary hover:text-white"
        onClick={goToCourses}
      >
        <GoArrowLeft size={26} />
        My Courses
      </div>

      <div className="steps flex flex-col gap-6">
        {steps?.map((step, index) => (
          <div
            key={step.id}
            className={`step flex gap-3 pl-8 cursor-pointer transition-all text-[#000000CC] hover:bg-cp-primary hover:text-white p-4 ${index === currentStep ? 'bg-cp-primary text-white' : ''}`}
            onClick={() => handleStepClick(step.id)}
          >
            {!step.completed ? (
              <Image
                src={'/icons/circle-white.svg'}
                alt="check"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={'/icons/completed.svg'}
                alt="check"
                width={20}
                height={20}
              />
            )}
            <span className="text-sm font-bold">{step?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
