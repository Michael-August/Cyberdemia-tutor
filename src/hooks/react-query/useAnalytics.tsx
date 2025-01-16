import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useAnalytics = () => {
  return useQuery(
    ['analytics'],
    async () => {
      const config = {
        method: 'get',
        url: 'analytics',
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};
