import React from 'react';

import { NavigationCrumbs } from '@/components/NavigationCrumbs';
import Student from '@/components/table/Student';

const Home = () => {
  return (
    <>
      <div className="">
        <NavigationCrumbs />
        <div className="flex flex-col gap-2 px-4 md:px-0  sm:mt-[2.5rem] mt-1">
          <span className="text-sm font-extrabold text-[#AC1D7E]">
            Students
          </span>
          <div className="">
            <div className="w-[103px] h-[8px] bg-[#AC1D7E]"></div>
            <hr
              style={{
                height: '1px',
                backgroundColor: '#AC1D7E',
                border: 'none',
              }}
            />
          </div>
        </div>
        <Student />
      </div>
    </>
  );
};

export default Home;
