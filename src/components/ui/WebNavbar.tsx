'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoArrowForward } from 'react-icons/io5';

import Links from '../links/Links';

const WebNavbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-[100vw] text-white z-[10000]">
      <div className="bg-cp-primary flex justify-center items-center py-6 h-[10px] text-[12px] gap-4">
        <Image
          src="/images/notification.svg"
          alt="Description of image"
          width={28}
          height={28}
        />
        <span>
          We are excited to announce the launch of Cyber Security &
          Infrastructure Engineering / SOC Management course.
        </span>
        <span className="underline text-gray-200">View Course Details</span>
        <IoArrowForward size={22} />
      </div>
      <div className="flex py-8 h-[20px] border-b items-center justify-between px-20 border-pink-200 ">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Description of image"
            width={130}
            height={130}
          />
        </Link>
        <div className="flex justify-center items-center gap-8">
          <ul className="flex">
            <Links direction="row" toggle={toggle} setToggle={setToggle} />
          </ul>
          <div className="text-cp-secondary font-extrabold text-[12px] border-[1.5px] border-[#AC1D7E] px-2 py-1">
            Log in
          </div>
          <div className="text-white bg-[#2BDE48] font-extrabold text-[12px] px-2 py-1.5 flex justify-center items-center">
            Apply Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
