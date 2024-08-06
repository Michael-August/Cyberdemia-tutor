import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { CourseCreationStep } from '../NewCourse';
import { StepTitle } from './StepTitle';

export const Price = ({ updateStep }: { updateStep: any }) => {
  const moveToNextStep = (nextStep: CourseCreationStep) => {
    updateStep(nextStep);
  };

  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Price"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <form className="mt-8 flex flex-col gap-5 lg:w-[75%]">
        <div className="flex gap-5">
          <div className="form-group flex flex-col gap-3">
            <Label className="text-xs">Currency</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="NGN" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Currency</SelectLabel>
                  <SelectItem value="ngn">NGN</SelectItem>
                  <SelectItem value="usd">USD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="form-group flex flex-col gap-3">
            <Label className="text-xs">Price</Label>
            <Input
              className="border border-[#000000] focus:outline-none"
              placeholder="amount"
            />
          </div>
        </div>

        <Button
          onClick={() => moveToNextStep('finish')}
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </form>
    </>
  );
};
