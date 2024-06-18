'use client';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface SideItemsProps {
  img: React.ComponentType;
  link: string;
  children: ReactNode;
}

const SideItems: React.FC<SideItemsProps> = ({ img: Icon, link, children }) => {
  const pathname = usePathname();
  const isLinkActive = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <div
      className={`py-3 items-center w-full hover:bg-sa-light font-bold cursor-pointer p-5 mb-2 flex gap-5 ${
        isLinkActive(link) ? 'bg-white text-cp-primary' : 'text-white'
      }`}
    >
      <span
        className={
          isLinkActive(link)
            ? 'text-cp-primary text-[20px]'
            : 'text-white text-[20px]'
        }
      >
        <Icon />
      </span>
      <div>{children}</div>
    </div>
  );
};

export default SideItems;
