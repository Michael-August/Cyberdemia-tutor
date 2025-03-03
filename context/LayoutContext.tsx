'use client';
import { createContext, ReactNode, useContext,useReducer } from 'react';

type LayoutState = {
  navbarType: 'none' | 'webNavbar' | 'dashboardNavbar';
  sidebarType: 'none' | 'defaultSidebar' | 'courseSideBar';
};

const initialState: LayoutState = {
  navbarType: 'none',
  sidebarType: 'none',
};

type LayoutAction =
  | { type: 'SET_NAVBAR'; navbarType: LayoutState['navbarType'] }
  | { type: 'SET_SIDEBAR'; sidebarType: LayoutState['sidebarType'] };

const layoutReducer = (
  state: LayoutState,
  action: LayoutAction,
): LayoutState => {
  switch (action.type) {
    case 'SET_NAVBAR':
      return { ...state, navbarType: action.navbarType };
    case 'SET_SIDEBAR':
      return { ...state, sidebarType: action.sidebarType };
    default:
      return state;
  }
};

const LayoutContext = createContext<
  { state: LayoutState; dispatch: React.Dispatch<LayoutAction> } | undefined
>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};
