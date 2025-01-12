'use client';

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Input } from '../inputs';

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <form className="my-4 flex flex-col gap-5 lg:w-[70%]">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">Old Password</span>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full !p-3 !py-6 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">New Password</span>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full !p-3 !py-6 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
          </div>
        </div>
        <button className="bg-cp-secondary w-full lg:w-[70%] text-sm mb-5 py-2 !text-white mt-8 hover:bg-cp-primary">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
