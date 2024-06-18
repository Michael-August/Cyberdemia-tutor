import Link from 'next/link';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface LinksProps {
  direction?: 'row' | 'column';
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

const Links: React.FC<LinksProps> = ({
  direction = 'row',
  toggle,
  setToggle,
}) => {
  const links = [
    {
      title: 'Why CyberDemia',
      path: '/why',
    },
    {
      title: 'Courses',
      path: '/courses',
    },
    {
      title: 'Cyber for Schools',
      path: '/school',
    },
    {
      title: 'FAQs',
      path: '/fAQs',
    },
    {
      title: 'News & Updates',
      path: '/news',
    },
    {
      title: 'Become an Instructor',
      path: '/become an instructor',
    },
  ];

  return (
    <>
      {direction === 'row' && toggle === false ? (
        <div className="flex items-center justify-center gap-7">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-[#31363F] text-[14px] hover:underline no-underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-3 rounded-lg h-[250px] bg-purple-900 w-[300px] relative">
          <IoMdClose
            className="text-white text-2xl absolute top-2 right-2"
            onClick={() => setToggle(!toggle)}
          />
          <div className="pt-10 flex flex-col items-between gap-5 justify-start">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="text-white hover:bg-slate-600"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
