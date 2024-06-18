'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RxCaretDown } from 'react-icons/rx';

interface DashboardNavbarProps {
  setSidebarOpen: any;
  isSidebarOpen: boolean;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  setSidebarOpen,
  isSidebarOpen,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-cp-primary py-3 md:fixed top-0 right-0 left-0 flex items-center justify-between md:px-5 px-4 shadow-md z-[10000]">
      <Link href="/">
        <Image
          src="/images/logo2.svg"
          alt="Description of image"
          width={100}
          height={100}
          className="w-[50px] md:w-[100px]"
        />
      </Link>
      <div className="flex items-center gap-6">
        <div className="relative">
          <IoNotificationsOutline color="white" size={27} />
          <div className="bg-red-500 h-[15px] w-[15px] rounded-full text-[10px] text-white flex items-center justify-center absolute top-0 right-0">
            1
          </div>
        </div>
        <div className="md:flex items-center gap-2 hidden">
          <Image
            src="/images/profilePicture.svg"
            alt="User Avatar"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full"
          />
          <div>
            <p className="text-[10px] capitalize text-gray-300">John Doe</p>
          </div>
          <div className="relative">
            <RxCaretDown
              className="text-gray-300 cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute p-3 bg-cp-primary top-full right-0 mt-1 w-50 text-white rounded shadow-lg">
                <div className="p-2">
                  <p className="text-gray-200 font-semibold capitalize">
                    John Doe
                  </p>
                  <p className="text-gray-400">JohnDoe@gmail.com</p>
                </div>
                <button className="block bg-cp-secondary w-full py-2 text-left px-4 bg-sa-golden rounded-lg hover:bg-cp-primary">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          {!isSidebarOpen ? (
            <Image
              src="/images/menue.svg"
              alt="Menu"
              width={24}
              height={24}
              className="h-6 w-6 cursor-pointer"
              onClick={openSidebar}
            />
          ) : (
            <Image
              src="/images/close.svg"
              alt="Menu"
              width={24}
              height={24}
              className="h-6 w-6 cursor-pointer"
              onClick={closeSidebar}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
