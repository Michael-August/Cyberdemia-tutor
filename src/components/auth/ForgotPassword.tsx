// Signup.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ForgotPasswordForm from './ForgotPassword-form';
import moment from 'moment';

const ForgotPassword = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-10">
      <div className="col-span-1 hidden sm:block">
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            src={'/images/loginImage.svg'}
            width={600}
            height={600}
            alt={'signup image'}
          />

          <h1 className="text-3xl font-extrabold text-center px-[10rem]">
            Gain Industry Standard Skills & Become a Cybersecurity Expert
          </h1>
          <p className="text-black py-20">© {moment().year()} CyberDemia</p>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col justify-center sm:pt-10 items-start gap-10">
          <Image
            src={'/images/cyberdemiaLogo.svg'}
            width={200}
            height={200}
            alt={'cyberdemia logo'}
          />
          <div>
            <h1 className="text-3xl font-bold">Reset Password</h1>
            <p className="text-black py-2">
              Are you ready to share your expertise and inspire the next
              generation of learners? Sign up today on our innovative learning
              platform!
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
        <div>
          <p className="text-black py-5">
            Not a CyberDemia tutor yet?{' '}
            <Link href="/signup">
              <span className="text-blue-600 cursor-pointer underline-offset-4 hover:underline">
                Register Now!
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
