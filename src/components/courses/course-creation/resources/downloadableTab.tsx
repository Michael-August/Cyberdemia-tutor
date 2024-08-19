import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const DownloadableTabContent = ({ status }: { status: string }) => {
  return (
    <div>
      {status === 'upload' && (
        <div className="select w-full">
          <div className="custom flex items-center w-full mb-3">
            <label
              htmlFor="upload"
              className="p-2 border border-solid border-[#000000B2] w-[80%] text-[#0000004D]"
            >
              Select file
            </label>
            <label
              htmlFor="upload"
              className="p-2 text-center border border-solid border-[#000000B2] text-black w-[20%] cursor-pointer"
            >
              Select file
            </label>
          </div>
          <input type="file" className="hidden" id="upload" name="upload" />
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
