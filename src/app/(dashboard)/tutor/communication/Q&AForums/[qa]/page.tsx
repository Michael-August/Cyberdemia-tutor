import React from 'react';

import { NavigationCrumbs } from '@/components/NavigationCrumbs';
import ReplyCard from '@/components/qaReply';

const Pages = () => {
  return (
    <div>
      <div className="">
        <NavigationCrumbs />
        <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
          <ReplyCard />
        </div>
      </div>
    </div>
  );
};

export default Pages;
