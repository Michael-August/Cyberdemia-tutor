'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
}: {
  resourceTitle: string;
  courseId: string;
}) => {
  const { data: createResource } = useCreateCourseResource();

  const [status, setStatus] = useState<'upload' | 'processing' | 'done'>(
    'upload',
  );

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileUpload, setFileUpload] = useState('');

  const handleSelection = (e: any) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFileUpload(fileUpload);
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
    }
  };

  const submitResource = async (e: any) => {
    e.preventDefault();

    if (!resourceTitle) return;
    if (!previewUrl) toast.warn('Please select a video to upload');

    try {
      //TODO: change to {courseId}
      await createResource({
        courseId,
        title: resourceTitle,
        resourceType: 'downloadableFile',
        url: 'https://stridefuture.com/wp-content/uploads/Software-Development-Tools-to-Ace-Your-Business-Blog.png',
      });
      setStatus('done');
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  return (
    <div>
      {status === 'upload' && (
        <div className="select w-full">
          <div className="custom flex items-center w-full mb-3">
            <label
              htmlFor="upload"
              className="p-2 border border-solid border-[#000000B2] w-[80%] text-[#0000004D]"
            >
              Click here to select file
            </label>
            <label
              onClick={(e) => submitResource(e)}
              className="p-2 text-center border border-solid border-[#000000B2] text-black w-[20%] cursor-pointer"
            >
              upload file
            </label>
          </div>
          <input
            onChange={(e) => handleSelection(e)}
            value={fileUpload}
            type="file"
            className="hidden"
            id="upload"
            name="upload"
          />
          <span className="text-xs text-[#000000B2]">
            Select the type of content you want to upload to the platform
          </span>
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
      {status === 'done' && (
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
      )}
    </div>
  );
};
