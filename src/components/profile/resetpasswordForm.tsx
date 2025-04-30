'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Input } from '../inputs';
import { toast } from 'react-toastify';
import { useTutorPasswordReset } from '@/hooks/react-query/useAuth';

const ResetPasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const resetPasswordMutation = useTutorPasswordReset(router);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      toast.error('Please fill in both fields.');
      return;
    }

    resetPasswordMutation.mutate({ oldPassword, newPassword });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="my-4 flex flex-col gap-5 lg:w-[70%]"
      >
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">Old Password</span>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="oldPassword"
                minLength={8}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Old Password"
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
                id="newPassword"
                minLength={8}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
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
        <button
          type="submit"
          disabled={resetPasswordMutation.isLoading}
          className="bg-cp-secondary w-full lg:w-[70%] text-sm mb-5 py-2 !text-white mt-8 hover:bg-cp-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {resetPasswordMutation.isLoading ? 'Saving...' : 'Save changes'}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
