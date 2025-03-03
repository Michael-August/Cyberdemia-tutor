'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import AnnouncementDetail from '@/components/announcement/AnnouncementDetail';
import Loader from '@/components/loader';
import { useGetAnnouncement } from '@/hooks/react-query/useCommunication';

const Home = () => {
  const { announcementDetail } = useParams();

  const { data, isLoading } = useGetAnnouncement(announcementDetail as string);

  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      {isLoading ? (
        <Loader />
      ) : (
        <AnnouncementDetail announcementDetails={data.data} />
      )}
    </div>
  );
};

export default Home;
