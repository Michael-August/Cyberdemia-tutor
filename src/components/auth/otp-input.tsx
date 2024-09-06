'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useTutorOTP } from '@/hooks/react-query/useAuth';

import Loader from '../loader';

export function InputOTPControlled() {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  localStorage.getItem('temp');
  const { mutate: tutortpCode, isLoading } = useTutorOTP(router);

  const handleOptChange = () => {
    const storedData = localStorage.getItem('temp');
    const parsedData = storedData ? JSON.parse(storedData) : null;

    const data = {
      otpCode: Number(value),
      email: parsedData ?? null,
    };
    // Check if OTP code has the correct length and proceed with the mutation
    if (value.length === 6) {
      tutortpCode(data);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <div className="flex flex-col justify-center items-center">
        <div className="space-y-10 flex flex-row justify-center items-center w-5 sm:w-[90vw]">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="flex justify-center items-center gap-5 sm:gap-10">
              <InputOTPSlot
                index={0}
                className="w-15 h-12 text-xl border border-cp-secondary p-5 sm:p-10"
              />
              <InputOTPSlot
                index={1}
                className="w-15 h-12 text-xl border border-cp-secondary p-5 sm:p-10"
              />
              <InputOTPSlot
                index={2}
                className="w-15 h-12 text-xl border border-cp-secondary p-5 sm:p-10"
              />
              <InputOTPSlot
                index={3}
                className="w-15 h-12 text-xl border border-cp-secondary p-5 sm:p-10"
              />
              <InputOTPSlot
                index={4}
                className="w-15 h-12 text-xl border border-cp-secondary p-5 sm:p-10"
              />
              <InputOTPSlot
                index={5}
                className="w-15 h-12 text-xl border border-cp-secondary p-5 sm:p-10"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <button
          onClick={handleOptChange}
          type="submit"
          disabled={value.length !== 6}
          className="w-auto p-5 py-4 mt-10 bg-cp-secondary text-white rounded-md hover:bg-cp-secondaryDarker transition duration-200"
        >
          Submit
        </button>
      </div>
    </>
  );
}
