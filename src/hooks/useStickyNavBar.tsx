import { useEffect, useState } from 'react';

const useStickyNavbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
};

export default useStickyNavbar;
