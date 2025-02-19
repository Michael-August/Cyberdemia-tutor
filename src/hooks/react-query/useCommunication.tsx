import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useGetAnnouncements = () => {
  return useQuery(['announcements'], async () => {
    try {
      const config = {
        method: 'get',
        url: `announcement`,
      };
      const responseData = await request(config);
      return responseData?.data;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });
};

export const useMakeAnnouncements = () => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: 'announcement',
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

export const useGetAnnouncement = (announcementId: string) => {
  return useQuery(
    ['announcements', announcementId],
    async () => {
      const config = {
        method: 'get',
        url: `announcement/${announcementId}`,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
      enabled: !!announcementId,
    },
  );
};
