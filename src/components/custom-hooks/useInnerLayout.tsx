'use client';
import React, { useEffect, useState } from 'react';


import { useLayoutContext } from '../../../context/LayoutContext';
import { Navbar } from './useNavbar';
import { Sidebar } from './useSidebar';
import Loader from '../loader';
interface RootLayoutInnerProps {
  children: React.ReactNode;
}

export function RootLayoutInner({ children }: RootLayoutInnerProps) {
  const [client, setClient] = useState(false);
  const { state } = useLayoutContext();

  useEffect(() => {
    setClient(true);
  }, []);

  let dynamicClass = '';
  if (state.navbarType === 'dashboardNavbar') {
    dynamicClass += 'md:mt-[80px]';
  }

  if (state.sidebarType === 'defaultSidebar') {
    dynamicClass += ' md:ml-[250px] md:mr-[30px]';
  }

  return (
    <div className="w-[100vw] h-[100vh] relative">
      <Navbar />
      <Sidebar />
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
