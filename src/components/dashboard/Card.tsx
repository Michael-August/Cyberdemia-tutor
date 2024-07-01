import { IoArrowForward } from 'react-icons/io5';

import { Button } from '../button';

export const Card = ({
  title,
  count,
  btnText,
}: {
  title: string;
  count: number;
  btnText: string;
}) => {
  return (
    <div className="border border-cp-secondary p-4 w-full md:w-[17.5rem]">
      <div className="content flex flex-col gap-10">
        <p className="text-xl">{title}</p>
        <p className="text-6xl">{count}</p>
        <div className="flex justify-end">
          <Button className="flex gap-1 items-center !bg-cp-secondary text-white rounded-none p-2">
            {btnText}
            <IoArrowForward />
          </Button>
        </div>
      </div>
    </div>
  );
};
