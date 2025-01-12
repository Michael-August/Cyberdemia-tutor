import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '@/hooks/request';

export const useCreateCourseResource = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: {
      courseId: string;
      title: string;
      url: string;
      resourceType: 'downloadableFile' | 'external';
    }) => {
      const config = {
        method: 'post',
        url: 'resource',
        data,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onSuccess: (_data, variables) => {
        queryClient.invalidateQueries(['resources', variables.courseId]);
      },
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
    },
  );
};

export const useGetCourseResources = (courseId: string) => {
  return useQuery(
    ['resources', courseId],
    async () => {
      const config = {
        method: 'get',
        url: `resource/course/${courseId}`,
      };
      const responseData = await request(config);
      return responseData;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      },
      enabled: !!courseId,
    },
  );
};
