import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useGetCourses = () => {
  return useQuery('courses', async () => {
    try {
      const config = {
        method: 'get',
        url: 'course',
      };
      const responseData = await request(config);
      return responseData;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });
};

export const useCreateCourse = () => {
  return useMutation(async (data: any) => {
    try {
      const config = {
        method: 'post',
        url: 'course',
        data,
      };
      const responseData = await request(config);
      return responseData;
    } catch (error: any) {
      console.log(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });
};
