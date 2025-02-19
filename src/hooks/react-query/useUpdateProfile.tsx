import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useGetProfile = () => {
  return useQuery(['profile'], async () => {
    try {
      const config = {
        method: 'get',
        url: `/get-profile`,
      };
      const responseData = await request(config);
      return responseData?.data;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });
};

export const useUpdateProfile = () => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'patch',
        url: '/update-profile',
        data,
      };
      const response = await request(config);
      return response?.data;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            'An error occurred',
        );
      },
    },
  );
};

export const useUploadProfilePicture = () => {
  return useMutation(async (data: any) => {
    try {
      const config = {
        method: 'post',
        url: `/upload-image`,
        data: data,
      };
      const responseData = await request(config);
      return responseData?.data;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });
};
