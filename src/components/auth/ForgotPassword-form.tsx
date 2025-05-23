'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useTutorForgetPassword } from '@/hooks/react-query/useAuth';

import { Input } from '../inputs';
import { Label } from '../label';
import Loader from '../loader';
import { useRouter } from 'next/navigation';

type FormValues = {
  email: string;
  password: string;
};

const ForgotPassword: React.FC = () => {
  const { mutate: forgetPassword, isLoading } = useTutorForgetPassword();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const submitForm: SubmitHandler<FormValues> = (data) => {
    try {
      forgetPassword(data);
      router.push('/password-reset');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="w-full px-2 py-2 gap-4 h-full">
        <form
          onSubmit={handleSubmit(submitForm)}
          noValidate
          className="space-y-4"
        >
          {/* Email */}
          <div className=" py-2 flex flex-col justify-center gap-10">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                className="w-full p-2"
                placeholder="Email Address"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
