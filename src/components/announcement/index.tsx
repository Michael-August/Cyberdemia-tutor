'use client';
import React from 'react';

import { NavigationCrumbs } from '../NavigationCrumbs';
import AnnouncementCard from './AnnouncementCard';
import AnnouncementTable from './AnnouncementTable';

const Index = () => {
  return (
    <div className="flex flex-col gap-8 h-[100%] px-5 py-5">
      <NavigationCrumbs />
      <AnnouncementCard />
      <AnnouncementTable />
    </div>
  );
};

export default Index;
