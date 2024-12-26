'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useSupport } from '@/hooks/react-query/useSupport';

import { Label } from '../label';
import Breadcrumb from '../ui/breadcrumb';

const breadcrumbs = [
  {
    url: '/student/support',
    name: 'Help & Support',
  },
  {
    url: '',
    name: 'Get Support',
  },
];

const Help = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync: submitHelp } = useSupport(router);

  const onSubmit = (data: any) => {
    submitHelp(data);
  };

  return (
    <div>
      <div className="breadcrumbs">
        <Breadcrumb breadcrumbsArray={breadcrumbs} />
      </div>
      <div className="help mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 lg:w-[80%]"
        >
          <div className="form-group w-full flex flex-col gap-2">
            <Label className="text-sm text-[#000000CC]">
              Category of complaint
            </Label>
            <select
              {...register('category', { required: true })}
              className="w-full p-3 focus:outline-none focus:ring-0 border border-solid border-[#00000033] bg-[#F5F5F5]"
            >
              <option value="" disabled selected>
                Select Type
              </option>
              <option value="Technical Support">Technical Support</option>
              <option value="Customer Support">Customer Support</option>
              {/* <option value="system">System</option> */}
            </select>
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-group w-full flex flex-col gap-2">
            <Label className="text-sm text-[#000000CC]">
              Write a message regarding any complaint
            </Label>
            <textarea
              {...register('message', { required: true, maxLength: 1000 })}
              placeholder="Enter text (1000 characters)"
              className="w-full p-3 focus:outline-none focus:ring-0 border border-solid border-[#00000033] bg-[#F5F5F5]"
              maxLength={1000}
            />
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-4 my-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Help;
