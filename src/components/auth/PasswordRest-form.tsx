'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Input } from '../inputs';
import { Label } from '../label';

type FormValues = {
  password: string;
  confirmpassword: string;
};

const PasswordRestForm: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const submitForm: SubmitHandler<FormValues> = (data) => {
    console.log('Form submitted', data);
  };
  const password = watch('password');

  return (
    <div className="w-full px-2 py-2 gap-4 h-full">
      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="space-y-4"
      >
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
              {...register('confirmpassword', {
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
          {errors.confirmpassword && (
            <p className="text-red-500 py-2 text-sm">
              {errors.confirmpassword.message}
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
  );
};

export default PasswordRestForm;
