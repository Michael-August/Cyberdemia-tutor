'use client';

import { useEffect } from 'react';

import { NewCourse } from '@/components/courses/NewCourse';

import { useLayoutContext } from '../../../../../../context/LayoutContext';

const Page = () => {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'courseSideBar' });
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-8 h-[100%] px-4 md:px-0">
      <NewCourse />
    </div>
  );
};

export default Page;
