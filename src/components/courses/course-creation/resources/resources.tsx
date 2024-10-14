'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tab, Tabs } from '@/components/ui/Tab';
import { useGetCourseResources } from '@/hooks/react-query/course-creation/useCourseResources';

import { useStep } from '../../../../../context/CourseCreationContext';
import { StepTitle } from '../StepTitle';
import { DownloadableTabContent } from './downloadableTab';
import { ExternalResourceTab } from './externalResourceTab';

export const Resources = () => {
  const [addResource, setAddResource] = useState(false);
  const [addNewResource, setAddNewResource] = useState(false);
  const [addResourceContent, setAddResourceContent] = useState(false);

  const courseId = localStorage.getItem('newCourseId') as string;

  const [resourceTitle, setResourceTitle] = useState('');

  const { dispatch } = useStep();

  const { data: resources } = useGetCourseResources(courseId);

  const nextStep = () => {
    dispatch({ type: 'COMPLETE_STEP', payload: 1 });
    dispatch({ type: 'NEXT_STEP' });
  };

  const resetState = () => {
    setAddResource(false);
    setAddNewResource(false);
    setAddResourceContent(false);
  };

  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Resources"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <div className="mt-8 flex flex-col gap-5 lg:w-[75%]">
        {resources?.data?.length > 0 && (
          <div className="section p-5 bg-[#F3F3F3] flex flex-col gap-4 border border-solid border-[#00000080]">
            <div className="title">
              <span className="text-sm font-semibold">
                {resources?.data[0].title}
                :
              </span>
            </div>
            {resources?.data?.map((resource: any) => (
              <div
                key={resource?.id}
                className="uploaded-uploading border border-solid bg-white px-6 py-3 border-[#000000B2]"
              >
                <Tabs>
                  <Tab title={'Downloadable File'}>
                    <DownloadableTabContent
                      courseId={courseId}
                      downloadableResources={resource.resourceType === "downloadableFile" ? resource : null}
                    />
                  </Tab>
                  <Tab title={'External Resources'}>
                    <ExternalResourceTab
                      courseId={courseId}
                      externalResource={resource.resourceType === "external" ? resource : null}
                    />
                  </Tab>
                </Tabs>
              </div>
            ))}
          </div>
        )}
        {addResource && (
          <div className="content">
            <div className="section p-5 bg-[#F3F3F3] flex flex-col gap-4 border border-solid border-[#00000080]">
              <div className="title">
                <span className="text-sm font-semibold">{resourceTitle}:</span>
              </div>
              {!addResourceContent && (
                <div className="new-item-btn">
                  <span
                    onClick={() => setAddResourceContent(true)}
                    className="flex gap-3 justify-center p-2 rounded-md text-xs cursor-pointer items-center border border-cp-secondary text-cp-secondary w-full !bg-transparent"
                  >
                    <Image
                      src="/icons/plus.svg"
                      width={24}
                      height={24}
                      alt="plus"
                    />
                    Resources
                  </span>
                </div>
              )}

              {addResourceContent && (
                <div className="uploaded-uploading border border-solid bg-white px-6 py-3 border-[#000000B2]">
                  <Tabs>
                    <Tab title={'Downloadable File'}>
                      <DownloadableTabContent
                        courseId={courseId}
                        resourceTitle={resourceTitle}
                        downloadableResources={null}
                        reset={resetState}
                      />
                    </Tab>
                    <Tab title={'External Resources'}>
                      <ExternalResourceTab
                        courseId={courseId}
                        resourceTitle={resourceTitle}
                        externalResource={null}
                        reset={resetState}
                      />
                    </Tab>
                  </Tabs>
                </div>
              )}
            </div>
          </div>
        )}

        {addNewResource && (
          <div className="p-5 !bg-white border border-black flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-5">
              <Label
                className="text-xs text-[#000000CC] font-semibold"
                htmlFor="title"
              >
                New Resource
              </Label>
              <Input
                className="w-[80%] !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-transparent"
                placeholder="Enter Resource Title"
                autoComplete="off"
                type="text"
                id="title"
                value={resourceTitle}
                onChange={(e) => setResourceTitle(e.target.value)}
              />
            </div>
            <div className="btns flex items-center z-50 justify-end gap-3">
              <Button
                onClick={() => setAddResource(false)}
                className="bg-transparent text-black p-2 hover:!bg-gray-200 cursor-pointer"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setAddResource(true);
                  setAddNewResource(false);
                }}
                className="bg-cp-secondary text-white p-2 hover:!bg-cp-primary"
              >
                Create resource
              </Button>
            </div>
          </div>
        )}

        <span
          onClick={() => setAddNewResource(true)}
          className="add-resource flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black w-[20%] !bg-transparent"
        >
          <Image
            src="/icons/black_plus.svg"
            width={24}
            height={24}
            alt="plus"
          />
          Add Resource
        </span>

        <Button
          onClick={nextStep}
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </div>
    </>
  );
};
