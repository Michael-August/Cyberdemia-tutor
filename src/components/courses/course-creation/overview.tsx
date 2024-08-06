import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { CourseCreationStep } from '../NewCourse';
import { StepTitle } from './StepTitle';

type FormValues = {
  courseTitle: string;
  courseSubtitle: string;
  whatToLearn: string;
  prerequisite: string;
};

export const CourseOverview = ({ updateStep }: { updateStep: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const submitForm = (data: any) => {
    console.log('Form submitted', data);
  };

  const moveToNextStep = (nextStep: CourseCreationStep) => {
    updateStep(nextStep);
  };

  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Course Overview"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="mt-8 flex flex-col gap-5 lg:w-[75%]"
      >
        <div className="w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="courseTile"
          >
            Course Title
          </Label>

          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Course Title"
            autoComplete="off"
            type="text"
            id="courseTile"
            {...register('courseTitle', {
              required: 'Course title is required',
            })}
          />

          {errors.courseTitle && (
            <p className="text-red-500 py-2 text-xs">
              {errors.courseTitle.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="courseSubtitle"
          >
            Course Subtitle
          </Label>

          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Course Subtitle"
            autoComplete="off"
            type="text"
            id="courseSubtitle"
            {...register('courseSubtitle', {
              required: 'Course Subtitle is required',
            })}
          />

          {errors.courseSubtitle && (
            <p className="text-red-500 py-2 text-xs">
              {errors.courseSubtitle.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="whatToLearn"
          >
            What Students will learn:
          </Label>

          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Course Subtitle"
            autoComplete="off"
            type="text"
            id="whatToLearn"
            {...register('whatToLearn', {
              required:
                'Brief description of what students will learn is required',
            })}
          />

          {errors.whatToLearn && (
            <p className="text-red-500 py-2 text-xs">
              {errors.whatToLearn.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="prerequisite"
          >
            Prerequisite for Learning:
          </Label>

          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Course Subtitle"
            autoComplete="off"
            type="text"
            id="prerequisite"
            {...register('prerequisite', {
              required: 'Prerequisite before learning is required',
            })}
          />

          {errors.prerequisite && (
            <p className="text-red-500 py-2 text-xs">
              {errors.prerequisite.message}
            </p>
          )}
        </div>

        <Button
          onClick={() => moveToNextStep('curriculum')}
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </form>
    </>
  );
};
