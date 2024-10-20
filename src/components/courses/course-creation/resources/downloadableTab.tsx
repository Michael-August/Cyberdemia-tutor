'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCreateCourseResource } from '@/hooks/react-query/course-creation/useCourseResources';

export const DownloadableTabContent = ({
  resourceTitle,
  courseId,
  downloadableResources,
  reset,
}: {
  resourceTitle?: string;
  courseId: string;
  downloadableResources: any;
  reset?: any;
}) => {
  const { mutateAsync: createResource } = useCreateCourseResource();

  const [status, setStatus] = useState<'upload' | 'processing' | 'done'>(
    'upload',
  );

  const [url, setUrl] = useState('');

  const submitResource = async (e: any) => {
    e.preventDefault();

    if (!resourceTitle) return;
    if (!url) toast.warn('Please input file URL');

    try {
      const resourceCreated = await createResource({
        courseId,
        title: resourceTitle,
        resourceType: 'downloadableFile',
        url,
      });
      if (reset) reset();
      console.log(resourceCreated);
      setStatus('done');
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  return (
    <>
      {!downloadableResources && (
        <div>
          {status === 'upload' && (
            <div className="select w-full">
              <div className="custom flex items-center gap-3 w-full mb-3">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Type the file url here"
                  className="p-2 w-[80%]"
                />
                <Button
                  onClick={(e) => submitResource(e)}
                  className="bg-cp-secondary text-white p-2 cursor-pointer hover:!bg-cp-primary"
                >
                  submit
                </Button>
              </div>
            </div>
          )}

          {status === 'processing' && (
            <div className="uploading">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%] text-[#000000B2] text-xs font-semibold">
                      Filename
                    </TableHead>
                    <TableHead className="text-[#000000B2] text-xs font-semibold">
                      Type
                    </TableHead>
                    <TableHead className="text-[#000000B2] text-xs font-semibold">
                      Status
                    </TableHead>
                    <TableHead className="text-[#000000B2] text-xs font-semibold">
                      Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-xs text-[#00000099]">
                      Lecture note.pdf
                    </TableCell>
                    <TableCell className="text-xs text-[#00000099]">
                      Document
                    </TableCell>
                    <TableCell className="text-xs text-[#00000099]">
                      Processing
                    </TableCell>
                    <TableCell className="text-xs text-[#00000099]">
                      24/04/2024
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
          {/* {status === 'done' && (
            <div className="uploaded flex items-center gap-4">
              <Image
                src={'/icons/cloud_download.svg'}
                alt={''}
                width={24}
                height={24}
              />
              <span className="text-xs text-[#000000CC]">
                Lecture notes for review.pdf
              </span>
            </div>
          )} */}
        </div>
      )}
      {downloadableResources && (
        <div>
          <div
            key={downloadableResources.id}
            className="uploaded flex items-center gap-4"
          >
            <Image
              src={'/icons/cloud_download.svg'}
              alt={''}
              width={24}
              height={24}
            />
            <span className="text-xs text-[#000000CC]">
              {downloadableResources?.url}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
