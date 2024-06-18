'use client';

import { useEffect } from 'react';

import { useLayoutContext } from '../../../context/LayoutContext';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });

    return () => {
      dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
      dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
    };
  }, [dispatch]);
  return <main>{children}</main>;
};

export default AuthLayout;
