'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  useAddCertificationToCourse,
  useGetCourseCertification,
  useUpdateCourseCertificate,
} from '@/hooks/react-query/course-creation/useCourses';

import { useStep } from '../../../../context/CourseCreationContext';
import { StepTitle } from './StepTitle';

export const Certification = () => {
  const [selected, setSelected] = useState(1);
  const [signaturePreview, setSignaturePreview] = useState<any>('');

  const courseId = localStorage.getItem('newCourseId');
  const { data } = useGetCourseCertification(courseId as string);
  const { mutateAsync: addCertificate } = useAddCertificationToCourse();
  const { mutateAsync: editCertificate } = useUpdateCourseCertificate(
    courseId as string,
  );

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      setSignaturePreview(base64String);
    };

    reader.readAsDataURL(file);
  };

  const { dispatch } = useStep();
  const submit = async () => {
    const courseId = localStorage.getItem('newCourseId') as string;

    try {
      if (courseId && data) {
        await editCertificate({
          signature: signaturePreview,
          template: `${selected}`,
          id: courseId,
        });
        toast.success('Certificate updated successfully!');
        dispatch({ type: 'COMPLETE_STEP', payload: 3 });
        dispatch({ type: 'NEXT_STEP' });
        return;
      }

      const certificateResponse = await addCertificate({
        courseId,
        signature: signaturePreview,
        template: `${selected}`,
      });
      toast.success(certificateResponse.message);
      dispatch({ type: 'COMPLETE_STEP', payload: 3 });
      dispatch({ type: 'NEXT_STEP' });
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    if (data) {
      setSelected(Number(data.data.template) || 1);
      setSignaturePreview(data.data.signature || '');
    }
  }, [data]);

  return (
    <>
      <div className="intro lg:w-[75%]">
        <StepTitle
          heading="Certification"
          desc="Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla.
                    Dictum vitae mi nunc a tellus. Faucibus ac id pellentesque interdum.
                    Vestibulum convallis velit feugiat aliquam pellentesque etiam.
                    In posuere purus aliquet dolor pretium eget dictum. In posuere purus aliquet dolor pretium eget dictum.
                    Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra malesuada fringilla. Dictum vitae mi nunc a tellus."
        />
      </div>

      <div className="cert-templates flex flex-col gap-8 lg:w-[75%] mt-8">
        <span className="text-sm text-[#000000CC] font-semibold">
          Choose preferred template
        </span>
        <div className="templates flex gap-5">
          <div className="hover:border-[2px] hover:border-cp-secondary transition-all relative">
            {selected === 1 && (
              <Image
                className="absolute top-1 right-1"
                src={'/icons/selected.svg'}
                width={18}
                height={18}
                alt={'checked'}
              />
            )}
            <Image
              onClick={() => setSelected(1)}
              className=""
              src={'/images/cert-template1.svg'}
              width={222}
              height={151}
              alt={'Template 1'}
            />
            {/* <Image className="bolck md:hidden" src={"/images/cert-template1.svg"} width={163.32} height={111.09} alt={"Template 1"} /> */}
          </div>
          <div className="hover:border-[2px] hover:border-cp-secondary transition-all relative">
            {selected === 2 && (
              <Image
                className="absolute top-1 right-1"
                src={'/icons/selected.svg'}
                width={18}
                height={18}
                alt={'checked'}
              />
            )}
            <Image
              onClick={() => setSelected(2)}
              src={'/images/cert-template2.svg'}
              width={222}
              height={151}
              alt={'Template 2'}
            />
          </div>
          <div className="hover:border-[2px] hover:border-cp-secondary transition-all relative">
            {selected === 3 && (
              <Image
                className="absolute top-1 right-1"
                src={'/icons/selected.svg'}
                width={18}
                height={18}
                alt={'checked'}
              />
            )}
            <Image
              onClick={() => setSelected(3)}
              src={'/images/cert-template3.svg'}
              width={222}
              height={151}
              alt={'Template 3'}
            />
          </div>
        </div>
      </div>

      <div className="signature flex flex-col gap-6 lg:w-[75%] mt-8">
        <span className="text-sm text-[#000000CC] font-semibold">
          Provide Digital Signature
        </span>
        <div className="form-group flex flex-col gap-3">
          <Label className="text-xs">Attach signature</Label>
          <input onChange={handleFileChange} type="file" />
        </div>
      </div>

      {signaturePreview && (
        <div className="w-full lg:w-[75%]">
          <Image
            width={100}
            height={70}
            src={signaturePreview}
            alt="Signature Preview"
          />
        </div>
      )}

      <div className="info flex items-start gap-8 mt-8 lg:w-[45%]">
        <Image src={'/icons/info.svg'} alt="info" width={32} height={32} />
        <span className="text-xs leading-6">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
          malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
          pellentesque interdum. Vestibulum convallis
        </span>
      </div>

      <Button
        onClick={() => submit()}
        className="!bg-cp-secondary text-sm mb-5 transition-all hover:!bg-cp-primary !text-white mt-5 w-full lg:w-[75%]"
      >
        Save and Continue
      </Button>
    </>
  );
};
