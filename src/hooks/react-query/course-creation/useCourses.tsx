import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../../request';

export const useGetCourses = () => {
  return useQuery(
    ['courses'],
    async () => {
      const config = {
        method: 'get',
        url: 'course',
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

export const useGetCourse = (courseId: string) => {
  return useQuery(
    ['course', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `course/${courseId}`,
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

export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: 'course',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['courses']);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useUpdateCourse = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: any) => {
      const config = {
        method: 'patch',
        url: `course/${courseId}`,
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['course', courseId]);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useAddCertificationToCourse = () => {
  return useMutation(
    async (data: {
      courseId: string;
      signature: string;
      template: '1' | '2' | '3';
    }) => {
      try {
        const config = {
          method: 'post',
          url: 'certificate',
          data,
        };
        const responseData = await request(config);
        return responseData;
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
  );
};

export const useAddPriceToCourse = () => {
  return useMutation(
    async (data: { courseId: string; price: number; currency: string }) => {
      try {
        const config = {
          method: 'post',
          url: 'price',
          data,
        };
        const responseData = await request(config);
        return responseData;
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
  );
};
