'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
const Page = () => {
  const router = useRouter();
  const handleClick = () => router.push('/tutor/home');
  return (
    <div className="flex flex-col justify-center items-center h-[75vh] gap-5">
      <Image
        src="/images/confirmation.svg"
        alt="confimation image"
        width={200}
        height={300}
      />
      <div className="md:w-[25%] w-[80%] flex flex-col gap-5 ">
        <h1 className="text-[16px] font-extrabold md:text-center">
          Your request for a Virtual Lab has been received successfully.
        </h1>
        <span className="text-[12px] text-gray-700">
          Our Team will sen you an email regarding your request soon. Thank you
          for joining us on this journey!
        </span>

        <button
          className=" py-2 bg-[#AC1D7E] hover:bg-cp-primary text-white text-[12px]  justify-center items-center cursor-pointer hidden md:flex"
          onClick={handleClick}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Page;
