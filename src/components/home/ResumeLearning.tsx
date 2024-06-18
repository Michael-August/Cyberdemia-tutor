import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

function ResumeLearning() {
  return (
    <div className="h-[153px] w-[382px] md:w-[752px] bg-[#f8cfeb] p-5 flex gap-5">
      <div>
        <div className="hidden md:flex">
          <Image
            src="/images/home1.svg"
            alt="Menu"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <span className="text-[14px] font-extrabold">
          Cyber Security Defense Analyst
        </span>
        <div>
          <span className="text-[10px] flex justify-end text-gray-700 ">
            4/8 Lessons Completed
          </span>
          <div className="h-[10px] w-[567px] bg-white">
            <div className="w-[40%] h-full bg-[#5595F5] "></div>
          </div>
        </div>
        <div className="flex md:justify-end mt-3 md:mt-0">
          <div className="bg-cp-secondary py-2 w-[90%] md:w-[158px] text-white text-[12px] flex justify-center items-center gap-2">
            Resume Learning
            <GoArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeLearning;
