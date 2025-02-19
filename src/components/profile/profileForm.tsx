import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { useUpdateProfile } from '@/hooks/react-query/useUpdateProfile';

import { Button } from '../button';
import { Input } from '../inputs';
import { Label } from '../label';
import { Textarea } from '../ui/textarea';

type FormValues = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  bio: string;
};

const ProfileForm = () => {
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
      firstname: parsedProfileData.firstName || '',
      lastname: parsedProfileData.lastName || '',
      phoneNumber: parsedProfileData.phoneNumber || '',
      bio: parsedProfileData.bio || '',
    },
  });

  const submitForm = (data: any) => {
    updateProfile(
      {
        firstName: data.firstname,
        lastName: data.lastname,
        phoneNumber: data.phoneNumber,
        bio: data.bio,
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
        className="mt-8 flex flex-col gap-5 lg:w-[70%]"
      >
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <Label className="text-xs text-[#000000CC]" htmlFor="firstname">
              First Name
            </Label>
            <Input
              className="w-full !p-3 focus:!outline-none focus:!ring-0 border text-xs !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="First Name"
              autoComplete="off"
              type="text"
              id="firstname"
              {...register('firstname', {
                required: 'First name is required',
              })}
            />
            {errors.firstname && (
              <p className="text-red-500 py-2 text-xs">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              className="w-full !p-3 text-xs focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Last Name"
              autoComplete="off"
              type="text"
              id="lastname"
              {...register('lastname', {
                required: 'Last name is required',
              })}
            />
            {errors.lastname && (
              <p className="text-red-500 py-2 text-xs">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-3">
            <Label className="text-xs text-[#000000CC]" htmlFor="phone">
              Phone Number
            </Label>
            <Input
              className="w-full text-xs !p-3 focus:!outline-none focus:!ring-0 border !border-solid !border-[#00000033] !bg-[#F5F5F5]"
              placeholder="Enter Phone number"
              autoComplete="off"
              type="text"
              id="phone"
              {...register('phoneNumber', {
                required: 'Phone number is required',
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 py-2 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="w-full"></div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <Label className="text-xs text-[#000000CC]" htmlFor="bio">
            Bio
          </Label>
          <Textarea
            className="w-full text-xs !p-3 !focus:outline-none !focus:ring-0 !border border-solid !border-[#00000033] bg-[#F5F5F5]"
            placeholder="Enter text (250 characters)"
            autoComplete="off"
            id="bio"
            {...register('bio', {
              required: 'Bio is required',
            })}
          />
          {errors.bio && (
            <p className="text-red-500 py-2 text-xs">{errors.bio.message}</p>
          )}
        </div>
        <Button className="!bg-cp-secondary text-sm mb-5 !text-white mt-5">
          Save changes
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
