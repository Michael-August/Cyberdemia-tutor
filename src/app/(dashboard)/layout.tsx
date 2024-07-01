'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';

function Layout({ children }: any) {
  const { dispatch } = useLayoutContext();

  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'dashboardNavbar' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'defaultSidebar' });

    return () => {
      dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
      dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
    };
  }, [dispatch]);

  return (
    <div className=" overflow-y-auto">
      <Image
        src="/images/backgroundImage.svg"
        alt="background image"
        width={700}
        height={700}
        className="fixed right-[-150px] bottom-[-150px]"
      />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
