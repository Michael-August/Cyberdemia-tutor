'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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
import { useAddPriceToCourse } from '@/hooks/react-query/course-creation/useCourses';

import { useStep } from '../../../../context/CourseCreationContext';
import { StepTitle } from './StepTitle';

type FormValues = {
  price: string;
  currency?: string;
};

export const Price = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutateAsync: addPrice } = useAddPriceToCourse();

  const { dispatch } = useStep();
  const submitForm: SubmitHandler<FormValues> = async (data) => {
    const courseId = localStorage.getItem('newCourseId') as string;

    const formData = {
      price: Number(data.price),
      currency: data.currency as string,
    };

    try {
      const priceResponse = await addPrice({ courseId, ...formData });
      toast.success(priceResponse.message);
      dispatch({ type: 'COMPLETE_STEP', payload: 4 });
      dispatch({ type: 'NEXT_STEP' });
    } catch (error: any) {
      toast.error(error.response.data);
    }
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

      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="mt-8 flex flex-col gap-5 lg:w-[75%]"
      >
        <div className="flex gap-5">
          <div className="form-group flex flex-col gap-3">
            <Label className="text-xs">Currency</Label>
            <Select
              {...register('currency', {
                // required: 'Currency is required',
                value: 'NGN',
              })}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="NGN" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Currency</SelectLabel>
                  <SelectItem value="NGN">NGN</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* {errors.currency && (
              <p className="text-red-500 py-2 text-xs">
                {errors.currency.message}
              </p>
            )} */}
          </div>
          <div className="form-group flex flex-col gap-3">
            <Label className="text-xs">Price</Label>
            <Input
              className="border border-[#000000] focus:outline-none"
              placeholder="amount"
              {...register('price', {
                required: 'Course Price is required',
              })}
            />

            {errors.price && (
              <p className="text-red-500 py-2 text-xs">
                {errors.price.message}
              </p>
            )}
          </div>
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
