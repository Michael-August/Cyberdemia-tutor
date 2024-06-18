'use client';
import { useLayoutContext } from '../../../context/LayoutContext';
import CourseSidebar from '../ui/CourseSidebar';
import DefaultSidebar from '../ui/DefaultSidebar';

export const Sidebar = () => {
  const { state } = useLayoutContext();
  if (state.sidebarType === 'defaultSidebar')
    return (
      <DefaultSidebar isOpen={false} onClose={() => console.log('closed')} />
    );
  if (state.sidebarType === 'courseSideBar') return <CourseSidebar />;
  if (state.sidebarType === 'none') return null;
  return null;
};
