'use client';
import { useLayoutContext } from '../../../context/LayoutContext';
import CourseSidebar from '../ui/CourseSidebar';
import DefaultSidebar from '../ui/DefaultSidebar';

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }: any) => {
  const { state } = useLayoutContext();
  if (state.sidebarType === 'defaultSidebar')
    return (
      <DefaultSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    );

  if (state.sidebarType === 'courseSideBar') {
    return (
      <CourseSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    );
  }

  return null;
};
