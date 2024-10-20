'use client';

import Image from 'next/image';

export const Completed = () => {
  const goHome = () => {
    window.location.href = '/tutor/courses';
    localStorage.removeItem('newCourseId');
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Image
        src={'/images/completed.svg'}
        alt="completed"
        width={243}
        height={243}
      />
      <p className="text-base font-semibold w-[40%] text-center">
        Your course you just created has been received successfully and will be
        reviewed.
      </p>
      <span
        onClick={goHome}
        className="!bg-cp-secondary p-2 w-[40%] text-center cursor-pointer text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
      >
        Go to Home
      </span>
    </div>
  );
};
