'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
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

const hardcodedSignature =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAACLCAMAAACQq0h8AAAAmVBMVEX////6+/y+xM1cbIdeb4pfc4309vjBydPt8PNnf5jm6u7Ax9Fpgpr3+frn6+9ieJHS2eDZ3+UAM16Gmq3J0tt7kaaptcPe4+gZPGOSpLV1i6E0WXpRboqcqbkuTXBRaYYaSm+vvMkQQ2oAOWM1VHYALlsgQWaerr0yWHlAY4JceZIPRGtyhZxKZII2UnRSaodDXHsqSG0AJ1emZ1icAAAKCklEQVR4nO2daXeiyhaGwduMgjIU82AxiCKQSP//H3cL7QwM9iFB4jm4nw/pLONaXWun3Lx7DEUBAAAAAPDvgD9IhvXoQzwH6xxjHD36FM+A7GBfwjn/6HM8AbJbCKpfHB59jieAlQqXN+Fa/wCyFLuy6IG3nh+WmJqmpUJ69EGWD/HVkkyZ2APBNze0Xpx4SjmCB5mfA/ZFij1hg370SRZPhHOVovSCGByYF3Q8ImLw4qg8+iSLx7oIPfVYmI8+yeLZ+EVAUbwf648+yeIhas+4BI0SPBfnxsFE7ZGv/ubRJ1k8VwkSYQ+ei3ODQkwkCMKYe/RJFo+YNxLEyjFIkLlhhcIhEuRUgASZG9poEk7NV/bRR1k8B5wT8eEUIEFmh4TmykWCqI8+yeK51mDQMUWPPsni4U+xc5EgkLKeHb1waYr3GyECzIvZBOWyG0N1YHYQblLWTqP5gHm5xovkbkMzyNzIl3iRu6SdgHnRC4GlUAg1r/mJcC5Sag65vflRjiFqKl8grGdn07SisgL0o84PLcUGRbnxl2MYmlXXHCQEv0LQdJPpsf7FGEaJdEE3pQpE4njWTVrPid0vxTC8KRlRow/FMJjpXAtE9Yj6MOPTF64nreh+YF0/BnzlznSw5cE2yb3oK+EizZXu6t3fWEeolo2E1uMTiWHy0S2SMndylU+eHSUgFEdCghheOeaj+9nXgtEOLXUMz8ZxNEGM5Y1OgiiS2wnirdC4+6GWCU+CGDEfW13cGKdeDK9jyKCMw4gNa6ypWXNn9mShGoIKGYcZ+4p/HGdq5BsDfQwuhhzsKFCYRv64Dkle94fexyW9uN7cQtDeZ+OHhp+PMjXnO0NRJV/1AnQ1BAnYh3Zxno9SIKzuDzeMOEn3WUlvy8kHWyAmDsNRutry9WG3gJKe3gvO0JzWhyhrPCpaXB1Xwz8Qzz0PgmzomOrDVhiPmV2knZt3v0y6hrVqqDYMYGAsjPi4b4TyVghu9jTI5gxpqAEijN0ReQxr59wqIKhhV9zxrxDXDKB4+MbzroXq3Rzk4Ku041t4poSOqT7sadSUqJKub/7MTTo/YxloThuANmJ/xK1G4e1uEVPrOGv61xZM3YcvR430/83UKBHafpxlGAjN+1g+HjNPp6S3TW2l57ZcZLdg6gFQTiTIP3cnWN7tvAbLZG1lTUwNxZk+ZhqOKS7yu7805ridEqMswNhYH9pJy3RMg+Rhe/vqB93nolSBqXvwkhedRrWS8bdFBWd3FEeZwp6iHornb4z4NG0cRg3Pbd9shLBUrkeUGnJUTFy3J57b8SLt1FAF6yLrqUmpU9ft8a91W4IENWRRuxBXjaZvcJJLu/27MmuYROii5CfyANPjiVNeutZuSuVsqC52MXGTG43icFrjjLlvF72QDQtdOvCu13zSVW/iur0oaS82UzOYpu5w9R9NInVaLp+L20kPK4VWvjZ0dHQuJtLjafvZlbBqxSziGbKobf74j2ZSY9pWEMtLW86eZV4htdcC5cL1MlpePKnGzVed3J6bQhKkRfCWqWb9eFJDEsvs20LaySBc/IwovHfrEWc9JUEkC1pbSEfdcuOTw3nGm0ddFXiKs5Zdre2AkA2Ddp9gde/96inetPFno5Oxtl5A7X1C9U/v+TiirMspiVRHa4/0sq8MqL0PTBx8mMeYpqyDfWcDVAlj0R+IZfVJC0dFOiUNYmqdfqYg0YNSP9xO8NGiqj7Lb2PtXRvIaJllWRml385Z0+xGPWSfSo80qwTbzG5ItKH0rMwjR6hesvosRKxM/n+ewC52MRpv+IgS0eqgS36ee3mKj8EKfeOeqZGbZsSwL/olaqEtZAohMXJaCnXzuu2oChcFhuFEHFJUS0Urh6ltbZ9V27Om2S/M6zkk76zP5Y0O7v86yJeiQMpxgY/5SXLLuvY8HIf+4auXK0iTUHdtxqwTBkWOy6SJlqWvtmCJ2yzLnJ2t1ZmmJTax7t6uwzS0f+/trNJXyoYWzaomvw1i6DojH4F0ieG8HBxTDxe+G3AWy9I0bWBfZFUH1/FXfbaRaPVraKdnYlhb0+pqa5gqu614mrGzRKfYlW7oQaSIauQY5ZZhGMF1uM2bb5c3aMWpG54XkWkusdCungqMfVN5v0ZOfGndM3B9+qpMo1G0Tc5uaeyyzEDIuiYLa5XSkyx5+k5rVQ/jXFc/OQsTNw2QrIvDKnKEZm6OtVDgGuNyGWp4FimaMuzs7eFqamtKlvZJuUSf8AVUl/iOqJV8izAmTyXxFIdhjuM4NvRyh2Oc2aNCGyW8Ntls7fpPBIou5cYNhxYrLEYh6sfitG5fNy6MTfI7yOMQx7kRCVXqvQo6p6QZCbFFBaG/3k715eV6/Xf2nzKlmMLwItX8Ze04jzoeGaWXdjLkYWLo5oaKqti8xUoyXxe8OEkk+mO9TWC2La+mL1cL02c7vShGloF4sWk+wtjozRoe/3Tu8Zv2j1j3nKa+Gwl2UhHtoJtItaJQi1uZQCt8q7lbob27fFNCh1OT8sTHXmjIpfhmlXtjNdaX1wediLWqzuo0q4WWJrTebnXTA2JfsnqH7Nk6nESuC0IuudWo86IZxkzvrZ9Yr8mbLv+uiEKptsG6+f4PHHfWdHT9HhnE1tyai5Ltxxv+idV/lHZZjxOkNq6HcSq4wmckgagNt/0aYStshxCEsiw//0iotPrjhTDLmpf2r5d4ZQK/CNev3+N/s7PrfHLpFhTv+MfwxHZeNHAY0d+FEqt69f7/bM72jqf4HYkXl89fXQrn66qHO1USbhffWEIxzk01pn4H2c0stFsvMcz+CpZ0QpSc49a0ouUWoT5BnInnVkMkiRoRFTx7KZd1/MuyKxIdSm9qjOWMMJamCAaxapmaP9tnKtKeu5Qrr3z9z2NzvStS4YBUJXLz4igpUyJocdce8orsxLTqp0410euT+xFZsJHh46LAuDLMiSMau3abLy3YodXf6vQcqM2t20Sn7v5H3lJV1ZpqE+JA2m3DChHXpf2k8SLCZrPie57RK7HqLqIt7ZBJFlrB+mfUKPpO8XAMxNSdZniLxO82LLu5P31TN4LP/gV9N3eHKJCuqS1i6u76G2A6A7eaeOsse1pnPR9ipfVMjeysO+YPTIeYutfJKm/t7vobYDrWrm9qyrRt2KBwd8TdQMJDfLFhY+fd2QyZmnJtcNZ3Z9jUK1uD+cV7I+72A6bm0+QMzvrODN9qqtQy2FZxZ8Rfg145SsBZ35sNMzgeoIYaLDe8M/ywqVlGg4VZd4Zl9oMJUxT+ZZcq8B145veN3PQG5vrvCy/sYfz2Z+AFbcQOW+AOsMTUEBf+CLKwhz8v8DPQ7l4AAf0j0MZv+HN0P4SuPWkr088TaGcIC38GM5m46xMYC2dDuvSHsOp+IwgwC+yrBpH5DxH8XuQyj38lpguNCADwhPwfdvrbVcLh/FkAAAAASUVORK5CYII=';

export const Certification = () => {
  const searchParams = useSearchParams();
  const courseToEdit = searchParams.get('courseId');

  const [selected, setSelected] = useState(1);
  const [signaturePreview, setSignaturePreview] =
    useState<any>(hardcodedSignature);

  // const courseId = localStorage.getItem('newCourseId');
  const { data } = useGetCourseCertification(courseToEdit as string);
  const { mutateAsync: addCertificate } = useAddCertificationToCourse();
  const { mutateAsync: editCertificate } = useUpdateCourseCertificate(
    courseToEdit as string,
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
    console.log('cert', courseToEdit);
    try {
      if (courseToEdit) {
        await editCertificate({
          signature: signaturePreview,
          template: `${selected}`,
          id: courseToEdit,
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
      toast.error(error?.response?.message);
    }
  };

  useEffect(() => {
    if (data?.data) {
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
