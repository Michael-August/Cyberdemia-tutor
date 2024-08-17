'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useLayoutContext } from '../../context/LayoutContext';

const Home = () => {
  const router = useRouter();
  const { dispatch } = useLayoutContext();
  useEffect(() => {
    dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
    dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });

    return () => {
      dispatch({ type: 'SET_NAVBAR', navbarType: 'none' });
      dispatch({ type: 'SET_SIDEBAR', sidebarType: 'none' });
    };
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => router.replace('/tutor/home')}>
        click me to Signin
      </button>{' '}
    </div>
  );
};

export default Home;
