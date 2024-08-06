import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { CourseCreationStep } from '../NewCourse';
import { StepTitle } from './StepTitle';

export const Certification = ({ updateStep }: { updateStep: any }) => {
  const moveToNextStep = (nextStep: CourseCreationStep) => {
    updateStep(nextStep);
  };
  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Certification"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <div className="cert-templates flex flex-col gap-8 lg:w-[75%] mt-8">
        <span className="text-sm text-[#000000CC] font-semibold">
          Choose preferred template
        </span>
        <div className="templates flex gap-5">
          <div className="hover:border-[2px] hover:border-cp-secondary transition-all relative">
            <Image
              className="absolute top-1 right-1"
              src={'/icons/selected.svg'}
              width={18}
              height={18}
              alt={'checked'}
            />
            <Image
              className=""
              src={'/images/cert-template1.svg'}
              width={222}
              height={151}
              alt={'Template 1'}
            />
            {/* <Image className="bolck md:hidden" src={"/images/cert-template1.svg"} width={163.32} height={111.09} alt={"Template 1"} /> */}
          </div>
          <div className="hover:border-[2px] hover:border-cp-secondary transition-all">
            <Image
              src={'/images/cert-template2.svg'}
              width={222}
              height={151}
              alt={'Template 2'}
            />
          </div>
          <div className="hover:border-[2px] hover:border-cp-secondary transition-all">
            <Image
              src={'/images/cert-template3.svg'}
              width={222}
              height={151}
              alt={'Template 3'}
            />
          </div>
        </div>
      </div>

      <div className="signature flex flex-col gap-6 lg:w-[75%] mt-8">
        <span className="text-sm text-[#000000CC] font-semibold">
          Provide Digital Signature
        </span>
        <div className="form-group flex flex-col gap-3">
          <Label className="text-xs">Attach signature</Label>
          <input type="file" />
        </div>
      </div>

      <div className="info flex items-start gap-8 mt-8 lg:w-[45%]">
        <Image src={'/icons/info.svg'} alt="info" width={32} height={32} />
        <span className="text-xs leading-6">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis
        </span>
      </div>

      <Button
        onClick={() => moveToNextStep('pricing')}
        className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5 w-full lg:w-[75%]"
      >
        Save and Continue
      </Button>
    </>
  );
};
