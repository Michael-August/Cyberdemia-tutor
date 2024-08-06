'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GoBook } from 'react-icons/go';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { MdOutlineChat } from 'react-icons/md';
import { PiHouseFill } from 'react-icons/pi';
import { PiHeadsetBold } from 'react-icons/pi';
import { TbCube } from 'react-icons/tb';

import SideItems from './SideItems';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const sidebarLinks = [
    { img: PiHouseFill, link: '/tutor/home', text: 'Home' },
    { img: GoBook, link: '/tutor/courses', text: 'My Courses' },
    {
      img: isSmallScreen
        ? MdOutlineSignalCellularAlt
        : MdOutlineSignalCellularAlt,
      link: '/tutor/analytics',
      text: isSmallScreen ? 'Analytics' : 'Analytics',
    },

    {
      img: isSmallScreen ? MdOutlineChat : MdOutlineChat,
      link: '/tutor/communication',
      text: isSmallScreen ? 'Communication' : 'Communication',
    },
    { img: TbCube, link: '/tutor/labs', text: 'Virtual Labs' },

    { img: CgProfile, link: '/tutor/profile', text: 'Profile' },
    { img: PiHeadsetBold, link: '/tutor/support', text: 'Help & Support' },
  ];

  return (
    <>
      <div
        className={`bg-cp-primary w-[220px] text-white shadow-md z-[10000] h-full fixed top-10 left-0 bottom-0 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex py-10 justify-center items-center gap-2 border-b-[0.8px] border-cp-secondary md:hidden pb-5">
          <Image
            src="/images/profilePicture.svg"
            alt="User Avatar"
            width={9}
            height={9}
            className="rounded-full"
          />
          <div>
            <h1 className="text-[12px] capitalize text-gray-300">John Doe</h1>
          </div>
        </div>
        <div className="mt-10">
          {sidebarLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              <div onClick={onClose}>
                <SideItems img={link.img} link={link.link}>
                  {link.text}
                </SideItems>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
