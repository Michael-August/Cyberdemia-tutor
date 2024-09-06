'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Tab, Tabs } from '@/components/ui/Tab';

import { useStep } from '../../../../../context/CourseCreationContext';
import { StepTitle } from '../StepTitle';
import { DownloadableTabContent } from './downloadableTab';
import { ExternalResourceTab } from './externalResourceTab';

export const Resources = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: 'Resource 1',
    },
  ]);

  const [status] = useState('upload');
  const [addResource, setAddResource] = useState(false);

  const addNewResource = () => {
    setResources([...resources, { id: 2, title: 'Resource 2' }]);
  };

  const { dispatch } = useStep();
  const submitForm = () => {
    try {
      // const courseResponse = await createCourse(data)
      // console.log('Form submitted', courseResponse);
      // localStorage.setItem('newCourseId', courseResponse?.data?.courseId)
      dispatch({ type: 'COMPLETE_STEP', payload: 0 });
      dispatch({ type: 'NEXT_STEP' });
    } catch (error: any) {
      toast.error(error.response.data);
    }
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
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="section p-5 bg-[#F3F3F3] flex flex-col gap-4 border border-solid border-[#00000080]"
          >
            <div className="title">
              <span className="text-sm font-semibold">{resource.title}:</span>
            </div>
            <div className="content">
              {!addResource && (
                <div className="new-item-btn">
                  <span
                    onClick={() => setAddResource(true)}
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

              {addResource && (
                <div className="uploaded-uploading border border-solid bg-white px-6 py-3 border-[#000000B2]">
                  <Tabs>
                    <Tab title={'Downloadable File'}>
                      <DownloadableTabContent status={status} />
                    </Tab>
                    <Tab title={'External Resources'}>
                      <ExternalResourceTab />
                    </Tab>
                  </Tabs>
                </div>
              )}
            </div>
          </div>
        ))}

        <span
          onClick={addNewResource}
          className="add-section flex gap-3 justify-start p-2 text-xs cursor-pointer items-center border border-black text-black w-[20%] !bg-transparent"
        >
          <Image
            src="/icons/black_plus.svg"
            width={24}
            height={24}
            alt="plus"
          />
          Add Section
        </span>

        <Button
          onClick={submitForm}
          className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5"
        >
          Save and Continue
        </Button>
      </div>
    </>
  );
};
