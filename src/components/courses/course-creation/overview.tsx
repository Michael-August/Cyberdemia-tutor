'use client';

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateCourse } from '@/hooks/react-query/course-creation/useCourses';

import { useStep } from '../../../../context/CourseCreationContext';
import { StepTitle } from './StepTitle';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

type FormValues = {
  title: string;
  subtitle: string;
  objective: string;
  prerequisite: string;
};

export const CourseOverview = () => {
  const { mutateAsync: createCourse } = useCreateCourse();

  const handleChange = (field: 'objective' | 'prerequisite', value: string) => {
    if (field === 'objective') {
      setValue('objective', value); // Register value in react-hook-form
      trigger('objective'); // Trigger validation
    }
    if (field === 'prerequisite') {
      setValue('prerequisite', value); // Register value in react-hook-form
      trigger('prerequisite'); // Trigger validation
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const { dispatch } = useStep();
  const submitForm: SubmitHandler<FormValues> = async (data) => {
    try {
      const courseResponse = await createCourse(data);
      localStorage.setItem('newCourseId', courseResponse?.data?.id);
      dispatch({ type: 'COMPLETE_STEP', payload: 0 });
      dispatch({ type: 'NEXT_STEP' });
    } catch (error: any) {
      toast.error(error.response.data);
    }
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
            {...register('title', {
              required: 'Course title is required',
            })}
          />

          {errors.title && (
            <p className="text-red-500 py-2 text-xs">{errors.title.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="subtitle"
          >
            Course Subtitle
          </Label>

          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Course Subtitle"
            autoComplete="off"
            type="text"
            id="subtitle"
            {...register('subtitle', {
              required: 'Course Subtitle is required',
            })}
          />

          {errors.subtitle && (
            <p className="text-red-500 py-2 text-xs">
              {errors.subtitle.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="objective"
          >
            What Students will learn:
          </Label>

          <ReactQuill
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="What to Learn"
            theme="snow"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, false] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline'],
              ],
            }}
            onChange={(value) => handleChange('objective', value)}
          />

          {errors.objective && (
            <p className="text-red-500 py-2 text-xs">
              {errors.objective.message}
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

          <ReactQuill
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Enter Prerequisite"
            theme="snow"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, false] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['bold', 'italic', 'underline'],
              ],
            }}
            onChange={(value) => handleChange('prerequisite', value)}
          />

          {errors.prerequisite && (
            <p className="text-red-500 py-2 text-xs">
              {errors.prerequisite.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </form>
    </>
  );
};
