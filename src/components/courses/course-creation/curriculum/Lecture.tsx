'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCreateCourseLecture } from '@/hooks/react-query/course-creation/useCourseCurriculum';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Lecture = ({
  setAddCurriculum,
  sectionId,
}: {
  setAddCurriculum: any;
  sectionId: string;
}) => {
  const { mutateAsync: createLecture } = useCreateCourseLecture();

  const [lectureLoading, setLectureLoading] = useState(false);

  const [lectureTitle, setLectureTitle] = useState(true);
  const [title, setTitle] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [lectureLength, setLectureLength] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [fileUpload] = useState('');
  const [fileToUpload, setFileToUpload] = useState('');

  const [fileName, setFileName] = useState('');

  const [lectureArea, setLectureArea] = useState(false);
  const [lectureContents, setLectureContents] = useState(false);

  const [contentType, setContentType] = useState(false);

  const [videoContent, setVideoContent] = useState(false);
  const [videoTitleDIsplay, setVideoTitleDisplay] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);
  const [videoProcessing] = useState(false);
  const [videoUploadDone, setVideoUploadDone] = useState(false);

  const [articleContent, setArticleContent] = useState(false);
  const [articleTitleDisplay, setArticleTitleDisplay] = useState(false);
  const [articleDescriptionDisplay, setArticleDescriptionDisplay] =
    useState(false);
  const [articleUploaded, setArticleUploaded] = useState(false);

  const close = (e: any) => {
    e.preventDefault();
    setAddCurriculum(false);
  };

  const addLecture = (e: any) => {
    e.preventDefault();
    if (!title) return;
    setLectureTitle(false);
    setLectureArea(true);
  };

  const addVideoTitle = (e: any) => {
    e.preventDefault();
    if (!videoTitle) return;
    setVideoTitleDisplay(false);
    setVideoUpload(true);
  };

  const addArticleTitle = (e: any) => {
    e.preventDefault();
    if (!articleTitle) return;
    setArticleTitleDisplay(false);
    setArticleDescriptionDisplay(true);
  };

  const handleVideoUpload = async (e: any) => {
    e.preventDefault();

    if (!fileToUpload) {
      toast.warn('Please select a video to upload');
      return;
    }
    if (!lectureLength) {
      toast.warn('Please input lecture length');
      return;
    }
    const lectureLenghtInSecs = Number(lectureLength) * 60;
    const formData = new FormData();
    formData.append('sectionId', sectionId);
    formData.append('lectureTitle', title);
    formData.append('video', fileToUpload);
    formData.append('lectureLength', lectureLenghtInSecs.toString());

    try {
      setLectureLoading(true);
      await createLecture(formData);
      toast.success('Lecture uploaded successfully');
      setVideoUpload(false);
      setVideoUploadDone(true);
    } catch (error) {
      toast.error('Failed to upload lecture');
    } finally {
      setLectureLoading(false);
    }
  };

  const handleArticleUpload = async (e: any) => {
    if (!articleDescription) toast.warn('Please type out article description');
    e.preventDefault();
    const lectureData: any = {
      sectionId,
      lectureTitle: title,
      article: articleDescription,
      // lectureLength: 3,
    };
    await createLecture(lectureData);
    setArticleDescriptionDisplay(false);
    setArticleUploaded(true);
  };

  const handleVideoSelection = (e: any) => {
    setFileToUpload(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <div>
      {lectureTitle && (
        <div className="p-5 !bg-white border border-black flex flex-col">
          <div className="flex items-center justify-between gap-4 mb-5">
            <Label
              className="text-xs text-[#000000CC] font-semibold"
              htmlFor="title"
            >
              New Lecture
            </Label>
            <Input
              className="w-[85%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
              placeholder="Enter Title"
              autoComplete="off"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="btns flex items-center z-50 justify-end gap-3">
            <Button
              onClick={(e) => {
                setLectureTitle(false);
                close(e);
              }}
              className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
            >
              Close
            </Button>
            <Button
              onClick={addLecture}
              className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
            >
              Add lecture
            </Button>
          </div>
        </div>
      )}
      {lectureArea && (
        <div className="p-5 !bg-white border border-black flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={'/icons/checkblack.svg'}
                alt={'check'}
                width={28}
                height={28}
              />
              <span className="text-xs font-medium">Lecture 1: </span>
              <span className="text-xs font-light">{title}</span>
              <Image
                onClick={() => {
                  setLectureArea(false);
                  setLectureTitle(true);
                }}
                className="ml-4 cursor-pointer"
                src={'/icons/pencil.svg'}
                alt={'edit icon'}
                width={24}
                height={24}
              />
            </div>
            <div className="flex items-center gap-4 z-50">
              {!lectureContents && (
                <span
                  onClick={() => {
                    setLectureContents(true);
                    setContentType(true);
                  }}
                  className="flex gap-3 justify-start p-1 text-xs cursor-pointer items-center border border-black text-black !bg-transparent"
                >
                  <Image
                    src="/icons/black_plus.svg"
                    width={24}
                    height={24}
                    alt="plus"
                  />
                  Add content
                </span>
              )}
              <Image
                onClick={(e) => {
                  setLectureArea(false);
                  close(e);
                }}
                className="cursor-pointer"
                src="/icons/delete.svg"
                width={24}
                height={24}
                alt="delete"
              />
            </div>
          </div>
          {lectureContents && contentType && (
            <div className="flex flex-col gap-4 mt-3">
              <hr className="-mx-5 mb-2" />
              <span className="text-xs text-[#000000B2] ">
                Select the type of content you want to upload to the platform
              </span>
              <div className="flex items-center gap-2">
                <div
                  onClick={() => {
                    setContentType(false);
                    setVideoTitleDisplay(true);
                    setVideoContent(true);
                  }}
                  className="p-2 bg-[#CBCBCB99] border border-[#0000004D] flex items-center gap-1 cursor-pointer"
                >
                  <Image
                    src={'/icons/player.svg'}
                    alt="Video Player"
                    width={32}
                    height={32}
                  />
                  <span className="text-xs text-[#000000B2]">Video</span>
                </div>
                <div
                  onClick={() => {
                    setContentType(false);
                    setArticleTitleDisplay(true);
                    setArticleContent(true);
                  }}
                  className="p-2 bg-[#CBCBCB99] border border-[#0000004D] flex items-center gap-1 cursor-pointer"
                >
                  <Image
                    src={'/icons/doc.svg'}
                    alt="Video Player"
                    width={32}
                    height={32}
                  />
                  <span className="text-xs text-[#000000B2]">
                    Article (Read Section)
                  </span>
                </div>
              </div>
            </div>
          )}
          {lectureContents && videoContent && (
            <div className="flex flex-col gap-4 mt-3">
              <hr className="-mx-5 mb-2" />
              {videoTitleDIsplay && (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <Label
                      className="text-xs text-[#000000CC] font-semibold"
                      htmlFor="videoTitle"
                    >
                      New Video
                    </Label>
                    <Input
                      className="w-[85%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                      placeholder="Enter Video Title"
                      autoComplete="off"
                      type="text"
                      id="videoTitle"
                      value={videoTitle}
                      onChange={(e) => setVideoTitle(e.target.value)}
                    />
                  </div>
                  <div className="btns flex items-center z-50 justify-end gap-3">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoContent(false);
                        setArticleContent(true);
                      }}
                      className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={addVideoTitle}
                      className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
                    >
                      Add Video
                    </Button>
                  </div>
                </div>
              )}
              {videoUpload && (
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-col justify-between gap-4">
                    <Label
                      className="text-xs text-[#000000CC] font-semibold"
                      htmlFor="length"
                    >
                      Video Length
                    </Label>
                    <Input
                      className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                      placeholder="Enter Video Length"
                      autoComplete="off"
                      type="number"
                      id="length"
                      value={lectureLength}
                      onChange={(e) => {
                        if (/^[0-9]+$/.test(e.target.value)) {
                          setLectureLength(e.target.value);
                        }
                      }}
                    />
                    <span className="text-xs text-[#000000B2]">
                      Input Video length in minuites
                    </span>
                  </div>
                  <div className="select w-full">
                    <div className="custom flex items-center w-full mb-3">
                      <label
                        htmlFor="upload"
                        className="p-2 border border-solid border-[#000000B2] w-[80%] text-[#0000004D]"
                      >
                        Click here to select file
                      </label>
                      {!lectureLoading && (
                        <label
                          onClick={(e) => handleVideoUpload(e)}
                          className="p-2 text-center border border-solid border-[#000000B2] text-black w-[20%] z-50 cursor-pointer"
                        >
                          upload file
                        </label>
                      )}
                      {lectureLoading && (
                        <label className="p-2 text-center border border-solid border-[#000000B2] text-black w-[20%] z-50 cursor-pointer">
                          uploading...
                        </label>
                      )}
                    </div>
                    <input
                      onChange={(e) => handleVideoSelection(e)}
                      value={fileUpload}
                      type="file"
                      className="hidden"
                      id="upload"
                      name="upload"
                    />
                    <span className="text-xs text-[#000000B2]">{fileName}</span>
                  </div>
                </div>
              )}
              {fileUpload && videoProcessing && (
                <div className="uploading">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[40%] text-[#000000B2] text-xs font-semibold">
                          Video title
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
                          {videoTitle}
                        </TableCell>
                        <TableCell className="text-xs text-[#00000099]">
                          Video
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
              {videoUploadDone && (
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="video-details flex items-center gap-3">
                      <Image
                        src={'/images/thumbnail.svg'}
                        alt="Video Thumbnail"
                        width={147}
                        height={95.42}
                      />
                      <div className="details flex flex-col gap-2">
                        <span className="text-xs text-[#00000099]">
                          {videoTitle}.mp4
                        </span>
                        <span className="text-xs text-[#00000099]">
                          {Number(lectureLength)} minuites
                        </span>
                      </div>
                    </div>
                    {/* <Button className="bg-cp-secondary text-white rounded-none !py-1 hover:!bg-cp-primary z-50">
                      Replace
                    </Button> */}
                  </div>
                  <span className="flex gap-3 justify-start text-xs cursor-pointer items-center text-cp-secondary mt-3">
                    <Image
                      src="/icons/plus.svg"
                      width={20}
                      height={20}
                      alt="plus"
                    />
                    Add video
                  </span>
                </div>
              )}
            </div>
          )}
          {lectureContents && articleContent && (
            <div className="flex flex-col gap-4 mt-3">
              <hr className="-mx-5 mb-2" />
              {articleTitleDisplay && (
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <Label
                      className="text-xs text-[#000000CC] font-semibold"
                      htmlFor="videoTitle"
                    >
                      New Article
                    </Label>
                    <Input
                      className="w-[85%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                      placeholder="Enter Article Title"
                      autoComplete="off"
                      type="text"
                      id="articleTitle"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                    />
                  </div>
                  <div className="btns flex items-center z-50 justify-end gap-3">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoContent(true);
                        setArticleContent(false);
                      }}
                      className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={addArticleTitle}
                      className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
                    >
                      Add Article
                    </Button>
                  </div>
                </div>
              )}
              {articleDescriptionDisplay && (
                <div className="flex flex-col">
                  <div className="flex flex-col gap-4 mb-5">
                    <Label
                      className="text-xs text-[#000000CC] font-semibold"
                      htmlFor="videoTitle"
                    >
                      Article Details
                    </Label>
                    <ReactQuill
                      className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
                      placeholder="Enter Article Title"
                      theme="snow"
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, 4, false] }],
                          [{ list: 'ordered' }, { list: 'bullet' }],
                          ['bold', 'italic', 'underline'],
                        ],
                      }}
                      onChange={(value: any) => setArticleDescription(value)}
                    />
                    {/* <Input
                      className="w-[85%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                      placeholder="Enter Article Title"
                      autoComplete="off"
                      type="text"
                      id="articleTitle"
                      
                    /> */}
                  </div>
                  <div className="btns flex items-center z-50 justify-end gap-3">
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoContent(true);
                        setArticleContent(false);
                      }}
                      className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={(e) => {
                        handleArticleUpload(e);
                      }}
                      className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
              {articleUploaded && (
                <div className="flex flex-col">
                  <div className="flex flex-col gap-4 mb-5">
                    <Label
                      className="text-xs text-[#000000CC] font-semibold"
                      htmlFor="videoTitle"
                    >
                      Article Title
                    </Label>
                    <div className="flex items-center justify-between border border-black px-4 py-2">
                      <div className="flex items-center gap-4">
                        <Image
                          src={'/icons/document.svg'}
                          alt="Document icon"
                          width={24}
                          height={24}
                        />
                        <span className="text-xs text-[#000000CC]">
                          {articleTitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={'/icons/pencil.svg'}
                          alt="Edit icon"
                          width={24}
                          height={24}
                        />
                        <Image
                          src={'/icons/delete.svg'}
                          alt="Delete icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>

                  <span className="flex gap-3 justify-start text-xs cursor-pointer items-center text-cp-secondary mt-3">
                    <Image
                      src="/icons/plus.svg"
                      width={20}
                      height={20}
                      alt="plus"
                    />
                    Add Article
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Lecture;
