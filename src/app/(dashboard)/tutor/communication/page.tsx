'use client';
import { Chip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

import { Button } from '@/components/button';

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <div className="">
        <span className="font-bold text-xl">Communication</span>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-10">
        <div className="btn-card  w-full md:w-[19.75rem] border border-cp-secondary p-4 flex flex-col items-center justify-center gap-5">
          <Image
            src="/images/chatIcon.svg"
            alt="plus in acircle"
            width={80}
            height={80}
          />
          <span className="text-xl font-bold">Q&A Forums</span>
          <p className="mt-3 text-center ">
            See what your students are saying and provide feedback to questions
          </p>
          <Button
            className="flex gap-1 items-center !bg-cp-secondary hover:!bg-cp-primary !transition-all text-white rounded-none p-2"
            onClick={() => router.push('communication/Q&AForums')}
          >
            View all
            <Chip
              label={25}
              style={{
                color: '#AC1D7E',
                backgroundColor: '#fff',
              }}
            />
            <IoArrowForward size={20} />
          </Button>
        </div>
        <div className="btn-card  w-full md:w-[19.75rem] border border-cp-secondary p-4 flex flex-col items-center justify-center gap-5">
          <Image
            src="/images/announcement.svg"
            alt="plus in acircle"
            width={80}
            height={80}
          />
          <span className="text-xl font-bold">Announcement</span>
          <p className="mt-3 text-center ">
            Reach out to your enrolled students with relevant information
          </p>
          <Button
            className="flex gap-1 items-center !bg-cp-secondary hover:!bg-cp-primary !transition-all text-white rounded-none p-2"
            onClick={() => router.push('communication/announcement')}
          >
            Manage Announcementsd
            <IoArrowForward size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
