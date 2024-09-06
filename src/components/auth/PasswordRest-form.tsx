'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { useTutorPasswordReset } from '@/hooks/react-query/useAuth';

import { Input } from '../inputs';
import { Label } from '../label';
import Loader from '../loader';

type FormValues = {
  password: string;
  confirmPassword: string;
  email: string;
  otpCode: number;
};

const PasswordRestForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutate: PasswordReset, isLoading } = useTutorPasswordReset(router);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const submitForm: SubmitHandler<FormValues> = (data) => {
    const formattedData = {
      ...data,
      otpCode: Number(data.otpCode),
    };

    PasswordReset(formattedData);
  };

  const password = watch('password');

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
          {/* OTP */}
          <div className=" py-2 flex flex-col justify-center gap-10">
            <div>
              <Label htmlFor="otpCode">OTP</Label>
              <Input
                type="number"
                id="otpCode"
                className="w-full p-2"
                placeholder="Enter OTP"
                {...register('otpCode', {
                  required: 'OTP is required',
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: 'Invalid OTP',
                  },
                })}
              />
              {errors.otpCode && (
                <p className="text-red-500 py-2 text-sm">
                  {errors.otpCode.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 py-2 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                id="confirmpassword"
                className="w-full p-2 border rounded-md"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 py-2 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
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

export default PasswordRestForm;
