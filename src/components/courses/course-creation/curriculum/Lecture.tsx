'use client';

import Image from 'next/image';
import { useState } from 'react';

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

const Lecture = ({ setAddCurriculum }: { setAddCurriculum: any }) => {
  const [lectureTitle, setLectureTitle] = useState(true);
  const [title, setTitle] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [fileUpload, setFileUpload] = useState('');

  const [lectureArea, setLectureArea] = useState(false);
  const [lectureContents, setLectureContents] = useState(false);

  const [contentType, setContentType] = useState(false);

  const [videoContent, setVideoContent] = useState(false);
  const [videoTitleDIsplay, setVideoTitleDisplay] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);
  const [videoProcessing, setVideoProcessing] = useState(false);
  const [videoUploadDone] = useState(false);

  const [articleContent, setArticleContent] = useState(false);
  const [articleTitleDisplay, setArticleTitleDisplay] = useState(false);
  const [articleDescriptionDisplay, setArticleDescriptionDisplay] =
    useState(false);
  const [articleUploaded, setArticleUploaded] = useState(false);

  const close = (e: any) => {
    e.preventDefault();
    console.log('HI');
    setAddCurriculum(true);
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
              onClick={close}
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
                className="ml-4"
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
                      setVideoUpload(false);
                      setVideoProcessing(true);
                    }}
                    value={fileUpload}
                    type="file"
                    className="hidden"
                    id="upload"
                    name="upload"
                  />
                  <span className="text-xs text-[#000000B2]">
                    Select the type of content you want to upload to the
                    platform
                  </span>
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
                          15:00 minuites
                        </span>
                      </div>
                    </div>
                    <Button className="bg-cp-secondary text-white rounded-none !py-1 hover:!bg-cp-primary z-50">
                      Replace
                    </Button>
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
                    <Input
                      className="w-[85%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                      placeholder="Enter Article Title"
                      autoComplete="off"
                      type="text"
                      id="articleTitle"
                      value={articleDescription}
                      onChange={(e) => setArticleDescription(e.target.value)}
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
                      onClick={() => {
                        setArticleDescriptionDisplay(false);
                        setArticleUploaded(true);
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
