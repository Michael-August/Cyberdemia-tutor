import React from 'react';
import { FaHouse } from 'react-icons/fa6';

function DashBoardLinks() {
  return (
    <div className="flex  items-center py-5  gap-3">
      <div>
        <FaHouse size={24} />
      </div>
      <div className="text-[14px] ">Home</div>
    </div>
  );
}

export default DashBoardLinks;
