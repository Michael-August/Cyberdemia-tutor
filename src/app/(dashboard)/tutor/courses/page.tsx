'use client';

import React, { useEffect } from 'react';

import { CoursesHome } from '@/components/courses/CoursesHome';

import { useLayoutContext } from '../../../../../context/LayoutContext';

const Page = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });
  }, [dispatch]);

  return (
    <div className="flex w-full flex-col gap-8 px-4 md:px-0">
      <div className="">
        <span className="font-bold text-xl">My Courses</span>
      </div>

      <CoursesHome />
    </div>
  );
};

export default Page;
