'use client';
import { useLayoutContext } from '../../../context/LayoutContext';
import DashboardNavbar from '../ui/DashboardNavbar';
import WebNavbar from '../ui/WebNavbar';

export const Navbar = () => {
  const { state } = useLayoutContext();
  if (state.navbarType === 'webNavbar') return <WebNavbar />;
  if (state.navbarType === 'dashboardNavbar')
    return <DashboardNavbar setSidebarOpen={undefined} isSidebarOpen={false} />;
  return null;
};
