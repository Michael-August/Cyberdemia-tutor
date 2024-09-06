'use client';

import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ExternalResourceTab = () => {
  return (
    <div>
      <div className="add-link flex flex-col gap-3">
        <div className="form-group w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="title"
          >
            Title
          </Label>
          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Enter Title"
            autoComplete="off"
            type="text"
            id="title"
          />
        </div>
        <div className="form-group w-full flex flex-col gap-2">
          <Label
            className="text-xs text-[#000000CC] font-semibold"
            htmlFor="url"
          >
            URL
          </Label>
          <Input
            className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
            placeholder="Enter URL"
            autoComplete="off"
            type="text"
            id="url"
          />
        </div>

        <div className="flex justify-end mt-3">
          <span className="bg-cp-secondary p-2 text-white text-xs cursor-pointer">
            Add Link
          </span>
        </div>
      </div>

      <div className="flex added items-center gap-4">
        <Image src={'/icons/external.svg'} alt={''} width={24} height={24} />
        <span className="text-xs text-[#000000CC]">Test documents</span>
      </div>
    </div>
  );
};
