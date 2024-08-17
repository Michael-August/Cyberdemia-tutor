import React from 'react';

import { NavigationCrumbs } from '@/components/NavigationCrumbs';
import ReviewCard from '@/components/reviewCard/index';

const Home = () => {
  return (
    <div>
      <div className="">
        <NavigationCrumbs />
        <div className="flex flex-col gap-2 px-4 md:px-0  sm:mt-[2.5rem] mt-1">
          <span className="text-sm font-extrabold text-[#AC1D7E]">Reviews</span>
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
        <ReviewCard />
      </div>
    </div>
  );
};

export default Home;
