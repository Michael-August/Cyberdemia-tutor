import Image from 'next/image';
import { useState } from 'react';

const Exam = () => {
  const [fileUpload, setFileUpload] = useState('');

  const [examsUpload, setExamsUpload] = useState(true);
  const [examUploaded, setExamUploaded] = useState(false);

  return (
    <div>
      {examsUpload && (
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
              className="p-2 text-center border border-solid border-[#000000B2] text-black w-[20%] z-50 cursor-pointer"
            >
              Select file
            </label>
          </div>
          <input
            onChange={(e) => {
              setFileUpload(e.target.value);
              setExamsUpload(false);
              setExamUploaded(true);
            }}
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
      {examUploaded && (
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex items-center justify-between border border-black px-4 py-2">
              <div className="flex items-center gap-4">
                <Image
                  src={'/icons/document.svg'}
                  alt="Document icon"
                  width={24}
                  height={24}
                />
                <span className="text-xs text-[#000000CC]">{fileUpload}</span>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={'/icons/delete.svg'}
                  alt="Delete icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          {/* <span className="flex gap-3 justify-start text-xs cursor-pointer items-center text-cp-secondary mt-3">
                    <Image
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        alt="plus"
                    />
                    Add Article
                </span> */}
        </div>
      )}
    </div>
  );
};

export default Exam;
