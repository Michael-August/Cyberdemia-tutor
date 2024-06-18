import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
}

interface TabProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

interface TabPanelProps {
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-list flex items-center gap-10 mb-5 relative">
        {React.Children.map(
          children,
          (child: React.ReactElement<TabProps>, index: number) => {
            return (
              <div
                key={index}
                className={`flex items-center gap-1 cursor-pointer text-[14px] w-[180px] pb-3 ${index === activeTab ? 'text-cp-secondary' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.icon && (
                  <div className="tab-icon">{child.props.icon}</div>
                )}
                <div className="tab-title">{child.props.title}</div>
                {index === activeTab && (
                  <div className="active-tab-line bg-cp-secondary w-[175px] h-1 absolute bottom-0"></div>
                )}
              </div>
            );
          },
        )}
        <div className="tabs-bottom-line bg-gray-500 h-[0.5px] absolute bottom-0 left-0 right-0"></div>
      </div>
      <div className="tab-content">
        {React.Children.map(
          children,
          (child: React.ReactElement<TabProps>, index: number) => {
            if (index === activeTab) {
              return child.props.children;
            }
            return null;
          },
        )}
      </div>
    </div>
  );
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};
