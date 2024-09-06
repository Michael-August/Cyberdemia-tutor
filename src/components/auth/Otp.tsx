'use client';
import Image from 'next/image';
import React from 'react';

import { useTutorOTPResend } from '@/hooks/react-query/useAuth';

import Loader from '../loader';
import { InputOTPControlled } from './otp-input';

const Otp = () => {
  const { mutate: studentOtpCodeRsend, isLoading } = useTutorOTPResend();

  const handleResendOPT = () => {
    const storedData = localStorage.getItem('temp');
    const parsedData = storedData ? JSON.parse(storedData) : null;

    const data = {
      email: parsedData ?? null,
      type: 'verifyEmail',
    };
    studentOtpCodeRsend(data);
  };

  return (
    <>
      {isLoading && <Loader />}
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 pt-20 h-full">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center w-full items-center sm:items-start text-center sm:text-left">
            <Image
              src={'/images/cyberdemiaLogo.svg'}
              width={200}
              height={200}
              alt={'cyberdemia logo'}
              className="max-w-full h-auto pb-10"
            />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Please verify your email address
            </h1>
            <p className="text-black py-5">
              A 5-digit code has been sent to your email address. Please enter
              the code below.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full">
            <InputOTPControlled />
          </div>
          <div>
            <p className="text-black py-5">
              Didn&apos;t receive the code?{' '}
              <span
                className="text-blue-600 cursor-pointer underline-offset-4 hover:underline"
                onClick={handleResendOPT}
              >
                Resend code
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Otp;
