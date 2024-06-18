import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cn = (...args: any) => {
  return twMerge(clsx(args));
};

export default cn;
