import React from 'react';

import AnnouncementDetail from '@/components/announcement/AnnouncementDetail';

const Home = () => {
  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <AnnouncementDetail />
    </div>
  );
};

export default Home;
