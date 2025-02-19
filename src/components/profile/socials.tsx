import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { useUpdateProfile } from '@/hooks/react-query/useUpdateProfile';

import { Input } from '../inputs';

type FormValues = {
  website: string;
  linkedin: string;
  twitter: string;
};

const Socials = () => {
  const profileData = sessionStorage.getItem('userProfile');
  const parsedProfileData = profileData ? JSON.parse(profileData) : {};

  const queryClient = useQueryClient();

  const { mutateAsync: updateProfile } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      website: parsedProfileData?.website || '',
      linkedin: parsedProfileData?.linkedIn || '',
      twitter: parsedProfileData?.twitter || '',
    },
  });

  const submitForm = (data: any) => {
    delete parsedProfileData?.auth;
    delete parsedProfileData?.gender;
    delete parsedProfileData?.state;
    delete parsedProfileData?.highestEducationLevel;
    delete parsedProfileData?.id;

    updateProfile(
      {
        website: data.website,
        linkedIn: data.linkedin,
        twitter: data.twitter,
        ...parsedProfileData,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['profile']);
          toast.success('Profile updated successfully!');
        },
        onError: (error) => {
          console.error('Update failed:', error);
        },
      },
    );
  };

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit(submitForm)}
        noValidate
        className="mt-4 flex flex-col gap-5 lg:w-[70%]"
      >
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">
              Website (optional)
            </span>
            <Input
              className="w-full !p-3 !py-6 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Enter URL"
              autoComplete="off"
              type="text"
              id="website"
              {...register('website')}
            />
            {errors.website && (
              <p className="text-red-500 py-2 text-xs">
                {errors.website.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">LinkedIn</span>
            <Input
              className="w-full !p-3 !py-6 text-xs focus:!outline-none focus:!ring-0 border !border-solid !bg-[#F5F5F5]"
              placeholder="Enter URL"
              autoComplete="off"
              type="text"
              id="linkedin"
              {...register('linkedin')}
            />
            {errors.linkedin && (
              <p className="text-red-500 py-2 text-xs">
                {errors.linkedin.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[48%] flex flex-col gap-3">
            <span className="text-[12px] text-gray-600">
              Twitter (optional)
            </span>
            <Input
              className="w-full text-xs !p-3 !py-6 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Enter URL"
              autoComplete="off"
              type="text"
              id="twitter"
              {...register('twitter')}
            />
            {errors.twitter && (
              <p className="text-red-500 py-2 text-xs">
                {errors.twitter.message}
              </p>
            )}
          </div>
        </div>
        <button className="bg-cp-secondary w-full lg:w-[70%] text-sm mb-5 py-2 !text-white mt-8 hover:bg-cp-primary">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Socials;
