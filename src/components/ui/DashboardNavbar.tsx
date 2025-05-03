'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
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

  const data = sessionStorage.getItem('userProfile');

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    signOut();
  };

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
    <div className="fixed top-0 left-0 right-0 bg-cp-primary py-3  flex items-center justify-between md:px-5 px-4 shadow-md z-[1000]">
      <Link href="/tutor/home">
        <Image
          src="/images/logo2.svg"
          alt="Description of image"
          width={100}
          height={100}
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
          <div className="w-7 flex items-center bg-white p-2 justify-center h-7 rounded-[50%] border border-solid">
            {
              <span className="font-bold text-cp-secondary">
                {data && JSON.parse(data).fullName.split(' ')[0][0]}
                {data && JSON.parse(data).fullName.split(' ')[1][0]}
              </span>
            }
          </div>
          <div>
            <p className="text-[10px] capitalize text-gray-300">
              {data && JSON.parse(data).fullName}
            </p>
          </div>
          <div className="relative">
            <RxCaretDown
              className="text-gray-300 cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute p-3 bg-cp-primary top-full right-0 mt-1 w-50 text-white rounded shadow-lg">
                <div className="p-2">
                  <p className="text-gray-200 font-semibold capitalize text-justify">
                    {data && JSON.parse(data).fullName}
                  </p>
                  <p className="text-gray-400">{data && JSON.parse(data).email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="block bg-cp-secondary w-full py-2 text-center px-4 bg-sa-golden rounded-lg hover:bg-cp-primary"
                >
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
