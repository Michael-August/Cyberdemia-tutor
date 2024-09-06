'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { useStep } from '../../../../context/CourseCreationContext';
import { StepTitle } from './StepTitle';

export const Finish = () => {
  const { dispatch } = useStep();

  const complete = () => {
    // if (stepId <= currentStep) {
    //   dispatch({ type: 'SET_STEP', payload: stepId });
    // }
    dispatch({ type: 'SET_STEP', payload: 6 });
  };

  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Complete My Course Creation"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <div className="mt-8 flex gap-5 flex-wrap lg:w-[75%]">
        <div className="flex items-start gap-3">
          <Image src={'/icons/info.svg'} alt="info" width={32} height={32} />
          <span className="text-xs leading-6">
            Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
            malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
            pellentesque interdum. Vestibulum convallis
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Image src={'/icons/info.svg'} alt="info" width={32} height={32} />
          <span className="text-xs leading-6">
            Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
            malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
            pellentesque interdum. Vestibulum convallis
          </span>
        </div>
      </div>
      <Button
        onClick={complete}
        className="!bg-cp-secondary lg:w-[75%] w-full text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
      >
        Submit for Review
      </Button>
    </>
  );
};
