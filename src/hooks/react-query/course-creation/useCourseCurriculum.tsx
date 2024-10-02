import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../../request';

export const useGetCourseSections = (courseId: string) => {
  return useQuery(
    ['sections', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `section/course/${courseId}`,
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

export const useCreateCourseSection = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: { courseId: string; sectionTitle: string }) => {
      const config = {
        method: 'post',
        url: 'section',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries(['sections', variables.courseId]);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useCreateCourseLecture = () => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: 'lecture',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      // onSuccess: (_data, variables) => {
      //     queryClient.invalidateQueries(['sections', variables.courseId]);
      // },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useCreateCourseAssignment = () => {
  return useMutation(
    async (data: {
      assignmentTitle: string;
      assignmentQuestion?: string;
      sectionId: string;
    }) => {
      const config = {
        method: 'post',
        url: 'assignment',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      // onSuccess: (_data, variables) => {
      //     queryClient.invalidateQueries(['sections', variables.courseId]);
      // },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useCreateCourseExams = () => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: 'exam',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      // onSuccess: (_data, variables) => {
      //     queryClient.invalidateQueries(['sections', variables.courseId]);
      // },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};
