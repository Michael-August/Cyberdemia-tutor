'use client';
import React, { useEffect, useState } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';
import Loader from '../loader';
import { Navbar } from './useNavbar';
import { Sidebar } from './useSidebar';
interface RootLayoutInnerProps {
  children: React.ReactNode;
}

export function RootLayoutInner({ children }: RootLayoutInnerProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [client, setClient] = useState(false);
  const { state } = useLayoutContext();

  useEffect(() => {
    setClient(true);
  }, []);

  let dynamicClass = '';
  if (state.navbarType === 'dashboardNavbar') {
    dynamicClass += 'md:mt-[80px] mt-4';
  }

  if (
    state.sidebarType === 'defaultSidebar' ||
    state.sidebarType === 'courseSideBar'
  ) {
    dynamicClass += ' md:ml-[250px] md:mr-[30px]';
  }

  return (
    <div className="w-[100vw] h-[100vh] relative">
      <Navbar />
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={` ${dynamicClass}`}>
        {!client ? (
          // <div className="h-full w-[80%] md:mt-[80px] md:ml-[250px] grid gap-10 flex-col">
          //   <Skeleton className="h-[125px] rounded-xl bg-gray-300" />
          //   <div className="grid gap-10">
          //     <Skeleton className="h-4 " />
          //     <Skeleton className="h-4 " />
          //   </div>
          //   <Skeleton className="h-[125px]  rounded-xl bg-gray-300" />
          //   <div className="grid gap-10">
          //     <Skeleton className="h-4 " />
          //     <Skeleton className="h-4 " />
          //   </div>
          // </div>
          <Loader />
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
}
