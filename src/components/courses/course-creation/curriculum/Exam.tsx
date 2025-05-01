'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateCourseExams } from '@/hooks/react-query/course-creation/useCourseCurriculum';

const Exam = ({
  sectionId,
  setAddCurriculum,
  courseId,
}: {
  setAddCurriculum?: any;
  sectionId: string;
  courseId: string;
}) => {
  const { mutateAsync: createExam } = useCreateCourseExams();

  const [fileUpload] = useState('');
  const [fileToUpload, setFileToUpload] = useState('');

  const [examsUpload, setExamsUpload] = useState(true);
  const [examUploaded, setExamUploaded] = useState(false);

  const [fileName, setFileName] = useState(
    'No file selected, please select excel file with exam questions',
  );

  const [formValues, setFormValues] = useState({
    title: '',
    timer: '',
    type: '',
  });

  const close = (e: any) => {
    e.preventDefault();
    setAddCurriculum(false);
  };

  const handleOnchange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFileSelection = (event: any) => {
    setFileToUpload(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleExamUpload = async (e: any) => {
    if (!fileToUpload) toast.warn('Please select an excel file to upload');
    e.preventDefault();
    const formData = new FormData();
    formData.append('courseId', courseId);
    formData.append('title', formValues.title);
    formData.append('timer', formValues.timer);
    formData.append('type', formValues.type);
    formData.append('excelFile', fileToUpload);
    formData.append('sectionId', sectionId);

    await createExam(formData);

    setExamsUpload(false);
    setExamUploaded(true);
  };

  return (
    <div>
      {examsUpload && (
        <form className="mt-8 flex flex-col gap-5 lg:w-[75%]">
          <div className="select w-full">
            <span>
              For exams and tests uplaod, please request for the excel sheet
              template to populate your questions
            </span>
            <div className="custom flex items-center w-full mb-3">
              <label
                htmlFor="upload"
                className="p-2 border border-solid border-[#000000B2] w-[80%] text-[#0000004D]"
              >
                Click here to select file
              </label>
              {/* <label className="p-2 text-center border border-solid border-[#000000B2] text-black w-[20%] z-50 cursor-pointer">
                upload file
              </label> */}
            </div>
            <input
              onChange={(e) => handleFileSelection(e)}
              value={fileUpload}
              type="file"
              className="hidden"
              id="upload"
              name="upload"
            />
            <span className="text-xs text-[#000000B2]">{fileName}</span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label
              className="text-xs text-[#000000CC] font-semibold"
              htmlFor="subtitle"
            >
              Exam Title
            </Label>

            <Input
              className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Exam Title"
              autoComplete="off"
              type="text"
              name="title"
              value={formValues.title}
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label
              className="text-xs text-[#000000CC] font-semibold"
              htmlFor="subtitle"
            >
              Duration
            </Label>

            <Input
              className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Input time in minuites"
              autoComplete="off"
              type="text"
              name="timer"
              value={formValues.timer}
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              name="type"
              className="w-full p-2 border rounded-md"
              onChange={(e) => handleOnchange(e)}
            >
              <option value="">Select Type</option>
              <option value="test">Test</option>
              <option value="exam">Exam</option>
            </select>
          </div>
          <div className="btns flex items-center z-50 justify-end gap-3">
            <Button
              onClick={(e) => close(e)}
              className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
            >
              Close
            </Button>
            <Button
              onClick={(e) => handleExamUpload(e)}
              className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
            >
              Add Exam
            </Button>
          </div>
        </form>
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
                <span className="text-xs text-[#000000CC]">{fileName}</span>
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
