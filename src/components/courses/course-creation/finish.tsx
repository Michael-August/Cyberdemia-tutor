import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { CourseCreationStep } from '../NewCourse';
import { StepTitle } from './StepTitle';

export const Finish = ({ updateStep }: { updateStep: any }) => {
  const moveToNextStep = (nextStep: CourseCreationStep) => {
    updateStep(nextStep);
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
        onClick={() => moveToNextStep('completed')}
        className="!bg-cp-secondary lg:w-[75%] w-full text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
      >
        Submit for Review
      </Button>
    </>
  );
};
