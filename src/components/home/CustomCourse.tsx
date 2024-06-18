import Image from 'next/image';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

function CustomCourse() {
  return (
    <div className="h-[194px] w-[370px] border-[1.5px] border-[#AC1D7E] p-2 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/images/ShieldPlus.svg"
          alt="Menu"
          width={45}
          height={50}
          className="cursor-pointer"
        />
        <span className="text-[14px] font-extrabold">
          Custom Course /Training Request Form
        </span>
      </div>
      <div>
        <span className="text-[12px] font-normal text-gray-700  leading-[-5px]">
          Request for specific courses on CyberDemia. Kindly apply by filling
          the training and courses form.
        </span>
      </div>
      <div className="flex justify-end">
        <div className="bg-cp-secondary text-white w-[93px] py-2 flex justify-center items-center text-[13px] gap-2 ">
          Apply
          <GoArrowRight size={19} />
        </div>
      </div>
    </div>
  );
}

export default CustomCourse;
