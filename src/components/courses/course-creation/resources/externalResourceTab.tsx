'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateCourseResource } from '@/hooks/react-query/course-creation/useCourseResources';

export const ExternalResourceTab = ({
  resourceTitle,
  courseId,
  externalResource,
  back,
  reset,
}: {
  resourceTitle?: string;
  courseId: string;
  externalResource: any;
  back?: any;
  reset?: any;
}) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const { mutateAsync: createResource } = useCreateCourseResource();

  const submitResource = async (e: any) => {
    e.preventDefault();

    if (!url) toast.warn('Please input file URL');

    try {
      const resourceCreated = await createResource({
        courseId,
        title: resourceTitle as string,
        resourceType: 'external',
        url,
      });
      if (reset) reset();
      console.log(resourceCreated);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      {!externalResource && (
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="flex justify-end mt-3">
            <span
              onClick={back}
              className="text-cp-secondary p-2 cursor-pointer"
            >
              Back
            </span>
            <span
              onClick={(e) => submitResource(e)}
              className="bg-cp-secondary p-2 text-white text-xs cursor-pointer"
            >
              Add Link
            </span>
          </div>
        </div>
      )}

      {externalResource && (
        <div className="flex flex-col gap-4">
          <div
            className={`flex items-center gap-1 cursor-pointer text-[14px] w-[180px] pb-3 text-cp-secondary`}
          >
            <div className="tab-title border-b-2 pb-2 border-cp-secondary">
              External Resource
            </div>
          </div>
          <div className="flex added items-center gap-4">
            <Image
              src={'/icons/external.svg'}
              alt={''}
              width={24}
              height={24}
            />
            <span className="text-xs text-[#000000CC]">
              {externalResource?.url}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
